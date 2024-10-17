"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[9269],{9112:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(4848),a=n(8453);const s={sidebar_position:1,sidebar_label:"Formula fields",title:"Rossum Formulas: Formula fields"},l="Formula fields",o={id:"learn/rossum-formulas/formula-fields",title:"Rossum Formulas: Formula fields",description:"Intro",source:"@site/docs/learn/rossum-formulas/formula-fields.md",sourceDirName:"learn/rossum-formulas",slug:"/learn/rossum-formulas/formula-fields",permalink:"/docs/learn/rossum-formulas/formula-fields",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/rossum-formulas/formula-fields.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Formula fields",title:"Rossum Formulas: Formula fields"},sidebar:"learnSidebar",previous:{title:"Rossum Formulas",permalink:"/docs/learn/rossum-formulas/"},next:{title:"Serverless functions",permalink:"/docs/learn/rossum-formulas/serverless-functions"}},r={},d=[{value:"Intro",id:"intro",level:2},{value:"Basic information",id:"basic-information",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Field naming and management",id:"field-naming-and-management",level:3},{value:"Wide variety of functions",id:"wide-variety-of-functions",level:3},{value:"Access document object information in formula field",id:"access-document-object-information-in-formula-field",level:3},{value:"When to Use Formula Fields vs. Serverless Functions",id:"when-to-use-formula-fields-vs-serverless-functions",level:3},{value:"Examples of common formula fields",id:"examples-of-common-formula-fields",level:2},{value:"Access other table and its first row values",id:"access-other-table-and-its-first-row-values",level:3},{value:"Copy fields conditionally",id:"copy-fields-conditionally",level:3},{value:"Find first non-empty line item value",id:"find-first-non-empty-line-item-value",level:3},{value:"Generate NetSuite external IDs",id:"generate-netsuite-external-ids",level:3},{value:"Get line item index",id:"get-line-item-index",level:3},{value:"Normalize field value",id:"normalize-field-value",level:3},{value:"Sum line item values",id:"sum-line-item-values",level:3},{value:"Validations",id:"validations",level:3},{value:"Date validation",id:"date-validation",level:3},{value:"HTML formatting",id:"html-formatting",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"formula-fields",children:"Formula fields"})}),"\n",(0,t.jsx)(i.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(i.p,{children:"Formula fields in Rossum enable you to easily transform your data directly within the app. Whether you need to normalize data, perform calculations, or handle text operations, formula fields provide the flexibility to set values based on your custom logic."}),"\n",(0,t.jsx)(i.p,{children:"For most tasks, Rossum\u2019s Copilot handles everything seamlessly without needing code, and we recommend using it for the best results. However, if you want to dive deeper into custom logic, formula fields support Python-based coding with simple examples to get you started."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["This powerful feature is available on the Business plan and above. Existing customers interested in using formula fields can reach out to our support team at ",(0,t.jsx)(i.a,{href:"mailto:support@rossum.ai",children:"support@rossum.ai"})," for assistance."]})}),"\n",(0,t.jsx)(i.h2,{id:"basic-information",children:"Basic information"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Formula Fields can run any Python code including its ",(0,t.jsx)(i.a,{href:"https://docs.python.org/3/library/index.html",children:"Standard Library modules"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Additionally, the runtime is enriched with Rossum-specific functions and variables"}),"\n",(0,t.jsx)(i.li,{children:"They are executed in an AWS lambda"}),"\n",(0,t.jsx)(i.li,{children:"Formula Fields are automatically executed before and after each extension."}),"\n",(0,t.jsx)(i.li,{children:"Extensions cannot overwrite Formula Fields value (create a separate \u201cdata\u201d field instead)."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsx)(i.h3,{id:"field-naming-and-management",children:"Field naming and management"}),"\n",(0,t.jsxs)(i.p,{children:["When you need to create a normalized version of a field like ",(0,t.jsx)(i.code,{children:"document_id"}),", it's recommended to create a new field, such as ",(0,t.jsx)(i.code,{children:"document_id_normalized"}),". Use the formula field to apply the normalization logic. This approach allows you to preserve the original value while keeping the normalized result in a separate field, making it easier to manage both."]}),"\n",(0,t.jsx)(i.p,{children:"For better organization, it's also a good practice to group these related fields together, ensuring they are logically aligned and easy to find."}),"\n",(0,t.jsx)(i.h3,{id:"wide-variety-of-functions",children:"Wide variety of functions"}),"\n",(0,t.jsx)(i.p,{children:"As mentioned earlier, formula fields allow you to work with Python, enabling operations similar to those in serverless functions. However, formula fields are much simpler to maintain and manage, offering a streamlined approach for straightforward tasks."}),"\n",(0,t.jsx)(i.h3,{id:"access-document-object-information-in-formula-field",children:"Access document object information in formula field"}),"\n",(0,t.jsx)(i.p,{children:"Unfortunately right now there is no better way than create a simple serverless function to store desired information to custom field and continue with that one in formula field."}),"\n",(0,t.jsx)(i.h3,{id:"when-to-use-formula-fields-vs-serverless-functions",children:"When to Use Formula Fields vs. Serverless Functions"}),"\n",(0,t.jsx)(i.p,{children:"Formula fields are ideal for simple tasks such as data normalization or creating new fields based on existing ones. For more complex operations, serverless functions may be more appropriate. Situations where you should prefer serverless functions include:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["There is a limit of ",(0,t.jsx)(i.strong,{children:"2000"})," characters per formula fields which declares the highest complexity of the formula fields."]}),"\n",(0,t.jsx)(i.li,{children:"You cannot access the document object from within the formula function."}),"\n",(0,t.jsx)(i.li,{children:"Formula Fields cannot and should not make HTTP requests (to Rossum API or elsewhere)."}),"\n",(0,t.jsx)(i.li,{children:"Formula Fields are executed only within the scope the specific field; for many rows (200+), the execution time may be too long."}),"\n",(0,t.jsx)(i.li,{children:"You need to set annotation status (e.g., \u201crejected\u201d, \u201cpostponed\u201d, etc.), you have to use Serverless functions."}),"\n",(0,t.jsx)(i.li,{children:"You want to edit multiple fields at the same time"}),"\n",(0,t.jsx)(i.li,{children:"Manipulate enums"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"An additional advantage of formula fields is that they are stored at the schema level, so when you copy a queue, all associated formula fields are copied automatically. In contrast, serverless functions must be configured manually and re-linked to new queues after being copied."}),"\n",(0,t.jsx)(i.h2,{id:"examples-of-common-formula-fields",children:"Examples of common formula fields"}),"\n",(0,t.jsx)(i.h3,{id:"access-other-table-and-its-first-row-values",children:"Access other table and its first row values"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:"field.table_name[0].column_name\n"})}),"\n",(0,t.jsx)(i.h3,{id:"copy-fields-conditionally",children:"Copy fields conditionally"}),"\n",(0,t.jsxs)(i.p,{children:["Copy ",(0,t.jsx)(i.code,{children:"order_id"})," into another field but prioritize ",(0,t.jsx)(i.code,{children:"order_id_manual"})," datapoint if it exists:"]}),"\n",(0,t.jsxs)(i.p,{children:["New formula field ",(0,t.jsx)(i.code,{children:"order_id_normalized"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:"field.order_id_manual if not is_empty(field.order_id_manual) else field.order_id\n"})}),"\n",(0,t.jsx)(i.h3,{id:"find-first-non-empty-line-item-value",children:"Find first non-empty line item value"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:'next((item for item in field.item_code.all_values if item), "")\n'})}),"\n",(0,t.jsx)(i.h3,{id:"generate-netsuite-external-ids",children:"Generate NetSuite external IDs"}),"\n",(0,t.jsxs)(i.p,{children:["Create external ID needed by NetSuite for ",(0,t.jsx)(i.em,{children:"VendorBill"})," and ",(0,t.jsx)(i.em,{children:"VendorCredit"})," records:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:'# Create an external ID by combining document ID and entity (vendor) match. This is to make sure\n# that different vendors with identical document numbering are not matched to the same NetSuite\n# record (same NetSuite external ID).\nexternal_id = f"{field.document_id}__{field.order_match__entity_internalId}"\n\n# Construct the final result by concatenating (and normalizing) Rossum prefix, document type, and external ID:\nsubstitute(r"[^a-zA-Z\\d\\-_]", "", f"__rossum__{field.document_type}__{external_id}".lower())\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This is typically necessary when ",(0,t.jsx)(i.a,{href:"../netsuite/export-configuration#vendor-bills-invoices",children:"exporting records into NetSuite"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"get-line-item-index",children:"Get line item index"}),"\n",(0,t.jsx)(i.p,{children:"Returns line item number (indexed from 0):"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:"field._index\n"})}),"\n",(0,t.jsx)(i.h3,{id:"normalize-field-value",children:"Normalize field value"}),"\n",(0,t.jsx)(i.p,{children:'Remove non-alphanumeric characters (except "-" and "_"):'}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:'substitute(r"[^a-zA-Z\\d\\-_]", "", field.order_id)\n'})}),"\n",(0,t.jsx)(i.h3,{id:"sum-line-item-values",children:"Sum line item values"}),"\n",(0,t.jsxs)(i.p,{children:["Sum the values of ",(0,t.jsx)(i.code,{children:"item_amount_total"}),". Use ",(0,t.jsx)(i.code,{children:"0"})," if the field is empty."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:"sum(default_to(field.item_amount_total.all_values, 0))\n"})}),"\n",(0,t.jsx)(i.h3,{id:"validations",children:"Validations"}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["Consider using a ",(0,t.jsx)(i.a,{href:"/docs/learn/rossum-formulas/serverless-functions",children:"Serverless function"})," as a better place to perform such validations. Internally, we consider this technique deprecated, albeit still valid. Formula fields should not affect behavior of other fields indirectly as it makes the overall solution less readable and predictable."]})}),"\n",(0,t.jsxs)(i.p,{children:["To validate line items, create ",(0,t.jsx)(i.code,{children:"item_validator"})," formula field with the following code:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:'import math\n\nitem_total_base_calculated = field.item_quantity * field.item_amount_base\n\nif not math.isclose(item_total_base_calculated, field.item_total_base, rel_tol=0.004):\n    item_total_base_diff = abs(item_total_base_calculated - field.item_total_base)\n    message = (f"The totals do not match. Expected total: {field.item_total_base}, "\n               f"Calculated total: {item_total_base_calculated}, "\n               f"Difference: {item_total_base_diff}")\n\n    show_error(message, field.item_quantity)\n    show_error(message, field.item_amount_base)\n    show_error(message, field.item_total_base)\n'})}),"\n",(0,t.jsx)(i.h3,{id:"date-validation",children:"Date validation"}),"\n",(0,t.jsxs)(i.p,{children:["This function, ",(0,t.jsx)(i.code,{children:"check_invoice_date"}),", checks if the invoice date (passed as ",(0,t.jsx)(i.code,{children:"document_date"}),") is more than 90 days old compared to the current date. It calculates the difference in days between the two dates and, if the document is older than 90 days, triggers a warning message. This message notifies the user of the outdated date and blocks further automation until the issue is resolved."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-py",children:'# import fo the datetime module is not necessary as it is already imported by default\nimport datetime\ndef check_invoice_date(document_date):\n    # Get the current date\n    current_date = datetime.datetime.now().date()\n\n    # Calculate the difference in days between the current date and the document date\n    days_difference = (current_date - document_date).days\n\n    # Check if the document date is older than 90 days\n    if days_difference > 90:\n        # Raise a warning and set an automation blocker\n        warning_message = f"Warning: Invoice date is older than 90 days ({days_difference} days). Please confirm the date."\n        automation_blocker(warning_message, field.date_issue)\n        show_warning(warning_message)\n\ncheck_invoice_date(field.date_issue)\n'})}),"\n",(0,t.jsx)(i.h3,{id:"html-formatting",children:"HTML formatting"}),"\n",(0,t.jsx)(i.p,{children:"Basic HTML formatting is available inside show_warning() and similar functions.\nYou can even paste links (e.g, to the ERP system)."}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'show_warning("""\n<ul>\n    <li>I am in a list!</li>\n    <li>Me too!</li>\n</ul>\n""")\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Will render as:\n",(0,t.jsx)(i.img,{alt:"Warning example",src:n(9089).A+"",width:"899",height:"221"})]})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9089:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/warning_message-f412da8cad68104721c552d96f06de8b.png"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var t=n(6540);const a={},s=t.createContext(a);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);