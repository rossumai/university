"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4120],{9070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const r={title:"AI training best practices"},o=void 0,a={id:"learn/ai-learning/index",title:"AI training best practices",description:"Three key concepts to maintain good AI performance",source:"@site/docs/learn/ai-learning/index.md",sourceDirName:"learn/ai-learning",slug:"/learn/ai-learning/",permalink:"/docs/learn/ai-learning/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/ai-learning/index.md",tags:[],version:"current",frontMatter:{title:"AI training best practices"},sidebar:"learnSidebar",next:{title:"Business Rules Validation",permalink:"/docs/learn/business-rules-validation/"}},l={},c=[{value:"Three key concepts to maintain good AI performance",id:"three-key-concepts-to-maintain-good-ai-performance",level:2},{value:"Precision",id:"precision",level:3},{value:"Accuracy",id:"accuracy",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"When should I use multiple queues for my documents?",id:"when-should-i-use-multiple-queues-for-my-documents",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"three-key-concepts-to-maintain-good-ai-performance",children:"Three key concepts to maintain good AI performance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Precision"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Accuracy"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Consistency"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"precision",children:"Precision"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Check that ",(0,i.jsx)(n.a,{href:"https://rossum.ai/help/article/interactive-bounding-boxes-in-rossum/",children:"bounding boxes"})," are correctly applied to the value."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No overlapping with another bounding box."}),"\n",(0,i.jsx)(n.li,{children:"The value is captured fully."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"accuracy",children:"Accuracy"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"If value is placed in the wrong field, correct it."}),"\n",(0,i.jsx)(n.li,{children:"If there are typos or other issues, try adjusting the bounding box to get the correct reading."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"consistency",children:"Consistency"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Prefer values that appear earlier in the document."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If multiple values can fit, choose the one that is closer to the header part of the document."}),"\n",(0,i.jsx)(n.li,{children:"If multiple values fit but are scattered across multiple pages, choose the one that is closest to the first page (or on the first page if possible)."}),"\n",(0,i.jsx)(n.li,{children:"If the value usually accompanies other fields' values, choose the location that is close to these other fields' values."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Capture all and only the values in the documents."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If there is data in the document that has a corresponding field in the schema for extraction, capture it in each document where it is present, even if you may not need it to be extracted for a particular vendor or in a particular case."}),"\n",(0,i.jsx)(n.li,{children:'Amounts should also always be captured, even if the value on the document is "0".'}),"\n",(0,i.jsx)(n.li,{children:"Conversely, if a value is not present on the invoice, please do not enter it manually."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For in detail explanation please reach out to ",(0,i.jsx)(n.a,{href:"https://rossum.ai/help/article/annotations-guide-and-rules-to-follow/",children:"Annoations Guide"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The AI has predicted the correct value, but the reading of the text is incorrect"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Re-adjust the Bounding Box so that the OCR is applied again"}),"\n",(0,i.jsx)(n.li,{children:"If, after a couple of attempts the value is not corrected, change the value manually"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"The AI has predicted the correct value, but only partially or included extra text"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Correct the position of the Bounding Box so that it goes around the correct data"}),"\n",(0,i.jsx)(n.li,{children:"The learning is then stored & will be applied to later annotations"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"The date format is read incorrectly"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The date format is pre-defined by the schema"}),"\n",(0,i.jsx)(n.li,{children:"The interpretation of ambiguous dates relies the document region that is set for the queue"}),"\n",(0,i.jsx)(n.li,{children:"Re-adjust the bounding box or ask your Admin to adjust the field to the correct date format, if the formatting is consistently not correct"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"when-should-i-use-multiple-queues-for-my-documents",children:"When should I use multiple queues for my documents?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Different queues should be used if there is a different set of fields to capture from the documents (e.g., if in one case you are capturing tables, and in another, you are not, the documents should be separated into different queues)."}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["\u2705 One queue - no need to separate: You have ",(0,i.jsx)(n.strong,{children:"Document X"})," with line items and ",(0,i.jsx)(n.strong,{children:"Document Y"})," without line items. You capture line items in ",(0,i.jsx)(n.strong,{children:"Document X"})," and skip them in ",(0,i.jsx)(n.strong,{children:"Document Y"}),". You can have one queue because you train the AI to capture line items where they are present and do not attempt to capture them where they do not exist. This way, you differentiate various layouts and achieve better training."]}),(0,i.jsxs)(n.p,{children:["\u26d4 Two queues are required: You have ",(0,i.jsx)(n.strong,{children:"Document Z"})," and ",(0,i.jsx)(n.strong,{children:"Document W"}),". Both have line items. You capture line items in ",(0,i.jsx)(n.strong,{children:"Document Z"}),", and for some reason, you do not want to spend time correcting/extracting line items from ",(0,i.jsx)(n.strong,{children:"Document W"}),". Then, you can't have one unified queue for data capture. Load these documents in two different queues to maximize extraction performance."]}),(0,i.jsx)(n.p,{children:"\u26d4 Multiple queues are required when you have small overlaps in the extracted fields across different document types."})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Documents in unique scripts should be in separate queues (e.g., documents in Latin script should be in one queue, and documents in Cyrillic script in another)."}),"\n",(0,i.jsx)(n.li,{children:"Documents from different regions should be sent to separate queues to ensure correct date and number parsing."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);