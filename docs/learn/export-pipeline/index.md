---
title: 'Export pipelines'
---

import WIP from '../\_wip.md';

<WIP />

## How to export extracted data from Rossum

After you process your documents in Rossum, you need to export extracted data to your downstream system. The Rossum team has prepared an Export pipeline for you. All of Export pipeline is documented in Rossum university.

## What are the components of Export pipeline

The export pipeline has the following components:

1. Cleaning mechanism that prepares the pipeline for export. The use is not mandatory, it is very useful for debugging. See Pipeline cleaning page.
1. Custom format templating, prepares the desired format for an export. See Custom format templating.
1. Rest API Export, exports the prepared data to REST API and stores the reply. See REST API export.
1. Extract data, extracts important data from API reply and stores them in the annotation object, e.g. downstream document ID, HTTP status codes. See [Data value extractor](./data-value-extractor.md).
1. Export evaluator, decides whether the export is successful or it has failed. See Export evaluator.
1. SFTP Export, upload the prepared data to SFTP or S3 file storage. See SFTP Export.
1. Workday Export, Workday specific export. See Workday Export.

## How to use Export pipelines

The typical use of export pipeline follow. The components are connected by the standard extension chaining mechanism "run-after", see Chaining.

### Simple SFTP export

1. Custom format templating prepares extracted data in desired format.
2. SFTP export stores data in on an SFTP (or S3).

### Simple API export

1. optional: Pipeline cleaning cleans previous export data (relevant for debugging).
2. Custom format templating prepares extracted data in desired format.
3. REST API calls an external API service and sends the prepared data. The extension also stores returned values including status code.
4. Extract data to store needed information in the document (e.g. status code)
5. Export evaluator that based on condition decides whether the export is succesfful (e.g. status code = 200, 201).

### Complex API export

(Pipeline cleaning ->) Custom format templating -> REST API Export of extracted data -> Extract data to store status code and downstream system ID -> REST API e

### Proprietary export evaluator

```py
from rossum_python import RossumPython, default_to, substitute

def rossum_hook_request_handler(payload: dict) -> dict:
    r = RossumPython.from_payload(payload)

    if eval(payload["settings"]["condition"]):
        raise Exception("Draft invoice not created.")

    return r.hook_response()
```

Settings example:

```json
{
  "condition": "r.field.api1_status_code != '201'"
}
```
