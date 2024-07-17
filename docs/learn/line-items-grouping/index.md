---
title: 'Line items grouping'
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

**Line items grouping** extension allows for grouping line items based on given SQL criteria. This is handy when the downstream system has some restrictions such as only one unique line item per invoice.

## Installation

Line items grouping service is provided by Rossum.ai in the form of webhook. To start using the extension, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Line items grouping`
   1. Trigger events: `Document content: Initialize, Started, Updated`
   1. Queues where the extension should be executed
   1. Extension type: `Webhook`
   1. URL (see [Available endpoints](#available-endpoints) below)
1. Click **Create the webhook**.
1. Fill `Configuration` field (visit [Configuration examples](./configuration-examples.md) page).

### Available endpoints

<WebhookEndpoints
  eu1="https://elis.line-items-grouping.rossum-ext.app/"
  eu2="https://shared-eu2.line-items-grouping.rossum-ext.app/"
  us="https://us.line-items-grouping.rossum-ext.app/"
  jp="https://shared-jp.line-items-grouping.rossum-ext.app/"
/>

## Basic usage

<WIP />

## Available configuration options

<WIP />
