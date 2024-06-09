---
sidebar_position: 2
sidebar_label: 'Configuration examples'
title: 'Line item grouping: Configuration examples'
---

# Configuration examples

## Group line items by item code

The following SQL groups the line items by the value in `item_code` datapoint.

```sql
SELECT
  MAX(item_code) as item_code_grouped,
  MAX(item_description) as item_description_grouped
  ROUND(SUM(item_quantity),2) as item_quantity_grouped,
FROM items
GROUP BY item_code
```

Full configuration would look like this (the SQL has to be inline):

```json
{
  "transformations": [
    {
      "data_sources": [
        {
          "schema_id": "line_items",
          "table_name": "items"
        }
      ],
      "sql_statement": "SELECT MAX(item_code) as item_code_grouped, ROUND(SUM(item_quantity),2) as item_quantity_grouped, MAX(item_description) as item_description_grouped FROM items GROUP BY item_code",
      "output_schema_id": "line_item_grouped",
      "allow_target_update": true
    }
  ]
}
```
