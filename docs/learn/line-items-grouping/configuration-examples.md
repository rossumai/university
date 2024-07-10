---
sidebar_position: 2
sidebar_label: 'Configuration examples'
title: 'Line items grouping: Configuration examples'
---

# Configuration examples

## Group line items by item code

The following SQL groups the line items by the value in `item_code` datapoint.

```sql
SELECT
    MAX(item_code) as item_code_grouped,
    MAX(item_description) as item_description_grouped
    COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped
FROM
    inmemory_line_items
GROUP BY
    item_code
```

:::warning

When using `SUM` function, it is important to call it like this:

```sql
COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped
```

Using simple `SUM(item_quantity)` would incorrectly turn empty datapoints into `0` which might not be desirable (imagine turning missing total amount `""` into `0`, for example).

:::

Full configuration would look like this (the SQL can be copy-pasted but must be inline):

```json
{
  "transformations": [
    {
      "data_sources": [
        {
          "schema_id": "line_items",
          "table_name": "inmemory_line_items"
        }
      ],
      "sql_statement": "SELECT\n    MAX(item_code) as item_code_grouped,\n    MAX(item_description) as item_description_grouped\n    COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped\nFROM\n    inmemory_line_items\nGROUP BY\n    item_code",
      "output_schema_id": "line_item_grouped",
      "allow_target_update": true
    }
  ]
}
```
