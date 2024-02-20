---
sidebar_position: 1
title: 'Configuration examples'
---

The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:

```json
{
  "configurations": [
    {
      "name": "...",
      "source": {
        "dataset": "...",
        // highlight-start
        "queries": [
          // paste the examples here
        ],
        // highlight-end
      },
      "default": { ... },
      "mapping": { ... },
      "result_actions": { ... }
    }
  ]
}
```

## Exact match

Even though exact match can be achieved using `find` method instead of `aggregate` (see [below](#exact-match-case-insensitive)), it is still recommended to use `aggregate` because it's often necessary to specify `$project` stage:

```json
{
  "aggregate": [
    {
      "$match": {
        "email": "{email_from}"
      }
    },
    {
      "$project": {
        "Supplier Name": 1
      }
    }
  ]
}
```

## Exact match (case-insensitive)

```json
{
  "find": {
    "role_code": {
      "$regex": "^{item_role | re}$",
      "$options": "i"
    }
  }
}
```

## Fuzzy match

It is necessary to restrict the fuzzy search results by using `$match` on the results score (otherwise many irrelevant false positives would be returned).

```json
{
  "aggregate": [
    {
      "$search": {
        "index": "default",
        "text": {
          "query": "{item_description}",
          "path": "description"
        }
      }
    },
    {
      "$limit": 10 // optional
    },
    {
      "$addFields": {
        "__score": {
          "$meta": "searchScore"
        }
      }
    },
    {
      "$match": {
        "__score": {
          "$gt": 0.1 // configure as needed based on the results
        }
      }
    }
  ]
}
```

## Remove duplicates (`$group`)

```json
{
  "aggregate": [
    // ...
    {
      "$group": {
        "_id": "$vendorRegNo",
        "__tmpRoot": {
          "$first": "$$ROOT"
        }
      }
    },
    {
      "$replaceRoot": {
        "newRoot": "$__tmpRoot"
      }
    },
    // ...
    {
      "$sort": {
        "__score": -1 // it is important to sort the results correctly after using $group
      }
    }
  ]
}
```

## Match on normalized values

```json
{
  "aggregate": [
    // ...
    {
      "$addFields": {
        "__tax_id_stringified": {
          "$toString": "$Tax ID"
        }
      }
    },
    {
      "$addFields": {
        "__tax_id_normalized": {
          "$map": {
            "input": {
              "$range": [
                0,
                {
                  "$strLenCP": "$__tax_id_stringified"
                }
              ]
            },
            "in": {
              "$substrCP": ["$__tax_id_stringified", "$$this", 1]
            }
          }
        }
      }
    },
    {
      "$addFields": {
        "__tax_id_normalized": {
          "$filter": {
            "input": "$__tax_id_normalized",
            "cond": {
              "$regexMatch": {
                "input": "$$this",
                "regex": "[0-9a-zA-Z]"
              }
            }
          }
        }
      }
    },
    {
      "$addFields": {
        "__tax_id_normalized": {
          "$reduce": {
            "input": "$__tax_id_normalized",
            "initialValue": "",
            "in": {
              "$concat": ["$$value", "$$this"]
            }
          }
        }
      }
    },
    {
      "$match": {
        "__tax_id_normalized": "{sender_vat_id_normalized}"
      }
    }
  ]
}
```

## Match only if there is exactly one match

```json
{
  "aggregate": [
    // ...
    {
      "$setWindowFields": {
        "output": {
          "__totalCount": {
            "$count": {}
          }
        }
      }
    },
    {
      "$match": {
        "__totalCount": 1
      }
    }
  ]
}
```

## Match score steps

```json
{
  "aggregate": [
    // ...
    {
      "$setWindowFields": {
        "output": {
          "__score_normalized_max": {
            "$max": "$__score_normalized"
          }
        }
      }
    },
    {
      "$match": {
        "$expr": {
          "$cond": {
            "if": {
              "$or": [
                {
                  "$and": [
                    { "$gt": ["$__score_normalized_max", 0.95] },
                    { "$gt": ["$__score_normalized", 0.95] }
                  ]
                },
                {
                  "$and": [
                    { "$gt": ["$__score_normalized_max", 0.9] },
                    { "$lte": ["$__score_normalized_max", 0.95] },
                    { "$gt": ["$__score_normalized", 0.9] },
                    { "$lte": ["$__score_normalized", 0.95] }
                  ]
                },
                {
                  "$and": [
                    { "$gt": ["$__score_normalized_max", 0.85] },
                    { "$lte": ["$__score_normalized_max", 0.9] },
                    { "$gt": ["$__score_normalized", 0.85] },
                    { "$lte": ["$__score_normalized", 0.9] }
                  ]
                }
              ]
            },
            "then": true,
            "else": false
          }
        }
      }
    }
  ]
}
```

## Custom JS code

```json
{
  "aggregate": [
    // ...
    {
      "$addFields": {
        "__order_number_sanitized": {
          "$function": {
            "body": "function(x) { return x.replace(/[^0-9a-z]/ig, '').toLowerCase(); }",
            "args": ["$Order Number"],
            "lang": "js"
          }
        }
      }
    }
    // ...
  ]
}
```
