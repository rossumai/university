"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[8684],{4112:(e,n,o)=>{o.d(n,{ZP:()=>a,d$:()=>s});var t=o(5893),i=o(1151);const s=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,t.jsxs)(n.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,t.jsx)(n.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},3219:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(5893),i=o(1151),s=o(4112);const r={title:"Coupa: Integration setup",sidebar_position:1,sidebar_label:"Integration setup"},a=void 0,c={id:"learn/coupa/coupa-integration-setup",title:"Coupa: Integration setup",description:"The following article guides you through the Coupa integration setup. It consists of two mandatory parts: Coupa configuration and Rossum hook configuration.",source:"@site/docs/learn/coupa/coupa-integration-setup.md",sourceDirName:"learn/coupa",slug:"/learn/coupa/coupa-integration-setup",permalink:"/docs/learn/coupa/coupa-integration-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/coupa/coupa-integration-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Coupa: Integration setup",sidebar_position:1,sidebar_label:"Integration setup"},sidebar:"learnSidebar",previous:{title:"Coupa",permalink:"/docs/learn/coupa/"},next:{title:"Import setup",permalink:"/docs/learn/coupa/coupa-import-setup"}},l={},d=[{value:"Configuring Coupa",id:"configuring-coupa",level:2},{value:"Configuring Rossum",id:"configuring-rossum",level:2},{value:"Webhook in UI",id:"webhook-in-ui",level:3},{value:"Patch token lifetime",id:"patch-token-lifetime",level:3},{value:"Setting hook secrets schema (optional):",id:"setting-hook-secrets-schema-optional",level:3},{value:"Initial test",id:"initial-test",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2},...s.d$];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The following article guides you through the Coupa integration setup. It consists of two mandatory parts: Coupa configuration and Rossum hook configuration."}),"\n",(0,t.jsx)(n.h2,{id:"configuring-coupa",children:"Configuring Coupa"}),"\n",(0,t.jsxs)(n.p,{children:["The main prerequisite is to have a valid Coupa user with needed permissions (see ",(0,t.jsx)(n.a,{href:"/docs/learn/coupa/coupa-oauth-scopes",children:"OAuth 2.0 scopes"}),"). If you don't have a user with needed permission, ask your admin to create it."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can always (also) check the official documentation ",(0,t.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/core-platform/integration-playbooks-and-resources/integration-knowledge-articles/oauth-2.0-getting-started-with-coupa-api",children:"OAuth 2.0 Getting Started with Coupa API"})]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Login to the Coupa web admin at URL ",(0,t.jsx)(n.code,{children:"https://[example-company].coupacloud.com"})]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the Setup, search for keyword ",(0,t.jsx)(n.code,{children:"oauth"})," and click the one result ",(0,t.jsx)(n.strong,{children:"OAuth2/OpenID Connect Clients"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Coupa Setup User",src:o(4260).Z+"",width:"2972",height:"770"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Find the user prepared for the integration and note the values ",(0,t.jsx)(n.code,{children:"Identifier"})," and ",(0,t.jsx)(n.code,{children:"Secrets"}),". You will need it for every hook setup later"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:o(5833).Z+"",width:"1964",height:"1012"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["For the start, this scopes should works for basic integration ",(0,t.jsx)(n.code,{children:"core.accounting.read, core.common.read, core.invoice.create, core.invoice.read, core.invoice.write, core.purchase_order.read, core.supplier.read"})," - you can copy and paste it exactly like this when using the Postman collection provided by Coupa"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-rossum",children:"Configuring Rossum"}),"\n",(0,t.jsx)(n.p,{children:"Coupa service (integration) is provided by Rossum.ai in the form of webhook. To start using Coupa (either imports or exports), follow these steps:"}),"\n",(0,t.jsx)(n.h3,{id:"webhook-in-ui",children:"Webhook in UI"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Create extension"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill the following fields:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Name: ",(0,t.jsx)(n.code,{children:"Coupa: Import/Export [what]"})]}),"\n",(0,t.jsxs)(n.li,{children:["Trigger events: ",(0,t.jsx)(n.code,{children:"Manual"})," (later also ",(0,t.jsx)(n.code,{children:"Scheduled"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Extension type: ",(0,t.jsx)(n.code,{children:"Webhook"})]}),"\n",(0,t.jsxs)(n.li,{children:["URL (see ",(0,t.jsx)(n.a,{href:"/docs/learn/coupa/coupa-import-setup",children:"Import setup"})," and ",(0,t.jsx)(n.a,{href:"/docs/learn/coupa/coupa-export-setup",children:"Export setup"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create the webhook"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill ",(0,t.jsx)(n.code,{children:"Configuration"})," (see ",(0,t.jsx)(n.a,{href:"/docs/learn/coupa/coupa-import-configuration-examples",children:"Import Examples"})," or ",(0,t.jsx)(n.a,{href:"/docs/learn/coupa/coupa-export-configuration-examples",children:"Export Examples"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Fill ",(0,t.jsx)(n.code,{children:"Secrets"})," fields."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"patch-token-lifetime",children:"Patch token lifetime"}),"\n",(0,t.jsx)(n.p,{children:"Patch the token lifetime to 2 minutes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --location --request PATCH 'https://[company-example].rossum.app/api/v1/hooks/[hook-id]' \\\n--header 'Authorization: Bearer [token] \\\n--header 'Content-Type: application/json' \\\n--data '{\"token_lifetime_s\": 120}'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-hook-secrets-schema-optional",children:"Setting hook secrets schema (optional):"}),"\n",(0,t.jsxs)(n.p,{children:["Optional step is it cannot be done via UI (but can be done either via API or via ",(0,t.jsxs)(n.a,{href:"/docs/learn/sandboxes/",children:[(0,t.jsx)(n.code,{children:"prd"})," deployment tool"]}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "object",\n  "properties": {\n    "client_secret": {\n      "type": "string",\n      "minLength": 1,\n      "description": "API OAuth Client secret"\n    }\n  },\n  "additionalProperties": false\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"As a result of this change, it is easier to update the hook secrets (and to know what is in the secrets). You will see the following value in the hook secrets that can be easily modified:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "client_secret": "__change_me__"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"initial-test",children:"Initial test"}),"\n",(0,t.jsxs)(n.p,{children:["You can invoke the webhook manually using ",(0,t.jsx)(n.strong,{children:"curl"})," (for example):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --location --request POST 'https://[company-example].rossum.app/api/v1/hooks/[hook-id]/invoke' \\\n--header 'Authorization: token [token]' \\\n--data ''\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then go to the Rossum Extension Logs and observe the content"}),"\n",(0,t.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,t.jsx)(s.ZP,{})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4260:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/coupa-setup-1-858783afe2fbec219c31121ff699e046.png"},5833:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/coupa-setup-2-032e1cb858fc3291c6b3b83b7d6d4914.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);