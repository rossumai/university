---
title: 'Coupa: Import configuration'
sidebar_position: 2
sidebar_label: 'Import configuration'
---

import WebhookEndpoints from '../\_webhook_endpoints.md';

# Import configuration

## Setup

Create webhook as described in [Integration Setup](./integration-setup.md#configuring-rossum) and use the right link from the table below (according the Rossum environment of configured account)

### Import endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/scheduled-imports/api/coupa/v1/import"
  eu2="https://shared-eu2.rossum.app/svc/scheduled-imports/api/coupa/v1/import"
/>

## Configuration examples

### Account types

See: [Account Types API (/account_types)](https://compass.coupa.com/_dita_/en-us/documentation/plat/integ/coupa_core_api/topics/account_types_api_account_types.dita)

:::tip

Query attributes necessary for differential update are highlighted.

:::

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.accounting.read"
  },
  "import_config": {
    "query": {
      "fields": [
        "id",
        "created_at",
        "updated_at",
        "name",
        "active",
        "legal_entity_name",
        "dynamic_flag",
        {
          "currency": ["id", "code", "decimals"]
        },
        {
          "primary_contact": [
            "id",
            "created_at",
            "updated_at",
            "email",
            "name_prefix",
            "name_suffix",
            "name_additional",
            "name_given",
            "name_family",
            "name_fullname",
            "notes",
            "active",
            "purposes"
          ]
        },
        {
          "primary_address": [
            "id",
            "created_at",
            "updated_at",
            "name",
            "location_code",
            "street1",
            "street2",
            "street3",
            "street4",
            "city",
            "state",
            "postal_code",
            "attention",
            "active",
            "business_group_name",
            "vat_number",
            "local_tax_number",
            "type",
            {
              "country": ["id", "code", "name"]
            },
            {
              "vat_country": ["id", "code", "name"]
            }
          ]
        }
      ],
      // highlight-start
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
      // highlight-end
    },
    // highlight-start
    "method": "update",
    "id_keys": ["id"],
    // highlight-end
    "endpoint": "api/account_types",
    "dataset_name": "COUPA_DEV_account_types_v1",
    "records_per_request": 50
  }
}
```

### Currencies

See [Currencies API (/currencies)](<https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/currencies-api-(currencies)>)

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.common.read"
  },
  "import_config": {
    "query": {
      "fields": ["id", "code", "decimals"]
    },
    "method": "replace",
    "endpoint": "api/currencies",
    "dataset_name": "COUPA_DEV_currencies_v1",
    "records_per_request": 50
  }
}
```

### Invoices

See: [Invoices API (/invoices)](<https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/transactional-resources/invoices-api-(invoices)>)

:::tip

Query attributes necessary for differential update are highlighted.

:::

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "….coupacloud.com/",
    "client_scope": "core.invoice.read"
  },
  "import_config": {
    "query": {
      // highlight-start
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
      // highlight-end
    },
    // highlight-start
    "method": "update",
    "id_keys": ["id"],
    // highlight-end
    "endpoint": "api/invoices",
    "dataset_name": "COUPA_DEV_invoices_v1",
    "records_per_request": 50
  }
}
```

### Lookup values

See: [Lookup Values API (/lookup_values)](<https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/lookup-values-api-(lookup_values)>)

:::tip

Query attributes necessary for differential update are highlighted.

:::

For invoices that are not tied to a purchase order (non-PO-backed), Coupa requires default lookup values to ensure the correct categorization and processing of the invoice. These values help populate essential fields that would otherwise be filled by the purchase order, ensuring the invoice is successfully imported and can proceed through the approval and payment workflows without issues.

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "….coupacloud.com/",
    "client_scope": "core.common.read"
  },
  "import_config": {
    "query": {
      "fields": [
        "id",
        "name",
        "external-ref-num",
        "external-ref-code",
        "active",
        {
          "parent": [
            "id",
            "name",
            "active",
            {
              "custom_fields": {}
            },
            {
              "parent": [
                "id",
                "name",
                "active",
                {
                  "custom_fields": {}
                }
              ]
            }
          ]
        },
        {
          "lookup": ["id", "name", "active"]
        },
        {
          "custom_fields": {}
        }
      ],
      // highlight-start
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
      // highlight-end
    },
    // highlight-start
    "method": "update",
    "id_keys": ["id"],
    // highlight-end
    "endpoint": "api/lookup_values",
    "dataset_name": "COUPA_DEV_lookup_values_v1",
    "records_per_request": 50
  }
}
```

