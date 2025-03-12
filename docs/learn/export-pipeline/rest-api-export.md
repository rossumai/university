---
title: 'Export pipelines: REST API export'
sidebar_label: '3. REST API export'
sidebar_position: 3
---

import WebhookEndpoints from '../\_webhook_endpoints.md';
import WIP from '../\_wip.md';

# REST API export

The **REST API Export** extension is responsible for sending exported data from Rossum to an external REST API. It is designed to be a part of the [Export Pipeline](./index.md) and works with [Custom Format Templating](./custom-format-templating.md) to prepare the data before transmission.

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
1. In "Advanced settings" select **Token owner** (should have Admin access)
1. Click **Create the webhook**.
1. Fill in the `Configuration` field (see [Configuration examples](#configuration-examples) for some examples).

Webhook URL endpoints:

<WebhookEndpoints
  eu1="https://elis.rest-api-export.rossum-ext.app/"
  eu2="https://shared-eu2.rest-api-export.rossum-ext.app/"
  us="https://us.rest-api-export.rossum-ext.app/"
  jp="https://shared-jp.rest-api-export.rossum-ext.app/"
/>


## Available configuration options

This extension works as a part of the [Export Pipeline](./index.md) and it expects a payload file to be generated using [Custom format templating extension](./custom-format-templating.md).

### Simple REST API call

A basic example of exporting data via a REST API.

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

The `access_token` is automatically retrieved using given credentials and saved to hook secrets for later reuse. A more complex example using OAuth2 authentication, with response storage and a condition controlling execution:

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

The `response_headers_reference_key` stores the headers of the reply with added `status_code`, `headers` converted to json strucutre and `raw` headers. See the following example:

```json
{
    "status_code": 200,
    "headers": {
        "access_control_allow_origin": "*",
        "alt_svc": "h3=\":443\"; ma=2592000",
        "content_type": "application/json",
        "date": "Tue, 25 Jun 2024 08:02:26 GMT",
        "vary": "Accept-Encoding",
        "transfer_encoding": "chunked"
    },
    "raw": [
        [
            "Access-Control-Allow-Origin",
            "*"
        ],
        [
            "Alt-Svc",
            "h3=\":443\"; ma=2592000"
        ],
        [
            "Content-Type",
            "application/json"
        ],
        [
            "Date",
            "Tue, 25 Jun 2024 08:02:26 GMT"
        ],
        [
            "Vary",
            "Accept-Encoding"
        ],
        [
            "Transfer-Encoding",
            "chunked"
        ]
    ]
}
```

The `response_payload_reference_key` stores the full body from the reply.

Both of them are stored as documents in Rossum and can be retrieved via API. There is an extension prepared for you, extracts important information from the response, key values which can be then stored to the Rossum annontation [Data value extractor](./data-value-extractor.md).

For sending original document file e.g in the API POST request use `#{original_file}` For exampe this is useful when attachning original invoice file to existing invoice object in an ERP system. In the followoing exmaple the `export_reference_key` is not used because it is not needed, we are senting only the original document file, not usinfg a previously generated payload.

```json
{
  "request": {
    "url": "https://apiexport.myserver.com/attachment",
    "method": "POST",
    "content": "#{original_file}",
    "headers": {
      "Content-Type": "application/pdf"
    }
  },
  "response_headers_reference_key": "api_attach_export_reply_headers",
  "response_payload_reference_key": "api_attach_export_reply_payload"
}
```

You can use condition that controls whether the export is triggered. When it's empty or "false" (case insensitive), this section won't be evaluated. Otherwise, it will proceed. E.g. if the referred field is non-empty (`!= ""`) it will start export and skip it if it is empty (`== ""`). The condition definition follows the [JSON templating](./../json-templating/index.md) syntax, e.g. `"condition": "@{api_gate}"`.

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

## Parameters

### Export Object

The export object consists of the following parameters:

| Attribute                      | Type   | Description                                                                                      |
|--------------------------------|--------|------------------------------------------------------------------------------------------------|
| `export_reference_key`        | str    | A unique key referencing the exported data prepared by the [Custom format templating extension](./custom-format-templating.md).                                                    |
| `request`                     | object | Defines the REST API request (URL, method, headers, and body content).                        |
| `auth` *(optional)*           | object | Configuration for authentication, supporting OAuth2.                                          |
| `condition` *(optional)*      | str    | Reference to a `schema_id` in `annotation.content` controlling execution. When it's empty or "false" (case insensitive), this section won't be evaluated. Otherwise, it will proceed. The condition definition follows the [JSON templating](./../json-templating/index.md) syntax e.g. `"condition": "@{api_gate}"`                    |
| `response_headers_reference_key` *(optional)* | str    | Key to store API response headers (including `status_code`).                                  |
| `response_payload_reference_key` *(optional)* | str    | Key to store the full response body from the API.                                             |

### Request Object

The `request` object contains parameters defining the HTTP request:

| Attribute      | Type   | Description                                                       |
|---------------|--------|-------------------------------------------------------------------|
| `url`        | str    | The target API endpoint URL.                                     |
| `method`     | str    | The HTTP method (`POST`, `PUT`, etc.).                          |
| `headers`    | object | HTTP headers for the request.                                   |
| `content`    | str    | The body of the request (supports placeholders like `#{file_content}`). |

### Authentication Object (`auth`)

The authentication object defines how credentials are used to obtain an access token.

| Attribute      | Type   | Description                                                       |
|---------------|--------|-------------------------------------------------------------------|
| `url`        | str    | The authentication endpoint URL.                                 |
| `method`     | str    | The HTTP method (`POST`, `GET`, etc.).                          |
| `headers`    | object | Headers for authentication request.                             |
| `data`       | object | Credentials and grant type for authentication.                  |
