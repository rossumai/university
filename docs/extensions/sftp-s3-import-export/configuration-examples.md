---
sidebar_position: 1
title: 'Configuration examples'
---

Here you can find examples of the most common real-world use cases for Export To SFTP extension.

## Export to SFTP using SSH key

Configuration:

```json
{
  "credentials": {
    "host": "sftp.example.com",
    "port": "22",
    "type": "sftp",
    "username": "rossum-demo"
  },
  "export_rules": [
    {
      "path_to_directory": "/upload",
      "export_object_configurations": [
        {
          "type": "annotation_content",
          "format": "csv",
          "filename_template": "invoice_data-{annotation.id}.csv"
        },
        {
          "type": "document",
          "filename_template": "invoice_file-{annotation.id}"
        }
      ]
    }
  ]
}
```

Secrets:

```json
{
  "type": "sftp",
  "ssh_key": "-----BEGIN OPENSSH PRIVATE KEY-----\nabcd…wxyz\n-----END OPENSSH PRIVATE KEY-----"
}
```

The easiest way to convert the SSH key to one-line format is to use the following command:

```bash
awk '{printf "%s\\n", $0}' id_rsa_demo.txt
```

## Export to SFTP using username and password

Configuration:

```json
{
  "credentials": {
    "host": "sftp.example.com",
    "port": "22",
    "type": "sftp",
    "username": "rossum-demo"
  },
  "export_rules": [
    {
      "path_to_directory": "/upload",
      "export_object_configurations": [
        {
          "type": "annotation_content",
          "format": "csv",
          "filename_template": "invoice_data-{annotation.id}.csv"
        },
        {
          "type": "document",
          "filename_template": "invoice_file-{annotation.id}"
        }
      ]
    }
  ]
}
```

Secrets:

```json
{
  "type": "sftp",
  "password": "MySuperSecretPassword"
}
```