### Payment Terms

See: [Payment Terms API (/payment_terms)](<https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/payment-terms-api-(payment_terms)>)

:::tip

Query attributes necessary for differential update are highlighted.

:::

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.common.read"
  },
  "import_config": {
    "query": {
      // highlight-start
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
      // highlight-end
    },
    // highlight-start
    "method": "update",
    "id_keys": ["id"],
    // highlight-end
    "endpoint": "api/payment_terms",
    "dataset_name": "COUPA_DEV_payment_terms_v1",
    "records_per_request": 50
  }
}
```

### Purchase orders

With this import configuration, you will receive a final collection that includes all Purchase Orders (POs), along with an array of their corresponding PO line items nested within each order. This structure allows for easy access to both the POs and their specific line item details.

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.purchase_order.read"
  },
  "import_config": {
    "query": {
      "dir": "desc",
      "fields": [
        "id",
        "created_at",
        "updated_at",
        "po_number",
        "status",
        "version",
        "payment_method",
        "ship_to_attention",
        {
          "ship_to_address": [
            "id",
            "created_at",
            "updated_at",
            "name",
            "location_code",
            "street1",
            "street2",
            "street3",
            "street4",
            "city",
            "state",
            "postal_code",
            "attention",
            "active",
            "business_group_name",
            "vat_number",
            "local_tax_number",
            "type",
            {
              "country": ["id", "code", "name"]
            }
          ]
        },
        {
          "supplier": ["id", "name", "display_name", "number"]
        },
        {
          "order_lines": [
            "id",
            "created_at",
            "updated_at",
            "accounting_total",
            {
              "accounting_total_currency": ["id", "code", "decimals"]
            },
            {
              "custom_fields": ["start_date", "end_date", "payment_method"]
            },
            "description",
            "line_num",
            "order_header_id",
            "order_header_number",
            "price",
            "quantity",
            "source_part_num",
            "status",
            "sub_line_num",
            "total",
            "type",
            "version",
            "supplier_order_number",
            {
              "account": [
                "id",
                "created_at",
                "updated_at",
                "name",
                "code",
                "active",
                "account_type_id",
                "segment_1",
                "segment_2",
                "segment_3",
                "segment_4",
                "segment_5",
                "segment_6",
                "segment_7",
                "segment_8",
                "segment_9",
                "segment_10",
                "segment_11",
                "segment_12",
                "segment_13",
                "segment_14",
                "segment_15",
                "segment_16",
                "segment_17",
                "segment_18",
                "segment_19",
                "segment_20"
              ]
            },
            {
              "currency": ["id", "code", "decimals"]
            },
            {
              "supplier": ["id", "name", "display_name", "number"]
            },
            {
              "uom": [
                "id",
                "created_at",
                "updated_at",
                "code",
                "name",
                "allowable_precision",
                "active"
              ]
            }
          ]
        }
      ],
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
    },
    "method": "update",
    "id_keys": ["id"],
    "endpoint": "api/purchase_orders",
    "dataset_name": "COUPA_DEV_purchase_orders_v1",
    "records_per_request": 50
  }
}
```

### Purchase order - Line items

