---
title: 'Export pipelines: Custom format templating'
sidebar_label: '2. Custom format templating'
sidebar_position: 2
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# Custom format templating

## Installation

"Custom format templating" extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Custom format templating`
   1. Trigger events: `Export`
   1. Extension type: `Webhook`
   1. URL (see below)
1. In "Advanced settings" select **Token owner** (should have Admin access)
1. In the "Additional notification metadata" enable `Schemas`
1. Click **Create the webhook**.

<WIP />

<WebhookEndpoints
  eu1="https://elis.custom-format-templating.rossum-ext.app/"
  eu2="https://shared-eu2.custom-format-templating.rossum-ext.app/"
  us="https://us.custom-format-templating.rossum-ext.app/"
  jp="https://shared-jp.custom-format-templating.rossum-ext.app/"
/>

## Basic usage

<WIP issue="https://github.com/rossumai/university/issues/382" />

## Available configuration options

```json
{
  "export_configs": [
    {
      "content_encoding": "utf-8",

      // Name of the export template used for later reference in the export pipeline.
      "export_reference_key": "example_invoice_template",

      // In-line template of the file to be exported. You can either use this in-line version or
      // use `file_content_template_multiline` for multiple lines instead.
      "file_content_template": "…",

      // Multiline template of the file to be exported. You can either use this multipline version
      // or use `file_content_template` for in-line templates instead.
      "file_content_template_multiline": [
        // Rows of the template. Each row is a new line (no need for "\n" separators).
        "…",
        "…"
      ]
    }
  ]
}
```

## Configuration examples

:::warning

Maximum five export configs can be defined per annotation export.

:::

### Custom CSV

Define CSV header fields as well as the actual datapoints to be exported:

```json
{
  "export_configs": [
    {
      "export_reference_key": "export_annotation_to_csv",
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
      "export_reference_key": "export_annotation_to_csv",
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
      "export_reference_key": "export_annotation_to_csv",
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
        "export_reference_key": "export_annotation_to_csv"
      }
    ]
  }
}
```

This extension is typically to be used in combination with [REST API Export extension](./rest-api-export.md) which knows how to work with it.

:::

### Custom XML

Similarly to other formats, custom XML can be defined using the following template (notice the `| upper` [filter](https://jinja.palletsprojects.com/en/stable/templates/#filters)):

```json
{
  "export_configs": [
    {
      "export_reference_key": "export_annotation_to_xml",
      "content_encoding": "utf-8",
      "file_content_template_multiline": [
        "<ROSSUM>",
        "  <INVOICE>",
        "    <HEADER>",
        "      <DOCUMENT_ID>{{ field.document_id }}</DOCUMENT_ID>",
        "      <DOCUMENT_TYPE>{{ field.document_type }}</DOCUMENT_TYPE>",
        "      <DOCUMENT_LANGUAGE>{{ field.language }}</DOCUMENT_LANGUAGE>",
        "      <DATE_ISSUE>{{ field.date_issue }}</DATE_ISSUE>",
        "      <DATE_DUE>{{ field.date_due }}</DATE_DUE>",
        // highlight-start
        "      <CURRENCY>{{ field.currency | upper }}</CURRENCY>",
        // highlight-end
        "      <AMOUNT_TOTAL>{{ field.amount_total }}</AMOUNT_TOTAL>",
        "      <AMOUNT_TOTAL_TAX>{{ field.amount_total_tax }}</AMOUNT_TOTAL_TAX>",
        "    </HEADER>",
        "  </INVOICE>",
        "</ROSSUM>"
      ]
    }
  ]
}
```

:::tip

If the fields may include any of the following chars (`>`, `<`, `&`, or `"`) you **SHOULD** escape it unless the variable contains well-formed and trusted HTML/XML like so: `{ field.name|e }`

You can learn more about this (and other) filter(s) here: https://jinja.palletsprojects.com/en/stable/templates/#working-with-manual-escaping

:::

### Custom JSON

Creates custom JSON templates with some header fields and line items (iteration over the line items is highlighted).

```json
{
  "export_configs": [
    {
      "export_reference_key": "export_annotation_to_json",
      "content_encoding": "utf-8",
      "file_content_template_multiline": [
        "{",
        "  \"document_id\": \"{{ field.document_id }}\",",
        "  \"document_type\": \"{{ field.document_type }}\",",
        "  \"line_items\": [",
        // highlight-start
        "    {% for item in field.line_items %}{",
        // highlight-end
        "      \"code\": \"{{ item.item_code }}\",",
        "      \"description\": \"{{ item.item_description }}\",",
        "      \"quantity\": {{ item.item_quantity }},",
        "      \"amount\": {{ item.item_amount }},",
        // highlight-start
        "    }{% if not loop.last %},{% endif %}",
        "  {% endfor %}]",
        // highlight-end
        "}"
      ]
    }
  ]
}
```
