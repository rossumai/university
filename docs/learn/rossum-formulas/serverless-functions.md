---
sidebar_position: 2
sidebar_label: 'Serverless functions'
title: 'Rossum Formulas: Serverless functions'
---

import WIP from '../\_wip.md';

# Serverless functions

Examples of common or interesting serverless functions (using `TxScript` flavor).

## Automatic adjustments to the issue date format

It can sometimes happen that invoices have dates in format `M/D/YYYY` format. But because the queue is in the UK region (for example), Rossum sometimes understands the dates incorrectly (5/1/2024 on the invoice is incorrectly read as "Jan 5th" instead of the correct "May 1st"). There is simply no way for Rossum AI to know what the correct date should be (especially when the queue region suggests something else).

This can be additionally corrected using the following simple code (if we know for what specific vendor this should be done):

```py
from datetime import datetime
from txscript import TxScript, is_empty

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    relevant_entities = [
        "123456"  # Vendor ABC
    ]

    t.field.date_issue_normalized = flip_day_month(t.field.date_issue) if t.field.ns_entity_match in relevant_entities else t.field.date_issue

    return t.hook_response()


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
from txscript import TxScript, is_set

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    if is_set(t.field.order_id_manual):
        t.field.order_id_normalized = t.field.order_id_manual
    else:
        t.field.order_id_normalized = t.field.order_id

    return t.hook_response()
```

Note that this is just for illustrative purposes. For this particular use-case, always prefer making `order_id_normalized` a [formula field](./formula-fields.md).

## Get annotation information

```py
from txscript import TxScript

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    # Annotation ID:
    t.field.annotation_id = payload.get("annotation").get("id")

    # Document page count:
    t.field.page_count = len(payload.get("annotation").get("pages"))

    return t.hook_response()
```

## Get document information

```py
from txscript import TxScript

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    # Arrival date:
    t.field.document_arrived_at = payload.get("document").get("arrived_at")

    # Original file name:
    t.field.document_original_file_name = payload.get("document").get("original_file_name")

    return t.hook_response()
```

## Get queue name

To store the queue name in a schema data point `queue_name` please use the following code. Note that it is necessary to sideload both **Schema** and **Queue** in the extension setup.

```py
from txscript import TxScript

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    t.field.queue_name = payload.get("queues")[0].get("name")

    return t.hook_response()
```

## Validate header fields

```py
from txscript import TxScript, is_empty

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    # Header total = subtotal + taxes:
    if is_set(t.field.amount_due) and is_set(t.field.amount_total_base) and is_set(t.field.amount_total_tax):
        amount_total_base = default_to(t.field.amount_total_base, 0)
        amount_total_tax = default_to(t.field.amount_total_tax, 0)
        amount_due = default_to(t.field.amount_due, 0)
        if amount_due != (amount_total_base + amount_total_tax):
            message = "Total invoice amount is not equal to the sum of amount base and the tax."
            t.show_error(message, t.field.amount_due)

    return t.hook_response()
```

## Validate line items

In serverless functions, it is necessary to iterate the individual line items and perform the validations on row level:

```py
from txscript import TxScript, is_empty

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    for row in t.field.line_items:
        if is_empty(row.item_code):
            t.show_error("Item code is required on line items.", row.item_code)

    return t.hook_response()
```

## Accounts Payable Checks

Historically, there was an "Accounts Payable Checks" extension in the Rossum store which was used to validate basic calculations on invoices, for example. Nowadays, it is not necessary since the same can be easily achieved using custom serverless function. The following is a (loosely) migrated example of the extension configuration:

<WIP />

