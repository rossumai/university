"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[197],{720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"learn/deprecated/index","title":"Deprecated features","description":"This page contains old articles, mostly consisting of deprecated extensions. We keep them here for backward compatibility purposes since many of our customers still use them.","source":"@site/docs/learn/deprecated/index.md","sourceDirName":"learn/deprecated","slug":"/learn/deprecated/","permalink":"/docs/learn/deprecated/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/deprecated/index.md","tags":[],"version":"current","sidebarPosition":999,"frontMatter":{"title":"Deprecated features","sidebar_position":999},"sidebar":"learnSidebar","previous":{"title":"Export configuration","permalink":"/docs/learn/workday/export-configuration"},"next":{"title":"Find & Replace Values","permalink":"/docs/learn/find-replace-values"}}');var s=n(4848),o=n(8453),i=n(3514);const a={title:"Deprecated features",sidebar_position:999},c=void 0,l={},u=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Deprecated",type:"danger",children:[(0,s.jsx)(t.p,{children:"This page contains old articles, mostly consisting of deprecated extensions. We keep them here for backward compatibility purposes since many of our customers still use them."}),(0,s.jsxs)(t.p,{children:["Note that deprecated functionality won't receive any further updates and is likely to be completely removed in the future. Please consider using other available alternatives or contacting ",(0,s.jsx)(t.a,{href:"mailto:support@rossum.ai",children:"support@rossum.ai"})," for further assistance."]})]}),"\n",(0,s.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>y});n(6540);var r=n(4164),s=n(6972),o=n(8774),i=n(5846),a=n(6654),c=n(1312),l=n(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),s=n(4586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);