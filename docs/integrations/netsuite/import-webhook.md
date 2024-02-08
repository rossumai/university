---
title: 'Import webhook'
sidebar_position: 2
---

:::warning[WORK IN PROGRESS]

TODO: describe how to configure full and differential imports or various types

:::

## Full data imports

Schedule: `0 0 * * 6`

```json
{
  "import_config": [
    {
      "ns_type": "Item",
      "search_type": "search",
      "master_data_name": "NS_InventoryItem",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_inventoryItem",
            "attribute_name": "type"
          }
        ]
      }
    }
  ],
  "concurrency_limit": 1
}
```
