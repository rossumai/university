---
sidebar_position: 1
title: 'Configuration examples'
---

## Copy header fields to line items conditionally

Sometimes it is necessary to copy header field value (such as Purchase Order no.) to line items for later data matching. The best way how to do this is to create a hidden field on line items (`item_po_copy`) and conditionally fill it like so:

```json
{
  "operations": [
    {
      "//": "1.1: Copy the Purchase Order no. only if it doesn't exist on the line item already:",
      "condition": "len({line_items}) > 0 and {item_po} == ''",
      "source_field": "order_id",
      "target_field": "item_po_copy"
    },
    {
      "//": "1.2: Copy the Purchase Order no. from the line items:",
      "condition": "len({line_items}) > 0 and {item_po} != ''",
      "source_field": "item_po",
      "target_field": "item_po_copy"
    }
  ]
}
```

It might be necessary to have **manual** PO number overwrite on header fields. In this case, the logic would be similar:

```json
{
  "operations": [
    {
      "//": "1.1: Copy the Purchase Order no. only if it doesn't exist on the line item already (and there is no manual overwrite):",
      "condition": "len({line_items}) > 0 and {item_order_id} == '' and {order_id_manual} == ''",
      "source_field": "order_id",
      "target_field": "item_order_id_copy"
    },
    {
      "//": "1.2: Copy the Purchase Order Manual no. only if it doesn't exist on the line item already:",
      "condition": "len({line_items}) > 0 and {item_order_id} == '' and {order_id_manual} != ''",
      "source_field": "order_id_manual",
      "target_field": "item_order_id_copy"
    },
    {
      "//": "1.3: Copy the Purchase Order no. from the line items:",
      "condition": "len({line_items}) > 0 and {item_order_id} != ''",
      "source_field": "item_order_id",
      "target_field": "item_order_id_copy"
    }
  ]
}
```