With this import configuration, you will receive a final collection that includes all PO line items, along with basic information about the associated Purchase Order for each line item.

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.purchase_order.read"
  },
  "import_config": {
    "query": {
      "dir": "desc",
      "fields": [
        "id",
        "created_at",
        "updated_at",
        "accounting_total",
        {
          "accounting_total_currency": ["id", "code", "decimals"]
        },
        {
          "custom_fields": ["start_date", "end_date", "payment_method"]
        },
        "description",
        "line_num",
        "order_header_id",
        "order_header_number",
        "price",
        "quantity",
        "source_part_num",
        "status",
        "sub_line_num",
        "total",
        "type",
        "version",
        "supplier_order_number",
        {
          "account": [
            "id",
            "created_at",
            "updated_at",
            "name",
            "code",
            "active",
            "account_type_id",
            "segment_1",
            "segment_2",
            "segment_3",
            "segment_4",
            "segment_5",
            "segment_6",
            "segment_7",
            "segment_8",
            "segment_9",
            "segment_10",
            "segment_11",
            "segment_12",
            "segment_13",
            "segment_14",
            "segment_15",
            "segment_16",
            "segment_17",
            "segment_18",
            "segment_19",
            "segment_20"
          ]
        },
        {
          "currency": ["id", "code", "decimals"]
        },
        {
          "supplier": ["id", "name", "display_name", "number"]
        },
        {
          "uom": ["id", "created_at", "updated_at", "code", "name", "allowable_precision", "active"]
        }
      ],
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
    },
    "method": "update",
    "id_keys": ["id"],
    "endpoint": "api/purchase_order_lines",
    "dataset_name": "COUPA_DEV_purchase_order_lines_v1",
    "records_per_request": 50
  }
}
```

### Suppliers

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.supplier.read"
  },
  "import_config": {
    "query": {
      "fields": [
        "id",
        "created_at",
        "updated_at",
        "name",
        "display_name",
        "number",
        "status",
        "po_email",
        "account_number",
        "tax_id",
        {
          "primary_contact": [
            "id",
            "created_at",
            "updated_at",
            "email",
            "name_prefix",
            "name_suffix",
            "name_additional",
            "name_given",
            "name_family",
            "name_fullname",
            "notes",
            "active",
            "purposes"
          ]
        },
        {
          "primary_address": [
            "id",
            "created_at",
            "updated_at",
            "name",
            "location_code",
            "street1",
            "street2",
            "street3",
            "street4",
            "city",
            "state",
            "postal_code",
            "attention",
            "active",
            "business_group_name",
            "vat_number",
            "local_tax_number",
            "type",
            {
              "country": ["id", "code", "name"]
            },
            {
              "vat_country": ["id", "code", "name"]
            }
          ]
        },
        {
          "remit_to_addresses": [
            "id",
            "created_at",
            "updated_at",
            "remit_to_code",
            "name",
            "street1",
            "street2",
            "street3",
            "street4",
            "city",
            "state",
            "postal_code",
            "active",
            "vat_number",
            "local_tax_number",
            "external_src_ref",
            "external_src_name",
            {
              "country": ["id", "code", "name"]
            }
          ]
        }
      ]
    },
    "method": "replace",
    "endpoint": "api/suppliers",
    "dataset_name": "COUPA_DEV_suppliers_v1",
    "records_per_request": 50
  }
}
```

