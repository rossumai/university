---
sidebar_position: 1
sidebar_label: 'Configuration examples'
title: 'Line items grouping: Configuration examples'
---

# Configuration examples

:::danger[Here be dragons]

Datapoint `line_item_grouped` **must exist** in the schema otherwise the extension will keep adding new line items and not removing the old ones! This datapoint name is currently hardcoded and cannot be changed.

The recommended schema datapoint:

```json
{
  "category": "multivalue",
  "id": "line_items_grouped",
  "label": "Line Items (grouped)",
  "children": {
    "category": "tuple",
    // highlight-start
    "id": "line_item_grouped",
    // highlight-end
    "label": "line_item_grouped",
    "children": [
      {
        "rir_field_names": [],
        "constraints": { "required": false },
        "default_value": null,
        "category": "datapoint",
        "id": "item_code_grouped",
        "label": "Code",
        "type": "string"
      },
      {
        "rir_field_names": [],
        "constraints": { "required": false },
        "default_value": null,
        "category": "datapoint",
        "id": "item_description_grouped",
        "label": "Description",
        "type": "string"
      }
      // Add more datapoints here as needed…
    ],
    "rir_field_names": []
  },
  "min_occurrences": null,
  "max_occurrences": null,
  "default_value": null,
  "rir_field_names": []
}
```

Additionally, the `line_items` table must exist in the schema as well. This is, however, the typical default.

:::

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
      "output_schema_id": "line_items_grouped",
      "allow_target_update": true
    }
  ]
}
```

## Group line items conditionally

In some cases (for example, when integrating with NetSuite), it is necessary to group only so called "inventory items" and keep "expenses" intact. This can be achieved using a bit more verbose `GROUP BY` clause:

```sql
SELECT
    MAX(item_type) as item_type_grouped,
    COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped,
    MAX(item_description) as item_description_grouped,
    MAX(item_ns_item_match) as item_ns_item_match_grouped
FROM
    inmemory_line_items
GROUP BY
-- highlight-start
    CASE
        WHEN item_type = 'inventory_item' THEN item_ns_item_match
        ELSE item_index -- a unique identifier for each row to prevent grouping for 'expense' type rows
    END;
-- highlight-end
```

The `item_index` from the SQL above is a [formula field](../rossum-formulas/formula-fields.md) with the following definition (to give each row a unique number):

```py
field._index
```

The SQL, of course, needs to be copied to the actual configuration which could look like this, for example:

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
      "sql_statement": "SELECT\n    MAX(item_type) as item_type_grouped,\n    COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped,\n    MAX(item_description) as item_description_grouped,\n    MAX(item_ns_item_match) as item_ns_item_match_grouped\nFROM\n    inmemory_line_items\nGROUP BY\n    CASE\n        WHEN item_type = 'inventory_item' THEN item_ns_item_match\n        ELSE item_index -- a unique identifier for each row to prevent grouping for 'expense' type rows\n    END;",
      "output_schema_id": "line_items_grouped",
      "allow_target_update": false
    }
  ]
}
```
