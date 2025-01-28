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

## Import master data from S3

There are few differences from the SFTP imports (see above), but it is very similar.

:::warning

Please note, that the attribute `path` **starts without slash** (as opposed to the SFTP configuration).

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

### Using S3 Credentials

There is only one credential option for the `s3`. It consists of `Access Key ID` and `Secret Access Key`. For more information about these credentials and how to obtain it, see the official AWS documentation here: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

```json
{
  "type": "__change_me__",
  "access_key_id": "__change_me__",
  "secret_access_key": "__change_me__"
}
```

## Export to SFTP

Configuration example:

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
          "filename_template": "invoice_file-{annotation.id}" // No file extension for `document` export type!
        },
        {
          "type": "custom_format",
          "filename_template": "invoice_data-{annotation.id}.csv",
          "export_reference_key": "export_annotation_to_csv"
        }
      ]
    }
  ]
}
```

Notice the various `export_object_configurations` types, each having its own configuration. The supported types:

- `annotation_content`: exports data in a Rossum native format
- `document`: exports the original document
- `custom_format` exports custom data using the [custom format templating](../export-pipeline/custom-format-templating.md) extension

### Using SSH key

<ConfigurationSshKey />

### Using username and password

<ConfigurationUsernamePassword />

### Using dynamic SFTP folder

Configuration for a schema data point `sftp_folder` containing the appropriate address on the SFTP.

```json
{
  // …
  "export_rules": [
    {
      "path_to_directory": "/{sftp_folder}"
      // …
    }
  ]
}
```
