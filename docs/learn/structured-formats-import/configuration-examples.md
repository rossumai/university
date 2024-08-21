---
title: 'Structured formats import: Configuration examples'
sidebar_label: 'Configuration examples'
sidebar_position: 2
---

# Configuration examples

## Generic XML import

:::warning[todo]

_How to + examples_

:::

## Generic JSON import

:::warning[todo]

_How to + examples_

:::

## XML: Document splitting

XML documents can be split into multiple documents using the `split_selectors` configuration:

```json
{
  "configurations": [
    {
      "trigger_condition": {
        "file_type": "xml"
      },
      // highlight-start
      "split_selectors": ["/RecordLabel/Productions/Production"],
      // highlight-end
      "fields": [
        {
          "schema_id": "document_id",
          "selectors": ["./Metadata/ID"]
        }
        // …
      ]
    }
  ]
}
```

The field selectors are then relative to the newly split document.

## XML: PEPPOL BIS Billing 3.0

Basic configuration (works with the default Rossum.ai schema for invoices) and the following PEPPOL BIS Billing 3.0 example: https://github.com/OpenPEPPOL/peppol-bis-invoice-3/blob/0f63848fc46fe4ab87d1860a18bfe381c41e01ff/rules/examples/base-example.xml

```json
{
  "configurations": [
    {
      "trigger_condition": {
        "file_type": "xml"
      },
      "fields": [
        {
          "schema_id": "document_id",
          "selectors": ["cbc:ID"]
        },
        {
          "schema_id": "order_id",
          "selectors": ["cbc:BuyerReference"]
        },
        {
          "schema_id": "date_issue",
          "selectors": ["cbc:IssueDate"]
        },
        {
          "schema_id": "date_due",
          "selectors": ["cbc:DueDate"]
        },
        {
          "schema_id": "currency",
          "selectors": ["cbc:DocumentCurrencyCode"]
        },
        {
          "schema_id": "amount_due",
          "selectors": ["cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount"]
        },
        {
          "schema_id": "amount_total_base",
          "selectors": ["cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount"]
        },
        {
          "schema_id": "amount_total_tax",
          "selectors": ["cac:TaxTotal/cbc:TaxAmount"]
        },
        {
          "schema_id": "sender_name",
          "selectors": ["cac:AccountingSupplierParty/cac:Party/cac:PartyName/cbc:Name"]
        },
        {
          "schema_id": "sender_address",
          "selectors": ["cac:AccountingSupplierParty/cac:Party/cac:PostalAddress/cbc:StreetName"]
        },
        {
          "schema_id": "recipient_name",
          "selectors": ["cac:AccountingCustomerParty/cac:Party/cac:PartyName/cbc:Name"]
        },
        {
          "schema_id": "recipient_address",
          "selectors": ["cac:AccountingCustomerParty/cac:Party/cac:PostalAddress/cbc:StreetName"]
        },
        {
          "schema_id": "terms",
          "selectors": ["cac:PaymentTerms/cbc:Note"]
        },
        {
          "fields": [
            {
              "schema_id": "item_quantity",
              "selectors": ["cbc:InvoicedQuantity"]
            },
            {
              "schema_id": "item_code",
              "selectors": ["cac:Item/cac:StandardItemIdentification/cbc:ID"]
            },
            {
              "schema_id": "item_description",
              "selectors": ["cac:Item/cbc:Description", "cac:Item/cbc:Name"]
            },
            {
              "schema_id": "item_amount",
              "selectors": ["cac:Price/cbc:PriceAmount"]
            }
          ],
          "schema_id": "line_items",
          "selectors": ["cac:InvoiceLine"]
        }
      ]
    }
  ]
}
```

## XML with base64 encoded PDF

It is common that the actual PDF file is embedded in the XML document in base64 encoded format. It can be used instead of rendering the default minimal PDF representation:

```json
{
  "configurations": [
    {
      "fields": [
        // …
      ],
      "trigger_condition": {
        "file_type": "xml"
      },
      // highlight-start
      "pdf_file": {
        "name_selectors": [
          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject/@filename"
        ],
        "content_selectors": [
          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject"
        ]
      }
      // highlight-end
    }
  ]
}
```
