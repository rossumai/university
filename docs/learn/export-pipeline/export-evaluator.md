---
title: 'Export pipelines: Export evaluator'
sidebar_label: '5. Export evaluator'
sidebar_position: 5
---

import WIP from '../\_wip.md';

# Export evaluator

Export evaluator is a piece of a custom code that evaluates the result of API calls and decides whether the export is successful or it has failed.

## Basic export evaluator

The easiest export evaluator simply checks whether the condition is met or not:

```py
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    r = RossumPython.from_payload(payload)

    if eval(payload.get("settings", {}).get("condition")):
        r.show_error("Draft invoice not created.")

    return r.hook_response()
```

Settings example:

```json
{
  "condition": "r.field.api1_status_code != '201'"
}
```

Note that this example uses `eval` function to evaluate the condition which is considered dangerous if the input is untrusted.

## Coupa export evaluator

Coupa REST API typically returns responses in the following format:

```json
{
  "errors": {
    "request": [
      {
        "invoice-header": [
          "Original Invoice Date can't be blank",
          "Original Invoice Number can't be blank"
        ],
        "invoice-header.invoice_lines": ["Total must be negative, make price/quantity negative"],
        "invoice-header.invoice_lines.tax_lines": [
          "Tax Rate should be present on invoices in Italy"
        ]
      }
    ]
  }
}
```

To process such responses, we can use the following evaluator (assuming the API responses and statuses are stored in the appropriate datapoints):

```py
import json
from rossum_python import RossumPython

def rossum_hook_request_handler(payload):
    x = RossumPython.from_payload(payload)

    handle_api_response(x, x.field.api1_status_code, x.field.api1_response_body, "Coupa draft creation", is_error=True)
    handle_api_response(x, x.field.api2_status_code, x.field.api2_response_body, "Coupa image scan", is_error=True)
    handle_api_response(x, x.field.api3_status_code, x.field.api3_response_body, "Coupa backlink", is_error=True)
    handle_api_response(x, x.field.api4_status_code, x.field.api4_response_body, "Coupa submission", is_error=False)

    return x.hook_response()

def handle_api_response(x, status_code, response_body, message, is_error):
    if int(status_code) < 400:
        return

    response_body = try_parse_json(response_body)
    errors = response_body.get('errors', {}).get('request', [{}])[0] if isinstance(response_body, dict) else None

    if errors:
        for key, messages in errors.items():
            for msg in messages:
                display_msg = f"<b>{message} ({key})</b>: {msg.strip()}"
                (x.show_error if is_error else x.show_warning)(display_msg)
    else:
        (x.show_error if is_error else x.show_warning)(f"<b>{message}</b>: unhandled error")

def try_parse_json(response_body):
    try:
        return json.loads(response_body)
    except json.JSONDecodeError:
        return response_body
```
