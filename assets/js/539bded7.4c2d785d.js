"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[9632],{101:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>o});var i=t(4848),s=t(8453);const o=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(n.admonition,{title:"Work in progress",type:"warning",children:[(0,i.jsxs)(n.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]}),e.issue?(0,i.jsxs)(n.p,{children:["Tracking issue: ",(0,i.jsx)(n.a,{href:e.issue,children:e.issue})]}):""]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/netsuite/export-configuration","title":"NetSuite: Export configuration","description":"This page showcases the most common configurations. The final configuration depends heavily on the NetSuite instance configuration and might need to be adjusted as needed.","source":"@site/docs/learn/netsuite/export-configuration.md","sourceDirName":"learn/netsuite","slug":"/learn/netsuite/export-configuration","permalink":"/docs/learn/netsuite/export-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/netsuite/export-configuration.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"NetSuite: Export configuration","sidebar_position":3,"sidebar_label":"Export configuration"},"sidebar":"learnSidebar","previous":{"title":"Import configuration","permalink":"/docs/learn/netsuite/import-configuration"},"next":{"title":"Considerations & Limitations","permalink":"/docs/learn/netsuite/considerations"}}');var s=t(4848),o=t(8453),r=t(101);const l={title:"NetSuite: Export configuration",sidebar_position:3,sidebar_label:"Export configuration"},d="Export configuration",a={},c=[{value:"Customer Payment",id:"customer-payment",level:2},{value:"Vendor Bills (Invoices)",id:"vendor-bills-invoices",level:2},{value:"Linking Vendor Bills with Purchase Orders",id:"linking-vendor-bills-with-purchase-orders",level:3},{value:"Conditional configuration using <code>$DATAPOINT_MAPPING$</code>",id:"conditional-configuration-using-datapoint_mapping",level:3},{value:"Working with custom fields",id:"working-with-custom-fields",level:3},{value:"Using NetSuite File Cabinet (<code>pipeline_context</code>)",id:"using-netsuite-file-cabinet-pipeline_context",level:3},{value:"Vendor Credits (credit notes)",id:"vendor-credits-credit-notes",level:2},...r.RM,{value:"Linking Vendor Credits with Vendor Bills",id:"linking-vendor-credits-with-vendor-bills",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"export-configuration",children:"Export configuration"})}),"\n",(0,s.jsx)(n.p,{children:"This page showcases the most common configurations. The final configuration depends heavily on the NetSuite instance configuration and might need to be adjusted as needed."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["When building the configuration, consult the ",(0,s.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3478008.html#Web-Services-Standard-Operations",children:"methods documentation"})," and ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2022_2/script/record/vendor.html",children:"schema browser"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"customer-payment",children:"Customer Payment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": false,\n  "export_configs": [\n    {\n      "payload": [\n        {\n          "method_args": [\n            {\n              "_ns_type": "CustomerPayment",\n              "arAcct": {\n                "type": "account",\n                "_ns_type": "RecordRef",\n                "internalId": 123\n              },\n              "account": {\n                "type": "account",\n                "_ns_type": "RecordRef",\n                "internalId": "@{ns_account}"\n              },\n              "payment": "@{amount_due}",\n              "customer": {\n                "type": "customer",\n                "_ns_type": "RecordRef",\n                "internalId": "@{sender_match}"\n              },\n              "tranDate": {\n                "$IF_SCHEMA_ID$": {\n                  "mapping": {\n                    "$DATAPOINT_VALUE$": {\n                      "schema_id": "date_issue",\n                      "value_type": "iso_datetime"\n                    }\n                  },\n                  "schema_id": "date_issue"\n                }\n              },\n              "applyList": {\n                "apply": {\n                  "$FOR_EACH_SCHEMA_ID$": {\n                    "mapping": {\n                      "doc": "@{ns_item_internal_id}",\n                      "due": "@{item_amount_to_apply}",\n                      "apply": true,\n                      "total": "@{item_amount_to_apply}",\n                      "amount": "@{item_amount_to_apply}",\n                      "refNum": "@{item_invoice_number}",\n                      "_ns_type": "CustomerPaymentApply"\n                    },\n                    "schema_id": "line_item"\n                  }\n                },\n                "_ns_type": "CustomerPaymentApplyList"\n              },\n              "undepFunds": false,\n              "paymentOption": {\n                "type": "paymentMethod",\n                "_ns_type": "RecordRef",\n                "internalId": "@{ns_payment_option}"\n              }\n            }\n          ],\n          "method_name": "add"\n        }\n      ]\n    }\n  ],\n  "netsuite_settings": {\n    "account": "XXX_SB1",\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "concurrency_limit": 4,\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"vendor-bills-invoices",children:"Vendor Bills (Invoices)"}),"\n",(0,s.jsx)(n.p,{children:"The following shows a Vendor Bill export that (perhaps with some small tweaks) should work for most of the cases."}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.a,{href:"../rossum-formulas/formula-fields#generate-netsuite-external-ids",children:"Rossum Formulas"})," page to learn how to create external NetSuite IDs."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": false,\n  "netsuite_settings": {\n    "account": "XXX_SB1", // Case sensitive!\n    "concurrency_limit": 4,\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  },\n  "export_configs": [\n    {\n      "payload": {\n        "method_name": "upsert",\n        "method_args": [\n          {\n            "_ns_type": "VendorBill",\n            "approvalStatus": {\n              "_ns_type": "RecordRef",\n              "internalId": "2" // 1 = Pending, 2 = Approved\n            },\n            "class": {\n              "type": "classification",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_class_match}"\n            },\n            "customForm": {\n              "type": "customRecord",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_customForm}"\n            },\n            "currency": {\n              "type": "currency",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_currency_match}"\n            },\n            "department": {\n              "type": "department",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_department_match}"\n            },\n            "dueDate": {\n              "$IF_SCHEMA_ID$": {\n                "schema_id": "date_due",\n                "mapping": {\n                  "$DATAPOINT_VALUE$": {\n                    "schema_id": "date_due",\n                    "value_type": "iso_datetime"\n                  }\n                }\n              }\n            },\n            "entity": {\n              "type": "vendor",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_vendor_match}"\n            },\n            "externalId": "@{ns_externalId}",\n            "subsidiary": {\n              "type": "subsidiary",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_subsidiary_match}"\n            },\n            "tranId": "@{document_id_normalized}",\n            "tranDate": {\n              "$IF_SCHEMA_ID$": {\n                "schema_id": "date_issue",\n                "mapping": {\n                  "$DATAPOINT_VALUE$": {\n                    "schema_id": "date_issue",\n                    "value_type": "iso_datetime"\n                  }\n                }\n              }\n            },\n            "itemList": {\n              "_ns_type": "VendorBillItemList",\n              "item": {\n                "$FOR_EACH_SCHEMA_ID$": {\n                  "schema_id": "line_item",\n                  "mapping": {\n                    "_ns_type": "VendorBillItem",\n                    "description": "@{item_description}",\n                    "item": {\n                      "type": "inventoryItem",\n                      "_ns_type": "RecordRef",\n                      "internalId": "@{item_ns_item_match}"\n                    },\n                    "rate": "@{item_amount_base}",\n                    "location": {\n                      "type": "location",\n                      "_ns_type": "RecordRef",\n                      "internalId": "@{item_ns_location_match}"\n                    },\n                    "quantity": "@{item_quantity}",\n                    "taxCode": {\n                      "type": "taxType",\n                      "_ns_type": "RecordRef",\n                      "internalId": "@{item_po_item_taxCode_match}"\n                    }\n                  }\n                }\n              }\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"linking-vendor-bills-with-purchase-orders",children:"Linking Vendor Bills with Purchase Orders"}),"\n",(0,s.jsxs)(n.p,{children:["To connect Vendor Bills with Purchase Orders, it is necessary to set both ",(0,s.jsx)(n.code,{children:"orderDoc"})," and ",(0,s.jsx)(n.code,{children:"orderLine"})," on line-items level (showing only relevant parts of the export config):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "payload": {\n        "method_name": "upsert",\n        "method_args": [\n          {\n            "tranId": "@{document_id}",\n            "itemList": {\n              "_ns_type": "VendorBillItemList",\n              "item": {\n                "$FOR_EACH_SCHEMA_ID$": {\n                  "schema_id": "line_item",\n                  "mapping": {\n                    // \u2026\n                    "_ns_type": "VendorBillItem",\n                    // highlight-start\n                    "orderDoc": "@{item_po_match}", // PO internal ID\n                    "orderLine": "@{item_po_item_line_match}" // Relevant line-item number from PO (itemList.item.line)\n                    // highlight-end\n                    // \u2026\n                  }\n                }\n              }\n            }\n            // \u2026\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that the combination of Purchase Order and line item no. can appear only once in the payload. In case it appears twice on the invoice then it's necessary to group the line items before exporting."}),"\n",(0,s.jsxs)(n.h3,{id:"conditional-configuration-using-datapoint_mapping",children:["Conditional configuration using ",(0,s.jsx)(n.code,{children:"$DATAPOINT_MAPPING$"})]}),"\n",(0,s.jsx)(n.p,{children:"You can leverage JSON Templating to introduce conditions into the configuration. For example, in this example, we are changing document (NS) type based on the detected document type:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": {\n    // highlight-start\n    "$DATAPOINT_MAPPING$": {\n      // highlight-end\n      "schema_id": "document_type",\n      "mapping": {\n        "tax_credit": "VendorCredit",\n        "tax_invoice": "VendorBill"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Similarly, for line items and so on:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": {\n    // highlight-start\n    "$DATAPOINT_MAPPING$": {\n      // highlight-end\n      "schema_id": "document_type",\n      "mapping": {\n        "tax_credit": "VendorCreditItemList",\n        "tax_invoice": "VendorBillItemList"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Consider implementing this ",(0,s.jsx)(n.code,{children:"$DATAPOINT_MAPPING$"})," condition higher in the configuration tree and duplicating the whole sections to avoid too complex conditional configurations."]}),"\n",(0,s.jsx)(n.h3,{id:"working-with-custom-fields",children:"Working with custom fields"}),"\n",(0,s.jsxs)(n.p,{children:["Custom fields on header level are usually prefixed by ",(0,s.jsx)(n.code,{children:"custbody_"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "customFieldList": {\n    "_ns_type": "CustomFieldList",\n    "customField": [\n      {\n        "value": "@{amount_total}",\n        "_ns_type": "StringCustomFieldRef",\n        "scriptId": "custbody_captured_total_amount"\n      }\n      // \u2026\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Custom fields can also be added conditionally using special ",(0,s.jsx)(n.code,{children:"$IF_SCHEMA_ID$"})," syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "customFieldList": {\n    "_ns_type": "CustomFieldList",\n    "customField": [\n      {\n        "$IF_SCHEMA_ID$": {\n          "mapping": {\n            "value": "@{amount_total}",\n            "_ns_type": "StringCustomFieldRef",\n            "scriptId": "custbody_captured_total_amount"\n          },\n          "schema_id": "amount_total"\n        }\n      }\n      // \u2026\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Line item custom fields are usually prefixed by ",(0,s.jsx)(n.code,{children:"custcol_"}),". They also must be nested in the item list:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "itemList": {\n    "item": {\n      "customFieldList": {\n        "_ns_type": "CustomFieldList",\n        "customField": [\n          {\n            "value": "@{ns_custcol_some_field}",\n            "_ns_type": "StringCustomFieldRef",\n            "scriptId": "custcol_some_field"\n          }\n          // \u2026\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Custom fields are represented by the type ",(0,s.jsx)(n.code,{children:"CustomFieldRef"}),", which is an abstract type. The table below contains a list of concrete custom field types that extend the ",(0,s.jsx)(n.code,{children:"CustomFieldRef"})," type:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"JSON Mapping Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Custom Field Type in UI"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"LongCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Integer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"DoubleCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Decimal Number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"BooleanCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Check Box"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"StringCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Free-Form Text, Text Area, Phone Number, E-mail Address, Hyperlink, Rich Text"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"DateCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Date, Time of Day, or Date/Time (both in one field)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SelectCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"List/Record, Document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"MultiSelectCustomFieldRef"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Multiple Select"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, please visit: ",(0,s.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3458179.html",children:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3458179.html"})]}),"\n",(0,s.jsxs)(n.h3,{id:"using-netsuite-file-cabinet-pipeline_context",children:["Using NetSuite File Cabinet (",(0,s.jsx)(n.code,{children:"pipeline_context"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["You can reference earlier export stages by accessing ",(0,s.jsx)(n.code,{children:"pipeline_context"})," variable. In the following example, we use ",(0,s.jsx)(n.code,{children:"pipeline_context"})," for attaching file uploaded to the NetSuite File Cabinet. Note that the configuration uses ",(0,s.jsx)(n.code,{children:"original_file_name"})," variable from the ",(0,s.jsxs)(n.a,{href:"/docs/learn/rossum-formulas/serverless-functions#get-document-information",children:[(0,s.jsx)(n.code,{children:"Get document information"})," serverless function"]}),"."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)(n.code,{children:"original_file_name"})," serverless function"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'from txscript import TxScript\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    # Original file name:\n    t.field.original_file_name = payload.get("document").get("original_file_name")\n\n    return t.hook_response()\n'})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "payload": [\n        {\n          // \u2026 upsert VendorBill here as usual\n        },\n        {\n          "method_name": "add",\n          "method_args": [\n            {\n              "name": "@{original_file_name}",\n              "folder": {\n                "type": "folder",\n                "_ns_type": "RecordRef",\n                "internalId": "123456"\n              },\n              "content": {\n                // highlight-start\n                "$GET_DOCUMENT_CONTENT$": {}\n                // highlight-end\n              },\n              "_ns_type": "File",\n              "attachFrom": "_web",\n              "description": "VendorBill processed by Rossum"\n            }\n          ]\n        },\n        {\n          "method_name": "attach",\n          "method_args": [\n            {\n              "_ns_type": "AttachBasicReference",\n              "attachTo": {\n                "type": "vendorBill",\n                "_ns_type": "RecordRef",\n                // highlight-start\n                "internalId": "{pipeline_context[0].internal_id}"\n                // highlight-end\n              },\n              "attachedRecord": {\n                "type": "file",\n                "_ns_type": "RecordRef",\n                // highlight-start\n                "internalId": "{pipeline_context[1].internal_id}"\n                // highlight-end\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Notice also the highlighted ",(0,s.jsx)(n.code,{children:"$GET_DOCUMENT_CONTENT$"})," which returns the content of the original file."]}),"\n",(0,s.jsx)(n.h2,{id:"vendor-credits-credit-notes",children:"Vendor Credits (credit notes)"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"linking-vendor-credits-with-vendor-bills",children:"Linking Vendor Credits with Vendor Bills"}),"\n",(0,s.jsxs)(n.p,{children:["Vendor credits can be linked to vendor bills via ",(0,s.jsx)(n.code,{children:"applyList"}),' configuration. Note that the credits can be applied only "Open" vendor bills and always to VB line ',(0,s.jsx)(n.code,{children:"0"}),". In this example, we apply the whole credit note value to the specified vendor bill:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "applyList": {\n    "$IF_DATAPOINT_VALUE$": {\n      "schema_id": "ns_status_match",\n      "value": "Open",\n      "mapping": {\n        "apply": {\n          "doc": "@{ns_internalId_match}",\n          "line": "0",\n          "apply": true,\n          "amount": "@{amount_total_normalized}",\n          "_ns_type": "VendorCreditApply"\n        },\n        "_ns_type": "VendorCreditApplyList"\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);