### Supplier information

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.supplier.read"
  },
  "import_config": {
    "query": {
      "fields": [
        "id",
        "created_at",
        "updated_at",
        "supplier_id",
        "name",
        "display_name",
        "supplier_number",
        "status",
        "industry",
        "inco_terms",
        "minority_indicator",
        "minority_type_id",
        "tax_region",
        "tax_classification",
        "federal_tax_num",
        "social_security_number",
        "duns_number",
        "tax_exempt_other_explanation",
        "income_type",
        "fed_reportable",
        "intl_tax_num",
        "intl_tax_classification",
        "intl_other_explanation",
        "backend_system_invoicing",
        "backend_system_catalog",
        "supplier_region",
        "payment_terms_id",
        "payment_term_id",
        "govt_agency_interaction_indicator",
        "govt_agency_interaction",
        "organization_type",
        "policy_for_bribery_corruption_indicator",
        "policy_for_bribery_corruption",
        "govt_allegation_fraud_bribery_indicator",
        "govt_allegation_fraud_bribery",
        "third_party_interaction_indicator",
        "third_party_interaction",
        "goods_services_provided",
        "pay_group",
        "invoice_amount_limit",
        "hold_payment_indicator",
        "hold_payment",
        "separate_remit_to",
        "comment_source",
        "comment",
        "last_exported_at",
        "logo_file_name",
        "logo_content_type",
        "logo_file_size",
        "logo_updated_at",
        "website",
        "allow_cxml_invoicing",
        "hold_invoices_for_ap_review",
        "send_invoices_to_approvals",
        "allow_inv_no_backing_doc_from_connect",
        "allow_inv_unbacked_lines_from_connect",
        "commodity_id",
        "invoice_matching_level",
        "shipping_term_id",
        "tax_code_id",
        "savings_pct",
        "allow_inv_from_connect",
        "allow_inv_choose_billing_account",
        "invoice_inbound_emails",
        "default_invoice_email",
        "inbound_invoice_domain",
        "duplicate_exists",
        "estimated_spend_amount",
        "currency_id",
        "user_id",
        "one_time_supplier",
        "scope_three_emissions",
        "po_email",
        "po_method",
        "po_change_method",
        "buyer_hold",
        "cxml_url",
        "cxml_domain",
        "cxml_identity",
        "cxml_supplier_domain",
        "cxml_supplier_identity",
        "cxml_secret",
        "cxml_protocol",
        "cxml_ssl_version",
        "disable_cert_verify",
        {
          "custom_fields": [
            "primary_subsidiary",
            "subs_secondary",
            "vendor_region",
            "payment_file_format",
            "company_registration_number",
            "eligibility_1099",
            "critical_vs_not_critical_vendor",
            "permanent_account_number_pan",
            "msmeudyam_registration_number",
            "credit_card_vendor",
            "credit_card",
            "vendor_require_risk_questionnaire",
            "risk_review",
            "expedited_vendor",
            "msme_registration_certificate",
            "additional_currency",
            "payment_remittance_email",
            "wil_be_sued_for_po__backed_purchases"
          ]
        },
        {
          "supplier_information_addresses": [
            "intermediary_bank_name",
            "bank_address",
            "bank_city",
            "bank_state_region",
            "bank_postal_code",
            "name_on_bank_account",
            "bank_name",
            "bank_account_number",
            "bank_routing_number",
            "wire_routing_number",
            "international_bank_account_number",
            "iban_number",
            "sort_code",
            "swift_code",
            "bsb_number",
            "bic",
            "bank_code",
            "ifsc",
            "transit_number_and_institution_number",
            "bic_routing_code",
            "payment_method_item",
            "active",
            "csp_rta_id",
            "email",
            "virtual_card_email"
          ]
        }
      ],
      "updated-at[gt_or_eq]": "${last_modified_date}"
    },
    "method": "update",
    "id_keys": ["id"],
    "endpoint": "api/supplier_information",
    "dataset_name": "COUPA_DEV_supplier_information_v1",
    "records_per_request": 50
  }
}
```

### Tax Codes

See: [Tax Code API](<https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/tax-registrations-api-(tax_registrations)/tax-code-api>)

:::tip

Query attributes necessary for differential update are highlighted.

:::

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.common.read"
  },
  "import_config": {
    "query": {
      // highlight-start
      "updated-at[gt_or_eq]": "${last_modified_date}"
      // highlight-end
    },
    // highlight-start
    "method": "update",
    "id_keys": ["id"],
    // highlight-end
    "endpoint": "api/tax_codes",
    "dataset_name": "tax_codes",
    "records_per_request": 50
  }
}
```

### Tax Registrations

See: [Tax Registrations API (/tax_registrations)](<https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/tax-registrations-api-(tax_registrations)>)

:::tip

Query attributes necessary for differential update are highlighted.

:::

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.invoice.read"
  },
  "import_config": {
    "query": {
      "fields": [
        "id",
        "created_at",
        "updated_at",
        "number",
        "owner-id",
        "owner-type",
        "active",
        "local",
        {
          "country": ["id", "code", "name"]
        }
      ],
      // highlight-start
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
      // highlight-end
    },
    // highlight-start
    "method": "update",
    "id_keys": ["id"],
    // highlight-end
    "endpoint": "api/tax_registrations",
    "dataset_name": "COUPA_DEV_tax_registrations_v1",
    "records_per_request": 50
  }
}
```

### Units of measurement

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "….coupacloud.com/",
    "client_scope": "core.common.read"
  },
  "import_config": {
    "query": {
      "fields": [
        "id",
        "name",
        "code",
        "allowable-precession",
        "active",
        "updated-at",
        "created-at"
      ],
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
    },
    "method": "update",
    "id_keys": ["id"],
    "endpoint": "api/uoms",
    "dataset_name": "COUPA_DEV_uoms_v1",
    "records_per_request": 50
  }
}
```
