---
sidebar_position: 2
sidebar_label: 'Alternative Python solution'
title: 'Line items grouping: Alternative Python solution'
---

# Alternative Python solution

Consider using the following simple Python code (as a [serverless function](../rossum-formulas/serverless-functions.md)) that replaces the whole functionality of this extension (no need for any webhook):

```py
import pandas as pd
from rossum_python import RossumPython, is_empty, default_to

def rossum_hook_request_handler(payload):
    x = RossumPython.from_payload(payload)

    data = []
    for row in x.field.line_items:
        data.append({
            "item_rate_grouped": row.item_rate.value,
            "item_description_grouped": row.item_description.value,
        })

    # https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html
    grouped_data = (
        pd.DataFrame(data)
        .groupby('item_rate_grouped')
        .agg({
            'item_description_grouped': 'first'
        })
        .reset_index().to_dict('records')
    )

    x.field.line_items_grouped = grouped_data

    return x.hook_response()
```
