---
sidebar_position: 1
sidebar_label: 'Configuration examples'
title: 'Find & Replace Values: Configuration examples'
---

# Configuration examples

The following examples are showing commonly used configurations when building applications using Rossum.ai platform.

## Copying item code to another field for specific line items

This configuration uses an action condition to check if the `document_type` header field has the value `tax_invoice` and checks all line items if attribute `item_code` is either `M0061` or `M0062`. The transformation is applied to line items that meet this condition.

Then the transformation removes all non-numerical characters and stores the transformed values in a separate field called `item_other` for each matched line item.

- Input: document type `tax_invoice` and item codes `[M0061, M0062]`
- Output: `[0061, 0062]`

```json
{
  "actions": [
    {
      "queue_ids": ["123"],
      "action_condition": "{document_type} == 'tax_invoice' and {item_code} in ['M0061','M0062']",
      "transformations": [
        {
          "pattern_to_replace": "[^0-9]",
          "value_to_replace_with": "",
          "replace_if_this_pattern_matches": ".+"
        }
      ],
      "source_target_mappings": [
        {
          "source": "item_code",
          "target": "item_other"
        }
      ]
    }
  ]
}
```

## Extract and normalize part of the line item description

This configuration uses two chained transformations to extract and normalize item code from the item description. The first transformation removes everything after the first space character in the string. The second one removes all hyphens from the result of the first transformation.

Notice also that there is an action condition defined in this configuration. The function will perform this action only when the Vendor Name is "Great Company." The condition is optional.

- Input: `1234-567-89 This is a line item description with the code at the beginning.`
- Output: `123456789`

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": " ([\\s\\S]*)$",
          "value_to_replace_with": "",
          "replace_if_this_pattern_matches": " ([\\s\\S]*)$"
        },
        {
          "pattern_to_replace": "-",
          "value_to_replace_with": "",
          "replace_if_this_pattern_matches": "-"
        }
      ],
      "action_condition": "{sender_name} == 'Great Company'",
      "source_target_mappings": [
        {
          "source": "item_description",
          "target": "item_code"
        }
      ]
    }
  ]
}
```

## Normalize values

The following snippet removes all non-alphanumeric characters. The source datapoint IDs are `sender_vat_id` (Vendor VAT Number) and `iban`. The results have to be written to a different datapoint IDs `sender_vat_id_normalized` and `iban_normalized` in order not to affect the AI model.

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "[^a-zA-Z\\d]",
          "value_to_replace_with": ""
        }
      ],
      "source_target_mappings": [
        {
          "source": "sender_vat_id",
          "target": "sender_vat_id_normalized"
        },
        {
          "source": "iban",
          "target": "iban_normalized"
        }
      ]
    }
  ]
}
```

:::tip

Consider turning `sender_vat_id_normalized` into [formula field](../rossum-formulas/formula-fields.md) instead where the same functionality can be rewritten as:

```python
''.join(filter(str.isalnum, fields.order_id.strip()))
```

:::

## Prepend and append values

The regular expressions use Python flavor which allows us to write references to capture groups as `\g<0>`, `\g<1>`, etc. The following example transforms order ID from `123` to `PO123/000` as an example (first prepend, later append):

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "^(?!(PO|$))(.+)$",
          "value_to_replace_with": "PO\\g<2>",
          "replace_if_this_pattern_matches": "^(?!(PO|$)).+$"
        },
        {
          "pattern_to_replace": "^(.+)(?<!/000)$",
          "value_to_replace_with": "\\g<1>/000",
          "replace_if_this_pattern_matches": "^.+(?<!/000)$"
        }
      ],
      "source_target_mappings": [
        {
          "source": "order_id",
          "target": "order_id_normalized"
        }
      ]
    }
  ]
}
```

It prepends/appends values only if they are not already present, and it handles empty values gracefully (no prepend/append).

Consider combining this approach with [named capturing groups](#using-named-capturing-groups-in-replace).

## Using named capturing groups in replace

Sometimes it is necessary to capture part of the input and either [append/prepend](#prepend-and-append-values) it or simply remove everything else. For these purposes, it can be quite handy to use **named** [capturing groups](https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups):

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "^[0-9]+-(?P<SKU>[0-9]+)$",
          "value_to_replace_with": "\\g<SKU>",
          "replace_if_this_pattern_matches": "^[0-9]+-[0-9]+$"
        }
      ],
      "source_target_mappings": [
        {
          "source": "item_code",
          "target": "item_code_norm"
        }
      ]
    }
  ]
}
```

Such pattern allows us to capture the SKU precisely and reference it later in `value_to_replace_with`.
