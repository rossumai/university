---
sidebar_position: 1
sidebar_label: 'Alternative Python solution'
title: 'Full page search: Alternative Python solution'
---

# Alternative Python solution

This function retrieves textual data from Rossum's [`page_data`](https://elis.rossum.ai/api/docs/#get-page-spatial-data) API for an annotation and processes it to:

1. Fetch OCR document content Data: Make an HTTP GET request to the `page_data` endpoint of a specific annotation using the provided `rossum_authorization_token`.
1. Retry Mechanism: Handle transient network or server issues by retrying up to 3 times in case of a non-200 HTTP response or exceptions.
1. Process Text Content: Iterate through the fetched text content for custom manipulations or pattern analysis.

```py
import requests


def get_ocr_document_content(payload):
    """
    Fetch page_data from annotation.
    :param payload: Dictionary containing the payload with annotation information.
    """
    token = payload.get("rossum_authorization_token")
    annotation_url = payload.get("annotation", {}).get("url")

    retries = 3
    for attempt in range(retries):
        try:
            # Request to fetch text content from annotation
            page_req = requests.get(
                url=f"{annotation_url}/page_data?granularity=texts",
                headers={"Authorization": f"Bearer {token}"}
            )

            if page_req.status_code == 200:
                results = page_req.json().get("results", [])
                # This part is optional iteration through all the text nodes
                for page in results:
                    for item in page.get("items", []):
                        ocr_text = item.get("text", "")
                        if ocr_text:
                            # Here will be any kind of manipulation with the text you need to do.
                            print(ocr_text)

                break  # Exit retry loop if request is successful
            else:
                print(f"Attempt {attempt + 1} failed with status code {page_req.status_code}. Retrying...")

        except requests.RequestException as e:
            print(f"Attempt {attempt + 1} encountered an exception: {e}. Retrying...")
```
