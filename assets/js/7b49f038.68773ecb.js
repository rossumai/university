"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[5047],{9735:(e,t,n)=>{n.d(t,{ZP:()=>l,d$:()=>r});var s=n(5893),i=n(1151);const r=[];function o(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,s.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,s.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,s.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,s.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},4112:(e,t,n)=>{n.d(t,{ZP:()=>l,d$:()=>r});var s=n(5893),i=n(1151);const r=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,s.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>x});var s=n(5893),i=n(1151),r=n(9735),o=n(4112);const l={title:"REST API export"},a=void 0,c={id:"learn/rest-api-export/index",title:"REST API export",description:"Installation",source:"@site/docs/learn/rest-api-export/index.md",sourceDirName:"learn/rest-api-export",slug:"/learn/rest-api-export/",permalink:"/docs/learn/rest-api-export/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/rest-api-export/index.md",tags:[],version:"current",frontMatter:{title:"REST API export"},sidebar:"learnSidebar",previous:{title:"Postman collection",permalink:"/docs/learn/netsuite/postman"},next:{title:"Configuration examples",permalink:"/docs/learn/rest-api-export/configuration-examples"}},d={},x=[{value:"Installation",id:"installation",level:2},...r.d$,{value:"Basic usage",id:"basic-usage",level:2},...o.d$,{value:"Available configuration options",id:"available-configuration-options",level:2},...o.d$];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"REST API export extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Login to your Rossum account."}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Create extension"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill the following fields:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(t.code,{children:"REST API export"})]}),"\n",(0,s.jsxs)(t.li,{children:["Trigger events: ",(0,s.jsx)(t.code,{children:"Export"})]}),"\n",(0,s.jsxs)(t.li,{children:["Extension type: ",(0,s.jsx)(t.code,{children:"Webhook"})]}),"\n",(0,s.jsx)(t.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Create the webhook"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill in the ",(0,s.jsx)(t.code,{children:"Configuration"})," field (see ",(0,s.jsx)(t.a,{href:"/docs/learn/rest-api-export/configuration-examples",children:"Configuration examples"})," for some examples)."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Webhook URL endpoints:"}),"\n",(0,s.jsx)(r.ZP,{eu1:"https://elis.rest-api-export.rossum-ext.app/",eu2:"https://shared-eu2.rest-api-export.rossum-ext.app/",us:"https://us.rest-api-export.rossum-ext.app/",jp:"https://shared-jp.rest-api-export.rossum-ext.app/"}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(o.ZP,{}),"\n",(0,s.jsx)(t.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(o.ZP,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);