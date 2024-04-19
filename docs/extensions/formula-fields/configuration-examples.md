---
sidebar_position: 1
title: 'Configuration examples'
---

Examples of common formula fields.

## Copy fields conditionally

Copy `order_id` into another field but prioritize `order_id_manual` datapoint if it exists:

```py
field.order_id_manual if not is_empty(field.order_id_manual) else field.order_id
```

## Generate NetSuite external IDs

Create external ID needed by NetSuite for _VendorBill_ and _VendorCredit_ records:

```py
# Convert document type to lower case for standardization
document_type = field.document_type.lower()

# Create an external ID by combining document ID and entity (vendor) match
external_id = f"{field.document_id}_{field.ns_entity_match}"

# Map of document types to their corresponding prefixes
prefix_map = {
    'credit_note': '__rossum_vc_',
    'tax_invoice': '__rossum_vb_'
}

# Retrieve the prefix for the document type, default to a general prefix if not found
prefix = prefix_map.get(document_type, '__rossum_')

# Construct the final result by concatenating prefix and external ID
result = f"{prefix}{external_id}"

result
```

This is typically necessary when [exporting records into NetSuite](../netsuite/export-webhook#vendor-bills-invoices).

## Normalize field value

Remove non-alphanumeric characters (except "-" and "\_"):

```py
substitute(r"[^a-zA-Z\d\-_]", "", field.order_id)
```
