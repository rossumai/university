---
title: 'Import webhook'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Notice that each configuration has `concurrency_limit` configured. The best way how to determine the right number is to visit **Setup > Integration > Integration Governance** where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.

## Full data imports (weekly)

Schedule: `0 0 * * 6`

<Tabs groupId="netsuite-flavor" queryString>
  <TabItem value="modern" label="Modern" default>

```json
{
  // 🚧 WORK IN PROGESS 🚧
}
```

  </TabItem>
  <TabItem value="original" label="Original">

```json
{
  "run_async": true,
  "import_config": [
    {
      // Currencies
      "ns_type": "Currency",
      "search_type": "getAll",
      "master_data_name": "sandbox_NS_Currency"
    },
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
          },
          {
            "ns_type": "SearchBooleanField",
            "searchValue": "false",
            "attribute_name": "isInactive"
          }
        ]
      }
    },
    {
      // Item Receipts (GRNs)
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "sandbox_NS_ItemReceipt",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_itemReceipt",
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
      // Purchase Orders
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "sandbox_NS_PurchaseOrder",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_purchaseOrder",
            "attribute_name": "type"
          }
        ]
      }
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

  </TabItem>
</Tabs>

## Differential data imports (daily)

Schedule: `0 0 * * *`

<Tabs groupId="netsuite-flavor" queryString>
  <TabItem value="modern" label="Modern" default>

```json
{
  // 🚧 WORK IN PROGESS 🚧
}
```

  </TabItem>
  <TabItem value="original" label="Original">

The main idea is to add the following `last_modified_date` search value to each import config. Note, however, that not all records support this differential search.

We typically configure the differential import for:

1. Inventory items
2. Purchase orders
3. Vendors
4. ...

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

  </TabItem>
</Tabs>