```py
import math
from rossum_python import RossumPython, is_set, is_empty, default_to
from datetime import datetime

def rossum_hook_request_handler(payload):
    x = RossumPython.from_payload(payload)
    rounding = 2

    ###################
    ## HEADER FIELDS ##
    ###################

    # 1: "Total Amount" (amount_total) == "Total Without Tax" (amount_total_base) + "Tax Amount" (amount_total_tax)
    if is_set(x.field.amount_total) and is_set(x.field.amount_total_base) and is_set(x.field.amount_total_tax):
        amount_total_ocr = round(x.field.amount_total, rounding)
        amount_total_calculated = round(x.field.amount_total_base + x.field.amount_total_tax, rounding)
        if not math.isclose(amount_total_ocr, amount_total_calculated):
            message = f"Total Amount is not calculated correctly (expected: ~{amount_total_calculated})."
            x.show_warning(message, x.field.amount_total)
            x.automation_blocker(message, x.field.amount_total)

    # 2: Check if "Due Date" (date_due) is within 0 to 120 days after "Invoice Date" (date_issue)
    if is_set(x.field.date_issue) and is_set(x.field.date_due):
        days_difference = (x.field.date_due - x.field.date_issue).days
        if not (0 <= days_difference <= 120):
            message = f"Due Date ({x.field.date_due}) is not within 120 days after Invoice Date ({x.field.date_issue})."
            x.show_warning(message, x.field.date_due)
            x.automation_blocker(message, x.field.date_due)

    #######################
    ## TAX DETAILS table ##
    #######################

    for row in x.field.tax_details:
        # 3: "VAT Amount" (tax_detail_tax) == "VAT Base" (tax_detail_base) * "VAT Rate" (tax_detail_rate)
        if is_set(row.tax_detail_tax) and is_set(row.tax_detail_base) and is_set(row.tax_detail_rate):
            tax_detail_tax_ocr = round(row.tax_detail_tax, rounding)
            tax_detail_tax_calculated = round(row.tax_detail_base * (row.tax_detail_rate / 100), rounding)
            if not math.isclose(tax_detail_tax_ocr, tax_detail_tax_calculated):
                message = f"VAT amount is not calculated correctly (expected: ~{tax_detail_tax_calculated})."
                x.show_warning(message, row.tax_detail_tax)
                x.automation_blocker(message, row.tax_detail_tax)
```

<details>
  <summary>Original default configuration of the "Accounts Payable Checks" extension (for reference).</summary>

The config examples are numbered for easier orientation:

```json
{
  "checks": [
    {
      // 1
      "left": ["amount_total"],
      "right": ["amount_total_base", "amount_total_tax"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_sum",
      "message_type": "warning",
      "message_content": "{amount_total} is not equal to {amount_total_base} + {amount_total_tax}."
    },
    {
      // 2
      "left": "date_issue",
      "right": "date_due",
      "data_type": "date",
      "operation": "check_right_minus_left_within_range",
      "lower_bound": 0,
      "upper_bound": 120,
      "message_type": "warning",
      "message_content": "{date_due} is not within 120 days after {date_issue}."
    },
    {
      // 3
      "left": ["tax_detail_tax"],
      "right": ["tax_detail_base", "tax_detail_rate"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_multiplication",
      "message_type": "warning",
      "message_content": "{tax_detail_tax} is not equal to {tax_detail_base} x {tax_detail_rate}."
    },
    {
      // 4
      "left": ["tax_detail_total"],
      "right": ["tax_detail_base", "tax_detail_tax"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_sum",
      "message_type": "warning",
      "message_content": "{tax_detail_total} is not equal to {tax_detail_base} + {tax_detail_tax}."
    },
    {
      // 5
      "left": ["item_amount_total"],
      "right": ["item_total_base", "item_tax"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_sum",
      "message_type": "warning",
      "message_content": "{item_amount_total} is not equal to {item_total_base} + {item_tax}."
    },
    {
      // 6
      "left": ["item_total_base"],
      "right": ["item_amount_base", "item_quantity"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_multiplication",
      "message_type": "warning",
      "message_content": "{item_total_base} is not equal to {item_amount_base} x {item_quantity}."
    },
    {
      // 7
      "left": ["item_amount_total"],
      "right": ["item_amount", "item_quantity"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_multiplication",
      "message_type": "warning",
      "message_content": "{item_amount_total} is not equal to {item_amount} x {item_quantity}."
    },
    {
      // 8
      "left": ["item_tax"],
      "right": ["item_total_base", "item_rate"],
      "epsilon": 0.5,
      "operation": "check_left_sum_equals_right_multiplication",
      "message_type": "warning",
      "message_content": "{item_tax} is not equal to {item_total_base} x {item_rate}."
    },
    {
      // 9
      "epsilon": 0.5,
      "operation": "check_header_field_equals_table_field_sum",
      "table_field": "tax_detail_total",
      "header_field": "amount_total",
      "message_type": "warning",
      "message_content": "{amount_total} is not equal to the {tax_detail_total} in the Tax table."
    },
    {
      // 10
      "epsilon": 0.5,
      "operation": "check_header_field_equals_table_field_sum",
      "table_field": "tax_detail_base",
      "header_field": "amount_total_base",
      "message_type": "warning",
      "message_content": "{amount_total_base} is not equal to the {tax_detail_base} in the Tax table."
    },
    {
      // 11
      "epsilon": 0.5,
      "operation": "check_header_field_equals_table_field_sum",
      "table_field": "tax_detail_tax",
      "header_field": "amount_total_tax",
      "message_type": "warning",
      "message_content": "{amount_total_tax} is not equal to {tax_detail_tax} in the Tax table."
    },
    {
      // 12
      "epsilon": 0.5,
      "operation": "check_header_field_equals_table_field_sum",
      "table_field": "item_amount_total",
      "header_field": "amount_total",
      "message_type": "warning",
      "message_content": "{amount_total} is not equal to the sum of the line items’ total amounts."
    },
    {
      // 13
      "epsilon": 0.5,
      "operation": "check_header_field_equals_table_field_sum",
      "table_field": "item_total_base",
      "header_field": "amount_total_base",
      "message_type": "warning",
      "message_content": "{amount_total_base} is not equal to the sum of the line items’ total bases."
    },
    {
      // 14
      "epsilon": 0.5,
      "operation": "check_header_field_equals_table_field_sum",
      "table_field": "item_tax",
      "header_field": "amount_total_tax",
      "message_type": "warning",
      "message_content": "{amount_total_tax} is not equal to the sum of the line items’ taxes."
    }
  ]
}
```
</details>

