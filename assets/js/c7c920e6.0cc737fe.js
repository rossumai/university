"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[5550],{7154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(4848),l=s(8453);const r={title:"Rossum Formulas"},o=void 0,a={id:"learn/rossum-formulas/index",title:"Rossum Formulas",description:"This section covers both the Rossum Formula Fields and the Rossum Python flavor.",source:"@site/docs/learn/rossum-formulas/index.md",sourceDirName:"learn/rossum-formulas",slug:"/learn/rossum-formulas/",permalink:"/docs/learn/rossum-formulas/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/rossum-formulas/index.md",tags:[],version:"current",frontMatter:{title:"Rossum Formulas"},sidebar:"learnSidebar",previous:{title:"Postman collection",permalink:"/docs/learn/netsuite/postman"},next:{title:"Formula fields",permalink:"/docs/learn/rossum-formulas/formula-fields"}},t={},d=[{value:"Installation",id:"installation",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Available functions and features",id:"available-functions-and-features",level:2},{value:"Get datapoint value",id:"get-datapoint-value",level:3},{value:"Formula field",id:"formula-field",level:4},{value:"Serverless function",id:"serverless-function",level:4},{value:"Get datapoint metadata",id:"get-datapoint-metadata",level:3},{value:"Formula field",id:"formula-field-1",level:4},{value:"Serverless function",id:"serverless-function-1",level:4},{value:"Write into datapoint value",id:"write-into-datapoint-value",level:3},{value:"Formula field",id:"formula-field-2",level:4},{value:"Serverless function",id:"serverless-function-2",level:4},{value:"Check whether datapoint is set or not",id:"check-whether-datapoint-is-set-or-not",level:3},{value:"Formula field",id:"formula-field-3",level:4},{value:"Serverless function",id:"serverless-function-3",level:4},{value:"Defaulting values",id:"defaulting-values",level:3},{value:"Formula field",id:"formula-field-4",level:4},{value:"Serverless function",id:"serverless-function-4",level:4},{value:"Substitute",id:"substitute",level:3},{value:"Formula field",id:"formula-field-5",level:4},{value:"Serverless function",id:"serverless-function-5",level:4},{value:"Show info/warning/error messages",id:"show-infowarningerror-messages",level:3},{value:"Formula field",id:"formula-field-6",level:4},{value:"Serverless function",id:"serverless-function-6",level:4},{value:"Set automation blockers",id:"set-automation-blockers",level:3},{value:"Formula field",id:"formula-field-7",level:4},{value:"Serverless function",id:"serverless-function-7",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This section covers both the Rossum ",(0,i.jsx)(n.strong,{children:"Formula Fields"})," and the ",(0,i.jsx)(n.strong,{children:"Rossum Python"})," flavor."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Formula Fields or Rossum Python do not require any installation. It is available as a native Rossum functionality."}),"\n",(0,i.jsxs)(n.p,{children:["Formula Fields are available in the queue schema as a ",(0,i.jsx)(n.code,{children:"formula"})," field type. Rossum Python is available in serverless functions. Both flavors are fundamentally similar and differ only in how they are used with minimal syntax differences."]}),"\n",(0,i.jsx)(n.p,{children:"In case you want to use the Rossum Python within the serverless functions, you need to enable following setting:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to the settings of the Webhook (Serverless function)"}),"\n",(0,i.jsxs)(n.li,{children:["Scroll to ",(0,i.jsx)(n.code,{children:"Additional notification metadata"})]}),"\n",(0,i.jsxs)(n.li,{children:["Enable the ",(0,i.jsx)(n.code,{children:"Schemas"})," option"]}),"\n",(0,i.jsxs)(n.li,{children:["Save it and now you can work with the ",(0,i.jsx)(n.code,{children:"Rossum Python"})," in your serverless function"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,i.jsx)(n.p,{children:"To start with Formula Fields, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a new ",(0,i.jsx)(n.code,{children:"order_id_normalized"})," field in the queue schema."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.code,{children:"formula"})," field type of the field."]}),"\n",(0,i.jsxs)(n.li,{children:["Write the formula in the ",(0,i.jsx)(n.code,{children:"formula"})," field."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your first formula can be as simple as (no returns, no imports):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"field.order_id\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This formula copies the ",(0,i.jsx)(n.code,{children:"order_id"})," field into your newly created Formula Field."]}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you can create a new serverless (Python) function with the following boilerplate code that does the same thing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from rossum_python import RossumPython\n\ndef rossum_hook_request_handler(payload):\n    r = RossumPython.from_payload(payload)\n\n    r.field.order_id_normalized = r.field.order_id # \u2190\n\n    return r.hook_response()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that it is a little bit more verbose, but it is still very similar. The main differences are that we need to wrap the functionality into ",(0,i.jsx)(n.code,{children:"rossum_hook_request_handler"})," function and that we need to explicitly write into the ",(0,i.jsx)(n.code,{children:"order_id_normalized"})," field."]}),"\n",(0,i.jsx)(n.h2,{id:"available-functions-and-features",children:"Available functions and features"}),"\n",(0,i.jsxs)(n.p,{children:["Here is a list of available functions and features and their comparison between ",(0,i.jsx)(n.a,{href:"/docs/learn/rossum-formulas/formula-fields",children:"Formula Fields"})," and ",(0,i.jsx)(n.a,{href:"/docs/learn/rossum-formulas/serverless-functions",children:"Serverless Functions"}),". Note that serverless functions examples always assume that the code is wrapped in ",(0,i.jsx)(n.code,{children:"rossum_hook_request_handler"})," function and prefixed by ",(0,i.jsx)(n.code,{children:"r = RossumPython.from_payload(payload)"})," call (see above)."]}),"\n",(0,i.jsx)(n.h3,{id:"get-datapoint-value",children:"Get datapoint value"}),"\n",(0,i.jsx)(n.h4,{id:"formula-field",children:"Formula field"}),"\n",(0,i.jsx)(n.p,{children:"Can be either returned directly from the formula fields or stored in some temporary variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"field.amount\n"})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function",children:"Serverless function"}),"\n",(0,i.jsx)(n.p,{children:"In case of serverless function, the value can never be returned directly and must be either used in some other function call, or stored in some temporary variable to be used later:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = r.field.amount\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-datapoint-metadata",children:"Get datapoint metadata"}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-1",children:"Formula field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"field.amount.id               # Datapoint system ID\nfield.amount.rir_confidence   # Confidence score\n"})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-1",children:"Serverless function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"r.field.amount.id\nr.field.amount.rir_confidence\n"})}),"\n",(0,i.jsx)(n.h3,{id:"write-into-datapoint-value",children:"Write into datapoint value"}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-2",children:"Formula field"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Formula fields cannot write into any other fields. They simply return the value into the formula field itself."})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-2",children:"Serverless function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"r.field.amount = 10\n"})}),"\n",(0,i.jsx)(n.h3,{id:"check-whether-datapoint-is-set-or-not",children:"Check whether datapoint is set or not"}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-3",children:"Formula field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"is_set(field.amount)     # Returns `true` if datapoint is set (has value)\nis_empty(field.amount)   # Opposite of `is_set`\n"})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-3",children:"Serverless function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from rossum_python import RossumPython, is_set, is_empty\n\n# \u2026\n\nis_set(r.field.amount)\nis_empty(r.field.amount)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"defaulting-values",children:"Defaulting values"}),"\n",(0,i.jsx)(n.p,{children:"Use the default value if the field is empty."}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-4",children:"Formula field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"default_to(field.amount, 0)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-4",children:"Serverless function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from rossum_python import RossumPython, default_to\n\n# \u2026\n\ndefault_to(r.field.amount, 0)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"substitute",children:"Substitute"}),"\n",(0,i.jsxs)(n.p,{children:["Substitute is an alias for ",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/re.html#re.sub",children:(0,i.jsx)(n.code,{children:"re.sub"})})," function (for convenience)."]}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-5",children:"Formula field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'substitute(r"[^0-9]", r"", field.document_id)  # Remove non-digit characters\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Could also be written as (",(0,i.jsx)(n.code,{children:"re"})," is imported automatically):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'re.sub(r"[^0-9]", r"", field.document_id)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-5",children:"Serverless function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'from rossum_python import RossumPython, substitute\n\n# \u2026\n\nsubstitute(r"[^0-9]", r"", field.document_id)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"show-infowarningerror-messages",children:"Show info/warning/error messages"}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-6",children:"Formula field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'show_info("\u2026")                    # Show global info message\nshow_info("\u2026", field.amount)      # Show info message on the specified field\n\nshow_warning("\u2026")                 # Show global warning message\nshow_warning("\u2026", field.amount)   # Show warning message on the specified field\n\nshow_error("\u2026")                   # Show global error message\nshow_error("\u2026", field.amount)     # Show error message on the specified field\n'})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-6",children:"Serverless function"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Messages do not affect the automation behavior and, therefore, automation blockers must be set explicitly (see how to set ",(0,i.jsx)(n.a,{href:"#set-automation-blockers",children:"automation blockers"}),"). The only exception is ",(0,i.jsx)(n.code,{children:"show_error"})," which always blocks the automation."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'r.show_info("\u2026")\nr.show_info("\u2026", r.field.amount)\n\nr.show_warning("\u2026")\nr.show_warning("\u2026", r.field.amount)\n\nr.show_error("\u2026")\nr.show_error("\u2026", r.field.amount)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"set-automation-blockers",children:"Set automation blockers"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Automation blockers must be set independently of the info/warning messages. Error messages block the automation by default (cannot be disabled)."})}),"\n",(0,i.jsx)(n.h4,{id:"formula-field-7",children:"Formula field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'automation_blocker("message", field.amount)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"serverless-function-7",children:"Serverless function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'r.automation_blocker("message", r.field.amount)\n'})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);