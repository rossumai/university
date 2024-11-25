---
sidebar_position: 2
sidebar_label: 'Alternative Python solution'
title: 'Line items grouping: Alternative Python solution'
---

# Alternative Python solution

Consider using the following simple Python code (as a [serverless function](../rossum-formulas/serverless-functions.md)) that replaces the whole functionality of this extension (no need for any webhook):

```py
import pandas as pd
from txscript import TxScript, is_empty, default_to, is_set


def sum_values(values):
    """Sums values if there are any, otherwise returns an empty string (not zero)."""
    return sum(v for v in values if is_set(v)) if any(is_set(v) for v in values) else ''


def rossum_hook_request_handler(payload):
    t = TxScript.from_payload(payload)

    # Reset the target table:
    t.field.line_items_grouped = []

    # Collect all relevant data:
    data = []
    for row in t.field.line_items:
        data.append({
            "item_rate_grouped": row.item_rate.attr.value,  # Must use attr.value because of the `groupby` call!
            "item_description_grouped": row.item_description,
            "item_total_base_grouped": row.item_total_base,
            "item_tax_grouped": row.item_tax,
            "item_amount_total_grouped": row.item_amount_total,
        })

    # Group the data if any:
    if len(data) > 0:
        # https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html
        t.field.line_items_grouped = (
            pd.DataFrame(data)
            .groupby('item_rate_grouped')
            .agg({
                "item_description_grouped": "first",
                "item_total_base_grouped": sum_values,
                "item_tax_grouped": sum_values,
                "item_amount_total_grouped": sum_values
            })
            .reset_index().to_dict("records")
        )

    return t.hook_response()
```
