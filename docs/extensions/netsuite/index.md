---
title: 'NetSuite'
---

## Webhook configuration

:::warning[TODO]

_Describe how to create and configure the extension._

:::

Import endpoints:

| Environment | Webhook URL                                                 |
| :---------- | :---------------------------------------------------------- |
| EU1         | https://elis.rossum.ai/svc/netsuite-v3/api/v1/import        |
| EU2         | https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import |
| US2         | https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import      |

## Useful links

NetSuite main navigation can sometimes be very confusing as it is very customizable. Use the following paths to quickly access NetSuite resources:

- Accounts: [`/app/accounting/account/accounts.nl`](https://system.netsuite.com/app/accounting/account/accounts.nl)
- Currencies: [`/app/common/multicurrency/currencylist.nl`](https://system.netsuite.com/app/common/multicurrency/currencylist.nl)
- Items: [`/app/common/item/itemlist.nl`](https://system.netsuite.com/app/common/item/itemlist.nl)
- Purchase Orders: [`/app/accounting/transactions/purchordermanager.nl?type=proc`](https://system.netsuite.com/app/accounting/transactions/purchordermanager.nl?type=proc)
- Subsidiaries: [`/app/common/otherlists/subsidiarylist.nl`](https://system.netsuite.com/app/common/otherlists/subsidiarylist.nl)
- Vendor Bills: [`/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill`](https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill)
- Vendor Credits: [`/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred`](https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred)
- Vendors: [`/app/common/entity/vendorlist.nl`](https://system.netsuite.com/app/common/entity/vendorlist.nl)

## System context diagram

![NetSuite system context diagram](./img/rossum-netsuite-system-context-diagram.png)
