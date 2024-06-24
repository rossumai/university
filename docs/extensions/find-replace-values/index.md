---
title: 'Find & Replace Values'
---

_Formerly known as Value Transformations_

## Installation

:::warning[Work in progress]

_Describe how to create and configure the extension._

:::

## Basic usage

:::warning[Work in progress]

## What it can do?

- Cleaning existing value of the field and putting it into another or the same field based on a specific pattern
- Finding a specific pattern inside a value and putting only it into another or the same field
- Running Python3 conditions to determine if actions must be performed
- Running Regex match to determine if a transformation should be applied
- Defining self-execution on a queue level

## What It Can’t Do?

- React to “No match” scenario - if no match is found, the value from the source field is copied “as-is” to the target field (you need to setup action condition to avoid this behaviour)
- Provide conditional mapping of values - for this, you need to use another extension called Copy & Paste Values.

## How It Works
The main mechanism is Python 3's `re` library, which handles regex (Regular Expressions).

All you need to know is that we do not use the whole spectrum of methods, but only the `substitute` function.

```python
re.sub(pattern, repl, string, count=0, flags=0)
```
- **pattern** is the regex pattern.
- **repl** is the replacement string.
- **string** is the input string (in our case, the value from a field).

In the configuration, you do not need to worry about the **string** as it is taken from source fields:
```json
"source_target_mappings": [
  {
    "source": "table_description_additional",
    "target": "table_container_number_export"
  }
]
```
However you need to take care of **pattern** and **repl**. In our configuration they are presented as: 
- **pattern_to_replace**
- **value_to_replace_with**

The extension has more parameters to customize the behavior. 
The rest of the parameters are presented in the table below:
| Root                                  | Param name                     | Description                                                                                                                                                       |
|---------------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| actions                               | actions                        | List of actions to be performed. See a description of the action parameters below.                                                                                |
| actions                               | source_target_mappings         | List of source and target field schema IDs.                                                                                                                        |
| actions.source_target_mappings         | source                         | Source schema_id of the initial value to be transformed.                                                                                                           |
| actions.source_target_mappings         | target                         | Target field’s schema_id where the extension will store the transformed value.                                                                                     |
| actions                               | transformations                | List of transformations to perform on the value of the source field. See a description of the transformation parameters below.                                      |
| actions                               | queue_ids                      | Queue IDs where the extension should perform the particular action. You can assign the extension to multiple queues and specify numerous actions for different queues in one instance. It’s optional. If not present, the extension will act on all the queues to which it is assigned unless excluded_queue_ids is set. |
| actions                               | excluded_queue_ids             | Queue IDs where the function won’t perform the action. This parameter cannot be set along with queue_ids. It’s optional.                                            |
| actions                               | action_condition               | Condition’s definition for a particular action. Condition needs to evaluate to bool (True or False). When defined, the action will be evaluated. If True, the extension will apply the action’s transformation; otherwise, it won’t. It’s a Python condition where schema fields are referenced by their schema_id enclosed in {}. Example: ```{item_code} != '' and {document_type} == 'invoice'``` . [Python expressions documentation](https://docs.python.org/3.8/reference/expressions.html) |
| actions                               | additional_user_update_trigger | Additional list of schema_ids that will trigger the action if a user modified a field with such name.                                                           |
| actions                               | allow_target_update            | If set to true, it prevents the action from overwriting the target value when the user updates it manually. Default false.                                        |
| transformations                       | pattern_to_replace             | The regular expression defines a pattern in the value to be found and replaced. Python regular expressions.                                                       |
| transformations                       | value_to_replace_with          | This value will replace all pattern occurrences matching the regular expression defined in the pattern_to_replace parameter.                                       |
| transformations                       | replace_if_this_pattern_matches| Regular expression defines the condition for a transformation to be applied. Extension will apply the transformation if the value matches the expression. Python regular expressions.                                       |


:::tip
You can use **replace_if_this_pattern_matches** to apply a transformation. This means if the expression in this parameter is not fulfilled, the source value will be copied as-is to the target value.
:::



## Available configuration options

:::warning[Work in progress]

1. Removal of non-alphanumeric characters
The Value Transformations extension with the configuration below removes all non-alphanumeric characters from the Vendor VAT Number and IBAN fields.
    **Example:**
    - Input: DE 12345-6789
    - Output: DE123456789
    ```json
    {
    "actions": [
        {
        "transformations": [
            {
            "pattern_to_replace": "[^a-zA-Z\\d]",
            "value_to_replace_with": "",
            "replace_if_this_pattern_matches": "[^a-zA-Z\\d]"
            }
        ],
        "source_target_mappings": [
            {
            "source": "sender_vat_id",
            "target": "sender_vat_id_normalized"
            },
            {
            "source": "iban",
            "target": "iban_normalized"
            }
        ]
        }
    ]
    }
    ```
2. Extracting and normalizing part of the line item description
This configuration uses two chained transformations to extract and normalize item code from the item description.
    
    The first transformation removes everything after the first space character in the string. The second one removes all hyphens from the result of the first transformation.
    
    Notice also that there is an action condition defined in this configuration. The function will perform this action only when the Vendor Name is “Great Company “. The condition is optional.

    **Example:**
    - Input: 1234-567-89 This is a line item description with the code at the beginning.
    - Output: 123456789
    ```json
    {
    "actions": [
        {
        "transformations": [
            {
            "pattern_to_replace": " ([\\s\\S]*)$",
            "value_to_replace_with": "",
            "replace_if_this_pattern_matches": " ([\\s\\S]*)$"
            },
            {
            "pattern_to_replace": "-",
            "value_to_replace_with": "",
            "replace_if_this_pattern_matches": "-"
            }
        ],      
        "action_condition": "{sender_name} == 'Great Company'",
        "source_target_mappings": [
            {
            "source": "item_description",
            "target": "item_code"
            }
        ]
        }
    ]
    }
    ```
3. Copying item code to another field for specific line items
    
    This configuration uses an action condition to check if the document_type header field has the value ‘tax_invoice’ and checks all line items if attribute item_code is either ‘M0061’ or ‘M0062’. The transformation is applied to line items that meet this condition.

    Then the transformation removes all characters different than numerical characters and stores the transformed values in a separate field called item_other for each matched line item.

    **Example:**
    - Input: ‘tax_invoice’ and [M006, M0062]
    - Output: [0061, 0062]
    ```json
    {
    "actions": [
        {
            "queue_ids": ["123"],
            "action_condition": "{document_type} == 'tax_invoice' and {item_code} in ['M0061','M0062']",
            "transformations": [
                {
                "pattern_to_replace": "[^0-9]",
                "value_to_replace_with": "",
                "replace_if_this_pattern_matches": ".+",
                }
            ],
            "source_target_mappings": [
                {
                "source": "item_code",
                "target": "item_other"
                }
            ]
        }
    ]
    }
    ```
:::
