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

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    r.field.order_id_normalized = r.field.order_id # ←

    return r.hook_response()
```

Notice that it is a little bit more verbose, but it is still very similar. The main differences are that we need to wrap the functionality into `rossum_hook_request_handler` function and that we need to explicitly write into the `order_id_normalized` field.

## Available functions and features

Here is a list of available functions and features and their comparison between [Formula Fields](./formula-fields.md) and [Serverless Functions](./serverless-functions.md). Note that serverless functions examples always assume that the code is wrapped in `rossum_hook_request_handler` function and prefixed by `r = RossumPython.from_payload(payload)` call (see above).

### Get datapoint value

#### Formula field

Can be either returned directly from the formula fields or stored in some temporary variable.

```py
field.amount
```

#### Serverless function

In case of serverless function, the value can never be returned directly and must be either used in some other function call, or stored in some temporary variable to be used later:

```py
x = r.field.amount
```

### Get datapoint metadata

#### Formula field

```py
field.amount.id               # Datapoint system ID
field.amount.rir_confidence   # Confidence score
```

#### Serverless function

```py
r.field.amount.id
r.field.amount.rir_confidence
```

### Write into datapoint value

#### Formula field

:::warning

Formula fields cannot write into any other fields. They simply return the value into the formula field itself.

:::

#### Serverless function

```py
r.field.amount = 10
```

### Check whether datapoint is set or not

#### Formula field

```py
is_set(field.amount)     # Returns `true` if datapoint is set (has value)
is_empty(field.amount)   # Opposite of `is_set`
```

#### Serverless function

```py
from rossum_python import RossumPython, is_set, is_empty

# …

is_set(r.field.amount)
is_empty(r.field.amount)
```

### Defaulting values

Use the default value if the field is empty.

#### Formula field

```py
default_to(field.amount, 0)
```

#### Serverless function

```py
from rossum_python import RossumPython, default_to

# …

default_to(r.field.amount, 0)
```

### Substitute

#### Formula field

```py
substitute(…, …)
```

#### Serverless function

```py
from rossum_python import RossumPython, substitute

# …

substitute(…, …)
```

### Show info/warning/error messages

#### Formula field

```py
show_info("…")                    # Show global info message
show_info("…", field.amount)      # Show info message on the specified field

show_warning("…")                 # Show global warning message
show_warning("…", field.amount)   # Show warning message on the specified field

show_error("…")                   # Show global error message
show_error("…", field.amount)     # Show error message on the specified field
```

#### Serverless function

:::note

Messages do not affect the automation behavior and, therefore, automation blockers must be set explicitly (see how to set [automation blockers](#set-automation-blockers)). The only exception is `show_error` which always blocks the automation.

:::

```py
r.show_info("…")
r.show_info("…", r.field.amount)

r.show_warning("…")
r.show_warning("…", r.field.amount)

r.show_error("…")
r.show_error("…", r.field.amount)
```

### Set automation blockers

:::note

Automation blockers must be set independently of the info/warning messages. Error messages block the automation by default (cannot be disabled).

:::

#### Formula field

```py
automation_blocker("message", field.amount)
```

#### Serverless function

```py
r.automation_blocker("message", r.field.amount)
```
