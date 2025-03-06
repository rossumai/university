---
title: 'Export pipelines: Data value extractor'
sidebar_label: '4. Data value extractor'
sidebar_position: 4
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# Data value extractor

## Installation

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Data value extractor`
   1. Trigger events: `Export`
   1. Extension type: `Webhook`
   1. URL (see below)
1. In "Advanced settings" select **Token owner** (should have Admin access)
1. Click **Create the webhook**.

<WIP />

<WebhookEndpoints
  eu1="https://elis.data-value-extractor.rossum-ext.app/"
  eu2="https://shared-eu2.data-value-extractor.rossum-ext.app/"
  us="https://us.data-value-extractor.rossum-ext.app/"
  jp="https://shared-jp.data-value-extractor.rossum-ext.app/"
/>

## Basic usage

The Data Value Extractor serves to extract data from a document that is linked in annotation's metadata. The main use case is to process data from [REST API Export](https://rossum.university/docs/learn/export-pipeline/rest-api-export) as a part of the [Export Pipeline](https://rossum.university/docs/learn/export-pipeline).

## Available configuration options

Simple extraction example.

```json
{
  "extract": [
    {
      "format": "json",
      "source_reference_key": "ifs_export_reply_payload",
      "extract_rules": [
        {
          "value_path": "MessageId[0].value",
          "target_schema_id": "ifs_reply_message_id"
        }
      ]
    }
  ]
}
```

More complex configuration example using extraction from two different `source_reference_key` and two `extract_rules` in the second one.

```json
{
  "extract": [
    {
      "format": "json",
      "extract_rules": [
        {
          "value_path": "doc_id",
          "target_schema_id": "erp_doc_id"
        }
      ],
      "source_reference_key": "api_xml_export_reply_payload"
    },
    {
      "format": "json",
      "extract_rules": [
        {
          "value_path": "status_code",
          "target_schema_id": "erp_api_status_code"
        },
        {
          "value_path": "headers.etag",
          "target_schema_id": "erp_api_etag"
        }
      ],
      "source_reference_key": "api_xml_export_reply_headers"
    }
  ]
}
```

Currently only `json` format is supported.

- `value_path` is the jmespath to the desired place of the response (be it headers or body). Headers are stored in `json` format.
- `target_schema_id` is the schema_id of the annotation you are exporting, where the data will be stored and thus available for further extensions in the export pipeline (reference).
- `source_reference_key` is the reference key for the stored data in annotation's metadata
