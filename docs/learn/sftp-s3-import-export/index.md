---
title: 'SFTP and S3 imports/exports'
sidebar_position: 1
---

import WIP from '../\_wip.md';
import WebhookEndpoints from '../\_webhook_endpoints.md';
import RossumInternalOnly from '../\_rossum_internal_only.md';

## Installation

File storage (SFTP and S3) import/export extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:

1. Login to your Rossum account.
1. Navigate to **Extensions → My extensions**.
1. Click on **Create extension**.
1. Fill the following fields:
   1. Name: `SFTP/S3 import/export`
   1. Trigger events: `Scheduled` for import or `Export` for exports
   1. Extension type: `Webhook`
   1. URL (see import and export endpoints below)
1. Click **Create the webhook**.

### Dataset import endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/scheduled-imports/api/file_storage/v1/dataset_import"
  eu2="https://shared-eu2.rossum.app/svc/scheduled-imports/api/file_storage/v1/dataset_import"
  us="https://shared-us2.rossum.app/svc/scheduled-imports/api/file_storage/v1/dataset_import"
  jp="https://shared-jp.rossum.app/svc/scheduled-imports/api/file_storage/v1/dataset_import"
/>

<RossumInternalOnly url="https://rossumai.atlassian.net/l/cp/PV1jzmqK" />

### Document import endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/scheduled-imports/api/file_storage/v1/document_import"
  eu2="https://shared-eu2.rossum.app/svc/scheduled-imports/api/file_storage/v1/document_import"
  us="https://shared-us2.rossum.app/svc/scheduled-imports/api/file_storage/v1/document_import"
  jp="https://shared-jp.rossum.app/svc/scheduled-imports/api/file_storage/v1/document_import"
/>

<RossumInternalOnly url="https://rossumai.atlassian.net/l/cp/PV1jzmqK" />

### Export endpoints

<WebhookEndpoints
  eu1="https://elis.rossum.ai/svc/file-storage-export/api/v1/export"
  eu2="https://shared-eu2.rossum.app/svc/file-storage-export/api/v1/export"
  us="https://shared-us2.rossum.app/svc/file-storage-export/api/v1/export"
  jp="https://shared-jp.rossum.app/svc/file-storage-export/api/v1/export"
/>

<RossumInternalOnly url="https://rossumai.atlassian.net/l/cp/S1coKmuC" />

## Basic usage

<WIP />

## Available configuration options

Available configuration options are described in the API documentation:

- Import: [Scheduled Imports - File storage](https://elis.rossum.ai/svc/scheduled-imports/api/docs#tag/File-Storage/operation/import_dataset_from_file_storage_api_file_storage_v1_dataset_import_post)
- Export: [File Storage Export](https://elis.rossum.ai/svc/file-storage-export/api/docs)

## Logging and observability

### Extensions Logs

- URL `https://[org].rossum.app/settings/extensions/logs`
- The import job is not triggered directly, but using scheduler. Thus successfull record (type `INFO`) in the Extensions Logs does not necessary means the downstream import job was sucessfull, but it is a good start for observation

### Master Data Hub

- URL: `https://[org].rossum.app/svc/master-data-hub/web/management`
- Directly in the MDH, there is a status screen "Upload Status", regardless of the origin of "upload".
- There is also note with the more detailed info in case of some error.

![Upload Status](./img/upload-status.png)
