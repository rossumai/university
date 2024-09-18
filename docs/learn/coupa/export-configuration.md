---
title: 'Coupa: Export configuration'
sidebar_position: 3
sidebar_label: 'Export configuration'
---

import WebhookEndpoints from '../\_webhook_endpoints.md';

# Export configuration

## Setup

Create webhook as described in [Integration Setup](./integration-setup.md#configuring-rossum) and use the right link from the table below (according the Rossum environment of configured account)

### Export endpoints

Coupa exports use [Custom format templating](../export-pipeline/custom-format-templating.md) from [Export pipelines](../export-pipeline/index.md) and therefore doesn't have any Coupa-specific URL. Instead, use the [Custom format templating](../export-pipeline/custom-format-templating.md) URLs from the table below:

<WebhookEndpoints
  eu1="https://elis.custom-format-templating.rossum-ext.app/"
  eu2="https://shared-eu2.custom-format-templating.rossum-ext.app/"
  us="https://us.custom-format-templating.rossum-ext.app/"
  jp="https://shared-jp.custom-format-templating.rossum-ext.app/"
/>

This template then must be sent to the Coupa REST API which can be achieved using the [REST API export](../export-pipeline/rest-api-export.md) extension (also part of the generic "Export pipelines" mechanism):

<WebhookEndpoints
  eu1="https://elis.rest-api-export.rossum-ext.app/"
  eu2="https://shared-eu2.rest-api-export.rossum-ext.app/"
  us="https://us.rest-api-export.rossum-ext.app/"
  jp="https://shared-jp.rest-api-export.rossum-ext.app/"
/>

Optional secrets schema configuration:

```json
{
  "type": "object",
  "properties": {
    "client_secret": {
      "type": "string",
      "minLength": 1,
      "description": "API OAuth Client secret"
    }
  },
  "additionalProperties": false
}
```

## Configuration examples

### Invoice & Credit Note

```json
{
  "export_configs": [
    {
      "content_encoding": "utf-8",
      "export_reference_key": "coupa_invoice_draft",
      "file_content_template_multiline": [
        "{",
        "  \"currency\": {",
        "   \"code\":\"{{ field.currency }}\"",
        "  },",
        "  \"supplier\": {",
        "   \"number\":\"{{ field.sender_match }}\"",
        "  },",
        "  {% if field.document_type == \"credit_note\" %}",
        "  \"document-type\": \"Credit Note\",",
        "  {% else %}",
        "  \"document-type\": \"Invoice\",",
        "  {% endif %}",
        "  \"taggings\": [",
        "   {",
        "     \"tag\": {",
        "       \"name\":\"{{ field.rossum_tag }}\"",
        "     }",
        "   }",
        "  ],",
        "  \"gross-total\": \"{{ field.amount_total | default(0,true) }}\",",
        "  \"account-type\": {",
        "   \"id\":\"{{ field.recipient_export }}\"",
        "  },",
        "  \"invoice-date\": \"{{ field.date_issue }}\",",
        "  \"invoice-number\": \"{{ field.document_id_manual }}\",",
        "  {% if field.payment_terms_match != \"\" %}",
        "     \"payment-term\": {",
        "       \"id\":\"{{ field.payment_terms_match }}\"",
        "     },",
        "  {% endif %}",
        "  \"total-with-taxes\": \"{{ field.amount_total | default(0,true) }}\",",
        "  \"line-level-taxation\": true,",
        "  \"original-invoice-date\": \"{{ field.original_date_issue }}\",",
        "  \"original-invoice-number\": \"{{ field.original_document_id }}\",",
        "  {% if field.document_type == \"credit_note\" %}",
        "   \"is-credit-note\": \"true\",",
        "  {% else %}",
        "   \"is-credit-note\": \"false\",",
        "  {% endif %}",
        "  \"invoice-lines\": [",
        "  {% for item in field.line_items %}{",
        "   \"uom\": {",
        "     \"code\":\"{{ item.item_uom_export }}\"",
        "   },",
        "   \"price\": {{ item.item_price_export | default(0,true) }},",
        "   \"currency\": {",
        "     \"code\":\"{{ field.currency }}\"",
        "   },",
        "   \"type\": \"InvoiceQuantityLine\",",
        "   \"quantity\": \"{{ item.item_quantity_export }}\",",
        "   \"po-number\": \"{{ item.item_order_id_calculated }}\",",
        "   \"description\": \"{{ item.item_description|e | replace('\n',' ') }}\",",
        "   \"order-line-num\": \"{{ item.item_po_line_number_match }}\",",
        "   \"order-header-num\": \"{{ item.item_order_id_calculated }}\",",
        "   \"tax-lines\": {",
        "     \"tax-line\": {",
        "       \"type\":\"TaxLine\",",
        "       {% if item.item_tax_code_match != \"\" %}",
        "         \"tax-code\": {",
        "           \"id\":\"{{ item.item_tax_code_match }}\"",
        "         },",
        "       {% endif %}",
        "       \"amount\":\"{{ item.item_tax_calculated }}\",",
        "       \"rate\":\"{{ item.item_rate_calculated }}\"",
        "     }",
        "   }",
        "  }{% if not loop.last %},{% endif %}",
        "  {% else %}",
        "  {",
        "   \"uom\": {",
        "     \"code\":\"{{ field.uom_export }}\"",
        "   },",
        "   \"price\": {{ field.price_export | default(0,true) }},",
        "   \"currency\": {",
        "     \"code\":\"{{ field.currency }}\"",
        "   },",
        "   \"type\": \"InvoiceQuantityLine\",",
        "   \"quantity\": \"{{ field.quantity_export }}\",",
        "   \"po-number\": \"{{ field.order_id_calculated }}\",",
        "   \"description\": \"{{ field.description_export|e | replace('\n',' ') }}\",",
        "   \"order-line-num\": \"{{ field.po_line_number_match }}\",",
        "   \"order-header-num\": \"{{ field.order_id_calculated }}\",",
        "   \"tax-lines\": {",
        "     \"tax-line\": {",
        "       \"type\":\"TaxLine\",",
        "       {% if field.tax_code_match != \"\" %}",
        "         \"tax-code\": {",
        "           \"id\":\"{{ field.item_tax_code_match }}\"",
        "         },",
        "       {% endif %}",
        "       \"amount\":\"{{ field.amount_total_tax_calculated }}\",",
        "       \"rate\":\"{{ field.tax_rate_calculated }}\"",
        "     }",
        "   }",
        "   }",
        "  {% endfor %}]",
        "}"
      ]
    }
  ]
}
```
