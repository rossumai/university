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
# Create an external ID by combining document ID and entity (vendor) match. This is to make sure
# that different vendors with identical document numbering are not matched to the same NetSuite
# record (same NetSuite external ID).
external_id = f"{field.document_id}_{field.order_match__entity_internalId}"

# Construct the final result by concatenating Rossum prefix, document type, and external ID:
f"__rossum_{field.document_type}_{external_id}".lower()
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
