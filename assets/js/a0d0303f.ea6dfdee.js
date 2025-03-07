"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[30],{4556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"learn/integration-patterns/index","title":"Supported Integration Patterns","description":"Integrating systems efficiently is critical for seamless data exchange and workflow automation. When working with the Rossum API, various integration patterns can be employed to suit different technical requirements and business needs. In this article, we explore five key integration methods\u2014each with its own pros and cons\u2014to help you determine the best approach for your system.","source":"@site/docs/learn/integration-patterns/index.md","sourceDirName":"learn/integration-patterns","slug":"/learn/integration-patterns/","permalink":"/docs/learn/integration-patterns/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/integration-patterns/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Supported Integration Patterns","sidebar_position":1},"sidebar":"learnSidebar","previous":{"title":"Alternative Python solution","permalink":"/docs/learn/full-page-search/alternative-python-solution"},"next":{"title":"JSON Templating","permalink":"/docs/learn/json-templating/"}}');var s=t(4848),o=t(8453);const r={title:"Supported Integration Patterns",sidebar_position:1},a="Supported Integration Patterns",l={},d=[{value:"1. Scheduled polling integration",id:"1-scheduled-polling-integration",level:2},{value:"2. Webhook-driven integration",id:"2-webhook-driven-integration",level:2},{value:"3. Direct push integration using webhook with annotation data",id:"3-direct-push-integration-using-webhook-with-annotation-data",level:2},{value:"4. Direct push integration using serverless function hosted in Rossum",id:"4-direct-push-integration-using-serverless-function-hosted-in-rossum",level:2},{value:"5. File-based integration",id:"5-file-based-integration",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"supported-integration-patterns",children:"Supported Integration Patterns"})}),"\n",(0,s.jsx)(n.p,{children:"Integrating systems efficiently is critical for seamless data exchange and workflow automation. When working with the Rossum API, various integration patterns can be employed to suit different technical requirements and business needs. In this article, we explore five key integration methods\u2014each with its own pros and cons\u2014to help you determine the best approach for your system."}),"\n",(0,s.jsx)(n.h2,{id:"1-scheduled-polling-integration",children:"1. Scheduled polling integration"}),"\n",(0,s.jsx)(n.p,{children:"In this model, the target system schedules regular queries to the Rossum API to retrieve annotations that are ready for export."}),"\n",(0,s.jsx)("b",{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Full control over query frequency, error handling, and resource management."}),"\n"]}),"\n",(0,s.jsx)("b",{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No real-time updates."}),"\n",(0,s.jsxs)(n.li,{children:["Requires tracking loaded annotations (Rossum\u2019s ",(0,s.jsx)(n.code,{children:"Confirmed"})," to ",(0,s.jsx)(n.code,{children:"Exported"})," statuses help with this)."]}),"\n",(0,s.jsx)(n.li,{children:"Hosting computational resources is necessary to run these scheduled queries."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Scheduled-Polling-Integration",src:t(9426).A+"",width:"2006",height:"1274"})}),"\n",(0,s.jsx)(n.h2,{id:"2-webhook-driven-integration",children:"2. Webhook-driven integration"}),"\n",(0,s.jsx)(n.p,{children:"Here, the target system listens for real-time notifications via Rossum\u2019s Webhook. When a notification is received, the system queries the Rossum API to retrieve the annotation data. This eliminates the need for a scheduled job and for tracking which annotations are ready, compared to approach #1 above. Notifications Webhook is provided by Rossum out of the box."}),"\n",(0,s.jsx)("b",{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Real-time updates."}),"\n",(0,s.jsx)(n.li,{children:"Ability to respond dynamically to status changes, customizing actions based on business logic."}),"\n",(0,s.jsx)(n.li,{children:"Webhook setup is straightforward, requiring just a target URL and specified triggers."}),"\n"]}),"\n",(0,s.jsx)("b",{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The system must be able to handle incoming requests."}),"\n",(0,s.jsxs)(n.li,{children:["Even after receiving the notification, an API query is still necessary to retrieve the full annotation (except for certain event types that include annotation data. Please see ",(0,s.jsx)(n.a,{href:"https://elis.rossum.ai/api/docs/#webhook-events",children:"documentation"})," and option #3)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Webhook-Driven-Integration",src:t(5633).A+"",width:"1998",height:"1264"})}),"\n",(0,s.jsx)(n.h2,{id:"3-direct-push-integration-using-webhook-with-annotation-data",children:"3. Direct push integration using webhook with annotation data"}),"\n",(0,s.jsxs)(n.p,{children:["In this variation, Rossum\u2019s Webhook delivers a direct push of data to the target system.\nIt will be possible to do for the range of actions like: confirmation or export. For more see ",(0,s.jsx)(n.a,{href:"https://elis.rossum.ai/api/docs/#webhook-events",children:"documentation"}),". But if you want to react only on status change the attached payload will have no content of the annotation."]}),"\n",(0,s.jsx)("b",{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Real-time updates."}),"\n",(0,s.jsx)(n.li,{children:"Rossum provides the Webhook integration out of the box."}),"\n"]}),"\n",(0,s.jsx)("b",{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The system must be able to handle incoming requests."}),"\n",(0,s.jsx)(n.li,{children:"Not all events deliver annotation data."}),"\n",(0,s.jsx)(n.li,{children:'Limited customization of the Webhook logic, as it is offered "as-is."'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Direct-Push-Integration-(Option-#2)",src:t(9219).A+"",width:"1956",height:"1166"})}),"\n",(0,s.jsx)(n.h2,{id:"4-direct-push-integration-using-serverless-function-hosted-in-rossum",children:"4. Direct push integration using serverless function hosted in Rossum"}),"\n",(0,s.jsx)(n.p,{children:"Rossum\u2019s serverless function pushes data directly to the target system\u2019s public endpoint, eliminating the need for the system to pull data."}),"\n",(0,s.jsx)("b",{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Real-time updates."}),"\n",(0,s.jsx)(n.li,{children:"Flexibility to push data to any public endpoint."}),"\n",(0,s.jsx)(n.li,{children:"No external hosting required, as Rossum provides the serverless function for integration development."}),"\n"]}),"\n",(0,s.jsx)("b",{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The system must be able to handle incoming requests."}),"\n",(0,s.jsx)(n.li,{children:"Development is needed within Rossum, which requires knowledge of Python or Node.js."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Direct-Push-Integration-(Option-#1)",src:t(962).A+"",width:"1962",height:"1142"})}),"\n",(0,s.jsx)(n.h2,{id:"5-file-based-integration",children:"5. File-based integration"}),"\n",(0,s.jsx)(n.p,{children:"With this method, Rossum exports documents to an SFTP server, and the target system retrieves the files based on its internal logic."}),"\n",(0,s.jsx)("b",{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Simple setup process in Rossum."}),"\n"]}),"\n",(0,s.jsx)("b",{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Must track new vs. old documents."}),"\n",(0,s.jsx)(n.li,{children:"Potential latency due to the polling interval by the target system."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"File-based-Integration",src:t(979).A+"",width:"1956",height:"1202"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Selecting the right integration pattern depends on your business\u2019s real-time data needs, technical capabilities, and the resources available. Webhook-driven and direct push integrations offer the benefit of immediate updates, while scheduled polling and file-based integrations provide flexibility and simplicity at the cost of real-time responsiveness. By weighing the pros and cons of each approach, you can build a more efficient and tailored integration strategy with Rossum."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},962:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Direct-Push-Integration-(Option-1)-ebd1444c875d3c03b4e4dc2e2d43022e.png"},9219:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Direct-Push-Integration-(Option-2)-6a4727caf5b3cf995d83cbaa740b58b4.png"},979:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/File-based-Integration-b2d800d95f6807b8110964334b7d4d0f.png"},9426:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Scheduled-Polling-Integration-265e093ad68e42d1558575ee4a14bf07.png"},5633:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Webhook-Driven-Integration-d368c983f1075c6952065a64288045fe.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);