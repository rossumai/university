---
title: 'Export webhook'
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page showcases the most common configurations. The final configuration depends heavily on the NetSuite instance configuration and might need to be adjusted as needed.

## Vendor Bills (Invoices)

<Tabs groupId="netsuite-flavor" queryString>
  <TabItem value="modern" label="Modern" default>

The following shows a Vendor Bill export that (perhaps with some small tweaks) should work for most of the cases:

```json
{
  "run_async": false,
  "netsuite_settings": {
    "account": "XXX_SB1", // Case sensitive!
    "concurrency_limit": 4,
    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",
    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",
    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"
  },
  "export_configs": [
    {
      "payload": {
        "soap_method": "upsert",
        "soap_record": {
          "_ns_type": "VendorBill",
          "class": {
            "type": "classification",
            "_ns_type": "RecordRef",
            "internalId": "@{ns_class_match}"
          },
          "customForm": {
            "type": "customRecord",
            "_ns_type": "RecordRef",
            "internalId": "@{ns_customForm}"
          },
          "currency": {
            "type": "currency",
            "_ns_type": "RecordRef",
            "internalId": "@{ns_currency_match}"
          },
          "department": {
            "type": "department",
            "_ns_type": "RecordRef",
            "internalId": "@{ns_department_match}"
          },
          "dueDate": {
            "$IF_SCHEMA_ID$": {
              "schema_id": "date_due",
              "mapping": {
                "$DATAPOINT_VALUE$": {
                  "schema_id": "date_due",
                  "value_type": "iso_datetime"
                }
              }
            }
          },
          "entity": {
            "type": "vendor",
            "_ns_type": "RecordRef",
            "internalId": "@{ns_vendor_match}"
          },
          "externalId": "@{ns_external_id_generated}",
          "subsidiary": {
            "type": "subsidiary",
            "_ns_type": "RecordRef",
            "internalId": "@{ns_subsidiary_match}"
          },
          "tranId": "@{document_id}",
          "tranDate": {
            "$IF_SCHEMA_ID$": {
              "mapping": {
                "$DATAPOINT_VALUE$": {
                  "schema_id": "date_issue",
                  "value_type": "iso_datetime"
                }
              },
              "schema_id": "date_issue"
            }
          },
          "itemList": {
            "item": {
              "$FOR_EACH_SCHEMA_ID$": {
                "mapping": {
                  "_ns_type": "VendorBillItem",
                  "description": "@{item_description}",
                  "item": {
                    "type": "inventoryItem",
                    "_ns_type": "RecordRef",
                    "internalId": "@{item_ns_item_match}"
                  },
                  "rate": "@{item_amount_base}",
                  "location": {
                    "type": "location",
                    "_ns_type": "RecordRef",
                    "internalId": "@{item_ns_location_match}"
                  },
                  "quantity": "@{item_quantity}",
                  "taxCode": {
                    "type": "taxType",
                    "_ns_type": "RecordRef",
                    "internalId": "@{item_po_item_taxCode_match}"
                  }
                },
                "schema_id": "line_item"
              }
            },
            "_ns_type": "VendorBillItemList"
          },
          "expenseList": {
            "expense": {
              "$FOR_EACH_SCHEMA_ID$": {
                "mapping": {
                  "_ns_type": "VendorBillExpense",
                  "memo": "@{item_description}",
                  "amount": "@{item_amount_total}",
                  "account": {
                    "type": "account",
                    "_ns_type": "RecordRef",
                    "internalId": "@{item_gl_code_match}"
                  }
                },
                "schema_id": "line_item"
              }
            },
            "_ns_type": "VendorBillExpenseList"
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
  "export_config": {
    "mapping": {
      "VendorBill": {
        "entity": {
          "_schema_id": "ns_vendor_match",
          "_value_type": "string",
          "_record_type": "RecordRef$vendor"
        },
        "tranId": {
          "_schema_id": "document_id",
          "_value_type": "string",
          "_record_type": "simple"
        },
        "dueDate": {
          "_schema_id": "date_due",
          "_value_type": "datetime",
          "_record_type": "simple"
        },
        "currency": {
          "_schema_id": "ns_currency_match",
          "_value_type": "string",
          "_record_type": "RecordRef$currency"
        },
        "itemList": {
          "item": {
            "item": {
              "_schema_id": "item_ns_item_match",
              "_value_type": "string",
              "_record_type": "RecordRef$inventoryItem"
            },
            "rate": {
              "_schema_id": "item_amount",
              "_value_type": "double",
              "_record_type": "simple"
            },
            "location": {
              "_schema_id": "item_ns_location_match",
              "_value_type": "string",
              "_record_type": "RecordRef$location"
            },
            "quantity": {
              "_schema_id": "item_quantity",
              "_value_type": "double",
              "_record_type": "simple"
            },
            "_record_type": "VendorBillItem"
          },
          "_schema_id": "line_items",
          "_record_type": "VendorBillItemList",
          "_filter_values": ["inventory_item"],
          "_filter_schema_id": "item_ns_type_manual"
        },
        "externalId": {
          "_schema_id": "ns_vb_external_id_generated",
          "_value_type": "string",
          "_record_type": "simple"
        },
        "subsidiary": {
          "_schema_id": "ns_subsidiary_match",
          "_value_type": "string",
          "_record_type": "RecordRef$subsidiary"
        },
        "expenseList": {
          "expense": {
            "memo": {
              "_schema_id": "item_description",
              "_value_type": "string",
              "_record_type": "simple"
            },
            "amount": {
              "_schema_id": "item_amount_total",
              "_value_type": "float",
              "_record_type": "simple"
            },
            "account": {
              "_schema_id": "item_gl_code_match",
              "_value_type": "string",
              "_record_type": "RecordRef$account"
            },
            "_record_type": "VendorBillExpense"
          },
          "_schema_id": "line_items",
          "_record_type": "VendorBillExpenseList",
          "_filter_values": ["expense"],
          "_filter_schema_id": "item_ns_type_manual"
        },
        "_record_type": "VendorBill",
        "_export_condition": "{document_type} == 'tax_invoice'"
      }
    },
    "objects": {},
    "file_cabinet": []
  }
}
```

  </TabItem>
</Tabs>

### Linking Vendor Bills with Purchase Orders

To connect Vendor Bills with Purchase Orders, it is necessary to set both `orderDoc` and `orderLine` on line-items level (showing only relevant parts of the export config):

```json
{
  "export_configs": [
    {
      "payload": {
        "soap_method": "upsert",
        "soap_record": {
          "tranId": "@{document_id}",
          "itemList": {
            "item": {
              "$FOR_EACH_SCHEMA_ID$": {
                "mapping": {
                  // …
                  "_ns_type": "VendorBillItem",
                  "orderDoc": "@{item_po_match}", // PO internal ID
                  "orderLine": "@{item_po_item_line_match}" // Relevant line-item number from PO (itemList.item.line)
                  // …
                },
                "schema_id": "line_item"
              }
            },
            "_ns_type": "VendorBillItemList"
          }
          // …
        }
      }
    }
  ]
}
```

Note that the combination of Purchase Order and line item no. can appear only once in the payload. In case it appears twice on the invoice then it's necessary to group the line items before exporting.
