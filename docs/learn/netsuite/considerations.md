---
title: 'NetSuite: Considerations & Limitations'
sidebar_position: 4
sidebar_label: 'Considerations & Limitations'
---

# Considerations & Limitations

## In general

Building NetSuite integration is much more than just reading the values from documents and forwarding them to the NetSuite API. The following considerations should be taken into account when designing a new NetSuite implementation:

1. What document types are going to be processed? `VendorBill`, `VendorCredit`, or some other documents? Should they be in one queue or each document type or vendor in its own queue? What are the document regions? All of these questions affect the final queue structure, schemas as well as NetSuite export configuration.
1. What data needs to be data matched? PO-backed workflows might require just POs whereas non-PO-backed workflows might require many other NetSuite records to match (required by the NetSuite export). This greatly affects what data needs to be synchronized from NetSuite. Also consider how large are the collections and how many records should be synchronized during the initial import.
1. What system fields will be necessary? For example, `VendorCredits` must have all amounts and quantities positive. Therefore, several hidden [Formula Fields](../rossum-formulas/formula-fields) performing this conversion might be necessary for the export.
1. Consider preparing [Line items grouping](../line-items-grouping) extension. Apart from potential business requirements, NetSuite doesn't allow line items with repeating items.
1. Consider what all business rules and validations must be implemented.
1. Consider whether duplicate detection should be implemented or not. Customers often find it unexpected when we allow exporting the same document multiple times (even though NetSuite allows it by default). Note that this is an additional mechanism how to detect duplicates. In general, duplicates in Rossum can be detected by:
   1. Comparing files on a binary level (looking for identical files)
   2. Comparing extracted fields (looking for exactly matching extracted content)
   3. Searching whether such invoices already exist in NetSuite or not (complements the previous point but takes historic documents into account as well)

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

Example [`curl`](https://github.com/curl/curl) request:

```bash
curl --location --request PATCH 'https://[EXAMPLE].rossum.app/api/v1/hooks/[HOOK_ID]' \
--header 'Authorization: Bearer [API_TOKEN]' \
--header 'Content-Type: application/json' \
--data '{"timeout_s": 60}'
```

See API reference for more details: https://elis.rossum.ai/api/docs/#update-part-of-a-hook

:::warning

The maximum allowed timeout is 60 seconds. Consider contacting [Rossum Sales](https://rossum.ai/form/contact/) or Rossum Support team if you need help finding alternative solutions.

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
