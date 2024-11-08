---
title: 'Find & Replace Values'
sidebar_position: 1
---

import Deprecated from '../\_deprecated.md';

<Deprecated />

# Find & Replace Values

_Formerly known as Value Transformations_

## Installation

Find & Replace Values extension is available in the Rossum store. To install the extension, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → Rossum Store**.
1. Search for **Find & Replace Values** extension and "Add" it.

A default "Rossum Store extension settings" page will open where you can configure the extension to your liking (visit [configuration examples](./configuration-examples.md) for inspiration).

## What can it do?

As the extension name suggests, its main purpose is to find and replace values of extracted datapoints. The most typical use case is normalizing extracted values (as in replacing unwanted characters and unifying the output). These are the tasks where this extension excels:

- Cleaning the existing value of the field and putting it into another (or the same) field based on a specific pattern.
- Finding a specific pattern inside a value and putting only it into another (or the same) field.
- Running Python conditions to determine if specified actions can be performed.
- Running regular expressions matches to determine if a transformation should be applied.
- Defining self-execution on a queue level.

For example, the following configuration removes non-alphanumeric characters from IBAN field:

```json
{
  "actions": [
    {
      "transformations": [
        {
          "pattern_to_replace": "[^a-zA-Z\\d]",
          "value_to_replace_with": ""
        }
      ],
      "source_target_mappings": [
        {
          "source": "iban",
          "target": "iban_normalized"
        }
      ]
    }
  ]
}
```

## What can't it do?

- React to "No match" scenarios: if no match is found, the value from the source field is copied "as-is" to the target field (you need to set up action condition to avoid this behavior).
- Provide conditional mapping of values: for this, you need to use another extension called [Copy & Paste Values](../deprecated/copy-paste-values/index.md).

## How It Works

The main mechanism is Python `re` library, which handles regular expressions (regex).

All you need to know is that we do not use the whole spectrum of methods, but only the `substitute` function which has the following signature:

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

However, you need to take care of `pattern` and `repl`. In our configuration, they are presented as `pattern_to_replace` and `value_to_replace_with` respectively.

See section [Available configuration options](#available-configuration-options) below for more parameters to customize the behavior.

## Available configuration options

```json
{
  // Required: List of actions to be performed.
  "actions": [
    {
      // Required: List of transformations to perform on the value of the source field.
      "transformations": [
        {
          // Required: The Python regular expression defines a pattern in the value to be found
          // and replaced.
          "pattern_to_replace": "[^a-zA-Z\\d]",

          // Required: This value will replace all pattern occurrences matching the regular
          // expression defined in the pattern_to_replace parameter.
          "value_to_replace_with": "",

          // Optional: Regular expression defines the condition for a transformation to be applied.
          // Extension will apply the transformation if the value matches the expression.
          "replace_if_this_pattern_matches": ""
        }
      ],
      // Required: List of source and target field schema IDs.
      "source_target_mappings": [
        {
          // Required: Source schema_id of the initial value to be transformed.
          "source": "iban",
          // Required: Target field's schema_id where the extension will store the transformed value.
          "target": "iban_normalized"
        }
      ],
      // Optional: Queue IDs where the extension should perform the particular action.
      // You can assign the extension to multiple queues and specify numerous actions for different
      // queues in one instance. If not present, the extension will act on all the queues to which
      // it is assigned unless excluded_queue_ids is set.
      "queue_ids": [],

      // Optional: Queue IDs where the function won't perform the action. This parameter cannot be
      // set along with queue_ids.
      "excluded_queue_ids": [],

      // Optional: Condition's definition for a particular action. Condition needs to evaluate to
      // bool (True or False). When defined, the action will be evaluated. If True, the extension
      // will apply the action's transformation; otherwise, it won’t. It's a Python condition where
      // schema fields are referenced by their schema_id enclosed in {}.
      //
      // Example: `{item_code} != '' and {document_type} == 'invoice'`
      //
      // See Python expressions documentation for more details: https://docs.python.org/3.8/reference/expressions.html
      "action_condition": "True",

      // Optional: Additional list of schema_ids that will trigger the action if a user modified
      // a field with such name.
      "additional_user_update_trigger": [],

      // Optional: If set to true, it prevents the action from overwriting the target value when
      // the user updates it manually.
      "allow_target_update": false
    }
  ]
}
```

:::tip

You can use `replace_if_this_pattern_matches` to apply a transformation. This means if the expression in this parameter is not fulfilled, the source value will be copied as-is to the target value.

:::
