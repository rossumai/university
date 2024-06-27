---
sidebar_position: 1
title: 'Business Rules Validation: Configuration examples'
sidebar_label: 'Configuration examples'
---

# Configuration examples

Here you can find examples of the most common real-world use cases for Business Rules Validation. Simply copy-paste them into extension settings and adjust as needed.

## Common Accounts Payable (AP) checks

### Invoice face value discrepancy

```json
{
  "checks": [
    {
      "rule": "{amount_total} == {amount_total_base} + {amount_total_tax}",
      "type": "error",
      "message": "Total amount is not equal to the sum of amount base and the tax",
      "automation_blocker": true
    }
  ]
}
```

### Sum of line items must match invoice total

```json
{
  "checks": [
    {
      "rule": "sum({item_amount_total}) == {amount_total}",
      "type": "error",
      "message": "The sum of line items is not equal to the total amount.",
      "automation_blocker": true
    }
  ]
}
```

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
  ]
}
```
