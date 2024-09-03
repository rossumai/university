---
sidebar_position: 2
sidebar_label: 'Serverless functions'
title: 'Rossum Formulas: Serverless functions'
---

# Serverless functions

Examples of common serverless functions (using Rossum Python flavor).

## Copy fields conditionally

Write into `order_id_normalized` data field:

```py
from rossum_python import RossumPython, is_set

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    # Very similar to Formula Fields (notice the `r.` prefixes):
    r.field.order_id_normalized = r.field.order_id_manual if is_set(r.field.order_id_manual) else r.field.order_id

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

## Get annotation ID

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    r.field.annotation_id = payload.get("annotation").get("id")

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
