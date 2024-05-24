---
title: 'Export configuration'
sidebar_position: 2
---

## PO-backed invoice

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.1"
      },
      "request": {
        "mapping": {
          "Add_Only": true,
          "Supplier_Invoice_Data": {
            "Memo": "@{memo}",
            "Submit": true,
            "Invoice_Date": "@{date_issue}",
            "Company_Reference": {
              "ID": [
                {
                  "type": "Organization_Reference_ID",
                  "_value_1": "@{entity_wd}"
                }
              ]
            },
            "Currency_Reference": {
              "ID": [
                {
                  "type": "Currency_ID",
                  "_value_1": "@{currency}"
                }
              ]
            },
            "External_PO_Number": "@{order_id}",
            "Supplier_Reference": {
              "ID": [
                {
                  "type": "Supplier_ID",
                  "_value_1": "@{supplier_wd}"
                }
              ]
            },
            "Control_Amount_Total": "@{amount_total}",
            "Suppliers_Invoice_Number": "@{document_id}",
            "Invoice_Line_Replacement_Data": {
              "$FOR_EACH_SCHEMA_ID$": {
                "mapping": {
                  "Quantity": "@{item_quantity}",
                  "Unit_Cost": "@{item_amount_base}",
                  "Line_Order": "10000001",
                  "Extended_Amount": "@{item_total_base}",
                  "Item_Description": "@{item_description}",
                  "Purchase_Order_Line_Reference": {
                    "ID": [
                      {
                        "type": "Line_Number",
                        "_value_1": "@{item_order_line_nr_wd}",
                        "parent_id": "@{item_document_number_po_wd}",
                        "parent_type": "Document_Number"
                      }
                    ]
                  }
                },
                "schema_id": "line_item"
              }
            },
            "Supplier_Connection_Reference": {
              "$IF_SCHEMA_ID$": {
                "mapping": {
                  "ID": [
                    {
                      "type": "Supplier_Connection_ID",
                      "_value_1": "@{account_num}"
                    }
                  ]
                },
                "schema_id": "account_num",
                "fallback_mapping": {}
              }
            },
            "Statutory_Invoice_Type_Reference": {
              "ID": [
                {
                  "type": "Invoice_Type_ID",
                  "_value_1": "@{invoice_type_wd}"
                }
              ]
            }
          }
        },
        "service": "Resource_Management",
        "operation": "Submit_Supplier_Invoice"
      }
    }
  ]
}
```

## Non-PO-backed invoices

```json
{
  "debug": true,
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.1"
      },
      "request": {
        "mapping": {
          "Add_Only": true,
          "Supplier_Invoice_Data": {
            "Memo": "@{memo}",
            "Submit": true,
            "Tax_Amount": {
              "$IF_SCHEMA_ID$": {
                "mapping": "@{amount_total_tax}",
                "schema_id": "amount_total_tax"
              }
            },
            "Invoice_Date": "@{date_issue}",
            "Company_Reference": {
              "ID": [
                {
                  "type": "Organization_Reference_ID",
                  "_value_1": "@{entity_wd}"
                }
              ]
            },
            "Currency_Reference": {
              "ID": [
                {
                  "type": "Currency_ID",
                  "_value_1": "@{currency}"
                }
              ]
            },
            "Supplier_Reference": {
              "ID": [
                {
                  "type": "Supplier_ID",
                  "_value_1": "@{supplier_wd}"
                }
              ]
            },
            "Control_Amount_Total": "@{amount_total}",
            "Suppliers_Invoice_Number": "@{document_id}",
            "Default_Tax_Option_Reference": {
              "$IF_SCHEMA_ID$": {
                "mapping": {
                  "ID": [
                    {
                      "type": "Tax_Option_ID",
                      "_value_1": "@{tax_option_id}"
                    }
                  ]
                },
                "schema_id": "tax_option_id",
                "fallback_mapping": {}
              }
            },
            "Invoice_Line_Replacement_Data": {
              "$FOR_EACH_SCHEMA_ID$": {
                "mapping": {
                  "Line_Order": "10000001",
                  "Extended_Amount": "@{item_total_base}",
                  "Item_Description": "@{item_description}",
                  "Worktags_Reference": [
                    {
                      "ID": [
                        {
                          "type": "Cost_Center_Reference_ID",
                          "_value_1": "@{item_cost_center_wd}"
                        }
                      ]
                    },
                    {
                      "$IF_SCHEMA_ID$": {
                        "mapping": {
                          "ID": [
                            {
                              "type": "Project_ID",
                              "_value_1": "@{item_project_wd}"
                            }
                          ]
                        },
                        "schema_id": "item_project_wd",
                        "fallback_mapping": {}
                      }
                    }
                  ],
                  "Purchase_Item_Reference": {
                    "ID": [
                      {
                        "type": "Purchase_Item_ID",
                        "_value_1": "@{item_purchase_item_wd}"
                      }
                    ]
                  },
                  "Tax_Applicability_Reference": {
                    "$IF_SCHEMA_ID$": {
                      "mapping": {
                        "ID": [
                          {
                            "type": "Tax_Applicability_ID",
                            "_value_1": "@{item_tax_applicability_id}"
                          }
                        ]
                      },
                      "schema_id": "item_tax_applicability_id",
                      "fallback_mapping": {}
                    }
                  }
                },
                "schema_id": "line_item"
              }
            },
            "Supplier_Connection_Reference": {
              "$IF_SCHEMA_ID$": {
                "mapping": {
                  "ID": [
                    {
                      "type": "Supplier_Connection_ID",
                      "_value_1": "@{account_num}"
                    }
                  ]
                },
                "schema_id": "account_num",
                "fallback_mapping": {}
              }
            },
            "Statutory_Invoice_Type_Reference": {
              "ID": [
                {
                  "type": "Invoice_Type_ID",
                  "_value_1": "@{invoice_type_wd}"
                }
              ]
            }
          }
        },
        "service": "Resource_Management",
        "operation": "Submit_Supplier_Invoice"
      }
    }
  ]
}
```
