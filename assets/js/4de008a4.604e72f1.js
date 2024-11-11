"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[3031],{3261:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>r});var t=i(4848),s=i(8453);const r=[];function o(e){const n={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Environment"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:e.eu1?(0,t.jsx)(n.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:e.eu2?(0,t.jsx)(n.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"US east coast"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:e.us?(0,t.jsx)(n.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:e.jp?(0,t.jsx)(n.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},101:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>r});var t=i(4848),s=i(8453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,t.jsxs)(n.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,t.jsx)(n.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},6918:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"learn/line-items-grouping/index","title":"Line items grouping","description":"Line items grouping extension allows for grouping line items based on given SQL criteria. This is handy when the downstream system has some restrictions such as only one unique line item per invoice.","source":"@site/docs/learn/line-items-grouping/index.md","sourceDirName":"learn/line-items-grouping","slug":"/learn/line-items-grouping/","permalink":"/docs/learn/line-items-grouping/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/line-items-grouping/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Line items grouping","sidebar_position":1},"sidebar":"learnSidebar","previous":{"title":"JSON Templating","permalink":"/docs/learn/json-templating/"},"next":{"title":"Configuration examples","permalink":"/docs/learn/line-items-grouping/configuration-examples"}}');var s=i(4848),r=i(8453),o=i(3261),l=i(101);const a={title:"Line items grouping",sidebar_position:1},d=void 0,c={},h=[{value:"Installation",id:"installation",level:2},{value:"Available endpoints",id:"available-endpoints",level:3},...o.RM,{value:"Basic usage",id:"basic-usage",level:2},...l.RM,{value:"Available configuration options",id:"available-configuration-options",level:2},...l.RM];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Line items grouping"})," extension allows for grouping line items based on given SQL criteria. This is handy when the downstream system has some restrictions such as only one unique line item per invoice."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Line items grouping service is provided by Rossum.ai in the form of webhook. To start using the extension, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Create extension"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill the following fields:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Name: ",(0,s.jsx)(n.code,{children:"Line items grouping"})]}),"\n",(0,s.jsxs)(n.li,{children:["Trigger events: ",(0,s.jsx)(n.code,{children:"Document content: Initialize, Started, Updated"})]}),"\n",(0,s.jsx)(n.li,{children:"Queues where the extension should be executed"}),"\n",(0,s.jsxs)(n.li,{children:["Extension type: ",(0,s.jsx)(n.code,{children:"Webhook"})]}),"\n",(0,s.jsxs)(n.li,{children:["URL (see ",(0,s.jsx)(n.a,{href:"#available-endpoints",children:"Available endpoints"})," below)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create the webhook"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill ",(0,s.jsx)(n.code,{children:"Configuration"})," field (visit ",(0,s.jsx)(n.a,{href:"/docs/learn/line-items-grouping/configuration-examples",children:"Configuration examples"})," page)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"available-endpoints",children:"Available endpoints"}),"\n",(0,s.jsx)(o.Ay,{eu1:"https://elis.line-items-grouping.rossum-ext.app/",eu2:"https://shared-eu2.line-items-grouping.rossum-ext.app/",us:"https://us.line-items-grouping.rossum-ext.app/",jp:"https://shared-jp.line-items-grouping.rossum-ext.app/"}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(l.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);