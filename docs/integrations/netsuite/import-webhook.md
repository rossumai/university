---
title: 'Import webhook'
sidebar_position: 2
---

## Full data imports (weekly)

Schedule: `0 0 * * 6`

```json
{
  "run_async": true,
  "import_config": [
    {
      // Inventory items
      "ns_type": "Item",
      "search_type": "search",
      "master_data_name": "sandbox_NS_InventoryItem",
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
    },
    {
      // Locations
      "ns_type": "Location",
      "search_type": "search",
      "master_data_name": "sandbox_NS_Location"
    },
    {
      // Subsidiaries
      "ns_type": "Subsidiary",
      "search_type": "search",
      "master_data_name": "sandbox_NS_Subsidiary"
    },
    {
      // Vendors
      "ns_type": "Vendor",
      "search_type": "search",
      "master_data_name": "sandbox_NS_Vendor"
    }
  ],
  "concurrency_limit": 4
}
```

## Differential data imports (daily)

Schedule: `0 0 * * *`

The main idea is to add the following `last_modified_date` search value to each import config:

```json
{
  "run_async": true,
  "import_config": [
    {
      "ns_type": "Item",
      "search_type": "search",
      "master_data_name": "sandbox_NS_InventoryItem",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_inventoryItem",
            "attribute_name": "type"
          },
          // highlight-start
          {
            "ns_type": "SearchDateField",
            "operator": "onOrAfter",
            "searchValue": "${last_modified_date}",
            "attribute_name": "lastModifiedDate"
          }
          // highlight-end
        ]
      }
    }
  ],
  "concurrency_limit": 4
}
```
