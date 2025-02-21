---
title: 'NetSuite'
sidebar_position: 1
---

import WebhookEndpoints from '../\_webhook_endpoints.md';

:::info[API documentation]

👉 https://elis.rossum.ai/svc/netsuite-v3/api/redoc

:::

## Installation

NetSuite service (integration) is provided by Rossum.ai in the form of webhook. To start using NetSuite (either imports or exports), follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `NetSuite SB1: Import/Export`
   1. Trigger events: `Manual` (later also `Scheduled`)
   1. Extension type: `Webhook`
   1. URL (see below)
   1. In "Advanced settings" select Token owner
1. Click **Create the webhook**.
1. Fill `Configuration` and `Secrets` fields (see [Integration Configuration](./integration-configuration.md) and [Import configuration](./import-configuration.md) or [Export configuration](./export-configuration.md).
1. (Optional) Disable retries for export webhooks (see: [Considerations & Limitations](./considerations.md#webhook-retries-5-on-failed-requests))
1. (Optional) Set hook `secrets_schema` value (see [below](#setting-hook-secrets_schema-value))

### Import endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/netsuite-v3/api/v1/import"
  eu2="https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import"
  us="https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import"
/>

### Export endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/netsuite-v3/api/v1/export"
  eu2="https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/export"
  us="https://us.app.rossum.ai/svc/netsuite-v3/api/v1/export"
/>

### Setting hook `secrets_schema` value

By default, all hooks have the following JSON schema of their secrets:

```json
{
  "type": "object",
  "additionalProperties": { "type": "string" }
}
```

Consider changing it to the following value to clearly outline what values are supported:

```json
{
  "type": "object",
  "properties": {
    "consumer_key": { "type": "string", "minLength": 1 },
    "consumer_secret": { "type": "string", "minLength": 1 },
    "token_key": { "type": "string", "minLength": 1 },
    "token_secret": { "type": "string", "minLength": 1 },
    "rossum_username": { "type": "string", "minLength": 1 },
    "rossum_password": { "type": "string", "minLength": 1 }
  },
  "additionalProperties": false
}
```

Probably the easiest way to achieve this is updating the hook configuration using [`prd` tool](../sandboxes/index.md)

## System context diagram

![NetSuite system context diagram](./img/rossum-netsuite-system-context-diagram.png)

## Useful links

NetSuite main navigation can sometimes be very confusing as it is very customizable. Use the following paths to quickly access NetSuite resources:

- Accounts: [`/app/accounting/account/accounts.nl`](https://system.netsuite.com/app/accounting/account/accounts.nl)
- Currencies: [`/app/common/multicurrency/currencylist.nl`](https://system.netsuite.com/app/common/multicurrency/currencylist.nl)
- File Cabinet [`/app/common/media/mediaitemfolders.nl`](https://system.netsuite.com/app/common/media/mediaitemfolders.nl)
- Items: [`/app/common/item/itemlist.nl`](https://system.netsuite.com/app/common/item/itemlist.nl)
- Purchase Orders: [`/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=PurchOrd`](https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=PurchOrd)
- Roles: [`/app/setup/rolelist.nl`](https://system.netsuite.com/app/setup/rolelist.nl)
- Subsidiaries: [`/app/common/otherlists/subsidiarylist.nl`](https://system.netsuite.com/app/common/otherlists/subsidiarylist.nl)
- Vendor Bills: [`/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill`](https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill)
- Vendor Credits: [`/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred`](https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred)
- Vendors: [`/app/common/entity/vendorlist.nl`](https://system.netsuite.com/app/common/entity/vendorlist.nl)

## Available configuration options

The following configuration options are available:

```json
{
  // Determines whether or not NetSuite should run the configuration asynchronously. Typically,
  // imports are asynchronous (since they can take hours) and exports are synchronous (they should
  // take minutes).
  "run_async": true,

  "netsuite_settings": {
    // Case sensitive NetSuite account:
    "account": "XXX_SB1",

    // How many concurrent operations through API can run at the same time:
    "concurrency_limit": 4,

    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",
    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",
    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"
  },

  // Configures imports (cannot be used together with `export_configs`):
  "import_configs": [
    {
      // Name of the dataset in Master Data Hub:
      "master_data_name": "NS_SB1_Currency_v1",

      // Optional configurations of the asynchronous behavior (makes sense only when
      // `run_async` is true):
      "async_settings": {
        "retries": 5,
        "max_run_time_s": 36000
      },

      // The actual payload of NetSuite request (closely follows NetSuite API docs):
      "payload": {
        "method_name": "getAll",
        "method_args": [
          {
            "_ns_type": "GetAllRecord",
            "recordType": "currency"
          }
        ],

        // Optional headers for NetSuite API request:
        "method_headers": {
          // NetSuite request-level search preferences (https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4170181850.html):
          "searchPreferences": {
            "pageSize": 100,
            "bodyFieldsOnly": false,
            "returnSearchColumns": false
          },

          // Other NetSuite request-level preferences (https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4170181850.html):
          "preferences": {
            "runServerSuiteScriptAndTriggerWorkflows": false
            // …
          }
        }
      }
    }
    // …
  ],

  // Configures exports (cannot be used together with `import_configs`):
  "export_configs": [
    // Same with `import_configs`
  ]
}
```
