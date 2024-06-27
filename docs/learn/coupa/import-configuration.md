---
title: 'Coupa: Import configurations'
sidebar_position: 1
sidebar_label: 'Import configurations'
---

# Import configurations (API)

## Currencies

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.accounting.read, core.business_entity.read, core.catalog.read, core.comment.read, core.common.read, core.expense.read, core.expense.secure.read, core.integration.read, core.inventory.adjustment.read, core.inventory.asn.read, core.inventory.balance.read, core.inventory.common.read, core.inventory.consumption.read, core.inventory.cycle_counts.read, core.inventory.pick_list.read, core.inventory.receiving.read, core.inventory.return_to_supplier.read, core.inventory.transaction.read, core.inventory.transfer.read, core.invoice.approval.bypass, core.invoice.assignment.read, core.invoice.create, core.invoice.delete, core.invoice.read, core.item.read, core.legal_entity.read, core.notifications_summary.read, core.object_translations.read, core.order_header_confirmations.read, core.order_pad.read, core.pay.charges.read, core.pay.payment_accounts.read, core.pay.payments.read, core.pay.statements.read, core.pay.virtual_cards.read, core.payables.allocations.read, core.payables.expense.read, core.payables.external.read, core.payables.invoice.read, core.payables.order.read, core.project.read, core.punchout_site.read, core.purchase_order_change.read, core.purchase_order.read, core.requisition.assignment.read, core.requisition.read, core.sourcing.pending_supplier.read, core.sourcing.read, core.sourcing.response.read, core.supplier_information_sites.read, core.supplier_information_tax_registrations.delete, core.supplier_information_tax_registrations.read, core.supplier_sharing_settings.read, core.supplier_sites.read, core.supplier.read, core.supplier.risk_aware.read, core.translation.read, core.uom.read, core.user_group.read, core.user.read"
  },
  "import_config": {
    "query": {
      "fields": ["id", "code", "decimals"]
    },
    "method": "replace",
    "endpoint": "api/currencies",
    "dataset_name": "dataset_currencies",
    "records_per_request": 50
  }
}
```

## Suppliers

```json
{
  "credentials": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.accounting.read, core.common.read, core.invoice.create, core.invoice.read, core.invoice.write, core.purchase_order.read, core.supplier.read"
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
    "dataset_name": "dataset_suppliers",
    "records_per_request": 50
  }
}
```

## Lookup values

```json
{
  "credentials": {
    "client_id": "...",
    "base_api_url": "....coupacloud.com/",
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
      "order_by": "created_at",
      "updated-at[gt_or_eq]": "${last_modified_date}"
    },
    "method": "update",
    "id_keys": ["id"],
    "endpoint": "api/lookup_values",
    "dataset_name": "lookup_values",
    "records_per_request": 50
  }
}
```

## Units of measure(ment)

```json
{
  "credentials": {
    "client_id": "...",
    "base_api_url": "...coupacloud.com/",
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
    "dataset_name": "uoms",
    "records_per_request": 50
  }
}
```
