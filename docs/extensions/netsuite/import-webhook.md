---
title: 'Import webhook'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Notice that each configuration has `concurrency_limit` configured. The best way how to determine the right number is to visit **Setup > Integration > Integration Governance** where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.

## Differential data imports (daily)

Recommended schedule: `0 0 * * *`

<Tabs groupId="netsuite-flavor" queryString>
  <TabItem value="modern" label="Modern" default>

:::tip

Visit the following link when trying to figure out how should the import searches be configured (drill down to the required fields): https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/schema/search/transactionsearch.html?mode=package

:::

```json
{
  "run_async": true,
  "netsuite_settings": {
    "account": "XXX_SB1", // Case sensitive!
    "concurrency_limit": 4,
    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",
    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",
    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"
  },
  "import_configs": [
    {
      // Currencies
      "master_data_name": "sandbox_NS_Currency_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
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
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
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
      "master_data_name": "sandbox_NS_ItemReceipt_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
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
      }
    },
    {
      // Locations
      "master_data_name": "sandbox_NS_Location_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
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
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
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
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
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
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "VendorSearchBasic",
          "isInactive": {
            "searchValue": "false"
          },
          "lastModifiedDate": {
            "operator": "onOrAfter",
            "searchValue": "{last_modified_date}"
          }
        }
      }
    },
    {
      // Vendor Bills (Invoices)
      "master_data_name": "sandbox_NS_VendorBill_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "_ns_type": "TransactionSearchBasic",
          "type": {
            "searchValue": "_vendorBill",
            "operator": "anyOf"
          },
          "lastModifiedDate": {
            "operator": "onOrAfter",
            "searchValue": "{last_modified_date}"
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
    },
    {
      // Vendor Bills (Invoices)
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "sandbox_NS_VendorBill_v1",
      "basic_search_config": {
        "attributes": [
          {
            "ns_type": "SearchEnumMultiSelectField",
            "operator": "anyOf",
            "searchValue": "_vendorBill",
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
    }
  ],
  "concurrency_limit": 4
}
```

  </TabItem>
</Tabs>

### Async settings

Usually, all imports (as well as exports) will run in asynchronous mode, see:

```json
{
  "run_async": true
}
```

If you'd like to modify the async settings, you can do so using the following `async_settings` configuration:

```json
{
  "run_async": true,
  "import_configs": [
    {
      "master_data_name": "sandbox_NS_PurchaseOrder_v1",
      // highlight-start
      "async_settings": {
        "retries": 2, // max: 10
        "max_run_time_s": 7200 // 2 hours default, min: 60 (1 minute), max: 36000 (10 hours)
        "valid_for_s": 43200 // 12 hours default, min: 300 (5 minutes), max: 172800 (2 days)
      },
      // highlight-end
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

Note that this configuration must be applied to all relevant import configs. Each config can even have a different timeouts and retries.

## Initial full data imports

Periodic full data imports are typically not necessary. One exception, however, is initial import of the datasets where differential imports do not make sense.

For full imports, the configuration is essentially the same as for differential import with the only difference being removed `last_modified_date` usages. For example, instead of using:

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

### Recovering from failed initial imports

Initial imports are typically very large and can take **several days**. It's expected that the initial imports can fail during this period. The following section describes how to deal with such failures.

:::warning

Rossum's team of Solution Architects is typically needed for large NetSuite imports and recoveries. Consider contacting [Rossum Sales](https://rossum.ai/form/contact/) department or Rossum Support team.

:::

All imported records typically have sorting specified: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html

For example, in case of failed purchase orders import, we can find the latest imported records and their respective `dateCreated` which can be used for narrowing down the transaction search (very similar to differential imports except it goes from a specific date):

```json
{
  "import_configs": [
    {
      "payload": {
        "soap_method": "search",
        "soap_record": {
          "type": {
            "operator": "anyOf",
            "searchValue": "_purchaseOrder"
          },
          "_ns_type": "TransactionSearchBasic",
          "dateCreated": {
            "operator": "onOrAfter",
            "searchValue": "2021-01-13T16:26:08"
          }
        }
      },
      "master_data_name": "sandbox_NS_PurchaseOrder_v1"
    }
  ]
}
```

After the successful import, it is a good idea to run differential import (using `lastModifiedDate`) for the whole period when we were performing the initial migration to synchronize records that were updated in the meantime.

And finally, it is possible to switch to differential imports only:

```json
{
  "lastModifiedDate": {
    "operator": "onOrAfter",
    "searchValue": "{last_modified_date}"
  }
}
```
