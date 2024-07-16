---
title: 'Rossum Formulas'
---

This section covers both the Rossum **Formula Fields** and the **Rossum Python** flavor.

## Installation

Formula Fields or Rossum Python do not require any installation. It is available as a native Rossum functionality.

Formula Fields are available in the queue schema as a `formula` field type. Rossum Python is available in serverless functions. Both flavors are fundamentally similar and differ only in how they are used with minimal syntax differences.

## Basic usage

To start with Formula Fields, follow these steps:

1. Create a new `order_id_normalized` field in the queue schema.
1. Select the `formula` field type of the field.
1. Write the formula in the `formula` field.

Your first formula can be as simple as (no returns, no imports):

```py
field.order_id
```

This formula copies the `order_id` field into your newly created Formula Field.

Alternatively, you can create a new serverless (Python) function with the following boilerplate code that does the same thing:

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload: dict) -> dict:
    r = RossumPython.from_payload(payload)

    r.field.order_id_normalized = r.field.order_id # ←

    return r.hook_response()
```

Notice that it is a little bit more verbose, but it is still very similar. The main differences are that we need to wrap the functionality into `rossum_hook_request_handler` function and that we need to explicitly write into the `order_id_normalized` field.

## Available functions and features

| Formula fields                | Rossum Python                    | Description                                         |
| ----------------------------- | -------------------------------- | --------------------------------------------------- |
| `field.amount`                | `r.field.amount`                 | Get datapoint value.                                |
| `field.amount.rir_confidence` | `r.field.amount.rir_confidence`  | Get datapoint confidence score.                     |
| _return value_ ¹              | `r.field.amount = 10`            | Write into datapoint value.                         |
| `is_empty(field.amount)`      | `is_empty(r.field.amount)`²      | Check if datapoint value is empty.                  |
| `is_set(field.amount)`        | `is_set(r.field.amount)`²        | Check if datapoint is set (opposite of `is_empty`). |
| `default_to(field.amount, 0)` | `default_to(r.field.amount, 0)`² | Use default value if the field is empty.            |
| `substitute(…, …)`            |                                  |                                                     |

¹ Formula fields cannot write into any other fields. They simply return the value.\
² Note that in Rossum Python functions must be explicitly imported like so: `from rossum_python import RossumPython, is_empty, is_set, …`
