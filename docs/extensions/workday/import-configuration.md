---
title: 'Import configuration'
sidebar_position: 1
---

All the necessary import configurations can be part of one large config:

```json
{
  "configurations": [
    {
      "ds_collection_name": "workday_suppliers"
      // …
    },
    {
      "ds_collection_name": "workday_purchase_orders"
      // …
    },
    {
      "ds_collection_name": "workday_tax_applicability"
      // …
    }
    // …
  ]
}
```

For better readability, the following section contains individual configurations (alphabetically sorted).

## Cost Centers

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {},
        "service": "Financial_Management",
        "operation": "Get_Cost_Centers",
        "replication": {
          "id_key_name": "Organization_Data.ID",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Cost_Center[].Cost_Center_Data"
      },
      "ds_collection_name": "workday_cost_center"
    }
  ]
}
```

## Entities

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {},
        "service": "Financial_Management",
        "operation": "Get_Company_Organizations",
        "replication": {
          "id_key_name": "Organization_Data.ID",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Company_Organization[].Company_Organization_Data[]"
      },
      "ds_collection_name": "workday_entity"
    }
  ]
}
```

## Invoice Types

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {},
        "service": "Resource_Management",
        "operation": "Get_Invoice_Types"
      },
      "response": {
        "extraction_jmespath": "Invoice_Type[].Invoice_Type_Data[]"
      },
      "ds_collection_name": "workday_invoice_type"
    }
  ]
}
```

## Projects

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {},
        "service": "Resource_Management",
        "operation": "Get_Projects",
        "replication": {
          "id_key_name": "Workday_Project_ID",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Project[].Project_Data "
      },
      "ds_collection_name": "workday_project"
    }
  ]
}
```

## Purchase Items

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {
          "Request_Criteria": {
            "Item_Updated_To": "{current_datetime}",
            "Item_Updated_From": "{last_successful_import}"
          }
        },
        "service": "Resource_Management",
        "operation": "Get_Purchase_Items",
        "replication": {
          "id_key_name": "Purchase_Item_ID",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Purchase_Item[].Purchase_Item_Data"
      },
      "ds_collection_name": "workday_purchase_item"
    }
  ]
}
```

## Purchase Orders

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {
          "Response_Group": {
            "Include_Attachment_Data": false
          },
          "Request_Criteria": {
            "Updated_To_Date": "{current_datetime}",
            "Updated_From_Date": "{last_successful_import}"
          }
        },
        "service": "Resource_Management",
        "operation": "Get_Purchase_Orders",
        "replication": {
          "id_key_name": "Document_Number",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Purchase_Order[].Purchase_Order_Data[]"
      },
      "ds_collection_name": "workday_purchase_order"
    }
  ]
}
```

## Suppliers

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {
          "Response_Group": {
            "Include_Attachment_Data": false
          },
          "Request_Criteria": {
            "Updated_To_Date": "{current_datetime}",
            "Updated_From_Date": "{last_successful_import}"
          }
        },
        "service": "Resource_Management",
        "operation": "Get_Suppliers",
        "replication": {
          "id_key_name": "Supplier_ID",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Supplier[].Supplier_Data"
      },
      "ds_collection_name": "workday_suppliers"
    }
  ]
}
```

## Tax Applicability

```json
{
  "configurations": [
    {
      "wsdl": {
        "domain": "wd3-impl-services1.workday.com",
        "tenant": "…",
        "api_version": "v39.2"
      },
      "request": {
        "payload": {},
        "service": "Financial_Management",
        "operation": "Get_Tax_Applicabilities",
        "replication": {
          "id_key_name": "Tax_Applicability_ID",
          "differential_replication": true
        }
      },
      "response": {
        "extraction_jmespath": "Tax_Applicability[].Tax_Applicability_Data"
      },
      "ds_collection_name": "workday_tax_applicability"
    }
  ]
}
```
