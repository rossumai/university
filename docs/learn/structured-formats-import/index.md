---
title: 'Structured formats import'
sidebar_position: 1
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

Structured formats import allows for importing and processing of non-visual documents such as JSON or XML files. It not only correctly extracts the information from these files, but also renders a minimalistic PDF representation for easier manual reviews.

## Installation

Structured formats import is a webhook maintained by Rossum. In order to use it, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Structured formats import`
   1. Trigger events: `Document content: Initialize, Started, Updated`
   1. Extension type: `Webhook`
   1. URL (see below)
1. Click **Create the webhook**.
1. Fill `Configuration` field (see [Configuration examples](./configuration-examples.md)

<WebhookEndpoints
  eu1="https://elis.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import"
  eu2="https://shared-eu2.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import"
  us="https://us.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import"
  jp="https://shared-jp.task-manager.rossum-ext.app/api/v1/tasks/structured-formats-import"
/>

## Basic usage

<WIP />

## Available configuration options

```json
{
  // Various independent configurations that can be conditionally triggered via `trigger_condition`:
  "configurations": [
    {
      "trigger_condition": {
        "file_type": "xml"
      },

      // Optional. Whether the original XML/JSON file should be split into smaller ones:
      "split_selectors": ["/RecordLabel/Productions/Production"],

      // Fields to be extracted from the source file and assigned to given datapoints:
      "fields": [
        {
          "schema_id": "document_id",

          // If many selectors are specified, they serve as a fallback list.
          "selectors": ["./Metadata/ID"]
        }
      ],

      // Optional specification of the original PDF file that should be extracted from the source
      // file (base64 encoded):
      "pdf_file": {
        "name_selectors": [
          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject/@filename"
        ],

        // Content should be base64 encoded:
        "content_selectors": [
          "cac:AdditionalDocumentReference/cac:Attachment/cbc:EmbeddedDocumentBinaryObject"
        ]
      }
    }
    // …
  ]
}
```
