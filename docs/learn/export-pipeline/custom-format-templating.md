---
title: 'Export pipelines: Custom format templating'
sidebar_label: '2. Custom format templating'
sidebar_position: 2
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# Custom format templating

**Custom format templating** extension allows users to create custom files in almost any shape or form. It works by defining a custom template and later calling it on export with the annotation data.

## Installation

**Custom format templating** extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:

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
      // Optional. Specifies resulting file content encoding. Default: "utf-8".
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
    // …
  ]
}
```

In the template definitions (`file_content_template` or `file_content_template_multiline`) you can reference any field from annotation object by using dot syntax (for example `{{field.document_id}}`).

It is also possible to access the annotation payload like so: `{{payload['document']['original_file_name']}}`. This way, you can create a link to the annotation directly in the template, for example: `https://example.rossum.app/document/{{payload['annotation']['id']}}`

:::warning

Maximum five export configs can be defined per annotation export.

:::

## Obtaining generated files

Outputs from the **Custom format templating** webhook are not available anywhere in the UI. Instead, they are stored as a "[document relation](https://elis.rossum.ai/api/docs/#document-relation)". To get the actual document content, you need to call two API endpoints. First, you need to get the relevant relation:

```bash
curl 'https://elis.rossum.ai/api/v1/document_relations?type=export&annotation=1234567&key=export_annotation_to_csv' \
--header 'Authorization: Bearer XYZ'
```

You can omit the `key` to get all available relations for given annotation. The response will look something like this:

```json
{
  "pagination": { "total": 1, "total_pages": 1, "next": null, "previous": null },
  "results": [
    {
      "id": 1234567,
      "type": "export",
      "key": "export_annotation_to_csv",
      "annotation": "https://elis.rossum.ai/api/v1/annotations/1234567",
      // highlight-start
      "documents": ["https://elis.rossum.ai/api/v1/documents/1234567"],
      // highlight-end
      "url": "https://elis.rossum.ai/api/v1/document_relations/1234567"
    }
  ]
}
```

To get the actual generated document content, you need to call the following API endpoint (see the highlighted document URL above):

```bash
curl 'https://elis.rossum.ai/api/v1/documents/1234567/content' \
--header 'Authorization: Bearer XYZ'
```

Note that you do not need to know these technical details. This extension is typically to be used in combination with [REST API Export extension](./rest-api-export.md) which knows how to work with it.

## Configuration examples

### Original document (base64)

```json
{
  "export_configs": [
    {
      "export_reference_key": "export_original_file",
      "file_content_template": "{{file.original_file|b64encode}}"
    }
  ]
}
```

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

Learn how to get the generated file in [Obtaining generated files](#obtaining-generated-files) section.

### Custom XML

Similarly to other formats, custom XML can be defined using the following template (notice the `|upper` and `|default` [filters](https://jinja.palletsprojects.com/en/stable/templates/#filters)):

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
        // highlight-start
        "      <AMOUNT_TOTAL_TAX>{{ field.amount_total_tax | default(0,true) }}</AMOUNT_TOTAL_TAX>",
        // highlight-end
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

### Custom TXT (The Tree)

This is example of the Jinja2 language capabilities. The following example is a small Jinja program that generates simple ASCII art representation of a tree. The tree height is a parameter which can be changed, see line 15 in the example config.

```json
{
  "export_configs": [
    {
      "export_reference_key": "export_tree_ascii_art",
      "content_encoding": "utf-8",
      "file_content_template_multiline": [
        "{%- macro draw_tree(height) -%}",
        "{%- set width = height * 2 - 1 %}",
        "{%- for level in range(1, height + 1) -%}",
        "{%- set padding = (width - (level * 2 - 1)) // 2 %}",
        "{{ ' ' * padding }}{{ '*' * (level * 2 - 1) }}{{ ' ' * padding }}",
        "{%- endfor %}",
        "{{ ' ' * ((width - 1) // 2) }}|{{ ' ' * ((width - 1) // 2) }}",
        "{%- endmacro %}",
        // highlight-start
        "{{ draw_tree(5) }}",
        // highlight-end
        ""
      ]
    }
  ]
}
```

Result is a generated TXT file representing a tree with crown height of 5 rows:

```text
    *
   ***
  *****
 *******
*********
    |
```
