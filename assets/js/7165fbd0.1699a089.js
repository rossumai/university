"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4519],{7481:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var t=s(5893),r=s(1151);const o=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Secrets:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "sftp",\n  "ssh_key": "-----BEGIN OPENSSH PRIVATE KEY-----\\nabcd\u2026wxyz\\n-----END OPENSSH PRIVATE KEY-----"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The easiest way to convert the SSH key to one-line format is to use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"awk '{printf \"%s\\\\n\", $0}' id_rsa_demo.txt\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}const p=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Secrets:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "sftp",\n  "password": "MySuperSecretPassword"\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const l={sidebar_position:1,title:"SFTP and S3 imports/exports: Configuration examples",sidebar_label:"Configuration examples"},m="Configuration examples",u={id:"learn/sftp-s3-import-export/configuration-examples",title:"SFTP and S3 imports/exports: Configuration examples",description:"Here you can find examples of the most common real-world use cases for exports and imports to/from SFTP and S3 extension.",source:"@site/docs/learn/sftp-s3-import-export/configuration-examples.md",sourceDirName:"learn/sftp-s3-import-export",slug:"/learn/sftp-s3-import-export/configuration-examples",permalink:"/docs/learn/sftp-s3-import-export/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/sftp-s3-import-export/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SFTP and S3 imports/exports: Configuration examples",sidebar_label:"Configuration examples"},sidebar:"learnSidebar",previous:{title:"SFTP and S3 imports/exports",permalink:"/docs/learn/sftp-s3-import-export/"},next:{title:"Single Sign-On (SSO)",permalink:"/docs/learn/sso/"}},x={},h=[{value:"Import documents from SFTP",id:"import-documents-from-sftp",level:2},{value:"Using SSH key",id:"using-ssh-key",level:3},...o,{value:"Using username and password",id:"using-username-and-password",level:3},...p,{value:"Import master data from SFTP",id:"import-master-data-from-sftp",level:2},{value:"Using SSH key",id:"using-ssh-key-1",level:3},...o,{value:"Using username and password",id:"using-username-and-password-1",level:3},...p,{value:"Export to SFTP",id:"export-to-sftp",level:2},{value:"Using SSH key",id:"using-ssh-key-2",level:3},...o,{value:"Using username and password",id:"using-username-and-password-2",level:3},...p];function f(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"})}),"\n",(0,t.jsx)(n.p,{children:"Here you can find examples of the most common real-world use cases for exports and imports to/from SFTP and S3 extension."}),"\n",(0,t.jsx)(n.h2,{id:"import-documents-from-sftp",children:"Import documents from SFTP"}),"\n",(0,t.jsx)(n.p,{children:"Configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "host": "sftp.example.com",\n    "port": "22",\n    "type": "sftp",\n    "username": "rossum-demo"\n  },\n  "import_rules": [\n    {\n      "path": "/documents",\n      "queue_id": 123456, // change accordingly\n      "result_actions": {\n        "failure": [\n          {\n            "path": "/documents/failed_imports",\n            "type": "move"\n          }\n        ],\n        "success": [\n          {\n            "path": "/documents/archive",\n            "type": "move"\n          }\n        ]\n      },\n      "file_match_regex": ".+"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-ssh-key",children:"Using SSH key"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h3,{id:"using-username-and-password",children:"Using username and password"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"import-master-data-from-sftp",children:"Import master data from SFTP"}),"\n",(0,t.jsx)(n.p,{children:"Configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "host": "sftp.example.com",\n    "port": "22",\n    "type": "sftp",\n    "username": "rossum-demo"\n  },\n  "import_rules": [\n    {\n      "dataset_name": "PURCHASE_ORDERS_v1",\n      "import_methods": {\n        "replace_method": {\n          "path": "/datasets",\n          "dynamic": false,\n          "file_format": "xlsx",\n          "file_match_regex": "PURCHASE_ORDERS\\\\.xlsx"\n        }\n      },\n      "result_actions": {\n        "failure": [\n          {\n            "path": "/datasets/failed_imports",\n            "type": "move"\n          }\n        ],\n        "success": [\n          {\n            "path": "/datasets/archive",\n            "type": "move"\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-ssh-key-1",children:"Using SSH key"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h3,{id:"using-username-and-password-1",children:"Using username and password"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"export-to-sftp",children:"Export to SFTP"}),"\n",(0,t.jsx)(n.p,{children:"Configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "host": "sftp.example.com",\n    "port": "22",\n    "type": "sftp",\n    "username": "rossum-demo"\n  },\n  "export_rules": [\n    {\n      "path_to_directory": "/export",\n      "export_object_configurations": [\n        {\n          "type": "annotation_content",\n          "format": "csv",\n          "filename_template": "invoice_data-{annotation.id}.csv"\n        },\n        {\n          "type": "document",\n          "filename_template": "invoice_file-{annotation.id}"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-ssh-key-2",children:"Using SSH key"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h3,{id:"using-username-and-password-2",children:"Using username and password"}),"\n",(0,t.jsx)(c,{})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(7294);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);