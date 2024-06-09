---
sidebar_position: 1
sidebar_label: 'Configuration examples'
title: 'Generic REST API export: Configuration examples'
---

# Configuration examples

:::warning

This extension currently expects file to be generated using [Custom format exports extension](../custom-format-exports).

:::

## Simple REST API call

```json
{
  "export_id": "export_annotation_to_csv",
  "request": {
    "url": "https://webhook.site/XXX-ZZZ",
    "method": "POST",
    "headers": {
      "Content-Type": "text/plain"
    },
    "content": "{file.content}"
  }
}
```

## REST API call with OAuth2

The request can be extended to use OAuth2:

```json
{
  "export_id": "export_annotation_to_csv",
  "request": {
    "url": "https://webhook.site/XXX-ZZZ",
    "method": "POST",
    "headers": {
      "Content-Type": "text/plain",
      "Authorization": "Bearer {secret.access_token}"
    },
    "content": "{file.content}"
  },
  "auth": {
    "url": "http://custom.url/token",
    "method": "POST",
    "data": {
      "username": "your_username",
      "password": "{secret.password}"
    }
  }
}
```

The `access_token` is automatically retrieved using given credentials and saved to hook secrets for later reuse.

## Sending `multipart/form-data`

The following config will translate in an HTTP POST request with `Content-Type: multipart/form-data`. Both file and additional data will be sent. For sending the file, the `file_key` is used as a form-data `name; filename` and content type are taken from the saved document.

```json
{
  "export_id": "export_annotation_to_csv",
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
