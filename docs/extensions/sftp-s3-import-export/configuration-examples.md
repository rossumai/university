---
sidebar_position: 1
title: 'SFTP and S3 imports/exports: Configuration examples'
sidebar_label: 'Configuration examples'
---

import ConfigurationSshKey from './\_configuration_ssh_key.md';
import ConfigurationUsernamePassword from './\_configuration_username_password.md';

# Configuration examples

Here you can find examples of the most common real-world use cases for exports and imports to/from SFTP and S3 extension.

## Import documents from SFTP

Configuration:

```json
{
  "credentials": {
    "host": "sftp.example.com",
    "port": "22",
    "type": "sftp",
    "username": "rossum-demo"
  },
  "import_rules": [
    {
      "path": "/documents",
      "queue_id": 123456, // change accordingly
      "result_actions": {
        "failure": [
          {
            "path": "/documents/failed_imports",
            "type": "move"
          }
        ],
        "success": [
          {
            "path": "/documents/archive",
            "type": "move"
          }
        ]
      },
      "file_match_regex": ".+"
    }
  ]
}
```

### Using SSH key

<ConfigurationSshKey />

### Using username and password

<ConfigurationUsernamePassword />

## Import master data from SFTP

Configuration:

```json
{
  "credentials": {
    "host": "sftp.example.com",
    "port": "22",
    "type": "sftp",
    "username": "rossum-demo"
  },
  "import_rules": [
    {
      "dataset_name": "PURCHASE_ORDERS_v1",
      "import_methods": {
        "replace_method": {
          "path": "/datasets",
          "dynamic": false,
          "file_format": "xlsx",
          "file_match_regex": "PURCHASE_ORDERS\\.xlsx"
        }
      },
      "result_actions": {
        "failure": [
          {
            "path": "/datasets/failed_imports",
            "type": "move"
          }
        ],
        "success": [
          {
            "path": "/datasets/archive",
            "type": "move"
          }
        ]
      }
    }
  ]
}
```

### Using SSH key

<ConfigurationSshKey />

### Using username and password

<ConfigurationUsernamePassword />

## Export to SFTP

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
      "path_to_directory": "/export",
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

### Using SSH key

<ConfigurationSshKey />

### Using username and password

<ConfigurationUsernamePassword />
