---
title: 'Duplicates detection'
sidebar_position: 1
---

import WIP from '../\_wip.md';

## Installation

<WIP issue="https://github.com/rossumai/university/issues/404" />

## Basic usage

<WIP issue="https://github.com/rossumai/university/issues/404" />

## Available configuration options

<WIP issue="https://github.com/rossumai/university/issues/404" />

```json
{
  "configurations": [
    {
      "logic": [
        {
          "rules": [
            {
              "id": 1,

              // One of: "field", "filename", "relation"
              "attribute": "field",

              // Datapoint schema ID
              "field_schema_id": "document_id"
            }
            // …
          ],
          "scope": {
            // One of: "queue", "workspace", "organization"
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

          // Defines how to combine rules. You can specify a list of rule IDs or use logical "and"
          // operations between rule IDs. Each list element acts as a logical "or" operation.
          "matching_flow": ["1and2", "3"]
        }
      ],
      "trigger_events": ["annotation_content"],
      "trigger_actions": ["initialize", "started", "user_update", "updated"]
    }
  ]
}
```
