---
sidebar_position: 1
title: 'Duplicates detection: Configuration examples'
sidebar_label: 'Configuration examples'
---

# Configuration examples

## Detect duplicates based on fields and relations

This is probably the most common use case for duplicates detection. It detects duplicates based on the following:

- Content of `document_id` field
- Content of `supplier_id` field (since two suppliers can use the same numbering scheme)
- Compares binary content of the files ("relation")

If duplicate is detected, field `is_rossum_duplicate` is set to `true`.

<details>
  <summary>Recommended configuration of the `is_rossum_duplicate` datapoint.</summary>

```json
{
  "rir_field_names": [],
  "constraints": {
    "required": true
  },
  "score_threshold": 0.0,
  "default_value": "false",
  "category": "datapoint",
  "id": "is_rossum_duplicate",
  "label": "is_rossum_duplicate",
  "hidden": true,
  "disable_prediction": true,
  "type": "enum",
  "can_export": false,
  "ui_configuration": {
    "type": "data",
    "edit": "disabled"
  },
  "options": [
    {
      "value": "true",
      "label": "true"
    },
    {
      "value": "false",
      "label": "false"
    }
  ]
}
```

</details>

### Based the /annotations/search endpoiont and MQL query
```json
{
  "configurations": [
    {
      "logic": [
        {
          "actions": [
            {
              "type": "fill_field",
              "field_to_fill": "is_rossum_duplicate",
              "value_to_fill": "true"
            },
            {
              "type": "mark_duplicate"
            }
          ],
          "search_query": {
            "query": {
              "$and": [
                {
                  "status": {
                    "$nin": [
                      "split",
                      "purged"
                    ]
                  }
                },
                {
                  "field.document_id.string": {
                    "$ne": ""
                  }
                },
                {
                  "field.document_id.string": {
                    "$eq": "@{document_id}"
                  }
                },
                {
                  "field.sender_match.string": {
                    "$ne": ""
                  }
                },
                {
                  "field.sender_match.string": {
                    "$eq": "@{supplier_id}"
                  }
                }
              ]
            }
          }
        }
      ],
      "trigger_events": [
        "annotation_content"
      ],
      "trigger_actions": [
        "initialize",
        "started",
        "updated"
      ]
    },
    {
      "logic": [
        {
          "rules": [
            {
              "id": 1,
              "attribute": "relation"
            }
          ],
          "actions": [
            {
              "type": "fill_field",
              "field_to_fill": "is_rossum_duplicate",
              "value_to_fill": "true"
            }
          ],
          "matching_flow": [
            "1"
          ]
        }
      ],
      "trigger_events": [
        "annotation_content"
      ],
      "trigger_actions": [
        "initialize"
      ]
    }
  ]
}
```

### Based the /annnotations endpoint
```json
{
  "configurations": [
    {
      "logic": [
        {
          "rules": [
            {
              "id": 1,
              "attribute": "field",
              "field_schema_id": "document_id"
            },
            {
              "id": 2,
              "attribute": "field",
              "field_schema_id": "supplier_id"
            },
            {
              "id": 3,
              "attribute": "relation"
            }
          ],
          "scope": {
            "object": "queue",
            "statuses": [
              "failed_import",
              "split",
              "to_review",
              "reviewing",
              "in_workflow",
              "confirmed",
              "rejected",
              "exporting",
              "exported",
              "failed_export",
              "postponed",
              "deleted"
            ]
          },
          "actions": [
            {
              "type": "fill_field",
              "field_to_fill": "is_rossum_duplicate",
              "value_to_fill": "true"
            }
          ],
          "matching_flow": ["1and2", "3"]
        }
      ],
      "trigger_events": ["annotation_content"],
      "trigger_actions": ["initialize", "started", "user_update", "updated"]
    }
  ]
}
```

Later, users can decide what to do with the `is_rossum_duplicate` information. Typically, we display warning or error message.
