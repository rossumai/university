"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[7480],{3261:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>i});var s=n(4848),r=n(8453);const i=[];function o(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,s.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,s.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,s.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,s.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},101:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>i});var s=n(4848),r=n(8453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},6099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=n(4848),r=n(8453),i=n(3261),o=n(101);const a={title:"Structured formats import"},l=void 0,c={id:"learn/structured-formats-import/index",title:"Structured formats import",description:"Structured formats import allows for importing and processing of non-visual documents such as JSON or XML files. It not only correctly extracts the information from these files, but also renders a minimalistic PDF representation for easier manual reviews.",source:"@site/docs/learn/structured-formats-import/index.md",sourceDirName:"learn/structured-formats-import",slug:"/learn/structured-formats-import/",permalink:"/docs/learn/structured-formats-import/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/structured-formats-import/index.md",tags:[],version:"current",frontMatter:{title:"Structured formats import"},sidebar:"learnSidebar",previous:{title:"Single Sign-On (SSO)",permalink:"/docs/learn/sso/"},next:{title:"Configuration examples",permalink:"/docs/learn/structured-formats-import/configuration-examples"}},d={},u=[{value:"Installation",id:"installation",level:2},...i.RM,{value:"Basic usage",id:"basic-usage",level:2},...o.RM,{value:"Available configuration options",id:"available-configuration-options",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Structured formats import allows for importing and processing of non-visual documents such as JSON or XML files. It not only correctly extracts the information from these files, but also renders a minimalistic PDF representation for easier manual reviews."}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"Structured formats import is a webhook maintained by Rossum. In order to use it, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Login to your Rossum account."}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Create extension"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill the following fields:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(t.code,{children:"Structured formats import"})]}),"\n",(0,s.jsxs)(t.li,{children:["Trigger events: ",(0,s.jsx)(t.code,{children:"Document content: Initialize, Started, Updated"})]}),"\n",(0,s.jsxs)(t.li,{children:["Extension type: ",(0,s.jsx)(t.code,{children:"Webhook"})]}),"\n",(0,s.jsx)(t.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Create the webhook"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill ",(0,s.jsx)(t.code,{children:"Configuration"})," field (see ",(0,s.jsx)(t.a,{href:"/docs/learn/structured-formats-import/configuration-examples",children:"Configuration examples"})]}),"\n"]}),"\n",(0,s.jsx)(i.Ay,{eu1:"https://elis.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import",eu2:"https://shared-eu2.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import",us:"https://us.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import",jp:"https://shared-jp.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import"}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  // Various independent configurations that can be conditionally triggered via `trigger_condition`:\n  "configurations": [\n    {\n      "trigger_condition": {\n        "file_type": "xml"\n      },\n\n      // Optional. Whether the original XML/JSON file should be split into smaller ones:\n      "split_selectors": ["/RecordLabel/Productions/Production"],\n\n      // Fields to be extracted from the source file and assigned to given datapoints:\n      "fields": [\n        {\n          "schema_id": "document_id",\n\n          // If many selectors are specified, they serve as a fallback list.\n          "selectors": ["./Metadata/ID"]\n        }\n      ],\n\n      // Optional specification of the original PDF file that should be extracted from the source\n      // file (base64 encoded):\n      "pdf_file": {\n        "name_selectors": [\n          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject/@filename"\n        ],\n\n        // Content should be base64 encoded:\n        "content_selectors": [\n          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject"\n        ]\n      }\n    }\n    // \u2026\n  ]\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);