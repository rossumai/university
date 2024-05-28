---
sidebar_position: 2
title: 'Business Rules Validation: Expression Engine'
sidebar_label: 'Expression Engine'
---

# Expression Engine

Rossum Expression Engine is responsible for validating expressions, producing either a true or false result. Its syntax closely resembles that of Python and allows for utilizing data from annotated documents. The engine assesses conditions and expressions using document data. Currently, it is employed for the Business Rules Validation extension, but there are plans to extend its usage to other extensions in the future. Engine operates at both the header field and line item levels, offering the flexibility to combine them within a single expression.

Examples:

```text
{issue_date} > "2023-01-01"

{item_price} * {item_amount} == {item_total}

sum( {item_total} ) == {total_price}
```

## Allowed operators

Engine supports basic mathematical and logical operators:

```text
+, -, /, //, *, %, and, or, xor, ==, !=, <, >, <=, >=
```

## Data types

The Expression Engine supports four data types: integer (int), floating-point number (float), string, and date. When performing automatic casting, the engine first attempts to cast the value as a float, followed by an integer, then a date, and finally as a string.

It is important to note that when dealing with dates, the format `YYYY-MM-DD` must be followed, including the quotation marks. Without the quotation marks, a value like 2023-12-24 would be evaluated as a mathematical subtraction resulting in the number 1987.

If you need to ensure a specific data type is used, you can manually cast the value using the following conversions:

```text
- int(<value>) - for whole numbers

- float(<value>) - for numbers with decimal digits

- date(<value>) - for dates

- str(<value>) - for text (this also serves as a catch-all type)
```

## Empty values

There are two functions to check whether a document data point has a value or is empty:

```text
- has_value({data_point}) returns True if the data point is not empty (!='')

- is_empty({empty_point}) returns True if the data point is empty (=='')
```

Important Note: Please be aware that using `==''` and `!=''` for comparison will not work.

The expression engine automatically avoids error messages during the annotation process by skipping all lines in a table that have empty values. Whenever there's an empty value in the rule, it is skipped, including `==''`.

For headers, the skip procedure works accordingly - because there's only "one" line to skip, the whole rule is skipped.

## Aggregation function and empty values

Table column with following values [1,2,"",2]

```text
sum({item_amount]})=5
sum({item_amount, default=0})=5
unique_len({item_amount]})=2
len({item_amount]})=3
len(filter(({item_amount]}),""))=3
len({item_amount, default=0})=4
```

Table column with empty values ["","",""]

```text
sum({item_amount]})=None
unique_len({item_amount]})=None
len({item_amount]})=None
len(filter(({item_amount]}),""))=None
len({item_amount, default=0})=3
```

Not annotated table (defined in schema)

```text
sum({item_amount]})=None
sum({item_amount, default=0})=None
unique_len({item_amount]})=None
len({item_amount]})=None
len(filter(({item_amount]}),""))=None
len({item_amount, default=0})=None
```

## Allowed functions

### Aggregation functions

To compare header fields and line items or implement business rules based on line items, the following aggregation functions are at your disposal:

```text
- all(<expression>) - all lines in the table must satisfy the business rule in order to pass

- any(<expression>) - at least one line in the table must fulfill the business rule in order to pass

- sum(<column>) - summary of a table column (applicable to float and int, as well as string values that can be cast to float or int)

- min(<column>) - minimum value in a table column

- max(<column>) - maximum value in a table column

- len(<column>) - number of rows in the table (i.e., the length of the row list)

- unique_len(<column>) - number of unique values in a table column

- first_value(<column>) - first value of a table column, often used in conjunction with a filter to exclude empty values first_value(filter(<column>,["",None]))
```

### Filter function

```text
- filter(<value or column>,[<remove_value>]) - a filter function that removes all values in the second parameter.
Example: filter({item_price},[0,None])
```

### Default value functions

```text
- {<value or column>, default=<default_value>} - basic default value function. Value extracted from the document cannot be used as a default value using this syntax.
Example: {vendor, default="Rossum"}

- {<value or column>, default=value(‘<other_data_point>’)} - with this setup you can use a data point as a default value.
Example: value({item_delivery_date}, default={delivery_date}).
```

### Date functions

```text
- today() - today’s date, determined using Coordinated Universal Time (UTC), which is the standard time used in all Rossum solutions

- timedelta(<shift>) - adds a time delta in years, months and days.
Example: today() + timedelta(days=2) > {due_date}
```

### List function

```text
- list_contains(<value>,<search>) - returns “true” if the search element is found in the document value which is a table column.
Example: list_contains({item_description},"car")

The function supports a list of values to be checked list_contains(<value>,[<search>]), example {item_description}, ["car", "bus"]).
`contains` cannot be used for substring, please use regexp.
`in` is not supported.
```

### String functions

```text
- substring(<search>, <value>, ) - returns “true” if the “search” substring is found in “value”. This function is case sensitive.

- regexp(<regexp>, <value>,) - returns “true” if the regular expression has a non-empty match to the document value.
Example: regexp("[Cc]ar$", {item_description})

Optional parameter - ignore_case: regexp("rossum", {sender_name}, ignore_case=True)
Please note that `re.search` is the underline function call and both parameters are cast to string.

- similarity(<value>,<search>) - returns the Levenshtein distance between the document value and the selected string.
Example: similarity({item_description},"Car") > 2
Please find more information about Levenshtein distance here - https://en.wikipedia.org/wiki/Levenshtein_distance
```

### Table scope

There is a limitation in the implementation where one rule can only work with one table. This limitation ensures that error messages can be shown on the correct lines of the table.

To perform tasks like checking the number of lines in the tables, you can use aggregation functions. However, the expression engine does not permit using data points in one rule. Instead, you need to define variables to work with the data points.

```text
Variables: {“len_first_table” : “}
```
