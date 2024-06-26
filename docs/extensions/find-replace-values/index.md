---
title: 'Find & Replace Values'
---

_Formerly known as Value Transformations_

## Installation

:::warning[Work in progress]

_Describe how to create and configure the extension._

:::

## What can it do?

- Cleaning the existing value of the field and putting it into another or the same field based on a specific pattern.
- Finding a specific pattern inside a value and putting only it into another or the same field.
- Running Python3 conditions to determine if actions must be performed.
- Running Regex match to determine if a transformation should be applied.
- Defining self-execution on a queue level.

## What can't it do?

- React to "No match" scenarios: if no match is found, the value from the source field is copied "as-is" to the target field (you need to set up action condition to avoid this behavior).
- Provide conditional mapping of values: for this, you need to use another extension called [Copy & Paste Values](../copy-paste-values/index.md).

## How It Works

The main mechanism is Python 3's `re` library, which handles regex (Regular Expressions).

All you need to know is that we do not use the whole spectrum of methods, but only the `substitute` function:

```python
re.sub(pattern, repl, string, count=0, flags=0)
```

- `pattern` is the regex pattern
- `repl` is the replacement string
- `string` is the input string (in our case, the value from a field)

In the configuration, you do not need to worry about the `string` parameter as it is taken from `source` fields configuration:

```json
{
  "source_target_mappings": [
    {
      "source": "item_description",
      "target": "item_description_normalized"
    }
  ]
}
```

However, you need to take care of `pattern` and `repl`. In our configuration, they are presented as:

- `pattern_to_replace`
- `value_to_replace_with`

See section [Available configuration options](#available-configuration-options) below for more parameters to customize the behavior.

## Available configuration options

| Root                             | Parameter name                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actions`                        | `actions`                         | List of actions to be performed. See a description of the action parameters below.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `actions`                        | `source_target_mappings`          | List of source and target field schema IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `actions.source_target_mappings` | `source`                          | Source schema_id of the initial value to be transformed.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `actions.source_target_mappings` | `target`                          | Target field’s schema_id where the extension will store the transformed value.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `actions`                        | `transformations`                 | List of transformations to perform on the value of the source field. See a description of the transformation parameters below.                                                                                                                                                                                                                                                                                                                                                                |
| `actions`                        | `queue_ids`                       | Queue IDs where the extension should perform the particular action. You can assign the extension to multiple queues and specify numerous actions for different queues in one instance. It’s optional. If not present, the extension will act on all the queues to which it is assigned unless excluded_queue_ids is set.                                                                                                                                                                      |
| `actions`                        | `excluded_queue_ids`              | Queue IDs where the function won’t perform the action. This parameter cannot be set along with queue_ids. It’s optional.                                                                                                                                                                                                                                                                                                                                                                      |
| `actions`                        | `action_condition`                | Condition’s definition for a particular action. Condition needs to evaluate to bool (True or False). When defined, the action will be evaluated. If True, the extension will apply the action’s transformation; otherwise, it won’t. It’s a Python condition where schema fields are referenced by their schema_id enclosed in {}. Example: `{item_code} != '' and {document_type} == 'invoice'` . [Python expressions documentation](https://docs.python.org/3.8/reference/expressions.html) |
| `actions`                        | `additional_user_update_trigger`  | Additional list of schema_ids that will trigger the action if a user modified a field with such name.                                                                                                                                                                                                                                                                                                                                                                                         |
| `actions`                        | `allow_target_update`             | If set to true, it prevents the action from overwriting the target value when the user updates it manually. Default false.                                                                                                                                                                                                                                                                                                                                                                    |
| `transformations`                | `pattern_to_replace`              | The regular expression defines a pattern in the value to be found and replaced. Python regular expressions.                                                                                                                                                                                                                                                                                                                                                                                   |
| `transformations`                | `value_to_replace_with`           | This value will replace all pattern occurrences matching the regular expression defined in the pattern_to_replace parameter.                                                                                                                                                                                                                                                                                                                                                                  |
| `transformations`                | `replace_if_this_pattern_matches` | Regular expression defines the condition for a transformation to be applied. Extension will apply the transformation if the value matches the expression. Python regular expressions.                                                                                                                                                                                                                                                                                                         |

:::tip

You can use `replace_if_this_pattern_matches` to apply a transformation. This means if the expression in this parameter is not fulfilled, the source value will be copied as-is to the target value.

:::