## Fetch and Analyze OCR Text for Pattern Matches

This function retrieves and processes textual data from Rossum's page_data API for an annotation. It is designed to:

1. Fetch Text Data: Make an HTTP GET request to the page_data endpoint of a specific annotation using the provided rossum_authorization_token.
1. Retry Mechanism: Handle transient network or server issues by retrying up to 3 times in case of a non-200 HTTP response or exceptions.
1. Analyze Text Content: Parse the fetched text content for specific patterns defined in the find_variants function (e.g., formats like xxxxxx.xx.xxx or xxxxxx xx xxx).
1. Return Matches: Return a structured list of matches, including the page ID, the matched text, and the extracted patterns.

```py
import re
import requests

def find_strings(text):
    """
    Find specific patterns in the given text.

    :param text: String to search patterns in.
    :return: List of matches for defined patterns.
    """
    # Example patterns to match, change these for your use case
    patterns = [
        r'\b[\w\d]{6}\.\w{2}\.\w{3}\b',  # xxxxxx.xx.xxx
        r'\b[\w\d]{6}\.\w{3}\.\w{2}\b',  # xxxxxx.xxx.xx
        r'\b[\w\d]{6} \w{2} \w{3}\b',      # xxxxxx xx xxx (spaces instead of dots)
        r'\b[\w\d]{6} \w{3} \w{2}\b',      # xxxxxx xxx xx (spaces instead of dots)
        r'\b[\w\d]{6}[-_\s]?\w{2}[-_\s]?\w{3}\b',  # xxxxxx xx xxx with optional - or _
        r'\b[\w\d]{6}[-_\s]?\w{3}[-_\s]?\w{2}\b',  # xxxxxx xxx xx with optional - or _
    ]

    # Find all matches for each pattern
    matches = []
    for pattern in patterns:
        matches.extend(re.findall(pattern, text))

    return matches

def fetch_and_analyze_ocr_text(payload):
    """
    Fetch page_data from annotation and check for text matching variants.

    :param payload: Dictionary containing the payload with annotation information.
    :return: List of matches found in the page_data text.
    """
    matches = []
    token = payload.get("rossum_authorization_token")
    annotation_url = payload.get("annotation", {}).get("url")

    if not token or not annotation_url:
        return matches

    retries = 3
    for attempt in range(retries):
        try:
            # Request to fetch text content from annotation
            page_req = requests.get(
                url=f"{annotation_url}/page_data?granularity=texts",
                headers={"Authorization": f"Bearer {token}"}
            )

            if page_req.status_code == 200:
                results = page_req.json().get("results", [])
                for page in results:
                    for item in page.get("items", []):
                        ocr_text = item.get("text", "")
                        if ocr_text:
                            ocr_matches = find_strings(ocr_text)
                            if ocr_matches:
                                matches.append({
                                    "page_id": page.get("id"),
                                    "ocr_text": ocr_text,
                                    "ocr_matches": ocr_matches
                                })
                break  # Exit retry loop if request is successful
            else:
                print(f"Attempt {attempt + 1} failed with status code {page_req.status_code}. Retrying...")

        except requests.RequestException as e:
            print(f"Attempt {attempt + 1} encountered an exception: {e}. Retrying...")

    return matches
```
