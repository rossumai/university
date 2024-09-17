"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[3216],{9735:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>s});var i=n(5893),o=n(1151);const s=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,i.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,i.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,i.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,i.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4112:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>s});var i=n(5893),o=n(1151);const s=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,i.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,i.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,i.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=n(5893),o=n(1151),s=n(9735),l=n(4112);const a={title:"Export pipelines: Custom format templating",sidebar_label:"2. Custom format templating",sidebar_position:2},r="Custom format templating",c={id:"learn/export-pipeline/custom-format-templating",title:"Export pipelines: Custom format templating",description:"Installation",source:"@site/docs/learn/export-pipeline/custom-format-templating.md",sourceDirName:"learn/export-pipeline",slug:"/learn/export-pipeline/custom-format-templating",permalink:"/docs/learn/export-pipeline/custom-format-templating",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/export-pipeline/custom-format-templating.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Export pipelines: Custom format templating",sidebar_label:"2. Custom format templating",sidebar_position:2},sidebar:"learnSidebar",previous:{title:"Export pipelines",permalink:"/docs/learn/export-pipeline/"},next:{title:"3. REST API export",permalink:"/docs/learn/export-pipeline/rest-api-export"}},d={},p=[{value:"Installation",id:"installation",level:2},...l.d$,...s.d$,{value:"Basic usage",id:"basic-usage",level:2},...l.d$,{value:"Available configuration options",id:"available-configuration-options",level:2},...l.d$,{value:"Configuration examples",id:"configuration-examples",level:2},{value:"Custom CSV",id:"custom-csv",level:3},{value:"Custom XML",id:"custom-xml",level:3},{value:"Custom JSON",id:"custom-json",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"custom-format-templating",children:"Custom format templating"})}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(s.ZP,{eu1:"https://elis.custom-format-templating.rossum-ext.app/",eu2:"https://shared-eu2.custom-format-templating.rossum-ext.app/",us:"https://us.custom-format-templating.rossum-ext.app/",jp:"https://shared-jp.custom-format-templating.rossum-ext.app/"}),"\n",(0,i.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(t.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(t.h2,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Maximum five export configs can be defined per annotation export."})}),"\n",(0,i.jsx)(t.h3,{id:"custom-csv",children:"Custom CSV"}),"\n",(0,i.jsx)(t.p,{children:"Define CSV header fields as well as the actual datapoints to be exported:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template": "Document ID,Document Type,Quantity\\n{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, it is possible to leverage ",(0,i.jsx)(t.code,{children:"file_content_template_multiline"})," for better readability:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template_multiline": [\n        "Document ID,Document Type,Quantity",\n        "{{field.document_id}},{{field.document_type}},{{field.line_items[0].item_quantity}}"\n      ],\n      "content_encoding": "utf-8"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Both of the configurations should generate something like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csv",children:"Document ID,Document Type,Quantity\n123456,tax_invoice,750\n"})}),"\n",(0,i.jsx)(t.p,{children:"It is also possible to iterate line items:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_csv",\n      "file_content_template_multiline": [\n        "Document ID,Document Type,Item Description,Item Quantity",\n        "{% for item in field.line_items %}{{field.document_id}},{{field.document_type}},{{item.item_description}},{{item.item_quantity}}\\n{% endfor %}"\n      ],\n      "content_encoding": "utf-8"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The generated CSV would now contain all the line items, for example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csv",children:"Document ID,Document Type,Item Description,Item Quantity\n123456,tax_invoice,AWS services #1,750\n123456,tax_invoice,AWS services #2,750\n123456,tax_invoice,AWS services #3,750\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:['Note that such created CSV is not available anywhere in the UI, but it\'s rather created as a "document" which is referenced via annotation metadata (on annotation ',(0,i.jsx)(t.strong,{children:"export"})," event)."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  // \u2026\n  "metadata": {\n    "custom_format_exports": [\n      {\n        "document": "https://elis.rossum.ai/api/v1/documents/123456",\n        "export_id": "export_annotation_to_csv"\n      }\n    ]\n  }\n}\n'})}),(0,i.jsxs)(t.p,{children:["This extension is typically to be used in combination with ",(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/rest-api-export",children:"REST API Export extension"})," which knows how to work with it."]})]}),"\n",(0,i.jsx)(t.h3,{id:"custom-xml",children:"Custom XML"}),"\n",(0,i.jsx)(t.p,{children:"Similarly to other formats, custom XML can be defined using the following template:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_xml",\n      "content_encoding": "utf-8",\n      "file_content_template_multiline": [\n        "<ROSSUM>",\n        "  <INVOICE>",\n        "    <HEADER>",\n        "      <DOCUMENT_ID>{{ field.document_id }}</DOCUMENT_ID>",\n        "      <DOCUMENT_TYPE>{{ field.document_type }}</DOCUMENT_TYPE>",\n        "      <DOCUMENT_LANGUAGE>{{ field.language }}</DOCUMENT_LANGUAGE>",\n        "      <DATE_ISSUE>{{ field.date_issue }}</DATE_ISSUE>",\n        "      <DATE_DUE>{{ field.date_due }}</DATE_DUE>",\n        "      <CURRENCY>{{ field.currency|upper }}</CURRENCY>",\n        "      <AMOUNT_TOTAL>{{ field.amount_total }}</AMOUNT_TOTAL>",\n        "      <AMOUNT_TOTAL_TAX>{{ field.amount_total_tax }}</AMOUNT_TOTAL_TAX>",\n        "    </HEADER>",\n        "  </INVOICE>",\n        "</ROSSUM>"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"custom-json",children:"Custom JSON"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "export_id": "export_annotation_to_json",\n      "content_encoding": "utf-8",\n      "file_content_template_multiline": [\n        "{",\n        "  \\"document_id\\": \\"{{ field.document_id }}\\",",\n        "  \\"document_type\\": \\"{{ field.document_type }}\\",",\n        "  \\"line_items\\": [",\n        "    {% for item in field.line_items %}{",\n        "      \\"code\\": \\"{{ item.item_code }}\\",",\n        "      \\"description\\": \\"{{ item.item_description }}\\",",\n        "      \\"quantity\\": {{ item.item_quantity }},",\n        "      \\"amount\\": {{ item.item_amount }},",\n        "    }{% if not loop.last %},{% endif %}",\n        "  {% endfor %}]",\n        "}"\n      ]\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(7294);const o={},s=i.createContext(o);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);