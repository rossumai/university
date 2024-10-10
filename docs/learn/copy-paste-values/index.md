---
title: 'Copy & Paste Values'
---

import WIP from '../\_wip.md';

_Formerly known as Value Operations_

## Installation

Copy & Paste Values extension is available in the Rossum store. To install the extension, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → Rossum Store**.
1. Search for **Copy & Paste Values** extension and "Add" it.

A default "Rossum Store extension settings" page will open where you can configure the extension to your liking (visit [configuration examples](./configuration-examples.md) for inspiration).

## Basic usage

<WIP />

## Available configuration options

```json
{
  "operations": [
    {
      // Under what condition should the source field be copied?
      "condition": "len({line_items}) > 0 and {item_po} == ''",

      // Source field from where the source value should be copied.
      "source_field": "order_id",
      
      // Target field to where the source value should be copied.
      "target_field": "item_po_copy"
    }

    // … more operations
  ]
}
```
