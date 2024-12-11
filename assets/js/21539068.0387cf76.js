"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2189],{8021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"learn/netsuite/considerations","title":"NetSuite: Considerations & Limitations","description":"In general","source":"@site/docs/learn/netsuite/considerations.md","sourceDirName":"learn/netsuite","slug":"/learn/netsuite/considerations","permalink":"/docs/learn/netsuite/considerations","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/netsuite/considerations.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"NetSuite: Considerations & Limitations","sidebar_position":4,"sidebar_label":"Considerations & Limitations"},"sidebar":"learnSidebar","previous":{"title":"Export configuration","permalink":"/docs/learn/netsuite/export-configuration"},"next":{"title":"Postman collection","permalink":"/docs/learn/netsuite/postman"}}');var s=t(4848),o=t(8453);const r={title:"NetSuite: Considerations & Limitations",sidebar_position:4,sidebar_label:"Considerations & Limitations"},a="Considerations & Limitations",l={},d=[{value:"In general",id:"in-general",level:2},{value:"Default webhook timeout is 30 seconds",id:"default-webhook-timeout-is-30-seconds",level:2},{value:"Webhook retries 5\xd7 on failed requests",id:"webhook-retries-5-on-failed-requests",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"considerations--limitations",children:"Considerations & Limitations"})}),"\n",(0,s.jsx)(n.h2,{id:"in-general",children:"In general"}),"\n",(0,s.jsx)(n.p,{children:"Building NetSuite integration is much more than just reading the values from documents and forwarding them to the NetSuite API. The following considerations should be taken into account when designing a new NetSuite implementation:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["What document types are going to be processed? ",(0,s.jsx)(n.code,{children:"VendorBill"}),", ",(0,s.jsx)(n.code,{children:"VendorCredit"}),", or some other documents? Should they be in one queue or each document type or vendor in its own queue? What are the document regions? All of these questions affect the final queue structure, schemas as well as NetSuite export configuration."]}),"\n",(0,s.jsx)(n.li,{children:"What data needs to be data matched? PO-backed workflows might require just POs whereas non-PO-backed workflows might require many other NetSuite records to match (required by the NetSuite export). This greatly affects what data needs to be synchronized from NetSuite. Also consider how large are the collections and how many records should be synchronized during the initial import."}),"\n",(0,s.jsxs)(n.li,{children:["What system fields will be necessary? For example, ",(0,s.jsx)(n.code,{children:"VendorCredits"})," must have all amounts and quantities positive. Therefore, several hidden ",(0,s.jsx)(n.a,{href:"../rossum-formulas/formula-fields",children:"Formula Fields"})," performing this conversion might be necessary for the export."]}),"\n",(0,s.jsxs)(n.li,{children:["Consider preparing ",(0,s.jsx)(n.a,{href:"../line-items-grouping",children:"Line items grouping"})," extension. Apart from potential business requirements, NetSuite doesn't allow line items with repeating items."]}),"\n",(0,s.jsx)(n.li,{children:"Consider what all business rules and validations must be implemented."}),"\n",(0,s.jsxs)(n.li,{children:["Consider whether duplicate detection should be implemented or not. Customers often find it unexpected when we allow exporting the same document multiple times (even though NetSuite allows it by default). Note that this is an additional mechanism how to detect duplicates. In general, duplicates in Rossum can be detected by:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Comparing files on a binary level (looking for identical files)"}),"\n",(0,s.jsx)(n.li,{children:"Comparing extracted fields (looking for exactly matching extracted content)"}),"\n",(0,s.jsx)(n.li,{children:"Searching whether such invoices already exist in NetSuite or not (complements the previous point but takes historic documents into account as well)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Consider whether original files should be attached and created in the NetSuite File Cabinet. If so, make sure that the original filenames are unique (filenames in Rossum can be duplicated but not in NetSuite). Example ",(0,s.jsx)(n.a,{href:"/docs/learn/rossum-formulas/serverless-functions",children:"serverless function"})," implementation:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'import os\nfrom datetime import datetime\nfrom rossum_python import RossumPython\n\n\ndef add_iso_timestamp(filename):\n    # Get the file name and extension separately\n    name, ext = os.path.splitext(filename)\n\n    # Get the current ISO timestamp\n    timestamp = datetime.now().isoformat(timespec=\'seconds\')\n\n    # Create the new filename with the timestamp\n    new_filename = f"{name}_{timestamp}{ext}"\n\n    return new_filename\n\n\ndef rossum_hook_request_handler(payload):\n    r = RossumPython.from_payload(payload)\n\n    # Add ISO timestamp to the file name to ensure two files with the same name can be uploaded to NetSuite file cabinet:\n    r.field.meta_original_file_name = add_iso_timestamp(payload.get("document").get("original_file_name"))\n\n    return r.hook_response()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"default-webhook-timeout-is-30-seconds",children:"Default webhook timeout is 30 seconds"}),"\n",(0,s.jsx)(n.p,{children:"By default, all webhooks in Rossum timeout after 30 seconds. Usually, this time is enough for most webhooks. However, some more complex documents (longer ones with more line items) can take longer than that to export."}),"\n",(0,s.jsx)(n.p,{children:"To fix this issue, it is possible to set custom timeout by calling the following API endpoint:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"PATCH /v1/hooks/{id}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Request payload example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    // highlight-start\n    "timeout_s": 60\n    // highlight-end\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Example ",(0,s.jsx)(n.a,{href:"https://github.com/curl/curl",children:(0,s.jsx)(n.code,{children:"curl"})})," request:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --location --request PATCH 'https://[EXAMPLE].rossum.app/api/v1/hooks/[HOOK_ID]' \\\n--header 'Authorization: Bearer [API_TOKEN]' \\\n--header 'Content-Type: application/json' \\\n--data '{\"timeout_s\": 60}'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See API reference for more details: ",(0,s.jsx)(n.a,{href:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook",children:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook"})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The maximum allowed timeout is 60 seconds. Consider contacting ",(0,s.jsx)(n.a,{href:"https://rossum.ai/form/contact/",children:"Rossum Sales"})," or Rossum Support team if you need help finding alternative solutions."]})}),"\n",(0,s.jsx)(n.h2,{id:"webhook-retries-5-on-failed-requests",children:"Webhook retries 5\xd7 on failed requests"}),"\n",(0,s.jsx)(n.p,{children:"By default, webhooks are retried 5\xd7 on failed requests. This behavior can be inconvenient if it's not possible to guarantee idempotency of the requests (for example, NetSuite exports). This can be changed or completely disabled using the following API endpoint:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"PATCH /v1/hooks/{id}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Request payload example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    // highlight-start\n    "retry_count": 0\n    // highlight-end\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Use number ",(0,s.jsx)(n.code,{children:"0"})," to disable retries or any other number to change the default number of retries."]}),"\n",(0,s.jsxs)(n.p,{children:["See API reference for more details: ",(0,s.jsx)(n.a,{href:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook",children:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);