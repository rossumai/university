---
title: 'Business Rules Validation'
---

Business Rules Validation allows users to perform validations of the extracted and calculated data. It typically runs at the end of the extension chain and the main purpose of it is to prevent confirmations (or block automation) of invalid documents.

<!-- TODO: create a page (guide) describing how does chaining of extensions work! -->

## Installation

Business Rules Validation extension is available in the Rossum store. To install the extension, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → Rossum Store**.
1. Search for **Business Rules Validation** extension and "Add" it.

A default "Rossum Store extension settings" page will open where you can configure the extension to your liking.

## Basic usage

By default, the extension has the following configuration:

```json
{
  "checks": [
    {
      "rule": "has_value({document_id})",
      "message": "Invoice number is mandatory."
    }
  ],
  "variables": {}
}
```

This configuration will ensure that document ID (invoice number) is not empty. Other checks (rules) can be added. Visit [Configuration examples](./configuration-examples.md) page for more examples.

## Available configuration options

:::info

Head over to [Configuration examples](./configuration-examples.md) page for collection of the most common real-world configurations.

:::

```json
{
  "checks": [
    // List of business rules should be here.
    // Rules in this list are evaluated in order.
    {
      // Each business rule consists of:
      "rule": "has_value({document_id})",
      "message": "Invoice number is mandatory.",
      "type": "error", // optional (default: "error")
      "automation_blocker": true // optional (default: false)
      "active": true // optional (default: true)
    }
  ]
}
```
