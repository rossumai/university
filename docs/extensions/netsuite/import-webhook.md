---
title: 'Import webhook'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Notice that each configuration has `concurrency_limit` configured. The best way how to determine the right number is to visit **Setup > Integration > Integration Governance** where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.

## Differential data imports (daily)

Schedule: `0 0 * * *`

<Tabs groupId="netsuite-flavor" queryString>
  <TabItem value="modern" label="Modern" default>

```json
{
  "run_async": true,
  "netsuite_settings": {
    "account": "XXX",
    "concurrency_limit": 4,
    "wsdl_url": "https://XXX.suitetalk.api.netsuite.com/wsdl/v2022_2_0/netsuite.wsdl",
    "service_url": "https://XXX.suitetalk.api.netsuite.com/services/NetSuitePort_2022_2",
    "service_binding_name": "{urn:platform_2022_2.webservices.netsuite.com}NetSuiteBinding"
  },
  "import_configs": [
    {
      // Currencies
      "master_data_name": "sandbox_NS_Currency_v1",
      "payload": {
        "soap_method": "getAll",
        "soap_record": {
          "_ns_type": "GetAllRecord",
          "recordType": "currency"
        }
      }
    },
    {
      // Inventory items
      "master_data_name": "sandbox_NS_InventoryItem_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "ItemSearchBasic",
          "type": {
            "searchValue": "_inventoryItem",
            "operator": "anyOf"
          },
          "isInactive": {
            "searchValue": false
          }
        }
      }
    },
    {
      // Item Receipts (GRNs)
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "TransactionSearchBasic",
          "type": {
            "operator": "anyOf",
            "searchValue": "_itemReceipt"
          },
          "lastModifiedDate": {
            "operator": "onOrAfter",
            "searchValue": "{last_modified_date}"
          }
        }
      },
      "master_data_name": "sandbox_NS_ItemReceipt_v1"
    },
    {
      // Locations
      "master_data_name": "sandbox_NS_Location_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "LocationSearchBasic"
        }
      }
    },
    {
      // Purchase Orders
      "master_data_name": "sandbox_NS_PurchaseOrder_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "TransactionSearchBasic",
          "type": {
            "searchValue": "_purchaseOrder",
            "operator": "anyOf"
          },
          "lastModifiedDate": {
            "operator": "onOrAfter",
            "searchValue": "{last_modified_date}"
          }
        }
      }
    },
    {
      // Subsidiaries
      "master_data_name": "sandbox_NS_Subsidiary_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "SubsidiarySearchBasic",
          "isInactive": {
            "searchValue": "false"
          }
        }
      }
    },
    {
      // Vendors
      "master_data_name": "sandbox_NS_Vendor_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "VendorSearchBasic",
          "isInactive": {
            "searchValue": "false"
          }
        }
      }
    }
  ]
}
```

  </TabItem>
  <TabItem value="original" label="Original">

:::warning

The following "original" configuration is **deprecated**. Consider using the "modern" version instead.

:::

```json
{
  "run_async": true,
  "import_config": [
    {
      // Currencies
      "ns_type": "Currency",
      "search_type": "getAll",
      "master_data_name": "sandbox_NS_Currency_v1"
    },
    {
      // Inventory items
      "ns_type": "Item",
      "search_type": "search",
      "master_data_name": "sandbox_NS_InventoryItem_v1",
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
          },
          {
            "ns_type": "SearchDateField",
            "operator": "onOrAfter",
            "searchValue": "${last_modified_date}",
            "attribute_name": "lastModifiedDate"
          }
        ]
      }
    },
    {
      // Item Receipts (GRNs)
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "sandbox_NS_ItemReceipt_v1",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_itemReceipt",
            "attribute_name": "type"
          },
          {
            "ns_type": "SearchDateField",
            "operator": "onOrAfter",
            "searchValue": "${last_modified_date}",
            "attribute_name": "lastModifiedDate"
          }
        ]
      }
    },
    {
      // Locations
      "ns_type": "Location",
      "search_type": "search",
      "master_data_name": "sandbox_NS_Location_v1"
    },
    {
      // Purchase Orders
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "sandbox_NS_PurchaseOrder_v1",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_purchaseOrder",
            "attribute_name": "type"
          },
          {
            "ns_type": "SearchDateField",
            "operator": "onOrAfter",
            "searchValue": "${last_modified_date}",
            "attribute_name": "lastModifiedDate"
          }
        ]
      }
    },
    {
      // Subsidiaries
      "ns_type": "Subsidiary",
      "search_type": "search",
      "master_data_name": "sandbox_NS_Subsidiary_v1"
    },
    {
      // Vendors
      "ns_type": "Vendor",
      "search_type": "search",
      "master_data_name": "sandbox_NS_Vendor_v1"
    }
  ],
  "concurrency_limit": 4
}
```

  </TabItem>
</Tabs>

## Full data imports (weekly)

Schedule: `0 0 * * 6`

Full weekly data imports should not be necessary unless explicitly required.

The imports configuration is essentially the same as differential import with the only difference being removed `last_modified_date` usages. For example, instead of using:

```json
{
  "import_configs": [
    {
      "master_data_name": "sandbox_NS_PurchaseOrder_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "TransactionSearchBasic",
          "type": {
            "searchValue": "_purchaseOrder",
            "operator": "anyOf"
          },
          // highlight-start
          "lastModifiedDate": {
            "operator": "onOrAfter",
            "searchValue": "{last_modified_date}"
          }
          // highlight-end
        }
      }
    }
  ]
}
```

You'd simply remove the `lastModifiedDate` resulting in:

```json
{
  "import_configs": [
    {
      "master_data_name": "sandbox_NS_PurchaseOrder_v1",
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "TransactionSearchBasic",
          "type": {
            "searchValue": "_purchaseOrder",
            "operator": "anyOf"
          }
        }
      }
    }
  ]
}
```
