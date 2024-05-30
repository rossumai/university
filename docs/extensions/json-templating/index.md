---
title: 'JSON Templating'
---

JSON Templating engine is commonly used to configure many of our extensions.

:::warning[Work in progress]

_Work in progress_

:::

## JSON Templating Syntax

The basic and most commonly used syntax is for getting values from the annotation object:

```json
{
  "some_field": "@{schema_id_of_datapoint}"
}
```

## JSON Templating Operators

Operators are a special syntax that can be used to perform various complex operations when working with JSON.

### `$DATAPOINT_MAPPING$`

_TODO_

### `$DATAPOINT_VALUE$`

_TODO_

### `$FOR_EACH$`

_TODO_

### `$FOR_EACH_SCHEMA_ID$`

_TODO_

### `$IF_DATAPOINT_VALUE$`

_TODO_

### `$IF_SCHEMA_ID$`

_TODO_
