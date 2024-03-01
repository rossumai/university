---
sidebar_position: 1
title: 'Configuration examples'
---

Here you can find examples of the most common real-world use cases for Business Rules Validation.

## At least one field must be filled

The following Business Rules Validation configuration shows errors only when all the values are empty. It is satisfied if at least one of the values is filled.

```json
{
  "checks": [
    {
      "or": [
        {
          "rule": "has_value({aaa})",
          "message": "At least one value has to be filled."
        },
        {
          "rule": "has_value({bbb})",
          "message": "At least one value has to be filled."
        },
        {
          "rule": "has_value({ccc})",
          "message": "At least one value has to be filled."
        }
      ]
    }
  ],
  "variables": {}
}
```
