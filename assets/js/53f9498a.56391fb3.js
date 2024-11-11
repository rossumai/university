"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[3456],{1780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"learn/netsuite/integration-configuration","title":"NetSuite: Integration configuration","description":"To configure an access token in NetSuite for SOAP communication, especially when there is no integration user yet, involves several steps that include creating an integration record in NetSuite, setting up a role with the necessary permissions, creating an integration user, and then generating the access token. Below is a step-by-step guide:","source":"@site/docs/learn/netsuite/integration-configuration.md","sourceDirName":"learn/netsuite","slug":"/learn/netsuite/integration-configuration","permalink":"/docs/learn/netsuite/integration-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/netsuite/integration-configuration.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NetSuite: Integration configuration","sidebar_position":1,"sidebar_label":"Integration configuration"},"sidebar":"learnSidebar","previous":{"title":"NetSuite","permalink":"/docs/learn/netsuite/"},"next":{"title":"Import configuration","permalink":"/docs/learn/netsuite/import-configuration"}}');var s=t(4848),r=t(8453);const o={title:"NetSuite: Integration configuration",sidebar_position:1,sidebar_label:"Integration configuration"},a="Integration configuration",c={},l=[{value:"1. Create an Integration Record in NetSuite",id:"1-create-an-integration-record-in-netsuite",level:2},{value:"2. Create a Role with necessary permissions",id:"2-create-a-role-with-necessary-permissions",level:2},{value:"3. Create an Integration User",id:"3-create-an-integration-user",level:2},{value:"4. Generate the Access Token",id:"4-generate-the-access-token",level:2},{value:"5. Use the Access Token in SOAP communication",id:"5-use-the-access-token-in-soap-communication",level:2},{value:"Important notes",id:"important-notes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"integration-configuration",children:"Integration configuration"})}),"\n",(0,s.jsx)(n.p,{children:"To configure an access token in NetSuite for SOAP communication, especially when there is no integration user yet, involves several steps that include creating an integration record in NetSuite, setting up a role with the necessary permissions, creating an integration user, and then generating the access token. Below is a step-by-step guide:"}),"\n",(0,s.jsx)(n.h2,{id:"1-create-an-integration-record-in-netsuite",children:"1. Create an Integration Record in NetSuite"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Log in to your NetSuite account"})," as an administrator (",(0,s.jsx)(n.a,{href:"https://system.netsuite.com/",children:"https://system.netsuite.com/"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Setup \u2192 Integrations \u2192 Manage Integrations \u2192 New"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill in the ",(0,s.jsx)(n.strong,{children:"Name"})," of the integration and ensure that ",(0,s.jsx)(n.strong,{children:"State"})," is enabled."]}),"\n",(0,s.jsxs)(n.li,{children:["Check the ",(0,s.jsx)(n.strong,{children:"Token-Based Authentication"})," to use token-based auth along with SOAP."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save"})," the integration. Note the ",(0,s.jsx)(n.strong,{children:"Consumer Key"})," and ",(0,s.jsx)(n.strong,{children:"Consumer Secret"})," presented upon saving; these are important for authentication."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Remember to save the ",(0,s.jsx)(n.strong,{children:"Consumer Key"})," and ",(0,s.jsx)(n.strong,{children:"Consumer Secret"})," for later."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NetSuite Integration configuration",src:t(2823).A+"",width:"3840",height:"1746"})}),"\n",(0,s.jsx)(n.h2,{id:"2-create-a-role-with-necessary-permissions",children:"2. Create a Role with necessary permissions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Setup \u2192 Users/Roles \u2192 Manage Roles \u2192 New"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Provide a ",(0,s.jsx)(n.strong,{children:"Name"})," for the role and assign it permissions necessary for the operations the integration will perform. At a minimum, for SOAP communication, you might need permissions like ",(0,s.jsx)(n.strong,{children:"SOAP Web Services, Log in using Access Tokens"}),", and any specific permissions related to the data you wish to access or modify (Lists)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save"})," the role."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NetSuite Role configuration",src:t(4949).A+"",width:"3840",height:"1746"})}),"\n",(0,s.jsx)(n.h2,{id:"3-create-an-integration-user",children:"3. Create an Integration User"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Lists \u2192 Employees \u2192 Employees \u2192 New"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill in the necessary information for the user. Under the ",(0,s.jsx)(n.strong,{children:"Access"})," tab, ensure you ",(0,s.jsx)(n.strong,{children:"Check"})," the ",(0,s.jsx)(n.strong,{children:"Give Access"})," option, set a ",(0,s.jsx)(n.strong,{children:"Password"}),", and ",(0,s.jsx)(n.strong,{children:"Assign the Role"})," you created earlier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save"})," the employee record."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"While it is technically possible to reuse already existing employee account, we recommend creating a new one for the integration. This way, the integration won't get broken when the employee account gets deactivated."})}),"\n",(0,s.jsx)(n.h2,{id:"4-generate-the-access-token",children:"4. Generate the Access Token"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Setup \u2192 Users/Roles \u2192 Access Tokens \u2192 New"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Application Name"})," (the integration you created in Step 1), the ",(0,s.jsx)(n.strong,{children:"User"}),", and the ",(0,s.jsx)(n.strong,{children:"Role"})," you've assigned to this integration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save"})," to generate the Token ID and Token Secret."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Remember to save the ",(0,s.jsx)(n.strong,{children:"Token ID"})," and ",(0,s.jsx)(n.strong,{children:"Token Secret"})," for later."]})}),"\n",(0,s.jsx)(n.h2,{id:"5-use-the-access-token-in-soap-communication",children:"5. Use the Access Token in SOAP communication"}),"\n",(0,s.jsx)(n.p,{children:"With the Consumer Key, Consumer Secret, Token ID, and Token Secret, you can now configure Rossum.ai SOAP client for communication with NetSuite:"}),"\n",(0,s.jsx)(n.p,{children:"Secrets:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "consumer_key": "\u2026", // change\n  "consumer_secret": "\u2026", // change\n  "token_key": "\u2026", // change\n  "token_secret": "\u2026", // change\n  "rossum_username": "system.user@rossum.example", // change\n  "rossum_password": "\u2026" // change\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import/Export configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "netsuite_settings": {\n    "account": "XXX_SB1", // Case sensitive!\n    "concurrency_limit": 4,\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Account ID (",(0,s.jsx)(n.code,{children:"account"}),") can be found under ",(0,s.jsx)(n.strong,{children:"Setup \u2192 Company \u2192 Company Information"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"important-notes",children:"Important notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure your NetSuite account has the ",(0,s.jsx)(n.strong,{children:"Token-Based Authentication"})," feature enabled. This can be checked and enabled under ",(0,s.jsx)(n.strong,{children:"Setup \u2192 Company \u2192 Enable Features \u2192 SuiteCloud"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The permissions assigned to the role will dictate what operations can be performed through the SOAP API. Make sure to adjust these according to the least privilege principle, granting only the permissions necessary for the tasks the integration will perform."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This process sets up a secure method for your application or integration to communicate with NetSuite using SOAP. If you encounter any specific issues during setup or need more detailed instructions, NetSuite's official documentation and support resources can provide additional guidance tailored to the latest platform updates and best practices."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2823:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/netsuite-integration-846abf23e2c743e8ad62bb04f9d64c0e.png"},4949:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/netsuite-role-545df8dcc974d438721670aa509eddba.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);