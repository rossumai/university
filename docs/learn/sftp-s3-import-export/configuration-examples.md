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


## Import from S3

There are few diferences from the SFTP, but it is very similar.

### S3 Credentials

There is only one credential option for the `s3`. It consist of `Access Key ID` and `Secret Access Key`. For more information about these credentials and how to obtain it, see the official AWS documentation here: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

#### Secret Schema

```json
{
  "type": "__change_me__",
  "access_key_id": "__change_me__",
  "secret_access_key": "__change_me__"
}
```

##### Import configuration for S3

:::warning
Please not, that the attribute `path` **starts without slash** (as the opposite from SFTP configuration)
:::
```json
{
  "credentials": {
    "type": "s3",
    "bucket_name": "s3-master-data-bucket"
  },
  "import_rules": [
    {
      "dataset_name": "suppliers",
      "import_methods": {
        "replace_method": {
          "path": "datasets/inbox",
          "file_format": "csv",
          "file_match_regex": "suppliers\\.csv",
          "encoding": "windows-1250"
        }
      },
      "result_actions": {
        "failure": [
          {
            "path": "datasets/failed_imports",
            "type": "move"
          }
        ],
        "success": [
          {
            "path": "datasets/archive",
            "type": "move"
          }
        ]
      }
    }
  ]
}
```
