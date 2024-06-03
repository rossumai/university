---
title: 'Coupa: Export configurations'
sidebar_position: 2
sidebar_label: 'Export configurations'
---

# Export configurations (API)

## Invoice

```json
{
  "connection_info": {
    "client_id": "…",
    "base_api_url": "…",
    "client_scope": "core.accounting.read, core.accounting.write, core.approval.configuration.read, core.approval.configuration.write, core.approval.read, core.approval.write, core.budget.read, core.budget.write, core.business_entity.read, core.business_entity.write, core.catalog.read, core.catalog.write, core.comment.read, core.comment.write, core.common.read, core.common.write, core.contract.read, core.contract.write, core.contracts_template.read, core.contracts_template.write, core.easy_form_response.approval.write, core.easy_form_response.read, core.easy_form_response.write, core.easy_form.read, core.easy_form.write, core.expense.read, core.expense.secure.read, core.expense.secure.write, core.expense.write, core.financial_counterparty.read, core.financial_counterparty.write, core.global_navigation.read, core.integration.read, core.integration.write, core.inventory.adjustment.read, core.inventory.adjustment.write, core.inventory.asn.read, core.inventory.asn.write, core.inventory.balance.read, core.inventory.common.read, core.inventory.common.write, core.inventory.consumption.read, core.inventory.consumption.write, core.inventory.cycle_counts.read, core.inventory.cycle_counts.write, core.inventory.pick_list.read, core.inventory.pick_list.write, core.inventory.receiving.read, core.inventory.receiving.write, core.inventory.return_to_supplier.read, core.inventory.return_to_supplier.write, core.inventory.transaction.read, core.inventory.transfer.read, core.inventory.transfer.write, core.invoice.approval.bypass, core.invoice.approval.write, core.invoice.assignment.read, core.invoice.assignment.write, core.invoice.create, core.invoice.delete, core.invoice.read, core.invoice.write, core.item.read, core.item.write, core.legal_entity.read, core.legal_entity.write, core.notifications_summary.read, core.notifications_summary.write, core.object_translations.read, core.object_translations.write, core.order_header_confirmations.read, core.order_header_confirmations.write, core.order_pad.read, core.order_pad.write, core.pay.charges.read, core.pay.charges.write, core.pay.payment_accounts.read, core.pay.payments.read, core.pay.payments.write, core.pay.statements.read, core.pay.statements.write, core.pay.virtual_cards.read, core.pay.virtual_cards.write, core.payables.allocations.read, core.payables.allocations.write, core.payables.expense.read, core.payables.expense.write, core.payables.external.read, core.payables.external.write, core.payables.invoice.read, core.payables.invoice.write, core.payables.order.read, core.payables.order.write, core.project.read, core.project.write, core.punchout_site.read, core.punchout_site.write, core.purchase_order_change.read, core.purchase_order_change.write, core.purchase_order.read, core.purchase_order.write, core.requisition.assignment.read, core.requisition.assignment.write, core.requisition.read, core.requisition.write, core.sourcing.pending_supplier.read, core.sourcing.pending_supplier.write, core.sourcing.read, core.sourcing.response.award.write, core.sourcing.response.read, core.sourcing.response.write, core.sourcing.write, core.supplier_information_sites.read, core.supplier_information_sites.write, core.supplier_information_tax_registrations.delete, core.supplier_information_tax_registrations.read, core.supplier_information_tax_registrations.write, core.supplier_sharing_settings.read, core.supplier_sharing_settings.write, core.supplier_sites.read, core.supplier_sites.write, core.supplier.read, core.supplier.risk_aware.read, core.supplier.risk_aware.write, core.supplier.write, core.translation.read, core.translation.write, core.uom.read, core.uom.write, core.user_group.read, core.user_group.write, core.user_recent_activity.read, core.user.read, core.user.write, email, login, offline_access, openid, profile"
  },
  "payload_template": {
    "status": "draft",
    "currency": {
      "code": "@{currency}"
    },
    "supplier": {
      "number": "@{supplier_number_master}"
    },
    "tax-lines": {
      "$IF_SCHEMA_ID$": {
        "mapping": {
          "tax-line": [
            {
              "type": "TaxLine",
              "amount": "@{amount_total_tax}"
            }
          ]
        },
        "schema_id": "amount_total_tax"
      }
    },
    "gross-total": "@{amount_total_calc}",
    "invoice-date": "@{date_issue}",
    "requested-by": {
      "login": "testuser"
    },
    "invoice-lines": {
      "$FOR_EACH_SCHEMA_ID$": {
        "mapping": {
          "uom": {
            "code": "@{item_uom}"
          },
          "type": "InvoiceQuantityLine",
          "price": {
            "$DATAPOINT_VALUE$": {
              "schema_id": "item_amount"
            }
          },
          "total": {
            "$DATAPOINT_VALUE$": {
              "schema_id": "item_amount_total_calc"
            }
          },
          "currency": {
            "code": "@{currency}"
          },
          "line-num": 1,
          "quantity": {
            "$DATAPOINT_VALUE$": {
              "schema_id": "item_quantity_calc"
            }
          },
          "po-number": "",
          "tax-lines": {
            "$IF_SCHEMA_ID$": {
              "mapping": {
                "tax-line": [
                  {
                    "type": "TaxLine",
                    "amount": "@{item_tax}"
                  }
                ]
              },
              "schema_id": "item_rate"
            }
          },
          "description": {
            "$DATAPOINT_VALUE$": {
              "schema_id": "item_description"
            }
          },
          "order-line-num": "",
          "accounting-total": 1,
          "order-header-num": ""
        },
        "schema_id": "line_item",
        "fallback_mapping": [
          {
            "uom": {
              "code": "EA"
            },
            "type": "InvoiceQuantityLine",
            "price": 1,
            "total": 1,
            "account": {
              "code": "SF-Marketing-Indirect"
            },
            "currency": {
              "code": "@{currency}"
            },
            "line-num": 1,
            "quantity": "1",
            "po-number": "1234",
            "description": "PO fallback line item",
            "order-line-num": "",
            "accounting-total": 4,
            "order-header-num": ""
          }
        ]
      }
    },
    "invoice-number": "@{document_id}",
    "requester-email": "testing@email.com",
    "ship-to-address": {
      "location-code": "CODETEST1"
    },
    "total-with-taxes": "@{amount_total_calc}",
    "line-level-taxation": "false"
  },
  "return_debug_json": true
}
```
