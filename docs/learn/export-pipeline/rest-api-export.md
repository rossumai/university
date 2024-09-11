---
title: 'Export pipelines: REST API export'
sidebar_label: '3. REST API export'
sidebar_position: 3
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# REST API export

## Installation

REST API export extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `REST API export`
   1. Trigger events: `Export`
   1. Extension type: `Webhook`
   1. URL (see below)
1. Click **Create the webhook**.
1. Fill in the `Configuration` field (see [Configuration examples](#configuration-examples) for some examples).

Webhook URL endpoints:

<WebhookEndpoints
  eu1="https://elis.rest-api-export.rossum-ext.app/"
  eu2="https://shared-eu2.rest-api-export.rossum-ext.app/"
  us="https://us.rest-api-export.rossum-ext.app/"
  jp="https://shared-jp.rest-api-export.rossum-ext.app/"
/>

## Basic usage

<WIP />

## Available configuration options

<WIP />

## Configuration examples

:::warning

This extension currently expects file to be generated using [Custom format templating extension](./custom-format-templating.md).

:::

### Simple REST API call

```json
{
  "export_reference_key": "export_annotation_to_csv",
  "request": {
    "url": "https://webhook.site/XXX-ZZZ",
    "method": "POST",
    "headers": {
      "Content-Type": "text/plain"
    },
    "content": "#{file_content}"
  }
}
```

### REST API call with OAuth2

The request can be extended to use OAuth2:

```json
{
  "export_reference_key": "export_annotation_to_csv",
  "auth": {
    "url": "http://custom.url/token",
    "method": "POST",
    "data": {
      "username": "your_username",
      "password": "{secret.password}"
    }
  },
  "request": {
    "url": "https://webhook.site/XXX-ZZZ",
    "method": "POST",
    "headers": {
      "Content-Type": "text/plain",
      "Authorization": "Bearer {secret.access_token}"
    },
    "content": "#{file_content}"
  }
}
```

The `access_token` is automatically retrieved using given credentials and saved to hook secrets for later reuse. A more complex OAuth2 setup:

```json
{
  "export_reference_key": "export_annotation_to_csv",
  "request": {
    "url": "https://webhook.site/XXX-ZZZ",
    "method": "POST",
    "headers": {
      "Content-Type": "text/json"
    },
    "content": "#{file_content}"
  },
  "auth": {
    "url": "http://custom.url/token",
    "method": "POST",
    "data": {
      "scope": "invoice.create invoice.read",
      "client_id": "{secret.client_id}",
      "grant_type": "client_credentials",
      "client_secret": "{secret.client_secret}"
    },
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  },
  "condition": "@{api_gate}",
  "response_headers_reference_key": "export_reply_headers",
  "response_payload_reference_key": "export_reply_payload"
}
```

Please note the `response_headers_reference_key` and `response_payload_reference_key`. The first stores the headers of the reply (with added `status_code`), the later stores the full body from the reply. Both of them can be retrieved via API (the link to the received data is stored with the desired key in annotation's metadata). There is an extension prepared for you, that will extract key values (Extract data).

For original file use `#{original_file}`.

You can use condition that controls whether the export is triggered. If the referred field is non-empty (`!= ""`) it will start export and skip it if it is empty (`== ""`).

### Sending `multipart/form-data`

The following config will translate in an HTTP POST request with `Content-Type: multipart/form-data`. Both file and additional data will be sent. For sending the file, the `file_key` is used as a form-data `name; filename` and content type are taken from the saved document.

```json
{
  "export_reference_key": "exported_annotation_csv",
  "request": {
    "url": "https://webhook.site/XXX-ZZZ",
    "method": "POST",
    "headers": {
      "Authorization": "Bearer {secret.token}"
    },
    "file_name": "@{document_id}.json",
    "file_key": "file",
    "request_data": {
      "other_field": "@{vendor}"
    }
  }
}
```

See also [JSON templating](../json-templating/index.md).

### Sending `application/x-www-form-urlencoded`

Specifically, this example is for Azure API Management:

```json
{
  "export_reference_key": "exported_annotation_csv",
  "auth": {
    "url": "",
    "method": "POST",
    "headers": {
      "Ocp-Apim-Subscription-Key": "",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "grant_type": "",
      "client_id": "",
      "client_secret": "{secret.client_secret}",
      "scope": ""
    }
  },
  "request": {
    "url": "",
    "method": "POST",
    "content": "#{file_content}",
    "headers": {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": ""
    }
  }
}
```
