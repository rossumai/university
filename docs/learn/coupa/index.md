---
title: 'Coupa'
---

import WebhookEndpoints from '../\_webhook_endpoints.md';

## Note

This Coupa section is about a new **Coupa API Integration**, not the older SFTP based one **Coupa Integration Service**.

## High level architecture schema

![Coupa API Integration architecture](img/coupa-api-integration-architecture.png)


## Installation

Coupa service (integration) is provided by Rossum.ai in the form of webhook. To start using Coupa (either imports or exports), follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `Coupa: Import/Export`
   1. Trigger events: `Manual` (later also `Scheduled`)
   1. Extension type: `Webhook`
   1. URL (see below)
1. Click **Create the webhook**.
1. Fill `Configuration` and `Secrets` fields.

### Import endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/scheduled-imports/api/coupa/v1/import"
  eu2="https://shared-eu2.rossum.app/svc/scheduled-imports/api/coupa/v1/import"
/>

### Export endpoints

<WebhookEndpoints />

## Basic usage

:::warning[Work in progress]

_Describe how to quickly use the extension._

:::

## Available configuration options

:::warning[Work in progress]

_Describe all relevant configuration options._

:::
