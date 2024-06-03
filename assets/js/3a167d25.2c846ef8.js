"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4491],{3221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>_,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=t(5893),s=t(1151),r=t(4866),o=t(5162);const l={title:"NetSuite: Export configuration",sidebar_position:4,sidebar_label:"Export configuration"},a="Export configuration",c={id:"extensions/netsuite/export-configuration",title:"NetSuite: Export configuration",description:"This page showcases the most common configurations. The final configuration depends heavily on the NetSuite instance configuration and might need to be adjusted as needed.",source:"@site/docs/extensions/netsuite/export-configuration.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/export-configuration",permalink:"/docs/extensions/netsuite/export-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/netsuite/export-configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NetSuite: Export configuration",sidebar_position:4,sidebar_label:"Export configuration"},sidebar:"extensionsSidebar",previous:{title:"Import configuration",permalink:"/docs/extensions/netsuite/import-configuration"},next:{title:"Rossum Formulas",permalink:"/docs/extensions/rossum-formulas/"}},d={},u=[{value:"Vendor Bills (Invoices)",id:"vendor-bills-invoices",level:2},{value:"Linking Vendor Bills with Purchase Orders",id:"linking-vendor-bills-with-purchase-orders",level:3},{value:"Conditional configuration using <code>$DATAPOINT_MAPPING$</code>",id:"conditional-configuration-using-datapoint_mapping",level:3},{value:"Working with custom fields",id:"working-with-custom-fields",level:3},{value:"Using NetSuite File Cabinet (<code>pipeline_context</code>)",id:"using-netsuite-file-cabinet-pipeline_context",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"export-configuration",children:"Export configuration"}),"\n",(0,i.jsx)(n.p,{children:"This page showcases the most common configurations. The final configuration depends heavily on the NetSuite instance configuration and might need to be adjusted as needed."}),"\n",(0,i.jsx)(n.h2,{id:"vendor-bills-invoices",children:"Vendor Bills (Invoices)"}),"\n",(0,i.jsxs)(r.Z,{groupId:"netsuite-flavor",queryString:!0,children:[(0,i.jsxs)(o.Z,{value:"modern",label:"Modern",default:!0,children:[(0,i.jsx)(n.p,{children:"The following shows a Vendor Bill export that (perhaps with some small tweaks) should work for most of the cases."}),(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"../rossum-formulas/configuration-examples#generate-netsuite-external-ids",children:"Rossum Formulas"})," page to learn how to create external NetSuite IDs."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": false,\n  "netsuite_settings": {\n    "account": "XXX_SB1", // Case sensitive!\n    "concurrency_limit": 4,\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  },\n  "export_configs": [\n    {\n      "payload": {\n        "method_name": "upsert",\n        "method_args": [\n          {\n            "_ns_type": "VendorBill",\n            "class": {\n              "type": "classification",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_class_match}"\n            },\n            "customForm": {\n              "type": "customRecord",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_customForm}"\n            },\n            "currency": {\n              "type": "currency",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_currency_match}"\n            },\n            "department": {\n              "type": "department",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_department_match}"\n            },\n            "dueDate": {\n              "$IF_SCHEMA_ID$": {\n                "schema_id": "date_due",\n                "mapping": {\n                  "$DATAPOINT_VALUE$": {\n                    "schema_id": "date_due",\n                    "value_type": "iso_datetime"\n                  }\n                }\n              }\n            },\n            "entity": {\n              "type": "vendor",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_vendor_match}"\n            },\n            "externalId": "@{ns_external_id_generated}",\n            "subsidiary": {\n              "type": "subsidiary",\n              "_ns_type": "RecordRef",\n              "internalId": "@{ns_subsidiary_match}"\n            },\n            "tranId": "@{document_id_normalized}",\n            "tranDate": {\n              "$IF_SCHEMA_ID$": {\n                "schema_id": "date_issue",\n                "mapping": {\n                  "$DATAPOINT_VALUE$": {\n                    "schema_id": "date_issue",\n                    "value_type": "iso_datetime"\n                  }\n                }\n              }\n            },\n            "itemList": {\n              "_ns_type": "VendorBillItemList",\n              "item": {\n                "$FOR_EACH_SCHEMA_ID$": {\n                  "schema_id": "line_item",\n                  "mapping": {\n                    "_ns_type": "VendorBillItem",\n                    "description": "@{item_description}",\n                    "item": {\n                      "type": "inventoryItem",\n                      "_ns_type": "RecordRef",\n                      "internalId": "@{item_ns_item_match}"\n                    },\n                    "rate": "@{item_amount_base}",\n                    "location": {\n                      "type": "location",\n                      "_ns_type": "RecordRef",\n                      "internalId": "@{item_ns_location_match}"\n                    },\n                    "quantity": "@{item_quantity}",\n                    "taxCode": {\n                      "type": "taxType",\n                      "_ns_type": "RecordRef",\n                      "internalId": "@{item_po_item_taxCode_match}"\n                    }\n                  }\n                }\n              }\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'})})]}),(0,i.jsxs)(o.Z,{value:"original",label:"Original",children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:['The following "original" configuration is ',(0,i.jsx)(n.strong,{children:"deprecated"}),'. Consider using the "modern" version instead.']})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "export_config": {\n    "mapping": {\n      "VendorBill": {\n        "entity": {\n          "_schema_id": "ns_vendor_match",\n          "_value_type": "string",\n          "_record_type": "RecordRef$vendor"\n        },\n        "tranId": {\n          "_schema_id": "document_id",\n          "_value_type": "string",\n          "_record_type": "simple"\n        },\n        "dueDate": {\n          "_schema_id": "date_due",\n          "_value_type": "datetime",\n          "_record_type": "simple"\n        },\n        "currency": {\n          "_schema_id": "ns_currency_match",\n          "_value_type": "string",\n          "_record_type": "RecordRef$currency"\n        },\n        "itemList": {\n          "item": {\n            "item": {\n              "_schema_id": "item_ns_item_match",\n              "_value_type": "string",\n              "_record_type": "RecordRef$inventoryItem"\n            },\n            "rate": {\n              "_schema_id": "item_amount",\n              "_value_type": "double",\n              "_record_type": "simple"\n            },\n            "location": {\n              "_schema_id": "item_ns_location_match",\n              "_value_type": "string",\n              "_record_type": "RecordRef$location"\n            },\n            "quantity": {\n              "_schema_id": "item_quantity",\n              "_value_type": "double",\n              "_record_type": "simple"\n            },\n            "_record_type": "VendorBillItem"\n          },\n          "_schema_id": "line_items",\n          "_record_type": "VendorBillItemList",\n          "_filter_values": ["inventory_item"],\n          "_filter_schema_id": "item_ns_type_manual"\n        },\n        "externalId": {\n          "_schema_id": "ns_vb_external_id_generated",\n          "_value_type": "string",\n          "_record_type": "simple"\n        },\n        "subsidiary": {\n          "_schema_id": "ns_subsidiary_match",\n          "_value_type": "string",\n          "_record_type": "RecordRef$subsidiary"\n        },\n        "expenseList": {\n          "expense": {\n            "memo": {\n              "_schema_id": "item_description",\n              "_value_type": "string",\n              "_record_type": "simple"\n            },\n            "amount": {\n              "_schema_id": "item_amount_total",\n              "_value_type": "float",\n              "_record_type": "simple"\n            },\n            "account": {\n              "_schema_id": "item_gl_code_match",\n              "_value_type": "string",\n              "_record_type": "RecordRef$account"\n            },\n            "_record_type": "VendorBillExpense"\n          },\n          "_schema_id": "line_items",\n          "_record_type": "VendorBillExpenseList",\n          "_filter_values": ["expense"],\n          "_filter_schema_id": "item_ns_type_manual"\n        },\n        "_record_type": "VendorBill",\n        "_export_condition": "{document_type} == \'tax_invoice\'"\n      }\n    },\n    "objects": {},\n    "file_cabinet": []\n  }\n}\n'})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"linking-vendor-bills-with-purchase-orders",children:"Linking Vendor Bills with Purchase Orders"}),"\n",(0,i.jsxs)(n.p,{children:["To connect Vendor Bills with Purchase Orders, it is necessary to set both ",(0,i.jsx)(n.code,{children:"orderDoc"})," and ",(0,i.jsx)(n.code,{children:"orderLine"})," on line-items level (showing only relevant parts of the export config):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "payload": {\n        "method_name": "upsert",\n        "method_args": [\n          {\n            "tranId": "@{document_id}",\n            "itemList": {\n              "_ns_type": "VendorBillItemList",\n              "item": {\n                "$FOR_EACH_SCHEMA_ID$": {\n                  "schema_id": "line_item",\n                  "mapping": {\n                    // \u2026\n                    "_ns_type": "VendorBillItem",\n                    // highlight-start\n                    "orderDoc": "@{item_po_match}", // PO internal ID\n                    "orderLine": "@{item_po_item_line_match}" // Relevant line-item number from PO (itemList.item.line)\n                    // highlight-end\n                    // \u2026\n                  }\n                }\n              }\n            }\n            // \u2026\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note that the combination of Purchase Order and line item no. can appear only once in the payload. In case it appears twice on the invoice then it's necessary to group the line items before exporting."}),"\n",(0,i.jsxs)(n.h3,{id:"conditional-configuration-using-datapoint_mapping",children:["Conditional configuration using ",(0,i.jsx)(n.code,{children:"$DATAPOINT_MAPPING$"})]}),"\n",(0,i.jsx)(n.p,{children:"You can leverage JSON Templating to introduce conditions into the configuration. For example, in this example, we are changing document (NS) type based on the detected document type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": {\n    // highlight-start\n    "$DATAPOINT_MAPPING$": {\n      // highlight-end\n      "schema_id": "document_type",\n      "mapping": {\n        "tax_credit": "VendorCredit",\n        "tax_invoice": "VendorBill"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Similarly, for line items and so on:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": {\n    // highlight-start\n    "$DATAPOINT_MAPPING$": {\n      // highlight-end\n      "schema_id": "document_type",\n      "mapping": {\n        "tax_credit": "VendorCreditItemList",\n        "tax_invoice": "VendorBillItemList"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Consider implementing this ",(0,i.jsx)(n.code,{children:"$DATAPOINT_MAPPING$"})," condition higher in the configuration tree and duplicating the whole sections to avoid too complex conditional configurations."]}),"\n",(0,i.jsx)(n.h3,{id:"working-with-custom-fields",children:"Working with custom fields"}),"\n",(0,i.jsxs)(n.p,{children:["Custom fields on header level are usually prefixed by ",(0,i.jsx)(n.code,{children:"custbody_"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "customFieldList": {\n    "_ns_type": "CustomFieldList",\n    "customField": [\n      {\n        "value": "@{amount_total}",\n        "_ns_type": "StringCustomFieldRef",\n        "scriptId": "custbody_captured_total_amount"\n      }\n      // \u2026\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Custom fields can also be added conditionally using special ",(0,i.jsx)(n.code,{children:"$IF_SCHEMA_ID$"})," syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "customFieldList": {\n    "_ns_type": "CustomFieldList",\n    "customField": [\n      {\n        "$IF_SCHEMA_ID$": {\n          "mapping": {\n            "value": "@{amount_total}",\n            "_ns_type": "StringCustomFieldRef",\n            "scriptId": "custbody_captured_total_amount"\n          },\n          "schema_id": "amount_total"\n        }\n      }\n      // \u2026\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Line item custom fields are usually prefixed by ",(0,i.jsx)(n.code,{children:"custcol_"}),". They also must be nested in the item list:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "itemList": {\n    "item": {\n      "customFieldList": {\n        "_ns_type": "CustomFieldList",\n        "customField": [\n          {\n            "value": "@{ns_custcol_some_field}",\n            "_ns_type": "StringCustomFieldRef",\n            "scriptId": "custcol_some_field"\n          }\n          // \u2026\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Custom fields are represented by the type ",(0,i.jsx)(n.code,{children:"CustomFieldRef"}),", which is an abstract type. The table below contains a list of concrete custom field types that extend the ",(0,i.jsx)(n.code,{children:"CustomFieldRef"})," type:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"JSON Mapping Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Custom Field Type in UI"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"LongCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Integer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DoubleCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Decimal Number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"BooleanCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Check Box"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"StringCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Free-Form Text, Text Area, Phone Number, E-mail Address, Hyperlink, Rich Text"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DateCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Date, Time of Day, or Date/Time (both in one field)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SelectCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"List/Record, Document"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"MultiSelectCustomFieldRef"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Multiple Select"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, please visit: ",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3458179.html",children:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3458179.html"})]}),"\n",(0,i.jsxs)(n.h3,{id:"using-netsuite-file-cabinet-pipeline_context",children:["Using NetSuite File Cabinet (",(0,i.jsx)(n.code,{children:"pipeline_context"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["You can reference earlier export stages by accessing ",(0,i.jsx)(n.code,{children:"pipeline_context"})," variable. In this example, we use ",(0,i.jsx)(n.code,{children:"pipeline_context"})," for attaching file uploaded to the NetSuite File Cabinet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "payload": [\n        {\n          // \u2026 upsert VendorBill here as usual\n        },\n        {\n          "method_name": "add",\n          "method_args": [\n            {\n              "name": "@{file_name}",\n              "folder": {\n                "type": "folder",\n                "_ns_type": "RecordRef",\n                "internalId": "123456"\n              },\n              "content": {\n                // highlight-start\n                "$GET_DOCUMENT_CONTENT$": {}\n                // highlight-end\n              },\n              "_ns_type": "File",\n              "attachFrom": "_web",\n              "description": "VendorBill processed by Rossum"\n            }\n          ]\n        },\n        {\n          "method_name": "attach",\n          "method_args": [\n            {\n              "_ns_type": "AttachBasicReference",\n              "attachTo": {\n                "type": "vendorBill",\n                "_ns_type": "RecordRef",\n                // highlight-start\n                "internalId": "{pipeline_context[0].internal_id}"\n                // highlight-end\n              },\n              "attachedRecord": {\n                "type": "file",\n                "_ns_type": "RecordRef",\n                // highlight-start\n                "internalId": "{pipeline_context[1].internal_id}"\n                // highlight-end\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Notice also the highlighted ",(0,i.jsx)(n.code,{children:"$GET_DOCUMENT_CONTENT$"})," which returns the content of the original file."]})]})}function _(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(512);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var i=t(7294),s=t(512),r=t(2466),o=t(6550),l=t(469),a=t(1980),c=t(7392),d=t(812);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function _(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??p;return _({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!_({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function y(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),s=l[t].value;s!==i&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function j(e){const n=(0,g.Z)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);