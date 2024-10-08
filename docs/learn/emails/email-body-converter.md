---
sidebar_position: 2
sidebar_label: 'Email body converter'
title: 'Emails & email ingestion: Email body converter'
---

import WebhookEndpoints from '../\_webhook_endpoints.md';

# Email body converter

A simple extension that can convert the email HTML body into a PDF and upload it to a queue as a new document.

An additional feature is that it can also convert HTML attachments into PDFs.

The original API endpoint documentation can be found [here](https://elis.rossum.ai/svc/email-converter/api/redoc).

## Installation

Email body converter is a webhook maintained by Rossum. To use it, follow these steps:

1. Log in to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill in the following fields:
   1. Name: `Email body converter`
   1. Trigger events: `email.received`
   1. Extension type: `Webhook`
   1. URL (see below)
   1. In "Advanced settings" select **Token owner** (should have Admin access)
1. Click **Create the webhook**.
1. Fill in the `Configuration` field. See [Available configuration options](#available-configuration-options) below.

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/email-converter/api/v1/convert"
  us="https://us.app.rossum.ai/svc/email-converter/api/v1/convert"
/>

## Available configuration options

```json
{
  // Each object in the `configurations` list represents a specific configuration (distinguished by
  // the queue IDs).
  "configurations": [
    {
      // Required! List of queue IDs this configuration applies to. A single configuration can be
      // used for multiple queues, specified in this list.
      "queue_ids": [172636],

      // Minimum number of characters in the email body to convert it to PDF. Default is 0.
      "minimal_email_character_count": 5,

      // Skip conversion if supported files are present (`true` to skip, `false` to convert the
      // email body to PDF). Supported files include email attachments supported by Rossum and any
      // additional files converted to PDF as part of the webhook call (e.g., HTML attachments
      // converted to PDF). Default is `false`.
      "skip_if_supported_files_present": false,

      // Optional. List of attachment types to convert to PDF. Supported values: "html", "txt"
      "convert_attachments": ["html", "txt"],

      // Optional. Specifies the style for TXT files, which are first converted to HTML and then
      // to PDF. This configuration is added as an HTML style tag to affect the appearance of
      // the TXT in the converted PDF.
      "txt_style": "@page { size: letter landscape; margin: 2cm; } pre { white-space: pre-wrap; }"
    }
  ]
}
```
