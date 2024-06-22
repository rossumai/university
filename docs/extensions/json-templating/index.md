---
title: 'JSON Templating'
---

JSON Templating engine is commonly used to configure many of our extensions.

## JSON Templating Syntax

The basic and most commonly used syntax is for getting values from the annotation object:

```json
{
  "some_field": "@{schema_id_of_datapoint}"
}
```

See also [`$DATAPOINT_VALUE$`](#datapoint_value) for more verbose syntax.

## JSON Templating Operators

Operators are a special syntax that can be used to perform various complex operations when working with JSON.

### `$DATAPOINT_MAPPING$`

Returns rendered template specified in `mapping` for certain value of `schema_id`.

#### Example

```json
{
  "_ns_type": {
    "$DATAPOINT_MAPPING$": {
      "schema_id": "document_type",
      "mapping": {
        "tax_credit": "VendorCredit",
        "tax_invoice": "VendorBill"
      },
      "fallback_mapping": "Vendor" // optional
    }
  }
}
```

This template will return the following for `document_type` with value `tax_credit`:

```json
{ "_ns_type": "VendorCredit" }
```

Similarly, this template will return the following for `tax_invoice` value:

```json
{ "_ns_type": "VendorBill" }
```

Finally, the template will return the `_ns_type` of `Vendor` if no other value is found. This value can be omitted which will default to `null`.

#### Available configuration options

| Configuration option | Description                                                                                              | Required | Default |
| :------------------- | :------------------------------------------------------------------------------------------------------- | :------- | :------ |
| `schema_id`          | Schema ID of the datapoint.                                                                              | YES      |         |
| `mapping`            | Mapping of the datapoint value (`schema_id`).                                                            | YES      |         |
| `fallback_mapping`   | Default template that will be used if template for found datapoint value is not provided in the mapping. | no       | `null`  |

### `$DATAPOINT_VALUE$`

`$DATAPOINT_VALUE$` is a more verbose syntax for `@{schema_id}`. In other words, the following examples are identical:

```json
{
  "externalId": "@{ns_external_id_generated}"
}
```

Identical to:

```json
{
  "externalId": {
    "$DATAPOINT_VALUE$": {
      "schema_id": "ns_external_id_generated",
      "value_type": "string"
    }
  }
}
```

While the latter might seem unnecessary, it is needed when we want to cast the value to a certain type. For example:

```json
{
  "tranDate": {
    "$DATAPOINT_VALUE$": {
      "schema_id": "date_issue",
      "value_type": "iso_datetime"
    }
  }
}
```

#### Available configuration options

| Configuration option | Description                                                                                                                    | Required | Default  |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :------- | :------- |
| `schema_id`          | Schema ID of the datapoint.                                                                                                    | YES      |          |
| `value_type`         | Type to which the value should be converted. Supported types are: `string`, `integer`, `float`, `boolean`, and `iso_datetime`. | no       | `string` |

### `$FOR_EACH$`

:::warning[Work in progress]

_Work in progress_

:::

### `$FOR_EACH_SCHEMA_ID$`

Iterates over multiline schema IDs, typically line items.

#### Example

```json
{
  "items": {
    "$FOR_EACH_SCHEMA_ID$": {
      "schema_id": "line_item",
      "mapping": {
        "_ns_type": "VendorBillItem",
        "quantity": "@{item_quantity}",
        "description": "@{item_description}"
      }
    }
  }
}
```

Will render:

```json
{
  "items": [
    {
      "_ns_type": "VendorBillItem",
      "quantity": "1",
      "description": "Some description 1"
    },
    {
      "_ns_type": "VendorBillItem",
      "quantity": "2",
      "description": "Some description 2"
    }
    // …
  ]
}
```

Inside the for-loop block, you can access a special variables (`schema_loop`):

- `schema_loop.index` for current iteration of the loop indexed from 1
- `schema_loop.index0` for current iteration of the loop indexed from 0

#### Available configuration options

| Configuration option | Description                                                                               | Required | Default |
| :------------------- | :---------------------------------------------------------------------------------------- | :------- | :------ |
| `schema_id`          | Schema ID of the datapoint.                                                               | YES      |         |
| `mapping`            | Mapping template that will be rendered for each element found with the given `schema_id`. | YES      |         |
| `fallback_mapping`   | Mapping template that will be rendered if no element with the given `schema_id` is found. | no       | `[]`    |

### `$IF_DATAPOINT_VALUE$`

:::warning[Work in progress]

_Work in progress_

:::

### `$IF_SCHEMA_ID$`

Similar to [`$FOR_EACH_SCHEMA_ID$`](#for_each_schema_id) operation: it checks the existence of `schema_id`, and it either outputs `mapping` if the `schema_id` points to a non-empty value or `fallback_mapping` otherwise.

Note that if you don't specify the `fallback_mapping`, it will skip the whole parent key!

#### Example

```json
{
  "dueDate": {
    "$IF_SCHEMA_ID$": {
      "schema_id": "date_due",
      "mapping": {
        "$DATAPOINT_VALUE$": {
          "schema_id": "date_due",
          "value_type": "iso_datetime"
        }
      }
    }
  }
}
```

#### Available configuration options

| Configuration option | Description                                                                                                                                                                         | Required | Default |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------ |
| `schema_id`          | Schema ID of the datapoint.                                                                                                                                                         | YES      |         |
| `mapping`            | Mapping template that will be rendered if `schema_id` exists.                                                                                                                       | YES      |         |
| `fallback_mapping`   | Mapping template that will be rendered if no element with the given `schema_id` is found. Note that if you don't specify the `fallback_mapping`, it will skip the whole parent key! | no       |         |

## Advanced templating capabilities

The JSON Templating uses the Python `jinja2` templating engine for rendering. You can use its full capabilities. For example, given the following JSON template:

```json
{
  "math_example": "{my_value} + {my_value} = {my_value + my_value}",
  "centered": "{my_string | center(9)}",
  "nested": {
    "converted_to_float": "{my_string | float}"
  }
}
```

And the following variables (schema datapoints):

```text
my_value = 1
my_string = "123"
```

Will together render as:

```json
{
  "math_example": "1 + 1 = 2",
  "centered": "   123   ",
  "nested": {
    "converted_to_float": 123.0
  }
}
```

You can use any of the [`jinja2` filters](https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters) or other advanced features of the jinja2 templating engine.
