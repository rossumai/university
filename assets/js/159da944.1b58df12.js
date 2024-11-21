"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4292],{1245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"learn/structured-formats-import/configuration-examples","title":"Structured formats import: Configuration examples","description":"Generic XML import","source":"@site/docs/learn/structured-formats-import/configuration-examples.md","sourceDirName":"learn/structured-formats-import","slug":"/learn/structured-formats-import/configuration-examples","permalink":"/docs/learn/structured-formats-import/configuration-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/structured-formats-import/configuration-examples.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Structured formats import: Configuration examples","sidebar_label":"Configuration examples","sidebar_position":1},"sidebar":"learnSidebar","previous":{"title":"Structured formats import","permalink":"/docs/learn/structured-formats-import/"},"next":{"title":"Italy: Sistema di Interscambio","permalink":"/docs/learn/structured-formats-import/italy-sistema-di-interscambio"}}');var c=t(4848),s=t(8453);const r={title:"Structured formats import: Configuration examples",sidebar_label:"Configuration examples",sidebar_position:1},a="Configuration examples",o={},l=[{value:"Generic XML import",id:"generic-xml-import",level:2},{value:"Generic JSON import",id:"generic-json-import",level:2},{value:"XML: Document splitting",id:"xml-document-splitting",level:2},{value:"XML: PEPPOL BIS Billing 3.0",id:"xml-peppol-bis-billing-30",level:2},{value:"XML with base64 encoded PDF",id:"xml-with-base64-encoded-pdf",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"})}),"\n",(0,c.jsx)(n.h2,{id:"generic-xml-import",children:"Generic XML import"}),"\n",(0,c.jsx)(n.admonition,{title:"todo",type:"warning",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"How to + examples"})})}),"\n",(0,c.jsx)(n.h2,{id:"generic-json-import",children:"Generic JSON import"}),"\n",(0,c.jsx)(n.admonition,{title:"todo",type:"warning",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"How to + examples"})})}),"\n",(0,c.jsx)(n.h2,{id:"xml-document-splitting",children:"XML: Document splitting"}),"\n",(0,c.jsxs)(n.p,{children:["XML documents can be split into multiple documents using the ",(0,c.jsx)(n.code,{children:"split_selectors"})," configuration:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "trigger_condition": {\n        "file_type": "xml"\n      },\n      // highlight-start\n      "split_selectors": ["/RecordLabel/Productions/Production"],\n      // highlight-end\n      "fields": [\n        {\n          "schema_id": "document_id",\n          "selectors": ["./Metadata/ID"]\n        }\n        // \u2026\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"The field selectors are then relative to the newly split document."}),"\n",(0,c.jsx)(n.h2,{id:"xml-peppol-bis-billing-30",children:"XML: PEPPOL BIS Billing 3.0"}),"\n",(0,c.jsxs)(n.p,{children:["Basic configuration (works with the default Rossum.ai schema for invoices) and the following PEPPOL BIS Billing 3.0 example: ",(0,c.jsx)(n.a,{href:"https://github.com/OpenPEPPOL/peppol-bis-invoice-3/blob/0f63848fc46fe4ab87d1860a18bfe381c41e01ff/rules/examples/base-example.xml",children:"https://github.com/OpenPEPPOL/peppol-bis-invoice-3/blob/0f63848fc46fe4ab87d1860a18bfe381c41e01ff/rules/examples/base-example.xml"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "trigger_condition": {\n        "file_type": "xml"\n      },\n      "fields": [\n        {\n          "schema_id": "document_id",\n          "selectors": ["cbc:ID"]\n        },\n        {\n          "schema_id": "order_id",\n          "selectors": ["cbc:BuyerReference"]\n        },\n        {\n          "schema_id": "date_issue",\n          "selectors": ["cbc:IssueDate"]\n        },\n        {\n          "schema_id": "date_due",\n          "selectors": ["cbc:DueDate"]\n        },\n        {\n          "schema_id": "currency",\n          "selectors": ["cbc:DocumentCurrencyCode"]\n        },\n        {\n          "schema_id": "amount_due",\n          "selectors": ["cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount"]\n        },\n        {\n          "schema_id": "amount_total_base",\n          "selectors": ["cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount"]\n        },\n        {\n          "schema_id": "amount_total_tax",\n          "selectors": ["cac:TaxTotal/cbc:TaxAmount"]\n        },\n        {\n          "schema_id": "sender_name",\n          "selectors": ["cac:AccountingSupplierParty/cac:Party/cac:PartyName/cbc:Name"]\n        },\n        {\n          "schema_id": "sender_address",\n          "selectors": ["cac:AccountingSupplierParty/cac:Party/cac:PostalAddress/cbc:StreetName"]\n        },\n        {\n          "schema_id": "recipient_name",\n          "selectors": ["cac:AccountingCustomerParty/cac:Party/cac:PartyName/cbc:Name"]\n        },\n        {\n          "schema_id": "recipient_address",\n          "selectors": ["cac:AccountingCustomerParty/cac:Party/cac:PostalAddress/cbc:StreetName"]\n        },\n        {\n          "schema_id": "terms",\n          "selectors": ["cac:PaymentTerms/cbc:Note"]\n        },\n        {\n          "fields": [\n            {\n              "schema_id": "item_quantity",\n              "selectors": ["cbc:InvoicedQuantity"]\n            },\n            {\n              "schema_id": "item_code",\n              "selectors": ["cac:Item/cac:StandardItemIdentification/cbc:ID"]\n            },\n            {\n              "schema_id": "item_description",\n              "selectors": ["cac:Item/cbc:Description", "cac:Item/cbc:Name"]\n            },\n            {\n              "schema_id": "item_amount",\n              "selectors": ["cac:Price/cbc:PriceAmount"]\n            }\n          ],\n          "schema_id": "line_items",\n          "selectors": ["cac:InvoiceLine"]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"xml-with-base64-encoded-pdf",children:"XML with base64 encoded PDF"}),"\n",(0,c.jsx)(n.p,{children:"It is common that the actual PDF file is embedded in the XML document in base64 encoded format. It can be used instead of rendering the default minimal PDF representation:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "fields": [\n        // \u2026\n      ],\n      "trigger_condition": {\n        "file_type": "xml"\n      },\n      // highlight-start\n      "pdf_file": {\n        "name_selectors": [\n          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject/@filename"\n        ],\n        "content_selectors": [\n          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject"\n        ]\n      }\n      // highlight-end\n    }\n  ]\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const c={},s=i.createContext(c);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);