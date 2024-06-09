"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[5238],{110:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=s(5893),i=s(1151);const t={title:"Rossum Formulas"},r=void 0,a={id:"extensions/rossum-formulas/index",title:"Rossum Formulas",description:"This section covers both the Rossum Formula Fields and the Rossum Python flavor.",source:"@site/docs/extensions/rossum-formulas/index.md",sourceDirName:"extensions/rossum-formulas",slug:"/extensions/rossum-formulas/",permalink:"/docs/extensions/rossum-formulas/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/rossum-formulas/index.md",tags:[],version:"current",frontMatter:{title:"Rossum Formulas"},sidebar:"extensionsSidebar",previous:{title:"Export configuration",permalink:"/docs/extensions/netsuite/export-configuration"},next:{title:"Configuration examples",permalink:"/docs/extensions/rossum-formulas/configuration-examples"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This section covers both the Rossum ",(0,o.jsx)(n.strong,{children:"Formula Fields"})," and the ",(0,o.jsx)(n.strong,{children:"Rossum Python"})," flavor."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Formula Fields or Rossum Python do not require any installation. It is available as a native Rossum functionality."}),"\n",(0,o.jsxs)(n.p,{children:["Formula Fields are available in the queue schema as a ",(0,o.jsx)(n.code,{children:"formula"})," field type. Rossum Python is available in serverless functions. Both flavors are fundamentally similar and differ only in how they are used with minimal syntax differences."]}),"\n",(0,o.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,o.jsx)(n.p,{children:"To start with Formula Fields, follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a new ",(0,o.jsx)(n.code,{children:"order_id_normalized"})," field in the queue schema."]}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.code,{children:"formula"})," field type of the field."]}),"\n",(0,o.jsxs)(n.li,{children:["Write the formula in the ",(0,o.jsx)(n.code,{children:"formula"})," field."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Your first formula can be as simple as (no returns, no imports):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"field.order_id\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This formula copies the ",(0,o.jsx)(n.code,{children:"order_id"})," field into your newly created Formula Field."]}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can create a new serverless (Python) function with the following boilerplate code that does the same thing:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"from rossum_python import RossumPython\n\ndef rossum_hook_request_handler(payload: dict) -> dict:\n    r = RossumPython.from_payload(payload)\n\n    r.field.order_id_normalized = r.field.order_id # \u2190\n\n    return r.hook_response()\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice that it is a little bit more verbose, but it is still very similar. The main differences are that we need to wrap the functionality into ",(0,o.jsx)(n.code,{children:"rossum_hook_request_handler"})," function and that we need to explicitly write into the ",(0,o.jsx)(n.code,{children:"order_id_normalized"})," field."]}),"\n",(0,o.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,o.jsx)(n.p,{children:"Formula fields do not require any special configuration and are available for anyone to use."}),"\n",(0,o.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Describe all relevant configuration options (perhaps change it to available functions?)."})})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var o=s(7294);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);