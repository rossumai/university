---
title: 'Export pipelines: Custom format templating purge'
sidebar_label: '1. Custom format templating purge'
sidebar_position: 1
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# Custom format templating purge

Extensions like [Custom format templating](./custom-format-templating.md) and [REST API export](./rest-api-export.md) (and possibly others) store their API responses and artefacts in the annotation metadata. When re-exporting, we need to remove these old documents and responses to ensure a clean start. The purge extension helps us achieve this.

Additionally, this extension takes care of a cleanup when purging the original documents from Rossum (by default, all generated artifacts would stay in the system orphaned). Deleting such orphaned artifacts might be very important for **compliance reasons**.

## Installation

"Custom format templating purge" extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Custom format templating purge`
   1. Trigger events: `Export` and document status `Changed` (!)
   1. Extension type: `Webhook`
   1. URL (see below)
1. In "Advanced settings" select **Token owner** (should have Admin access)
1. In the "Additional notification metadata" enable `Schemas`
1. Click **Create the webhook**.

### Webhook URL endpoints

<WebhookEndpoints
  eu1="https://elis.custom-format-templating-purge.rossum-ext.app/"
  eu2="https://shared-eu2.custom-format-templating-purge.rossum-ext.app/"
  us="https://us.custom-format-templating-purge.rossum-ext.app/"
  jp="https://shared-jp.custom-format-templating-purge.rossum-ext.app/"
/>

## Basic usage

No additional configuration is required. This extension should be run first in the extension chain.
