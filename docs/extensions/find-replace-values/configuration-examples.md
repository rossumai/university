---
sidebar_position: 1
title: 'Configuration examples'
---

## Normalize Values

The following snippet removes all non-alphanumeric characters. The source datapoint ID is `sender_vat_id` and the result has to be written to a different datapoint ID `sender_vat_id_normalized` not to affect the AI model.

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "[^a-zA-Z\\d]",
          "value_to_replace_with": "",
          "replace_if_this_pattern_matches": "[^a-zA-Z\\d]"
        }
      ],
      "source_target_mappings": [
        {
          "source": "sender_vat_id",
          "target": "sender_vat_id_normalized"
        }
      ]
    }
  ]
}
```

## Prepend and Append Values

The regular expressions use Python flavor which allows us to write references to capture groups as `\g<0>`, `\g<1>`, etc. The following example transforms order ID from `123` to `PO123/000` as an example:

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "^(.*)$",
          "value_to_replace_with": "PO\\g<0>",
          "replace_if_this_pattern_matches": ".*"
        },
        {
          // This transformation is applied after the first. Both of these transformations could be
          // combined into one, however. This is just to demonstrate that multiple transformations:
          "pattern_to_replace": "^(.*)$",
          "value_to_replace_with": "\\g<0>/000",
          "replace_if_this_pattern_matches": ".*"
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
