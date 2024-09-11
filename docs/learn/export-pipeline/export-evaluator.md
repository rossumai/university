---
title: 'Export pipelines: Export evaluator'
sidebar_label: '5. Export evaluator'
sidebar_position: 5
---

import WIP from '../\_wip.md';

# Export evaluator

<WIP />

## Proprietary export evaluator

```py
from rossum_python import RossumPython, default_to, substitute

def rossum_hook_request_handler(payload: dict) -> dict:
    r = RossumPython.from_payload(payload)

    if eval(payload["settings"]["condition"]):
        raise Exception("Draft invoice not created.")

    return r.hook_response()
```

Settings example:

```json
{
  "condition": "r.field.api1_status_code != '201'"
}
```
