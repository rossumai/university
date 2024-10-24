---
sidebar_position: 2
sidebar_label: 'Serverless functions'
title: 'Rossum Formulas: Serverless functions'
---

# Serverless functions

Examples of common or interesting serverless functions (using Rossum Python flavor).

## Automatic adjustments to the issue date format

It can sometimes happen that invoices have dates in format `M/D/YYYY` format. But because the queue is in the UK region (for example), Rossum sometimes understands the dates incorrectly (5/1/2024 on the invoice is incorrectly read as "Jan 5th" instead of the correct "May 1st"). There is simply no way for Rossum AI to know what the correct date should be (especially when the queue region suggests something else).

This can be additionally corrected using the following simple code (if we know for what specific vendor this should be done):

```py
from datetime import datetime
from rossum_python import RossumPython, is_empty

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    relevant_entities = [
        "123456"  # Vendor ABC
    ]

    r.field.date_issue_normalized = flip_day_month(r.field.date_issue) if r.field.ns_entity_match in relevant_entities else r.field.date_issue

    return r.hook_response()


def flip_day_month(date_value):
    if is_empty(date_value):
        return date_value

    day, month = date_value.day, date_value.month
    raw_text = date_value.ocr_raw_text or date_value.rir_raw_text

    try:
        raw_month, raw_day, raw_year = map(int, raw_text.split('/'))
    except ValueError:
        # Handle case where raw text isn't in the expected format
        return date_value

    # Check if the date might be misinterpreted (e.g., 5/1/2024 as January 5th instead of May 1st)
    if day == raw_day and month == raw_month:
        # No flip needed if day/month match the expected positions
        return date_value

    # Check if flipping makes logical sense (both day and month must be 12 or below)
    if day <= 12 and month <= 12:
        return datetime(date_value.year, day=month, month=day)
    else:
        return date_value
```

## Copy fields conditionally

Copies either `order_id_manual` or `order_id` into `order_id_normalized` depending on whether the manual field is filled or not:

```py
from rossum_python import RossumPython, is_set

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    if is_set(r.field.order_id_manual):
        r.field.order_id_normalized = r.field.order_id_manual
    else:
        r.field.order_id_normalized = r.field.order_id

    return r.hook_response()
```

## Get annotation information

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    # Annotation ID:
    r.field.annotation_id = payload.get("annotation").get("id")

    return r.hook_response()
```

## Get document information

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    # Arrival date:
    r.field.document_arrived_at = payload.get("document").get("arrived_at")

    # Original file name:
    r.field.document_original_file_name = payload.get("document").get("original_file_name")

    return r.hook_response()
```

## Validate header fields

```py
from rossum_python import RossumPython, is_empty

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    # Header total = subtotal + taxes:
    if is_set(r.field.amount_due) and is_set(r.field.amount_total_base) and is_set(r.field.amount_total_tax):
        amount_total_base = default_to(r.field.amount_total_base, 0)
        amount_total_tax = default_to(r.field.amount_total_tax, 0)
        amount_due = default_to(r.field.amount_due, 0)
        if amount_due != (amount_total_base + amount_total_tax):
            message = "Total invoice amount is not equal to the sum of amount base and the tax."
            r.show_error(message, r.field.amount_due)

    return r.hook_response()
```

## Validate line items

In serverless functions, it is necessary to iterate the individual line items and perform the validations on row level:

```py
from rossum_python import RossumPython, is_empty

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    for row in r.field.line_items:
        if is_empty(row.item_code):
            r.show_error("Item code is required on line items.", row.item_code)

    return r.hook_response()
```

## Store document page count

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    r.field.page_count = len(payload["annotation"]["pages"])

    return r.hook_response()
```

