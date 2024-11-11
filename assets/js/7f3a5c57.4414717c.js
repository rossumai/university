"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[8348],{3261:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var i=t(4848),o=t(8453);const s=[];function l(e){const n={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Environment"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.eu1?(0,i.jsx)(n.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.eu2?(0,i.jsx)(n.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"US east coast"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.us?(0,i.jsx)(n.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.jp?(0,i.jsx)(n.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},101:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var i=t(4848),o=t(8453);const s=[];function l(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,i.jsxs)(n.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"learn/export-pipeline/custom-format-templating","title":"Export pipelines: Custom format templating","description":"Installation","source":"@site/docs/learn/export-pipeline/custom-format-templating.md","sourceDirName":"learn/export-pipeline","slug":"/learn/export-pipeline/custom-format-templating","permalink":"/docs/learn/export-pipeline/custom-format-templating","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/export-pipeline/custom-format-templating.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Export pipelines: Custom format templating","sidebar_label":"2. Custom format templating","sidebar_position":2},"sidebar":"learnSidebar","previous":{"title":"1. Custom format templating purge","permalink":"/docs/learn/export-pipeline/custom-format-templating-purge"},"next":{"title":"3. REST API export","permalink":"/docs/learn/export-pipeline/rest-api-export"}}');var o=t(4848),s=t(8453),l=t(3261),r=t(101);const a={title:"Export pipelines: Custom format templating",sidebar_label:"2. Custom format templating",sidebar_position:2},c="Custom format templating",d={},m=[{value:"Installation",id:"installation",level:2},...r.RM,...l.RM,{value:"Basic usage",id:"basic-usage",level:2},...r.RM,{value:"Available configuration options",id:"available-configuration-options",level:2},...r.RM,{value:"Configuration examples",id:"configuration-examples",level:2},{value:"Custom CSV",id:"custom-csv",level:3},{value:"Custom XML",id:"custom-xml",level:3},{value:"Custom JSON",id:"custom-json",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"custom-format-templating",children:"Custom format templating"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:'"Custom format templating" extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:'}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Create extension"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Fill the following fields:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Name: ",(0,o.jsx)(n.code,{children:"Custom format templating"})]}),"\n",(0,o.jsxs)(n.li,{children:["Trigger events: ",(0,o.jsx)(n.code,{children:"Export"})]}),"\n",(0,o.jsxs)(n.li,{children:["Extension type: ",(0,o.jsx)(n.code,{children:"Webhook"})]}),"\n",(0,o.jsx)(n.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:['In "Advanced settings" select ',(0,o.jsx)(n.strong,{children:"Token owner"})," (should have Admin access)"]}),"\n",(0,o.jsxs)(n.li,{children:['In the "Additional notification metadata" enable ',(0,o.jsx)(n.code,{children:"Schemas"})]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create the webhook"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(l.Ay,{eu1:"https://elis.custom-format-templating.rossum-ext.app/",eu2:"https://shared-eu2.custom-format-templating.rossum-ext.app/",us:"https://us.custom-format-templating.rossum-ext.app/",jp:"https://shared-jp.custom-format-templating.rossum-ext.app/"}),"\n",(0,o.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Maximum five export configs can be defined per annotation export."})}),"\n",(0,o.jsx)(n.h3,{id:"custom-csv",children:"Custom CSV"}),"\n",(0,o.jsx)(n.p,{children:"Define CSV header fields as well as the actual datapoints to be exported:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template": "Document ID,Document Type,Quantity\\n{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, it is possible to leverage ",(0,o.jsx)(n.code,{children:"file_content_template_multiline"})," for better readability:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template_multiline": [\n        "Document ID,Document Type,Quantity",\n        "{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"\n      ],\n      "content_encoding": "utf-8"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Both of the configurations should generate something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csv",children:"Document ID,Document Type,Quantity\n123456,tax_invoice,750\n"})}),"\n",(0,o.jsx)(n.p,{children:"It is also possible to iterate line items:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template_multiline": [\n        "Document ID,Document Type,Item Description,Item Quantity",\n        "{% for item in field.line_items %}{{field.document_id}},{{field.document_type}},{{item.item_description}},{{item.item_quantity}}\\n{% endfor %}"\n      ],\n      "content_encoding": "utf-8"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The generated CSV would now contain all the line items, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csv",children:"Document ID,Document Type,Item Description,Item Quantity\n123456,tax_invoice,AWS services #1,750\n123456,tax_invoice,AWS services #2,750\n123456,tax_invoice,AWS services #3,750\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:['Note that such created CSV is not available anywhere in the UI, but it\'s rather created as a "document" which is referenced via annotation metadata (on annotation ',(0,o.jsx)(n.strong,{children:"export"})," event)."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  // \u2026\n  "metadata": {\n    "custom_format_exports": [\n      {\n        "document": "https://elis.rossum.ai/api/v1/documents/123456",\n        "export_id": "export_annotation_to_csv"\n      }\n    ]\n  }\n}\n'})}),(0,o.jsxs)(n.p,{children:["This extension is typically to be used in combination with ",(0,o.jsx)(n.a,{href:"/docs/learn/export-pipeline/rest-api-export",children:"REST API Export extension"})," which knows how to work with it."]})]}),"\n",(0,o.jsx)(n.h3,{id:"custom-xml",children:"Custom XML"}),"\n",(0,o.jsx)(n.p,{children:"Similarly to other formats, custom XML can be defined using the following template:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_xml",\n      "content_encoding": "utf-8",\n      "file_content_template_multiline": [\n        "<ROSSUM>",\n        "  <INVOICE>",\n        "    <HEADER>",\n        "      <DOCUMENT_ID>{{ field.document_id }}</DOCUMENT_ID>",\n        "      <DOCUMENT_TYPE>{{ field.document_type }}</DOCUMENT_TYPE>",\n        "      <DOCUMENT_LANGUAGE>{{ field.language }}</DOCUMENT_LANGUAGE>",\n        "      <DATE_ISSUE>{{ field.date_issue }}</DATE_ISSUE>",\n        "      <DATE_DUE>{{ field.date_due }}</DATE_DUE>",\n        "      <CURRENCY>{{ field.currency|upper }}</CURRENCY>",\n        "      <AMOUNT_TOTAL>{{ field.amount_total }}</AMOUNT_TOTAL>",\n        "      <AMOUNT_TOTAL_TAX>{{ field.amount_total_tax }}</AMOUNT_TOTAL_TAX>",\n        "    </HEADER>",\n        "  </INVOICE>",\n        "</ROSSUM>"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"custom-json",children:"Custom JSON"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_json",\n      "content_encoding": "utf-8",\n      "file_content_template_multiline": [\n        "{",\n        "  \\"document_id\\": \\"{{ field.document_id }}\\",",\n        "  \\"document_type\\": \\"{{ field.document_type }}\\",",\n        "  \\"line_items\\": [",\n        "    {% for item in field.line_items %}{",\n        "      \\"code\\": \\"{{ item.item_code }}\\",",\n        "      \\"description\\": \\"{{ item.item_description }}\\",",\n        "      \\"quantity\\": {{ item.item_quantity }},",\n        "      \\"amount\\": {{ item.item_amount }},",\n        "    }{% if not loop.last %},{% endif %}",\n        "  {% endfor %}]",\n        "}"\n      ]\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);