---
title: 'NetSuite: Import configuration'
sidebar_position: 2
sidebar_label: 'Import configuration'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Import configuration

Notice that each configuration has `concurrency_limit` configured. The best way how to determine the right number is to visit **Setup → Integration → Integration Governance** where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.

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
      "master_data_name": "NS_SB1_Currency_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "getAll",
        "method_args": [
          {
            "_ns_type": "GetAllRecord",
            "recordType": "currency"
          }
        ]
      }
    },
    {
      // Inventory items
      "master_data_name": "NS_SB1_InventoryItem_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "ItemSearchBasic",
            "type": {
              "searchValue": "_inventoryItem",
              "operator": "anyOf"
            },
            "isInactive": {
              "searchValue": false
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      }
    },
    {
      // Item Receipts (GRNs)
      "master_data_name": "NS_SB1_ItemReceipt_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
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
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      }
    },
    {
      // Locations
      "master_data_name": "NS_SB1_Location_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "LocationSearchBasic"
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      }
    },
    {
      // Purchase Orders
      "master_data_name": "NS_SB1_PurchaseOrder_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
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
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      }
    },
    {
      // Subsidiaries
      "master_data_name": "NS_SB1_Subsidiary_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "SubsidiarySearchBasic",
            "isInactive": {
              "searchValue": "false"
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      }
    },
    {
      // Vendors
      "master_data_name": "NS_SB1_Vendor_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "VendorSearchBasic",
            "isInactive": {
              "searchValue": "false"
            },
            "lastModifiedDate": {
              "operator": "onOrAfter",
              "searchValue": "{last_modified_date}"
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      }
    },
    {
      // Vendor Bills (Invoices)
      "master_data_name": "NS_SB1_VendorBill_v1",
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },
      "payload": {
        "method_name": "search",
        "method_args": [
          {
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
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
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
      "master_data_name": "NS_SB1_Currency_v1"
    },
    {
      // Inventory items
      "ns_type": "Item",
      "search_type": "search",
      "master_data_name": "NS_SB1_InventoryItem_v1",
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
      "master_data_name": "NS_SB1_ItemReceipt_v1",
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
      "master_data_name": "NS_SB1_Location_v1"
    },
    {
      // Purchase Orders
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "NS_SB1_PurchaseOrder_v1",
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
      "master_data_name": "NS_SB1_Subsidiary_v1"
    },
    {
      // Vendors
      "ns_type": "Vendor",
      "search_type": "search",
      "master_data_name": "NS_SB1_Vendor_v1"
    },
    {
      // Vendor Bills (Invoices)
      "ns_type": "Transaction",
      "search_type": "search",
      "master_data_name": "NS_SB1_VendorBill_v1",
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
      "master_data_name": "NS_SB1_PurchaseOrder_v1",
      // highlight-start
      "async_settings": {
        "retries": 2, // max: 10
        "max_run_time_s": 7200 // 2 hours default, min: 60 (1 minute), max: 36000 (10 hours)
        "valid_for_s": 43200 // 12 hours default, min: 300 (5 minutes), max: 172800 (2 days)
      },
      // highlight-end
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "TransactionSearchBasic",
            "type": {
              "searchValue": "_purchaseOrder",
              "operator": "anyOf"
            }
          }
        ]
      }
    }
  ]
}
```

Note that this configuration must be applied to all relevant import configs. Each config can even have a different timeouts and retries.

### Importing individual records

Sometimes, it can be handy to import just one specific record:

```json
{
  "run_async": true,
  "import_configs": [
    {
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "type": {
              "operator": "anyOf",
              "searchValue": "_purchaseOrder"
            },
            "tranId": {
              "operator": "is",
              "searchValue": "PO-45512"
            },
            "_ns_type": "TransactionSearchBasic"
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      },
      "async_settings": {
        "retries": 5
      },
      "master_data_name": "NS_SB1_PurchaseOrder_v1"
    }
  ],
  "netsuite_settings": {
    // …
  }
}
```

## Using advanced transaction search

Using `TransactionSearchAdvanced` can be beneficial if we want to select which fields should be fetched from NetSuite (to lower the payload size as well as data storage requirements). Additionally, it can be useful to fetch additional columns such as `createdFromJoin` or `applyingTransactionJoin` and similar.

:::info

Advanced transaction search requires 'Transactions → Find Transaction' permission.

:::

`TransactionSearchAdvanced` requires two main fields: `criteria` (to specify the actual search) and `columns` (to specify what columns should be returned). It is also important to set `returnSearchColumns` to `true` and finally `advanced_search_internal_id_jmespath` to define unique identifier for the basic record:

```json
{
  "run_async": false,
  "import_configs": [
    {
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "TransactionSearchAdvanced",
            // highlight-start
            "criteria": {
              // highlight-end
              "_ns_type": "TransactionSearch",
              "basic": {
                "_ns_type": "TransactionSearchBasic",
                "type": {
                  "operator": "anyOf",
                  "searchValue": "_purchaseOrder"
                },
                "dateCreated": {
                  "operator": "onOrAfter",
                  "searchValue": "2024-01-01T00:00:00Z"
                }
              }
            },
            // highlight-start
            "columns": {
              // highlight-end
              "_ns_type": "TransactionSearchRow",
              "basic": {
                "_ns_type": "TransactionSearchRowBasic",
                "tranId": {},
                "tranDate": {},
                "internalId": {},
                "externalId": {},
                "recordType": {},
                "dateCreated": {},
                "lastModifiedDate": {}
              },
              "applyingTransactionJoin": {
                "_ns_type": "TransactionSearchRowBasic",
                "tranId": {},
                "tranDate": {},
                "internalId": {},
                "externalId": {},
                "recordType": {},
                "dateCreated": {},
                "lastModifiedDate": {}
              }
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            // highlight-start
            "returnSearchColumns": true
            // highlight-end
          }
        }
      },
      "master_data_name": "NS_SB1_PurchaseOrder_v1",
      // highlight-start
      "advanced_search_internal_id_jmespath": "basic.internalId[0].searchValue.internalId"
      // highlight-end
    }
  ],
  "netsuite_settings": {
    // …
  }
}
```

### Main line advanced search

By default, the advanced search returns one record for each line item. In case we'd not care about the line items, we can change the search behavior to return one line per main line record by configuring `criteria.basic.mainLine` (see [Main Line in NetSuite](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4459563851.html)):

```json
{
  "_ns_type": "TransactionSearchAdvanced",
  "columns": {
    "_ns_type": "TransactionSearchRow",
    "basic": {
      // …
    }
  },
  "criteria": {
    "_ns_type": "TransactionSearch",
    "basic": {
      "_ns_type": "TransactionSearchBasic",
      // highlight-start
      "mainLine": {
        "searchValue": true
      }
      // highlight-end
      // …
    }
  }
}
```

## Initial full data imports

:::warning

Rossum's team of Solution Architects is typically needed for large NetSuite imports and recoveries. Consider contacting [Rossum Sales](https://rossum.ai/form/contact/) department or Rossum Support team.

:::

When creating a new organization, the Master Data Hub collections are empty and need to be imported from NetSuite. The most naive approach is to simply run the [differential import from above](#differential-data-imports-daily) which will on the first run import everything. This is because when the collections are empty, the `last_modified_date` will default to January 1st, 1970 (effectively resulting in a full import).

However, initial imports are typically very large and can take **several days** when ran sequentially. It's expected that the initial imports can fail during this period. Moreover, the maximum runtime of import jobs is currently **10 hours**. The following section describes how to deal with such failures and how to approach initial imports in a less naive and more controlled way.

:::tip

Consider whether full dataset import is necessary. It might be enough to pull the last year only, for example.

:::

All imported records typically have sorting specified. For example, all transactions are typically sorted by "Date Created", see: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3518731.html

We can leverage this default sorting and partition the initial imports to years (so that we can download several years in parallel):

```json
{
  "import_configs": [
    {
      // Download Purchase Orders for year 2022:
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "TransactionSearchBasic",
            "type": {
              "operator": "anyOf",
              "searchValue": "_purchaseOrder"
            },
            "dateCreated": {
              // highlight-start
              "operator": "within",
              "searchValue": "2022-01-01T00:00:00Z",
              "searchValue2": "2023-01-01T00:00:00Z"
              // highlight-end
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      },
      "master_data_name": "NS_SB1_PurchaseOrder_v1"
    },
    {
      // Download Purchase Orders for year 2023:
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "_ns_type": "TransactionSearchBasic",
            "type": {
              "operator": "anyOf",
              "searchValue": "_purchaseOrder"
            },
            "dateCreated": {
              // highlight-start
              "operator": "within",
              "searchValue": "2023-01-01T00:00:00Z",
              "searchValue2": "2024-01-01T00:00:00Z"
              // highlight-end
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      },
      "master_data_name": "NS_SB1_PurchaseOrder_v1"
    },
    {
      // Download Purchase Orders for the rest of the years:
      "payload": {
        "method_name": "search",
        "method_args": [
          {
            "type": {
              "operator": "anyOf",
              "searchValue": "_purchaseOrder"
            },
            "_ns_type": "TransactionSearchBasic",
            "dateCreated": {
              // highlight-start
              "operator": "onOrAfter",
              "searchValue": "2024-01-01T00:00:00Z"
              // highlight-end
            }
          }
        ],
        "method_headers": {
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          }
        }
      },
      "master_data_name": "NS_SB1_PurchaseOrder_v1"
    }
  ]
}
```

It is necessary to observe whether all the partitions were imported successfully. In case they were not (for example some network issue cause the import jobs to fail), we can adjust the `within` window to ignore the already imported dates and restart the import. To check the latest available date in the partition, you can use the following MongoDB query:

```json
{
  "aggregate": [
    {
      "$match": {
        "createdDate": {
          "$gte": { "$date": "2024-01-01T00:00:00Z" },
          "$lte": { "$date": "2025-01-01T00:00:00Z" }
        }
      }
    },
    { "$sort": { "createdDate": -1 } },
    { "$limit": 10 },
    { "$project": { "createdDate": 1, "itemList": 1 } }
  ]
}
```

:::warning

Confusingly, NetSuite returns `createdDate` field but the SOAP API exposes `dateCreated` search argument instead!

:::

After the successful import, it is a good idea to run differential import (using `lastModifiedDate`) for the period during which we were performing the initial migration (to synchronize records that were updated in the meantime):

```json
{
  "lastModifiedDate": {
    "operator": "onOrAfter",
    "searchValue": "__date of the full import start__" // replace with ISO date format
  }
}
```

And finally, it is possible to switch to differential imports only:

```json
{
  "lastModifiedDate": {
    "operator": "onOrAfter",
    "searchValue": "{last_modified_date}"
  }
}
```
