---
title: 'Master data hub: Configuration examples'
sidebar_label: 'Configuration examples'
sidebar_position: 4
---

# Configuration examples

The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:

```json
{
  "configurations": [
    {
      "name": "…",
      "source": {
        "dataset": "PurchaseOrder_v1",
        // highlight-start
        "queries": [
          // COPY-PASTE THE EXAMPLES HERE
        ],
        // highlight-end
      },
      "default": { … },
      "mapping": { … },
      "result_actions": { … }
    }
  ]
}
```

In most of the cases, the `dataset` key will be static. It can however be dynamic as well:

```json
{
  "configurations": [
    {
      "name": "…",
      "source": {
        "dataset": "PurchaseOrder_{queue_country}_v1"
        // …
      }
    }
  ]
}
```

## Count all records in the collection

You can quickly get a total number of records in the whole collection by calling `$count`:

```json
{
  "aggregate": [
    {
      "$count": "total"
    }
  ]
}
```

## Compound queries

Compound queries are very useful when we need to match against multiple attributes and give to each match a different importance. In the following example we use Fibonacci Sequence boosts to [fuzzy match](#fuzzy-match) against XXX, YYY and ZZZ:

```json
{
  "aggregate": [
    {
      "$search": {
        "index": "default",
        "compound": {
          "must": [
            {
              "text": {
                "path": "XXX",
                "query": "{product_code} ", // notice the extra space at the end!
                "score": {
                  "boost": {
                    "value": 8
                  }
                }
              }
            },
            {
              "text": {
                "path": "YYY",
                "query": "{product_name} ", // notice the extra space at the end!
                "score": {
                  "boost": {
                    "value": 5
                  }
                }
              }
            }
          ],
          "should": [
            {
              "text": {
                "path": "ZZZ",
                "query": "{product_label} ", // notice the extra space at the end!
                "score": {
                  "boost": {
                    "value": 3
                  }
                }
              }
            }
          ]
        }
      }
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
          "$gt": 30 // Check the resulting `__score` to set some appropriate value
        }
      }
    }
  ]
}
```

## Dummy object

Creating dummy objects can be handy when we need to create some dummy (empty) record on the fly:

```json
{
  "aggregate": [
    {
      "$unionWith": {
        "coll": "__non_existent_collection__",
        "pipeline": [
          {
            "$documents": [
              {
                "__score": -1,
                "zip": "",
                "companyName": "Company Unknown",
                "contactName": ""
              }
            ]
          }
        ]
      }
    }
  ]
}
```

## Exact match

```json
{
  "find": {
    "Vendor name": "{sender_name}"
  }
}
```

The query checks the "Vendor name" in the dataset and compares it to the value of the "Vendor name" field extracted from the document. To refer to the "Vendor name" field, we used its schema ID - `sender_name`.

Even though exact match can be achieved using `find` method instead of `aggregate` (see [below](#exact-match-case-insensitive)), it is still recommended to use `aggregate` because it's often necessary to specify `$project` stage:

```json
{
  "aggregate": [
    {
      "$match": {
        "Vendor name": "{sender_name}"
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

## Exact submatch

Sometimes it is necessary to match an exact substring. This can easily be achieved by using `$regex` like so:

```json
{
  "find": {
    "role_code": {
      "$regex": "^.*{item_role | re}.*$"
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
          "query": "{item_description} ", // notice the extra space at the end!
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

## HTTP requests

Master Data Hub can work not only with existing collections, but it can also send HTTP requests. The whole configuration for HTTP requests is slightly different:

```json
{
  "configurations": [
    {
      "name": "…",
      "source": {
        // highlight-start
        "auth": {
          "url": "https://elis.rossum.ai/api/v1/auth/login",
          "body": {
            "password": "{secrets.elis_password}",
            "username": "{secrets.elis_username}"
          },
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          }
        },
        "queries": [
          {
            "url": "https://elis.rossum.ai/api/v1/annotations/{annotation_id}/content",
            "method": "GET",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer {auth.body.key}"
            },
            "result_path": "content[?contains(schema_id, 'line_items_section')].children[].children[].children[?contains(schema_id, 'item_po_number')].content[]"
          }
        ]
        // highlight-end
      },
      "default": { … },
      "mapping": { … },
      "result_actions": { … }
    }
  ]
}
```

## JavaScript in-line functions

:::warning

Even though using JavaScript can be easier in some scenarios, it is typically less performant than using native MongoDB queries. Use this carefully!

:::

```json
{
  "aggregate": [
    // …
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
    // …
  ]
}
```

## Remove duplicates (`$group`)

```json
{
  "aggregate": [
    // …
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
    // …
    {
      "$sort": {
        "__score": -1 // it is important to sort the results correctly after using $group
      }
    }
  ]
}
```

## Return all collection records (sorted)

Sometimes it might be useful to always return all records and perhaps sort them by matching score. That is, always return everything but on put the best results on top.

This can be achieved by first searching and returning records with their respective `__score` (see [fuzzy match](#fuzzy-match), for example) and later appending all records with zero `__score` using `$unionWith`. Finally, all the results are grouped to remove duplicates and sorted by the score:

```json
{
  "aggregate": [
    // … (fuzzy search first)
    {
      // highlight-start
      "$unionWith": {
        "coll": "legal_entities_v1",
        "pipeline": [
          {
            "$addFields": {
              "__score": 0
            }
          }
        ]
      }
      // highlight-end
    },
    {
      "$group": {
        "_id": "$legal_entity",
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
    {
      "$sort": {
        "__score": -1
      }
    }
  ]
}
```

## Match on normalized values

```json
{
  "aggregate": [
    // …
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
    // …
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
    // …
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

## Score normalization

```json
{
  "aggregate": [
    // … (fuzzy search)
    {
      "$addFields": {
        "__score": {
          "$meta": "searchScore"
        }
      }
    },
    {
      "$setWindowFields": {
        "output": {
          "__max_score": {
            "$max": "$__score"
          }
        }
      }
    },
    {
      "$addFields": {
        "__normalized_score": {
          "$divide": ["$__score", "$__max_score"]
        }
      }
    }
    // …
  ]
}
```

Note that one disadvantage of this normalization is that `__normalized_score` can be exactly "1" even when `__score` has low value. It might be a good idea to combine both scores to filter out results that would normally be considered not-a-match.
