---
title: 'Export pipelines: Data value extractor'
sidebar_label: '4. Data value extractor'
sidebar_position: 4
---

import WebhookEndpoints from '../\_webhook_endpoints.md';

# Data value extractor

The Data Value Extractor serves to extract data from a document that is linked in annotation's metadata. The main use case is to process data from [REST API Export](./rest-api-export.md) as a part of the [Export Pipeline](./index.md).

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

<WebhookEndpoints
  eu1="https://elis.data-value-extractor.rossum-ext.app/"
  eu2="https://shared-eu2.data-value-extractor.rossum-ext.app/"
  us="https://us.data-value-extractor.rossum-ext.app/"
  jp="https://shared-jp.data-value-extractor.rossum-ext.app/"
/>

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

More complex configuration example using extraction from two different `source_reference_key` and two `extract_rules` in the second one. There is also the `condition` used, which is reference to a document ID in the annotation which triggers the execution of the extraction.

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
      "condition": "extraction_trigger",
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

## Parameters

### Extract Object

The extract object consists of the following parameters:

| Attribute              | Type   | Description                                                                                                                                                                           |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `format`               | str    | File format. Currently, only `json` value is supported.                                                                                                                               |
| `condition`            | str    | Reference to `annotation.content` `schema_id` that holds evaluated value. When it's empty or "false" (case insensitive), this section won't be evaluated. Otherwise, it will proceed. |
| `source_reference_key` | str    | Relation key into metadata for source document.                                                                                                                                       |
| `extract_rules`        | object | Rules to update annotation's content.                                                                                                                                                 |

The `extract_rules` object defines how values are extracted and stored:

| Attribute          | Type | Description                                                                                                     |
| ------------------ | ---- | --------------------------------------------------------------------------------------------------------------- |
| `value_path`       | str  | Query to get the value from the referred document. In case of `format=json`, it should be in `jmespath` syntax. |
| `target_schema_id` | str  | Annotation's `schema_id` to be updated.                                                                         |
