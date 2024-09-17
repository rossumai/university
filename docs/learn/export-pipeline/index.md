---
title: 'Export pipelines'
---

import WIP from '../\_wip.md';
import RossumInternalOnly from '../\_rossum_internal_only.md';

After documents are processed in Rossum, the extracted data typically need to be exported to the downstream systems. The Rossum team has prepared an "Export pipeline" for this very purpose.

<RossumInternalOnly url="https://rossumai.atlassian.net/l/cp/t2we9106" />

## Components of Export pipelines

The export pipeline consists of the following components chained together:

1. [Custom format templating purge](./custom-format-templating-purge.md), a cleaning mechanism that prepares the pipeline for export.
1. [Custom format templating](./custom-format-templating.md), prepares the desired format for an export.
1. [REST API export](./rest-api-export.md), exports the prepared data to REST API and stores the reply.
1. [Data value extractor](./data-value-extractor.md) extracts important data from the API reply and stores them in the annotation object, e.g. downstream document ID, HTTP status codes.
1. [Export evaluator](./export-evaluator.md) that decides whether the export is successful or it has failed.
1. Finally, [SFTP Export](../sftp-s3-import-export/index.md), upload the prepared data to SFTP or S3 file storage.

## How to use Export pipelines

All the components of Export pipelines are typically connected by the standard extension chaining mechanism "run-after". Here are several extension chains demonstrated:

### Simple SFTP export pipeline

1. Custom format templating prepares extracted data in desired format.
2. SFTP export stores data in on an SFTP (or S3).

### Simple API export pipeline

1. (Optional) Pipeline cleaning cleans previous export data (relevant for debugging).
2. Custom format templating prepares extracted data in desired format.
3. REST API calls an external API service and sends the prepared data. The extension also stores returned values including status code.
4. Extract data to store needed information in the document (e.g. status code)
5. Export evaluator that based on condition decides whether the export is succesfful (e.g. status code = 200, 201).

### Complex API export pipeline

<WIP />
