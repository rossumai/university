---
title: 'NetSuite: Considerations & Limitations'
sidebar_position: 4
sidebar_label: 'Considerations & Limitations'
---

# Considerations & Limitations

## Default webhook timeout is 30 seconds

By default, all webhooks in Rossum timeout after 30 seconds. Usually, this time is enough for most webhooks. However, some more complex documents (longer ones with more line items) can take longer than that to export.

To fix this issue, it is possible to set custom timeout by calling the following API endpoint:

```text
PATCH /v1/hooks/{id}
```

Request payload example:

```json
{
  "config": {
    // highlight-start
    "timeout_s": 60
    // highlight-end
  }
}
```

See API reference for more details: https://elis.rossum.ai/api/docs/#update-part-of-a-hook

:::warning

The maximum allowed timeout is 60 seconds. Consider contacting [Rossum Sales](https://rossum.ai/form/contact/) department or Rossum Support team if you need help finding alternative solutions.

:::

## Webhook retries 5× on failed requests

By default, webhooks are retried 5× on failed requests. This behavior can be inconvenient if it's not possible to guarantee idempotency of the requests (for example, NetSuite exports). This can be changed or completely disabled using the following API endpoint:

```text
PATCH /v1/hooks/{id}
```

Request payload example:

```json
{
  "config": {
    // highlight-start
    "retry_count": 0
    // highlight-end
  }
}
```

Use number `0` to disable retries or any other number to change the default number of retries.

See API reference for more details: https://elis.rossum.ai/api/docs/#update-part-of-a-hook
