---
sidebar_position: 1
sidebar_label: 'Formula fields'
title: 'Rossum Formulas: Formula fields'
---

# Formula fields
### Intro

Formula fields in Rossum enable you to easily transform your data directly within the app.
Whether you need to normalize data, perform calculations, or handle text operations, formula fields provide the
flexibility to set values based on your custom logic.

For most tasks, Rossum’s Copilot handles everything seamlessly without needing code, and we recommend using it for the
best results. However, if you want to dive deeper into custom logic,
formula fields support Python-based coding with simple examples to get you started.

:::info

This powerful feature is available on the Business plan and above.
Existing customers interested in using formula fields can reach out to our support team at support@rossum.ai for assistance.

:::
# Best Practices

## Field Naming and Management
When you need to create a normalized version of a field like `document_id`, it's recommended to create a new field, such as `document_id_normalized`.
Use the formula field to apply the normalization logic. This approach allows you to preserve the original value while keeping the normalized result in a separate field, making it easier to manage both.

For better organization, it's also a good practice to group these related fields together, ensuring they are logically aligned and easy to find.

## Wide Variety of Functions
As mentioned earlier, formula fields allow you to work with Python, enabling operations similar to those in serverless functions. 
However, formula fields are much simpler to maintain and manage, offering a streamlined approach for straightforward tasks.

## When to Use Formula Fields vs. Serverless Functions
Formula fields are ideal for simple tasks such as data normalization or creating new fields based on existing ones. 
For more complex operations, serverless functions may be more appropriate. 
Also, there is a limit of **2000** characters per formula fields which declares the highest complexity of the formula fields.

An additional advantage of formula fields is that they are stored at the schema level, so when you copy a queue,
all associated formula fields are copied automatically. In contrast, serverless functions must be configured manually and re-linked to new queues after being copied.

# Examples of common formula fields (using Formula Fields flavor).

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
external_id = f"{field.document_id}__{field.order_match__entity_internalId}"

# Construct the final result by concatenating (and normalizing) Rossum prefix, document type, and external ID:
substitute(r"[^a-zA-Z\d\-_]", "", f"__rossum__{field.document_type}__{external_id}".lower())
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

:::warning

Consider using a [Serverless function](./serverless-functions.md) as a better place to perform such validations. Internally, we consider this technique deprecated, albeit still valid. Formula fields should not affect behavior of other fields indirectly as it makes the overall solution less readable and predictable.

:::

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

### Date validation
This function, check_invoice_date, checks if the invoice date (passed as document_date) is more than 90 days old compared
to the current date. It calculates the difference in days between the two dates and, if the document is older than 90 days,
triggers a warning message. This message notifies the user of the outdated date and blocks further automation until the issue is resolved.
```py
# import fo the datetime module is not necessary as it is already imported by default
import datetime 
def check_invoice_date(document_date):
    # Get the current date
    current_date = datetime.datetime.now().date()

    # Calculate the difference in days between the current date and the document date
    days_difference = (current_date - document_date).days

    # Check if the document date is older than 90 days
    if days_difference > 90:
        # Raise a warning and set an automation blocker
        warning_message = f"Warning: Invoice date is older than 90 days ({days_difference} days). Please confirm the date."
        automation_blocker(warning_message, field.date_issue)
        show_warning(warning_message) 
    
check_invoice_date(field.date_issue)
```