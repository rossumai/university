"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[6013],{7600:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(5893),t=i(1151);const o={title:"Common Errors",sidebar_position:4},s=void 0,a={id:"integrations/netsuite/common-errors",title:"Common Errors",description:"List of common errors when integrating with NetSuite. Alphabetically sorted.",source:"@site/docs/integrations/netsuite/common-errors.md",sourceDirName:"integrations/netsuite",slug:"/integrations/netsuite/common-errors",permalink:"/cookbook/docs/integrations/netsuite/common-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/integrations/netsuite/common-errors.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Common Errors",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Export webhook",permalink:"/cookbook/docs/integrations/netsuite/export-webhook"}},c={},l=[{value:"EXTERNALID_REQD - This operation requires a value for externalId.",id:"externalid_reqd---this-operation-requires-a-value-for-externalid",level:2},{value:"FIELD_PARAM_REQD - Please enter a value for entity",id:"field_param_reqd---please-enter-a-value-for-entity",level:2},{value:"Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need the &#39;Transactions -&gt; Enter Vendor Credits&#39; permission to access this page. Please contact your account administrator.",id:"error-in-upsert-insufficient_permission---permission-violation-you-need-the-transactions---enter-vendor-credits-permission-to-access-this-page-please-contact-your-account-administrator",level:2},{value:"INSUFFICIENT_PERMISSION - Permission Violation: You need the &#39;Transactions -&gt; Bills&#39; permission to access this page. Please contact your account administrator.",id:"insufficient_permission---permission-violation-you-need-the-transactions---bills-permission-to-access-this-page-please-contact-your-account-administrator",level:2},{value:"INSUFFICIENT_PERMISSION - Permission Violation: You need a higher level of the &#39;Transactions -&gt; Bills&#39; permission to access this page. Please contact your account administrator.",id:"insufficient_permission---permission-violation-you-need-a-higher-level-of-the-transactions---bills-permission-to-access-this-page-please-contact-your-account-administrator",level:2},{value:"INVALID_KEY_OR_REF - Invalid entity reference key 401020.",id:"invalid_key_or_ref---invalid-entity-reference-key-401020",level:2},{value:"INVALID_KEY_OR_REF - Invalid subsidiary reference key 1 for entity 1929.",id:"invalid_key_or_ref---invalid-subsidiary-reference-key-1-for-entity-1929",level:2},{value:"USER_ERROR - Please enter value(s) for: Location",id:"user_error---please-enter-values-for-location",level:2},{value:"USER_ERROR - You must enter at least one line item for this transaction.",id:"user_error---you-must-enter-at-least-one-line-item-for-this-transaction",level:2},{value:"org.xml.sax.SAXException: itemList on {urn.transactions.webservices.netsuite.com}VendorCredit must be of type {urn.transactions.webservices.netsuite.com}VendorCreditItemList",id:"orgxmlsaxsaxexception-itemlist-on-urntransactionswebservicesnetsuitecomvendorcredit-must-be-of-type-urntransactionswebservicesnetsuitecomvendorcredititemlist",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"List of common errors when integrating with NetSuite. Alphabetically sorted."}),"\n",(0,r.jsx)(n.h2,{id:"externalid_reqd---this-operation-requires-a-value-for-externalid",children:"EXTERNALID_REQD - This operation requires a value for externalId."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: EXTERNALID_REQD - This operation requires  a value for externalId.\n"})}),"\n",(0,r.jsx)(n.p,{children:"External ID is missing. Fix it by creating it, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "export_config": {\n    "mapping": {\n      "VendorBill": {\n        "externalId": {\n          "_schema_id": "ns_vb_external_id_generated",\n          "_value_type": "string",\n          "_record_type": "simple"\n        },\n        // ...\n        "_record_type": "VendorBill"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"field_param_reqd---please-enter-a-value-for-entity",children:"FIELD_PARAM_REQD - Please enter a value for entity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: FIELD_PARAM_REQD - Please enter a value for entity\n"})}),"\n",(0,r.jsx)(n.p,{children:"Entity field (vendor) is missing. Correct this error by setting the entity correctly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "export_config": {\n    "mapping": {\n      "VendorBill": {\n        "entity": {\n          "_schema_id": "ns_vendor_match",\n          "_value_type": "string",\n          "_record_type": "RecordRef$vendor"\n        },\n        // ...\n        "_record_type": "VendorBill"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"error-in-upsert-insufficient_permission---permission-violation-you-need-the-transactions---enter-vendor-credits-permission-to-access-this-page-please-contact-your-account-administrator",children:"Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need the 'Transactions -> Enter Vendor Credits' permission to access this page. Please contact your account administrator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorCredit', 'value': [...], 'extra_modifiers': {}}]} - this exception occurred: Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need  the 'Transactions -> Enter Vendor Credits' permission to access this page. Please contact your account administrator.\n"})}),"\n",(0,r.jsx)(n.p,{children:'Follow the error message and configure correct permissions for your role ("Enter Vendor Credits").'}),"\n",(0,r.jsx)(n.h2,{id:"insufficient_permission---permission-violation-you-need-the-transactions---bills-permission-to-access-this-page-please-contact-your-account-administrator",children:"INSUFFICIENT_PERMISSION - Permission Violation: You need the 'Transactions -> Bills' permission to access this page. Please contact your account administrator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need  the 'Transactions -> Bills' permission to access this page. Please contact your account administrator.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Adjust NetSuite role permissions for your integration role to include ",(0,r.jsx)(n.strong,{children:"Bills"})," (under ",(0,r.jsx)(n.strong,{children:"Transactions"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"insufficient_permission---permission-violation-you-need-a-higher-level-of-the-transactions---bills-permission-to-access-this-page-please-contact-your-account-administrator",children:"INSUFFICIENT_PERMISSION - Permission Violation: You need a higher level of the 'Transactions -> Bills' permission to access this page. Please contact your account administrator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need a higher level of the 'Transactions -> Bills' permission to access this page. Please contact your account administrator.\n"})}),"\n",(0,r.jsx)(n.p,{children:"You have permissions to access Bills but not to create them (probably). Increase the level of permissions (from View to Full, for example)."}),"\n",(0,r.jsx)(n.h2,{id:"invalid_key_or_ref---invalid-entity-reference-key-401020",children:"INVALID_KEY_OR_REF - Invalid entity reference key 401020."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INVALID_KEY_OR_REF - Invalid entity reference key 401020.\n"})}),"\n",(0,r.jsx)(n.p,{children:"Entity (vendor) with ID 401020 does not exist in NetSuite. Maybe wrong ID?"}),"\n",(0,r.jsx)(n.h2,{id:"invalid_key_or_ref---invalid-subsidiary-reference-key-1-for-entity-1929",children:"INVALID_KEY_OR_REF - Invalid subsidiary reference key 1 for entity 1929."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INVALID_KEY_OR_REF - Invalid subsidiary reference key 1 for entity 1929.\n"})}),"\n",(0,r.jsx)(n.p,{children:'There are two incompatible records: subsidiary with internal ID "1" and entity with internal ID "1929". This error can be resolved by changing the NetSuite configuration so that the subsidiary is allowed for the said entity.'}),"\n",(0,r.jsx)(n.h2,{id:"user_error---please-enter-values-for-location",children:"USER_ERROR - Please enter value(s) for: Location"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: USER_ERROR - Please enter value(s) for: Location\n"})}),"\n",(0,r.jsx)(n.p,{children:"Location is required for the creation of VendorBill. Here is how to set it up using Rossum.ai integration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "export_config": {\n    "mapping": {\n      "VendorBill": {\n        "location": {\n          "_schema_id": "ns_location",\n          "_value_type": "string",\n          "_record_type": "RecordRef$location"\n        },\n        "_record_type": "VendorBill"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"user_error---you-must-enter-at-least-one-line-item-for-this-transaction",children:"USER_ERROR - You must enter at least one line item for this transaction."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: USER_ERROR - You must enter at least one line item for this transaction.\n"})}),"\n",(0,r.jsx)(n.p,{children:"NetSuite requires at least one line item at all times. There was no line item when creating the VendorBill. Here is how to map line items using Rossum.ai integration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "export_config": {\n    "mapping": {\n      "VendorBill": {\n        "itemList": {\n          "item": {\n            "item": {\n              "_schema_id": "ns_item_match",\n              "_value_type": "string",\n              "_record_type": "RecordRef$inventoryItem"\n            },\n            "_record_type": "VendorBillItem"\n          },\n          "_schema_id": "line_items",\n          "_record_type": "VendorBillItemList"\n        },\n        // ...\n        "_record_type": "VendorBill"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"orgxmlsaxsaxexception-itemlist-on-urntransactionswebservicesnetsuitecomvendorcredit-must-be-of-type-urntransactionswebservicesnetsuitecomvendorcredititemlist",children:["org.xml.sax.SAXException: itemList on {urn",":purchases_2022_1",".transactions.webservices.netsuite.com}VendorCredit must be of type {urn",":purchases_2022_1",".transactions.webservices.netsuite.com}VendorCreditItemList"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"While creating record {'type': 'VendorCredit', 'value': [...]} - this exception occurred: org.xml.sax.SAXException: itemList on {urn:purchases_2022_1.transactions.webservices.netsuite.com}VendorCredit must be of type {urn:purchases_2022_1.transactions.webservices.netsuite.com}VendorCreditItemList\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The record type specific for the item list on VendorCredit is invalid and should be ",(0,r.jsx)(n.code,{children:"VendorCreditItemList"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(7294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);