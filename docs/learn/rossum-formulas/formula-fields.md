---
sidebar_position: 1
sidebar_label: 'Formula fields'
title: 'Rossum Formulas: Formula fields'
---

# Formula fields

Examples of common formula fields (using Formula Fields flavor).

## Copy fields conditionally

Copy `order_id` into another field but prioritize `order_id_manual` datapoint if it exists:

New formula field `order_id_normalized`:

```py
field.order_id_manual if not is_empty(field.order_id_manual) else field.order_id
```

## Find first non-empty line item value

```py
next((item for item in field.item_code.all_values if item), "")
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

This is typically necessary when [exporting records into NetSuite](../netsuite/export-configuration#vendor-bills-invoices).

## Get line item index

Returns line item number (indexed from 0):

```py
field._index
```

## Normalize field value

Remove non-alphanumeric characters (except "-" and "\_"):

```py
substitute(r"[^a-zA-Z\d\-_]", "", field.order_id)
```

## Sum line item values

Sum the values of `item_amount_total`. Use `0` if the field is empty.

```py
sum(default_to(field.item_amount_total.all_values, 0))
```

## Validations

To validate line items, create `item_validator` formula field with the following code:

```py
import math

item_total_base_calculated = field.item_quantity * field.item_amount_base

if not math.isclose(item_total_base_calculated, field.item_total_base, rel_tol=0.004):
    item_total_base_diff = abs(item_total_base_calculated - field.item_total_base)
    message = (f"The totals do not match. Expected total: {field.item_total_base}, "
               f"Calculated total: {item_total_base_calculated}, "
               f"Difference: {item_total_base_diff}")

    show_error(message, field.item_quantity)
    show_error(message, field.item_amount_base)
    show_error(message, field.item_total_base)
```
