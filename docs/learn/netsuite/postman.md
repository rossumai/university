---
title: 'NetSuite: Postman collection'
sidebar_position: 5
sidebar_label: 'Postman collection'
---

# Postman collection

It might be useful to call NetSuite using Postman for testing purposes. Follow the guide on this page to be able to send requests directly to NetSuite.

## SOAP requests

First, create a new Postman collection and use the following "Pre-req" script:

```js
const account = pm.environment.get('account');
const consumerKey = pm.environment.get('consumer_key');
const consumerSecret = pm.environment.get('consumer_secret');
const tokenKey = pm.environment.get('token_key');
const tokenSecret = pm.environment.get('token_secret');

const timestamp = Math.floor(Date.now() / 1000).toString();
const nonce = CryptoJS.lib.WordArray.random(10).toString();
const baseString = `${account}&${consumerKey}&${tokenKey}&${nonce}&${timestamp}`;
const key = `${consumerSecret}&${tokenSecret}`;
const signature = CryptoJS.HmacSHA256(baseString, key).toString(CryptoJS.enc.Base64);

pm.environment.set('signature', signature);
pm.environment.set('nonce', nonce);
pm.environment.set('timestamp', timestamp);
```

This script is necessary for signing all outgoing SOAP requests. It also implies that the following environment variables must be set:

- `account`
- `consumer_key`
- `consumer_secret`
- `token_key`
- `token_secret`

It will in return create the following environment variables (to be used later in our request):

- `signature`
- `nonce`
- `timestamp`

Next, create a new `POST` request in the created collection. Apart from the default headers, the request should have this NetSuite header (value depends on the request action):

```text
SOAPAction: upsert
```

Depending on your NetSuite version and account number, the `POST` request URL can look like this:

```text
https://123-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2023_2
```

And finally, the SOAP request body (raw XML). In this case to upsert a Vendor Bill record in NetSuite (notice the environment variables from above):

```xml
<soapenv:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <tokenPassport>
            <account>{{account}}</account>
            <consumerKey>{{consumer_key}}</consumerKey>
            <token>{{token_key}}</token>
            <nonce>{{nonce}}</nonce>
            <timestamp>{{timestamp}}</timestamp>
            <signature algorithm="HMAC-SHA256">{{signature}}</signature>
        </tokenPassport>
        <platformMsg:preferences soapenv:mustUnderstand="0" soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" xmlns:platformMsg="urn:messages_2023_2.platform.webservices.netsuite.com">
            <platformMsg:useConditionalDefaultsOnAdd>true</platformMsg:useConditionalDefaultsOnAdd>
            <platformMsg:ignoreReadOnlyFields>true</platformMsg:ignoreReadOnlyFields>
            <platformMsg:warningAsError>false</platformMsg:warningAsError>
            <platformMsg:runServerSuiteScriptAndTriggerWorkflows>true</platformMsg:runServerSuiteScriptAndTriggerWorkflows>
        </platformMsg:preferences>
    </soapenv:Header>
    <soapenv:Body>
        <ns0:upsert xmlns:ns0="urn:messages_2023_2.platform.webservices.netsuite.com">
            <ns0:record xsi:type="ns169:VendorBill" externalId="__CHANGE_ME__" xmlns:ns169="urn:purchases_2023_2.transactions.webservices.netsuite.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <ns1:customForm type="customRecord" internalId="__CHANGE_ME__" xmlns:ns1="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns2:entity type="vendor" internalId="__CHANGE_ME__" xmlns:ns2="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns3:subsidiary type="subsidiary" internalId="__CHANGE_ME__" xmlns:ns3="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns4:approvalStatus internalId="2" xmlns:ns4="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns5:tranDate xmlns:ns5="urn:purchases_2023_2.transactions.webservices.netsuite.com">2024-12-24T00:00:00</ns5:tranDate>
                <ns6:tranId xmlns:ns6="urn:purchases_2023_2.transactions.webservices.netsuite.com">__CHANGE_ME__</ns6:tranId>
                <ns7:currency type="currency" internalId="1" xmlns:ns7="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns8:class type="classification" internalId="__CHANGE_ME__" xmlns:ns8="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns9:department type="department" internalId="__CHANGE_ME__" xmlns:ns9="urn:purchases_2023_2.transactions.webservices.netsuite.com"/>
                <ns10:itemList replaceAll="true" xmlns:ns10="urn:purchases_2023_2.transactions.webservices.netsuite.com">
                    <ns10:item>
                        <ns10:item type="inventoryItem" internalId="__CHANGE_ME__"/>
                        <ns10:taxCode type="taxType" internalId="__CHANGE_ME__"/>
                        <ns10:quantity>1</ns10:quantity>
                        <ns10:rate>__CHANGE_ME__</ns10:rate>
                        <ns10:amount>__CHANGE_ME__</ns10:amount>
                        <ns10:grossAmt>__CHANGE_ME__</ns10:grossAmt>
                        <ns10:tax1Amt>__CHANGE_ME__</ns10:tax1Amt>
                        <ns10:description>__CHANGE_ME__</ns10:description>
                        <ns10:department type="department" internalId="__CHANGE_ME__"/>
                        <ns10:class type="classification" internalId="__CHANGE_ME__"/>
                        <ns10:location type="location" internalId="__CHANGE_ME__"/>
                    </ns10:item>
                </ns10:itemList>
            </ns0:record>
        </ns0:upsert>
    </soapenv:Body>
</soapenv:Envelope>
```
