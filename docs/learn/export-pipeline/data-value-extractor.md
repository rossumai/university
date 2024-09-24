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

The Data Value Extractor serves to extract data from a document that is linked in annotation's metadata. The main use case is to process data from (reference rest-api-export) as a part of (reference export-pipeline).

## Available configuration options

```json
{
  "extract": [
    {
      "format": "json",
      "extract_rules": [
        {
          "value_path": "status_code",
          "target_schema_id": "api1_status_code"
        }
      ],
      "source_reference_key": "export_reply_headers"
    },
    {
      "format": "json",
      "extract_rules": [
        {
          "value_path": "id",
          "target_schema_id": "coupa_invoice_id"
        }
      ],
      "source_reference_key": "export_reply_payload"
    }
  ]
}
```

Currently only `json` format is supported.

- `value_path` is the jmespath to the desired place of the response (be it headers or body). Headers are stored in `json` format.
- `target_schema_id` is the schema_id of the annotation you are exporting, where the data will be stored and thus available for further extensions in the export pipeline (reference).
- `source_reference_key` is the reference key for the stored data in annotation's metadata
