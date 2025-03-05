---
title: 'Full page search'
sidebar_position: 1
---

import RossumInternalOnly from '../\_rossum_internal_only.md';
import WebhookEndpoints from '../\_webhook_endpoints.md';

# Full page search

This extension searches defined keywords in the full page content and sets a target field value if a match is found.

<RossumInternalOnly url="https://rossumai.atlassian.net/wiki/x/IgCW6g" />

## Installation

**Full page search** extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Full page search`
   1. Trigger events: `Initialize, Started, Updated`
   1. Extension type: `Webhook`
   1. URL (see below)
1. In "Advanced settings" select **Token owner** (should have Admin access)
1. Click **Create the webhook**.

<WebhookEndpoints
  eu1="https://elis.full-page-search.rossum-ext.app/"
  eu2="https://shared-eu2.full-page-search.rossum-ext.app/"
  us="https://us.full-page-search.rossum-ext.app/"
  jp="https://shared-jp.full-page-search.rossum-ext.app/"
/>

## Configuration examples

```json
{
  "configurations": [
    {
      // See: https://elis.rossum.ai/api/docs/#get-page-spatial-data
      "granularity": "lines",
      "target_field": "is_credit_note",
      "target_value": "Y",

      // Note that the possible values are case-insensitive.
      "possible_values": ["credit invoice", "credit note", "credit nota"]
    },
    {
      "granularity": "words",
      "target_field": "is_kredietbeperking",
      "target_value": "Y",
      "possible_values": ["kredietbeperking"]
    }
  ]
}
```

## Known limitations

Note that the [`page_numbers` parameter](https://elis.rossum.ai/api/docs/#get-page-spatial-data) cannot be specified. Only the first 20 pages of a document are used. In other words, if the text is on page 21 or higher, it won't be found.
