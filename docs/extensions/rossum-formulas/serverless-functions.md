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
from rossum_python import RossumPython, is_empty

def rossum_hook_request_handler(payload: dict) -> dict:
    r = RossumPython.from_payload(payload)

    # Very similar to Formula Fields (notice the `r.` prefixes):
    r.field.order_id_normalized = r.field.order_id_manual if not is_empty(r.field.order_id_manual) else r.field.order_id

    return r.hook_response()
```
