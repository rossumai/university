## Upgraded version

 The original extension does not preserve the original letter case of the address and has 4 options for how the output will be displayed.

1. If case is not set, **lower** case will be used. 
1. **upper** – all characters are converted to upper case
1. **first_letter** – the first letter of the first word is converted to upper case
1. **first_letters** – the first letter of each word is converted to upper case.

An **original** option is added in this upgraded version. Which means that the output field will preserve the original letter case of the address.

Create new extension (visit [serverless functions](https://rossum.ai/help/article/customize-rossum-logic-with-serverless-function/) help center to learn more about extensions.)

1. Set Triggered events to  **Initialize**, **Starter** and **Updated**
1. Select Extenstion type **Custom function**
1. Select Programming language **Python**
1. Paste the Python code below into the "extension code" window and save

```py
import json
import typing
from traceback import format_exc
from urllib import request
from urllib.error import HTTPError


def rossum_hook_request_handler(payload):
    if payload["event"] == "annotation_content" and payload["action"] in (
        "initialize",
        "started",
        "user_update",
        "updated",
    ):
        try:
            messages, operations = main(payload)
        except Exception as e:
            messages = [create_message("error", "Serverless Function: " + str(e) + format_exc())]
            return {"messages": messages}
        return {"messages": messages, "operations": operations}
    else:
        return {"messages": [], "operations": []}


def main(payload) -> typing.Tuple[dict, dict]:
    """
    Main function that implements the custom logic for messages and operations on datapoints.
    :param payload: see https://api.elis.rossum.ai/docs/#annotation-content-event-data-format
    :return: tuple - messages and operations
    """
    messages = []
    operations = []
    BASE_URL = payload["base_url"]
    LIBPOSTAL_PARSER_ENDPOINT = "parser"
    LIBPOSTAL_FULL_URL = (
        BASE_URL + "ext/libpostal/api/v1/" + LIBPOSTAL_PARSER_ENDPOINT
        if BASE_URL.endswith("/")
        else BASE_URL + "/ext/libpostal/api/v1/" + LIBPOSTAL_PARSER_ENDPOINT
    )
    rules = payload["settings"]["rules"]
    current_queue_id = int(payload["annotation"]["queue"].split("/")[-1])

    for rule in rules:
        if rule.get("queue_ids"):
            if current_queue_id not in rule["queue_ids"]:
                continue
        source_address_schema_id = rule.get("source_address_schema_id")
        disable_user_updates = rule.get("disable_user_updates") if rule.get("disable_user_updates") else False
        if source_address_schema_id is None:
            messages.append(
                create_message(
                    "warning",
                    "Libpostal address mapping - Invalid address parsing rule configuration - key source_address_schema_id is mandatory.",
                    None,
                )
            )

        address_datapoint = find_by_schema_id(payload["annotation"]["content"], source_address_schema_id)
        if not address_datapoint:
            messages.append(
                create_message(
                    "warning",
                    f"Libpostal address mapping - Field {source_address_schema_id} could not be found in the queue schema.",
                    None,
                )
            )
        user_update_found = False
        if payload["action"] in ("user_update", "updated") and payload["updated_datapoints"]:
            # address datapoint was changed, make updates
            if address_datapoint and address_datapoint[0]["id"] in payload["updated_datapoints"]:
                user_update_found = True
            # if any change is made in target_chema_id datapoints, overwrite again = disable user updates of the parsed address
            if disable_user_updates and not user_update_found:
                for fm in rule["field_mappings"]:
                    target_schema_id = fm.get("target_schema_id")
                    target_datapoint = find_by_schema_id(payload["annotation"]["content"], target_schema_id)
                    target_datapoint_id = int(target_datapoint[0]["id"]) if target_datapoint else None
                    if target_datapoint_id and target_datapoint_id in payload["updated_datapoints"]:
                        user_update_found = True
                        break
        address = None
        if payload["action"] in ("initialize", "started") or (
            payload["action"] in ("user_update", "updated") and user_update_found
        ):
            if address_datapoint:
                address = address_datapoint[0]["content"]["value"]
                address_dp_id = address_datapoint[0]["id"]
            if address:
                messages, address_parts_list = parse_address(address, LIBPOSTAL_FULL_URL)
                if messages:
                    return messages, operations
                address_parts_dict = process_libpostal_rest_output(address_parts_list)
                msgs, ops = create_address_fields_operations(
                    address_parts_dict, rule["field_mappings"], payload["annotation"]["content"], address_dp_id, address
                )
                operations.extend(ops)
                messages.extend(msgs)
            else:
                msgs, ops = reset_address_fields_operations(rule["field_mappings"], payload["annotation"]["content"])
                operations.extend(ops)
                messages.extend(msgs)

    return messages, operations


def reset_address_fields_operations(field_mappings: dict, content: dict):
    operations = []
    messages = []
    for field_mapping in field_mappings:
        target_schema_id = field_mapping.get("target_schema_id")
        target_schema_fields = find_by_schema_id(content, target_schema_id)
        if target_schema_fields:
            for target_schema_field in target_schema_fields:
                operations.append(create_replace_operation(target_schema_field, ""))

    return messages, operations


def create_address_fields_operations(
    address_parts_dict: dict, field_mappings: dict, content: dict, address_dp_id: int, address: str
) -> dict:
    """
    Main function responsible for creating Annotation content altering operations based on the define rules
    and parsed values from libpostal
    :param address_parts_dict dictionary of key:value pairs produced by the libpostal service
    :field_mappings list of field mappings defined in the extension settings
    :content payload content
    :return: messages and operations
    """
    operations = []
    messages = []
    for field_mapping in field_mappings:
        target_schema_id = field_mapping.get("target_schema_id")
        address_parts = field_mapping.get("address_parts")
        separator = field_mapping.get("separator") if field_mapping.get("separator") else " "
        case = field_mapping.get("case")
        if case and case not in ["upper", "first_letter", "first_letters", "original"]:
            case = None
            messages.append(
                create_message(
                    "warning",
                    "Libpostal address mapping - Invalid value of case attribute - possible values upper/first_letter/first_letters/original",
                    address_dp_id,
                )
            )
        value = ""
        if not target_schema_id or not address_parts:
            messages.append(
                create_message(
                    "warning",
                    "Libpostal address mapping - Invalid address parsing rule configuration - keys target_schema_id and address_parts are mandatory.",
                    address_dp_id,
                )
            )
        if address_parts:
            for address_part in address_parts:
                if address_part in address_parts_dict.keys():
                    if value:
                        value = value + separator + address_parts_dict[address_part]
                    else:
                        value = address_parts_dict[address_part]
            if case:
                value = process_case_rule(value, case, separator, address)
            target_schema_fields = find_by_schema_id(content, target_schema_id)
            if target_schema_fields:
                for target_schema_field in target_schema_fields:
                    operations.append(create_replace_operation(target_schema_field, value))
            else:
                messages.append(
                    create_message(
                        "warning",
                        f"Libpostal address mapping - Schema_id {target_schema_id} could not be found in the queue schema.",
                        address_dp_id,
                    )
                )
    return messages, operations


def process_case_rule(value: str, case: str, separator: str, address: str) -> str:
    """
    Changes case of words in a string according to a rul - available values:
    upper - converts entire string to upper case
    first_letter - converts first letter of a first word to upper case. if string does not start with a letter, no conversion is done
    first_letters - converts first letter of all words to upper case
    original - original value from address field
    :param value string value to be converted
    :case rule to be applied, one of [upper, first_letter, first_letters]
    :separator separator used to split/put back together the original string
    :return: reformatted string value
    """
    if case == "upper":
        return value.upper()
    elif case == "first_letter":
        return value.capitalize()
    elif case == "first_letters":
        values = value.split(separator)
        capitalized_values = ""
        for value in values:
            if not capitalized_values:
                capitalized_values = value.capitalize()
            else:
                capitalized_values = capitalized_values + separator + value.capitalize()
        return capitalized_values
    elif case == "original":
        address_lower = address.lower()
        value_lower = value.lower()
        
        # Find the start index of the match in the original string
        start_index = address_lower.find(value_lower)
        end_index = start_index + len(value_lower)
    
        # Extract the matched original string from the first string
        return address[start_index:end_index]


def process_libpostal_rest_output(address_parts_list: dict) -> dict:
    """
    Converts lipostal raw output to dictionary of keys (address parts) and values.
    :param address_parts_list json response of the libpostal query
    :return: dict of address parts key:values
    """
    address_parts_dict = {}
    for address_part in address_parts_list:
        if address_part["label"] not in address_parts_dict.keys():
            value = address_part["value"]
        else:
            value = address_parts_dict[address_part["label"]] + " " + address_part["value"]
        address_parts_dict[address_part["label"]] = value

    return address_parts_dict


def parse_address(address: str, libpostal_url: str) -> dict:
    """
    Calls external libpostal service and splits given string to individual address parts and returns them as json.
    :param address string address value
    :return: json response
    """
    payload = {"query": address}

    data = json.dumps(payload)
    data = data.encode("utf-8")

    req = request.Request(libpostal_url, data=data)
    req.add_header("Content-Type", "application/json")

    try:
        with request.urlopen(req) as resp:
            response = json.loads(resp.read().decode("utf-8"))
    except HTTPError:
        return [
            create_message(
                "warning",
                "Libpostal address mapping - Unexpected error while calling libpostal service - " + format_exc(),
            )
        ], {}
    return [], response


def find_by_schema_id(content: dict, schema_id: str) -> dict:
    """
    Return datapoints matching a schema id.
    :param content: annotation content tree (see https://api.elis.rossum.ai/docs/#annotation-data)
    :param schema_id: field's ID as defined in the extraction schema(see https://api.elis.rossum.ai/docs/#document-schema)
    :param accumulator: list for accumulating values with the same schema_id (f.e. values from same table column)
    :return: the list of datapoints matching the schema ID
    """
    accumulator = []
    for node in content:
        if node["schema_id"] == schema_id:
            accumulator.append(node)
        elif "children" in node:
            accumulator.extend(find_by_schema_id(node["children"], schema_id))

    return accumulator


def create_message(message_type: str, message_content: str, datapoint_id=None) -> dict:
    """
    Create a message which will be shown to the user
    :param message_type: type of the message, any of {info|warning|error}. Errors prevent confirmation in the UI.
    :param message_content: message shown to the user
    :param datapoint_id: id of the datapoint where the message will appear (None for "global" messages).
    :return: dict with the message definition (see https://api.elis.rossum.ai/docs/#annotation-content-event-response-format)
    """
    return {
        "content": message_content,
        "type": message_type,
        "id": datapoint_id,
    }


def create_replace_operation(datapoint: dict, new_value: str) -> dict:
    """
    Replace the value of the datapoint with a new value.
    :param datapoint: content of the datapoint
    :param new_value: new value of the datapoint
    :return: dict with replace operation definition (see https://api.elis.rossum.ai/docs/#annotation-content-event-response-format)
    """
    return {
        "op": "replace",
        "id": datapoint["id"],
        "value": {
            "content": {
                "value": new_value,
            },
        },
    }
```

# Configuration example

```json
{
  "rules": [
    {
      "field_mappings": [
        {
          "case": "original",
          "address_parts": [
            "city"
          ],
          "target_schema_id": "recipient_delivery_address_city"
        },
        {
          "case": "first_letters",
          "address_parts": [
            "state"
          ],
          "target_schema_id": "recipient_delivery_address_state"
        },
        {
          "address_parts": [
            "po_box"
          ],
          "target_schema_id": "recipient_delivery_address_line_1"
        },
        {
          "case": "first_letters",
          "separator": ",",
          "address_parts": [
            "house",
            "category",
            "unit",
            "level"
          ],
          "target_schema_id": "recipient_delivery_address_line_2"
        },
        {
          "case": "original",
          "address_parts": [
            "road"
          ],
          "target_schema_id": "recipient_delivery_address_street"
        },
        {
          "case": "first_letters",
          "address_parts": [
            "country"
          ],
          "target_schema_id": "recipient_delivery_address_country"
        },
        {
          "case": "upper",
          "address_parts": [
            "postcode"
          ],
          "target_schema_id": "recipient_delivery_address_postal_code"
        },
        {
          "case": "upper",
          "address_parts": [
            "house_number"
          ],
          "target_schema_id": "recipient_delivery_address_house_number"
        }
      ],
      "disable_user_updates": true,
      "source_address_schema_id": "recipient_delivery_address"
    },
    {
      "field_mappings": [
        {
          "case": "original",
          "address_parts": [
            "city"
          ],
          "target_schema_id": "recipient_address_city"
        },
        {
          "case": "first_letters",
          "address_parts": [
            "state"
          ],
          "target_schema_id": "recipient_address_state"
        },
        {
          "address_parts": [
            "po_box"
          ],
          "target_schema_id": "recipient_address_line_1"
        },
        {
          "case": "first_letters",
          "separator": ",",
          "address_parts": [
            "house",
            "category",
            "unit",
            "level"
          ],
          "target_schema_id": "recipient_address_line_2"
        },
        {
          "case": "original",
          "address_parts": [
            "road"
          ],
          "target_schema_id": "recipient_address_street"
        },
        {
          "case": "first_letters",
          "address_parts": [
            "country"
          ],
          "target_schema_id": "recipient_address_country"
        },
        {
          "case": "upper",
          "address_parts": [
            "postcode"
          ],
          "target_schema_id": "recipient_address_postal_code"
        },
        {
          "case": "upper",
          "address_parts": [
            "house_number"
          ],
          "target_schema_id": "recipient_address_house_number"
        }
      ],
      "disable_user_updates": true,
      "source_address_schema_id": "recipient_address"
    }
  ]
}
```
