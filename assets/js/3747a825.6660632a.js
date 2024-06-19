"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[6548],{876:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=i(5893),t=i(1151);const s={sidebar_position:1,sidebar_label:"Configuration examples",title:"Copy & Paste Values: Configuration examples"},a="Configuration examples",r={id:"extensions/copy-paste-values/configuration-examples",title:"Copy & Paste Values: Configuration examples",description:"Copy header fields to line items conditionally",source:"@site/docs/extensions/copy-paste-values/configuration-examples.md",sourceDirName:"extensions/copy-paste-values",slug:"/extensions/copy-paste-values/configuration-examples",permalink:"/docs/extensions/copy-paste-values/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/copy-paste-values/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Configuration examples",title:"Copy & Paste Values: Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Copy & Paste Values",permalink:"/docs/extensions/copy-paste-values/"},next:{title:"Coupa",permalink:"/docs/extensions/coupa/"}},l={},d=[{value:"Copy header fields to line items conditionally",id:"copy-header-fields-to-line-items-conditionally",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,o.jsx)(n.h2,{id:"copy-header-fields-to-line-items-conditionally",children:"Copy header fields to line items conditionally"}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes it is necessary to copy header field value (such as Purchase Order no.) to line items for later data matching. The best way how to do this is to create a hidden field on line items (",(0,o.jsx)(n.code,{children:"item_po_copy"}),") and conditionally fill it like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "operations": [\n    {\n      "//": "1.1: Copy the Purchase Order no. only if it doesn\'t exist on the line item already:",\n      "condition": "len({line_items}) > 0 and {item_po} == \'\'",\n      "source_field": "order_id",\n      "target_field": "item_po_copy"\n    },\n    {\n      "//": "1.2: Copy the Purchase Order no. from the line items:",\n      "condition": "len({line_items}) > 0 and {item_po} != \'\'",\n      "source_field": "item_po",\n      "target_field": "item_po_copy"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["It might be necessary to have ",(0,o.jsx)(n.strong,{children:"manual"})," PO number overwrite on header fields. In this case, the logic would be similar:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "operations": [\n    {\n      "//": "1.1: Copy the Purchase Order no. only if it doesn\'t exist on the line item already (and there is no manual overwrite):",\n      "condition": "len({line_items}) > 0 and {item_order_id} == \'\' and {order_id_manual} == \'\'",\n      "source_field": "order_id",\n      "target_field": "item_order_id_copy"\n    },\n    {\n      "//": "1.2: Copy the Purchase Order Manual no. only if it doesn\'t exist on the line item already:",\n      "condition": "len({line_items}) > 0 and {item_order_id} == \'\' and {order_id_manual} != \'\'",\n      "source_field": "order_id_manual",\n      "target_field": "item_order_id_copy"\n    },\n    {\n      "//": "1.3: Copy the Purchase Order no. from the line items:",\n      "condition": "len({line_items}) > 0 and {item_order_id} != \'\'",\n      "source_field": "item_order_id",\n      "target_field": "item_order_id_copy"\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var o=i(7294);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);