---
title: 'Common Errors'
sidebar_position: 5
---

List of common errors when integrating with NetSuite. Alphabetically sorted.

## EXTERNALID_REQD - This operation requires a value for externalId.

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: EXTERNALID_REQD - This operation requires  a value for externalId.
```

External ID is missing. Fix it by creating it, for example:

```json
{
  "export_config": {
    "mapping": {
      "VendorBill": {
        "externalId": {
          "_schema_id": "ns_vb_external_id_generated",
          "_value_type": "string",
          "_record_type": "simple"
        },
        // ...
        "_record_type": "VendorBill"
      }
    }
  }
}
```

## FIELD_PARAM_REQD - Please enter a value for entity

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: FIELD_PARAM_REQD - Please enter a value for entity
```

Entity field (vendor) is missing. Correct this error by setting the entity correctly:

```json
{
  "export_config": {
    "mapping": {
      "VendorBill": {
        "entity": {
          "_schema_id": "ns_vendor_match",
          "_value_type": "string",
          "_record_type": "RecordRef$vendor"
        },
        // ...
        "_record_type": "VendorBill"
      }
    }
  }
}
```

## Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need the 'Transactions -> Enter Vendor Credits' permission to access this page. Please contact your account administrator.

```
While creating record {'type': 'VendorCredit', 'value': [...], 'extra_modifiers': {}}]} - this exception occurred: Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need  the 'Transactions -> Enter Vendor Credits' permission to access this page. Please contact your account administrator.
```

Follow the error message and configure correct permissions for your role ("Enter Vendor Credits").

## INSUFFICIENT_PERMISSION - Permission Violation: You need the 'Transactions -> Bills' permission to access this page. Please contact your account administrator.

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need  the 'Transactions -> Bills' permission to access this page. Please contact your account administrator.
```

Adjust NetSuite role permissions for your integration role to include **Bills** (under **Transactions**).

## INSUFFICIENT_PERMISSION - Permission Violation: You need a higher level of the 'Transactions -> Bills' permission to access this page. Please contact your account administrator.

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INSUFFICIENT_PERMISSION - Permission Violation: You need a higher level of the 'Transactions -> Bills' permission to access this page. Please contact your account administrator.
```

You have permissions to access Bills but not to create them (probably). Increase the level of permissions (from View to Full, for example).

## INVALID_KEY_OR_REF - Invalid entity reference key 401020.

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INVALID_KEY_OR_REF - Invalid entity reference key 401020.
```

Entity (vendor) with ID 401020 does not exist in NetSuite. Maybe wrong ID?

## INVALID_KEY_OR_REF - Invalid subsidiary reference key 1 for entity 1929.

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: INVALID_KEY_OR_REF - Invalid subsidiary reference key 1 for entity 1929.
```

There are two incompatible records: subsidiary with internal ID "1" and entity with internal ID "1929". This error can be resolved by changing the NetSuite configuration so that the subsidiary is allowed for the said entity.

## USER_ERROR - Please enter value(s) for: Location

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: USER_ERROR - Please enter value(s) for: Location
```

Location is required for the creation of VendorBill. Here is how to set it up using Rossum.ai integration:

```json
{
  "export_config": {
    "mapping": {
      "VendorBill": {
        "location": {
          "_schema_id": "ns_location",
          "_value_type": "string",
          "_record_type": "RecordRef$location"
        },
        "_record_type": "VendorBill"
      }
    }
  }
}
```

## USER_ERROR - You must enter at least one line item for this transaction.

```
While creating record {'type': 'VendorBill', 'value': [...]} - this exception occurred: Error in upsert: USER_ERROR - You must enter at least one line item for this transaction.
```

NetSuite requires at least one line item at all times. There was no line item when creating the VendorBill. Here is how to map line items using Rossum.ai integration:

```json
{
  "export_config": {
    "mapping": {
      "VendorBill": {
        "itemList": {
          "item": {
            "item": {
              "_schema_id": "ns_item_match",
              "_value_type": "string",
              "_record_type": "RecordRef$inventoryItem"
            },
            "_record_type": "VendorBillItem"
          },
          "_schema_id": "line_items",
          "_record_type": "VendorBillItemList"
        },
        // ...
        "_record_type": "VendorBill"
      }
    }
  }
}
```

## org.xml.sax.SAXException: itemList on \{urn:purchases_2022_1.transactions.webservices.netsuite.com\}VendorCredit must be of type \{urn:purchases_2022_1.transactions.webservices.netsuite.com\}VendorCreditItemList

```
While creating record {'type': 'VendorCredit', 'value': [...]} - this exception occurred: org.xml.sax.SAXException: itemList on {urn:purchases_2022_1.transactions.webservices.netsuite.com}VendorCredit must be of type {urn:purchases_2022_1.transactions.webservices.netsuite.com}VendorCreditItemList
```

The record type specific for the item list on VendorCredit is invalid and should be `VendorCreditItemList`.
