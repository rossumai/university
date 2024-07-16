"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[5430],{9735:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>r});var s=t(5893),i=t(1151);const r=[];function o(e){const n={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.eu1?(0,s.jsx)(n.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.eu2?(0,s.jsx)(n.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"US east coast"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.us?(0,s.jsx)(n.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.jp?(0,s.jsx)(n.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},5058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151),r=t(9735);const o={title:"NetSuite"},l=void 0,c={id:"learn/netsuite/index",title:"NetSuite",description:"Installation",source:"@site/docs/learn/netsuite/index.md",sourceDirName:"learn/netsuite",slug:"/learn/netsuite/",permalink:"/docs/learn/netsuite/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/netsuite/index.md",tags:[],version:"current",frontMatter:{title:"NetSuite"},sidebar:"learnSidebar",previous:{title:"Using API",permalink:"/docs/learn/master-data-hub/using-api"},next:{title:"Integration configuration",permalink:"/docs/learn/netsuite/integration-configuration"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Import endpoints",id:"import-endpoints",level:3},...r.d$,{value:"Export endpoints",id:"export-endpoints",level:3},...r.d$,{value:"Basic usage",id:"basic-usage",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2},{value:"System context diagram",id:"system-context-diagram",level:2},{value:"Useful links",id:"useful-links",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"NetSuite service (integration) is provided by Rossum.ai in the form of webhook. To start using NetSuite (either imports or exports), follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Create extension"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill the following fields:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Name: ",(0,s.jsx)(n.code,{children:"SB1 NetSuite: Import/Export"})]}),"\n",(0,s.jsxs)(n.li,{children:["Trigger events: ",(0,s.jsx)(n.code,{children:"Manual"})," (later also ",(0,s.jsx)(n.code,{children:"Scheduled"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Extension type: ",(0,s.jsx)(n.code,{children:"Webhook"})]}),"\n",(0,s.jsx)(n.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create the webhook"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill ",(0,s.jsx)(n.code,{children:"Configuration"})," and ",(0,s.jsx)(n.code,{children:"Secrets"})," fields (see ",(0,s.jsx)(n.a,{href:"/docs/learn/netsuite/integration-configuration",children:"Integration Configuration"})," and ",(0,s.jsx)(n.a,{href:"/docs/learn/netsuite/import-configuration",children:"Import configuration"})," or ",(0,s.jsx)(n.a,{href:"/docs/learn/netsuite/export-configuration",children:"Export configuration"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"import-endpoints",children:"Import endpoints"}),"\n",(0,s.jsx)(r.ZP,{eu1:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/import",eu2:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import",us:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import"}),"\n",(0,s.jsx)(n.h3,{id:"export-endpoints",children:"Export endpoints"}),"\n",(0,s.jsx)(r.ZP,{eu1:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/export",eu2:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/export",us:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/export"}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Describe how to quickly use the extension."})})}),"\n",(0,s.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Describe all relevant configuration options."})})}),"\n",(0,s.jsx)(n.h2,{id:"system-context-diagram",children:"System context diagram"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NetSuite system context diagram",src:t(5668).Z+"",width:"4264",height:"1764"})}),"\n",(0,s.jsx)(n.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,s.jsx)(n.p,{children:"NetSuite main navigation can sometimes be very confusing as it is very customizable. Use the following paths to quickly access NetSuite resources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accounts: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/account/accounts.nl",children:(0,s.jsx)(n.code,{children:"/app/accounting/account/accounts.nl"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Currencies: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/common/multicurrency/currencylist.nl",children:(0,s.jsx)(n.code,{children:"/app/common/multicurrency/currencylist.nl"})})]}),"\n",(0,s.jsxs)(n.li,{children:["File Cabinet ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/common/media/mediaitemfolders.nl",children:(0,s.jsx)(n.code,{children:"/app/common/media/mediaitemfolders.nl"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Items: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/common/item/itemlist.nl",children:(0,s.jsx)(n.code,{children:"/app/common/item/itemlist.nl"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Purchase Orders: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/transactions/purchordermanager.nl?type=proc",children:(0,s.jsx)(n.code,{children:"/app/accounting/transactions/purchordermanager.nl?type=proc"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Subsidiaries: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/common/otherlists/subsidiarylist.nl",children:(0,s.jsx)(n.code,{children:"/app/common/otherlists/subsidiarylist.nl"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Vendor Bills: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill",children:(0,s.jsx)(n.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Vendor Credits: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred",children:(0,s.jsx)(n.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Vendors: ",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/app/common/entity/vendorlist.nl",children:(0,s.jsx)(n.code,{children:"/app/common/entity/vendorlist.nl"})})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5668:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/rossum-netsuite-system-context-diagram-f4b8c75eb17ac944a71986791353f670.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);