---
title: 'Export webhook'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Here you can find the most common configurations. They might all need to be adjusted to your specific NetSuite instance configuration.

## VendorBills (Invoices)

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
              "_schema_id": "item_amount_total",
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
