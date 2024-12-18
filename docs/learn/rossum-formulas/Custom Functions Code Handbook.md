# Custom Functions Code Handbook

Custom code refers to user-defined logic written as [Serverless Functions](https://rossum.ai/help/article/customize-rossum-logic-with-serverless-function/) in Rossum \- it’s an implementation of AWS Lambda using Python 3.12. This means writing code that runs in a stateless, event-driven compute environment. These functions execute custom operations in response to triggers without the need to manage server infrastructure.

# 1\. Determine If Any Code Is Necessary

Before writing custom code, consider whether it's truly needed. Rossum offers functionalities in the [**Rossum Store**](https://elis.rossum.ai/settings/store), [**Formula Fields**](https://rossum.ai/help/article/formula-fields-an-advanced-guide-to-manual-formula-creation/) or [**Export pipelines**](https://rossum.university/docs/learn/export-pipeline) that might already fulfill your requirements. Utilizing existing solutions can save time and reduce complexity.

### When to Avoid Writing Custom Code:

* **Rossum Store Solutions**: Check the [Rossum Store](https://elis.rossum.ai/settings/store) for pre-built extensions and integrations that might meet your needs.  
* **Formula Fields**: Use [Formula Fields](https://rossum.ai/help/article/formula-fields-an-advanced-guide-to-manual-formula-creation/) for simple data transformations or calculations within Rossum's platform without the need for custom functions.

# 2\. Write Once, Read Many Times

When writing the code, the key principle is to make your code as **readable** as possible. You'll revisit your code multiple times after writing it, especially during debugging or future updates. Aim for code that's easy to scan rather than requiring deep interpretation.

\- **Meaningful Naming**: Use clear, descriptive names for functions, variables and serverless functions themselves to convey their purpose without needing to delve into the details. Avoid one-character variable names. Always use English\!

  Example:

```py
def extract_invoice_data(invoice) -> None:
      # Logic to extract data from an invoice
      pass
```

 \- **Thoughtful Comments**: Add comments where necessary, especially around complex logic. Avoid over-commenting simple lines but provide insights into the **why** behind decisions or non-obvious steps.

  Example:

```py
# This ensures that tasks with closer deadlines are processed first
sorted_tasks = sort_tasks_by_deadline(tasks)
```

\- **Expose common attributes**: Extract variables that reference external attributes to the hook settings and reference them by fetching their value from the payload’s settings attribute.

Example:

Bad practice \- hook code 

```py
...
API_URL = "https://api.example.com/v1"
WRITE_RESPONSE_TARGET_FIELD = "response_datapoint"
```

Good practice \- hook.settings

```json
{
API_URL = "https://api.example.com/v1"
WRITE_RESPONSE_TARGET_FIELD = "response_datapoint"
}
```

\- **Define secrets schema**: If a function requires any secrets (password, client ID, …), make sure the secrets keys are visible by defining JSON schema in hook.secrets\_schema. They must be applied via API hook PATCH call.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "username",
    "password"
  ]
}
```

\- **Modular Code**: Break down your code into small, reusable functions with single responsibilities. This makes your code cleaner and easier to debug and test.

  Example:

```py
def process_data(data):
   ...

def validate_data(data):
   ...

def transform_data(data):
   ...
```

\- **Leverage Modern Python Features**: Utilize features from Python 3.12 version to simplify and enhance your code. The walrus operator (\`**:=**\`) allows you to assign values within expressions, making code more concise. The \`**match**\` statement can simplify complex conditional logic.

  Example with walrus operator:

```py
    def process_data(data: dict[str, Any]) -> dict[str, Any]:
      if parsed_data := parse_data(data):
          return transform_data(parsed_data)
      raise ValueError("Invalid data")
```

  Example with \`**match**\` statement:

```py
  def handle_error(error: Exception) -> None:
      match error:
          case ValueError():
              print(f"ValueError occurred: {error}")
          case KeyError():
              print(f"KeyError occurred: {error}")
          case _:
              print(f"Unexpected error: {error}")
```

## Use Typing Annotations Wisely

Typing annotations enhance code readability and help catch type-related errors. However, it's important to use them judiciously to avoid clutter and ensure they add value.

\- **Use Where They Add Value**: Apply typing annotations to function signatures, variables, and return types to make the code more self-documenting.

  Example:

```py
  def calculate_total(amounts: dict[str, float]) -> float:
      return sum(amounts.values())
```

\- **Avoid Overusing Typing**: Don't annotate every single variable or function if it doesn't add meaningful clarity. Focus on areas where type information aids understanding and maintenance.

# 3\. Use Rossum Python (TxScripts)

Whenever you access or modify the payload, or need to display a message to the user, use **Rossum Python** (soon to be renamed **TxScripts**). You can learn more about it at [Rossum Python documentation](https://rossum.university/docs/learn/rossum-formulas/serverless-functions) and [TxScripts documentation](https://elis.rossum.ai/api/docs/#rossum-transaction-scripts).

Example:

```py
from txscript import TxScript

def rossum_hook_request_handler(payload: dict) -> dict:
    t = TxScript.from_payload(payload)
    print(t)
    return t.hook_response()
```

# 4\. Effective Debugging with **print()**

While using a logger is considered the best practice for structured and maintainable logging, the simplest approach is to use `print()`. Logs are crucial for troubleshooting, especially when you don’t have access to a traditional UI for monitoring. The Rossum platform captures output from standard streams, so `print()` can be an effective and easy method for logging. To view this output: *Extensions \-\> Logs \-\> Detail* of log record, “output” key.

**Log at Key Points**:  
\- Log critical entry points along with their input parameters.  
\- Log exceptions and errors.  
\- Focus on logging information that provides meaningful insights and isn't readily apparent.  
\- Accumulate loop outputs and log them as a single record.

\- **Avoid Sensitive Data**: Do not log sensitive information such as personally identifiable information (PII) or credentials.

\- **Be Concise**: Too many logs can make debugging harder. Focus on logging important checkpoints and errors.

# 5\. Exception Handling: Be Specific, Avoid Catching **Exception**

Proper error handling ensures that failures are visible and correctable. Using broad exceptions like **Exception** can mask critical issues, making debugging more difficult.

\- **Catch specific exceptions**: to prevent hiding important bugs. Any unhandled exception should eventually be caught in the entry point function (e.g., **rossum\_hook\_request\_handler()**), ensuring they are appropriately logged and managed by the Rossum platform.

Bad Practice:

```py
  try:
      process_data(data)
  except Exception as e:
      print(f"An error occurred: {e}")
```

Good Practice:

```py
  try:
      process_data(data)
  except ValueError as e:
      print(f"ValueError: {e}")
      raise
  except KeyError as e:
      print(f"KeyError: Missing expected key: {e}")
      raise
```

\- **Re-raise Exceptions**: After catching and logging, always re-raise the exception unless there's a valid fallback strategy. This ensures the failure is handled appropriately.

\- **Graceful Failure Handling**: Catch predictable errors (like invalid input) and return meaningful messages or default values without crashing the function entirely.

\- **Fail Fast**: If something is wrong with the data or the flow, handle it immediately. Do not let errors propagate unnoticed.


Example:

```py
 def rossum_hook_request_handler(payload: dict) -> dict:
    messages, operations = [], []
    try:
        messages, operations = main(payload)
    except Exception as e:
        print(f"Raised exception: {e}")
        messages = [create_message("error", f"MyFunction raised an exception: {e}")]
    return {"messages": messages, "operations": operations}


def main(payload: dict) -> tuple[list, list]:
  ...
  try:
      process_data(data)
  except ValueError as e:
      print(f"ValueError: {e}")
      raise
  ...
  return messages, operations
```

# 6\. Understand Payload Structure

Understanding Rossum's payload structure is essential for effective data parsing and manipulation.

\- **Data Format**: Rossum typically uses JSON for request and response payloads.

\- **Variable Keys Based on Hook Configuration**: The keys present in the payload depend on your hook configuration. This means the structure and content of the payload can vary depending on how you have set up your function within Rossum. For example:

* **Authentication Token**: If your hook configuration includes an authentication token, the payload will contain keys like **`rossum_authorization_token`**. Use this token for authenticated API calls without hardcoding credentials.  
* **Sideloaded Data**: If you have configured your hook to sideload schemas or other data, the payload will include additional keys such as **`schema`**, **`document`**, or **`annotations`**.  
  * **URLs vs. Sideloaded Data**: Often, keys in the payload have values that are URLs pointing to resources like documents or schemas. However, when you enable sideloading for certain data (e.g., schemas, annotations), the value of those keys changes from a URL to a dictionary containing the sideloaded data.  
    See [https://elis.rossum.ai/api/docs/\#sideloading](https://elis.rossum.ai/api/docs/#sideloading)  
* **Custom Parameters**: Any custom parameters you define in your hook configuration will also appear as keys in the payload (**settings**, **secrets**).

**\- Data Extraction**:

Use appropriate keys to extract the required data.  
Example:

```py
base_url = payload.get("base_url", "https://api.elis.rossum.ai")
auth_token = payload.get("rossum_authorization_token")
document_id = payload["document"]["id"]
```

**\- Event and Action Validation**: As a good practice and part of defensive programming, you should verify that the **`event`** and **`action`** fields in the payload match those defined in your hook configuration. This ensures that your function responds appropriately to the [correct triggers](https://elis.develop.r8.lol/api/docs/#webhook-events).

```py
def rossum_hook_request_handler(payload: Dict) -> Dict:
   if payload["event"] != "annotation_content" or (
       payload["action"] not in ["started", "user_update", "updated", "initialize"]
   ):
       return
   try:
       operations, messages = main(payload)
   except Exception as e:
       messages = [
           create_message(
               "error",
               "Unexpected Error in MyCustomFunction: " + str(e) + "<br>" + format_exc().replace("\n", "<br>"),
           )
       ]

       return {"operations": [], "messages": messages}

   return {"operations": operations, "messages": messages}
```

**\- Error Handling**: Always validate the extracted data before processing to ensure it's in the expected format. Check for Missing Keys: Implement checks or use methods like dict.get() to handle cases where expected data might be missing.

Example:

```py
try:
  total_amount = document["annotations"][0].get("value", "0.00")
except IndexError:
  total_amount = 0.0
```

# 7\. Use Rossum API

Working with the Rossum API is covered in the [documentation](https://elis.develop.r8.lol/api/docs/#getting-started).

**\- Using Payload Values for API Calls**:

With **`base_url`** and **`auth_token`** from the payload, you can construct authenticated API requests to Rossum without embedding sensitive information in your code.

Example:

```py
import requests

if token := payload.get('rossum_authorization_token'):
     headers = {"Authorization": f"Bearer {token}"}
     document_id = payload["document"]["id"]
     url = f"{payload.get('base_url')}/api/v1/documents/{document_id}"
     if (response := requests.get(url, headers=headers)).status_code == 200:
         document_data = response.json()
         print(document_data)
```

When working in serverless environments, understanding and utilizing the appropriate concurrency model can significantly impact performance. However, complexity can introduce risks, so it's crucial to choose the simplest model that meets your needs.

\- **Prefer Single-Threaded Execution**: Single-threaded code is the simplest to implement and reduces the risk of concurrency-related errors. For many serverless functions, especially those that are not performance-critical, single-threaded execution is sufficient and more maintainable.

  **Benefits**:  
  \- Easier to write and understand.  
  \- No concurrency issues like race conditions or deadlocks.  
  \- Simpler debugging and testing.

\- **Use Asynchronous Programming ONLY When Necessary**: If your function is I/O-bound and you need to improve performance to avoid timeouts, consider using asynchronous programming. It can help make your code faster without the complexities of threading.

**Use Cases for Asynchronous Calls**:

* **Datapoint Updates**: When you need to update several data points independently, async allows these operations to run in parallel.  
* **Fetching Multiple Pages**: If you need to retrieve multiple pages of data from an API, asynchronous calls can fetch them simultaneously, reducing total execution time.

  Example with \`asyncio\`:

```py
import sys
import asyncio
import httpx

def rossum_hook_request_handler(payload: dict) -> dict:
    messages = []
    operations = []
    try:
        urls = [payload["document"]["url"], payload["annotation"]["url"]]
        pages = asyncio.run(main_async(payload, urls))
        for page_content in pages:
            print(f"Fetched page content: {page_content}")

    except Exception as e:
        print(f"Raised exception: {e}")
        messages = [create_message("error", f"MyFunction ended with an exception: {e}")]


    return {"messages": messages, "operations": operations}



async def main_async(payload: dict, urls: list[str]):
    base_url = payload.get("base_url", "https://api.elis.rossum.ai")
    auth_token = payload.get("rossum_authorization_token")
    headers = {"Authorization": f"Bearer {auth_token}"}
    async with httpx.AsyncClient() as client:
        tasks = [fetch_page(client, url, headers) for url in urls]
        pages = await asyncio.gather(*tasks)
        return pages  # You can process pages here if needed


async def fetch_page(client: httpx.AsyncClient, url: str, headers: dict) -> dict:
    response = await client.get(url, headers=headers)
    response.raise_for_status()
    return response.json()
```

\- **Avoid Threading and Multiprocessing**: In most cases, threading and multiprocessing introduce unnecessary complexity and potential errors in a serverless environment. They can lead to issues with shared resources and are generally not recommended unless absolutely necessary.

  **Reasons to Avoid**:  
  \- Increased complexity in code.  
  \- Potential for concurrency bugs.  
  \- Limited benefits in serverless architectures due to resource constraints.

**Note**: This handbook provides a set of advice and guidelines but does not cover every aspect of software development. Always consider the specific requirements of your project and consult official documentation or contact person when necessary.

