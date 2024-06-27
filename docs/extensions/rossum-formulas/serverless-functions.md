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

## Get document arrival date

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    r.field.document_arrived_at = payload.get("document").get("arrived_at")

    return r.hook_response()
```

## Get original file name

Write into `original_file_name` data field:

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    r.field.original_file_name = payload.get("document").get("original_file_name")

    return r.hook_response()
```
