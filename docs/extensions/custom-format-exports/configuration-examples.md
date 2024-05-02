---
sidebar_position: 1
title: 'Configuration examples'
---

:::warning

Maximum five export configs can be defined per annotation export.

:::

## Custom CSV

Define CSV header fields as well as the actual datapoints to be exported:

```json
{
  "export_configs": [
    {
      "export_id": "export_annotation_to_csv",
      "file_content_template": "Document ID,Document Type,Quantity\n{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"
    }
  ]
}
```

Alternatively, it is possible to leverage `file_content_template_multiline` for better readability:

```json
{
  "export_configs": [
    {
      "export_id": "export_annotation_to_csv",
      "file_content_template_multiline": [
        "Document ID,Document Type,Quantity",
        "{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"
      ],
      "content_encoding": "utf-8"
    }
  ]
}
```

Both of the configurations should generate something like this:

```csv
Document ID,Document Type,Quantity
123456,tax_invoice,750
```

It is also possible to iterate line items:

```json
{
  "export_configs": [
    {
      "export_id": "export_annotation_to_csv",
      "file_content_template_multiline": [
        "Document ID,Document Type,Item Description,Item Quantity",
        "{% for item in field.line_items %}{{field.document_id}},{{field.document_type}},{{item.item_description}},{{item.item_quantity}}\n{% endfor %}"
      ],
      "content_encoding": "utf-8"
    }
  ]
}
```

The generated CSV would now contain all the line items, for example:

```csv
Document ID,Document Type,Item Description,Item Quantity
123456,tax_invoice,AWS services #1,750
123456,tax_invoice,AWS services #2,750
123456,tax_invoice,AWS services #3,750
```

:::info

Note that such created CSV is not available anywhere in the UI, but it's rather created as a "document" which is referenced via annotation metadata (on annotation **export** event).

```json
{
  // …
  "metadata": {
    "custom_format_exports": [
      {
        "document": "https://elis.rossum.ai/api/v1/documents/123456",
        "export_id": "export_annotation_to_csv"
      }
    ]
  }
}
```

This extension is typically to be used in combination with [REST API Export extension](../generic-rest-api-export) which knows how to work with it.

:::
