---
title: 'Rossum Formulas'
sidebar_position: 1
---

This section covers both the Rossum **Formula Fields** and the **Serverless Functions** (Formula Fields flavor in custom extensions).

## Installation

Formula Fields or Serverless Functions do not require any installation. They are both available as a native Rossum functionality.

Formula Fields are available in the queue schema as a `formula` field type. In serverless functions, you can import `TxScript` library which is a wrapper introducing the same functionality into serverless functions. Both flavors are fundamentally similar and differ only in how they are used with minimal syntax differences.

In case you want to use the TxScript within pre-existing serverless functions, you need to enable following setting:

1. Go to the settings of the Webhook (Serverless function)
2. Scroll to `Additional notification metadata`
3. Enable the `Schemas` option
4. Save it, and now you can work with the `TxScript` in your serverless function

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
from txscript import TxScript

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    t.field.order_id_normalized = t.field.order_id  # Copies `order_id` value into `order_id_normalized`

    return t.hook_response()
```

Notice that it is a little bit more verbose, but it is still very similar. The main differences are that we need to wrap the functionality into `rossum_hook_request_handler` function and that we need to explicitly write into the `order_id_normalized` field.

This is an illustrative example. In case you only need to modify an existing field value, always prefer making it a formula field.

For backward compatibility, you can also use the following import which works the same way as `TxScript`:

```py
from rossum_python import RossumPython

# …
```

## Available functions and features

Here is a list of available functions and features and their comparison between [Formula Fields](./formula-fields.md) and [Serverless Functions](./serverless-functions.md). Note that serverless functions examples always assume that the code is wrapped in `rossum_hook_request_handler` function like so:

```py
from txscript import TxScript

def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    # INSERT THE EXAMPLES HERE

    return t.hook_response()
```

Formula field examples do not require any further modification.

### Get datapoint value

#### Formula field

Can be either returned directly from the formula fields or stored in some temporary variable.

```py
field.amount
```

#### Serverless function

In case of serverless function, the value can never be returned directly and must be either used in some other function call, or stored in some temporary variable to be used later:

```py
tmp = t.field.amount
```

### Get datapoint metadata

#### Formula field

```py
field.amount.id                  # Datapoint system ID
field.amount.rir_confidence      # Confidence score

field.amount.attr.ocr_raw_text   # Raw value extracted by OCR, if applicable
field.amount.attr.rir_raw_text   # Raw extracted text by RIR
```

#### Serverless function

```py
t.field.amount.id
t.field.amount.rir_confidence

t.field.amount.attr.ocr_raw_text
t.field.amount.attr.rir_raw_text
```

### Write into datapoint value

#### Formula field

:::warning

Formula fields cannot write into any other fields. They simply return the value into the formula field itself.

:::

#### Serverless function

```py
t.field.amount = 10
```

### Check whether datapoint is set or not

#### Formula field

```py
is_set(field.amount)     # Returns `true` if datapoint is set (has value)
is_empty(field.amount)   # Opposite of `is_set`
```

#### Serverless function

```py
from txscript import TxScript, is_set, is_empty

# …

is_set(t.field.amount)
is_empty(t.field.amount)
```

### Defaulting values

Use the default value if the field is empty.

#### Formula field

```py
default_to(field.amount, 0)
```

#### Serverless function

```py
from txscript import TxScript, default_to

# …

default_to(t.field.amount, 0)
```

### Substitute

Substitute is an alias for [`re.sub`](https://docs.python.org/3/library/re.html#re.sub) function (for convenience).

#### Formula field

```py
substitute(r"[^0-9]", r"", field.document_id)  # Remove non-digit characters
```

Could also be written as (`re` is imported automatically):

```py
re.sub(r"[^0-9]", r"", field.document_id)
```

#### Serverless function

```py
from txscript import TxScript, substitute

# …

substitute(r"[^0-9]", r"", t.field.document_id)
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
t.show_info("…")
t.show_info("…", t.field.amount)

t.show_warning("…")
t.show_warning("…", t.field.amount)

t.show_error("…")
t.show_error("…", t.field.amount)
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
t.automation_blocker("message", t.field.amount)
```

### Create multivalue field values

#### Formula field

:::warning

Multivalue formula fields are currently not supported.

:::

#### Serverless function

```py
t.field.multivalue_field.all_values = ["AAA", "BBB"]
```

### Create enum field options

#### Formula field

:::warning

Changing enum field options is currently not supported in formula fields.

:::

#### Serverless function

```py
t.field.enum_field.attr.options = [{"label":"AAA", "value":"aaa"}, {"label":"BBB", "value":"bbb"}]
t.field.enum_field = "bbb"
```
