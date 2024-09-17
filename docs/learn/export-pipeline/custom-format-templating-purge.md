---
title: 'Export pipelines: Custom format templating purge'
sidebar_label: '1. Custom format templating purge'
sidebar_position: 1
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# Custom format templating purge

[Custom format templating](./custom-format-templating.md) is creating new documents and saving their links into the annotation metadata. However, when re-exporting, we need to clean up the old documents not to mix them up with the new documents. This purge extension allows us to do that.

## Installation

<WIP />

<WebhookEndpoints
  eu1="https://elis.custom-format-templating-purge.rossum-ext.app/"
  eu2="https://shared-eu2.custom-format-templating-purge.rossum-ext.app/"
  us="https://us.custom-format-templating-purge.rossum-ext.app/"
  jp="https://shared-jp.custom-format-templating-purge.rossum-ext.app/"
/>

## Basic usage

No additional configuration is required. This extension should be run first in the extension chain.
