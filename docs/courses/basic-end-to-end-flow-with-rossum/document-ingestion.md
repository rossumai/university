---
title: 'Basic end-to-end flow with Rossum: Document Ingestion'
sidebar_position: 1
sidebar_label: 'Document ingestion'
---

# Document ingestion

Rossum.ai specializes in (transactional) document processing and provides a simple way to ingest documents into Rossum. In this section, we will learn how to ingest documents into Rossum using Rossum.ai's intelligent email mailbox.

:::note

Ingesting documents via email is not the only way. You can also use:

- Rossum.ai's file upload feature (via user interface)
- [Rossum.ai's API](https://elis.rossum.ai/api/docs/#upload-api) (programmatically)
- [Import documents directly from SFTP](../../learn/sftp-s3-import-export/index.md)
- Import documents from any other source using custom integrations

The most favorite way is email ingestion, however.

:::

## Emails and queues in Rossum

Documents in Rossum can be organized into queues, which are "folders" with their own email address. Each queue can then be organized in a "workspace" for better orientation. The overall structure is as follows:

```text
 Rossum.ai organization
+-------------------------------+
|                               |
|    Workspace(s)               |
|   +-----------------------+   |
|   |                       |   |
|   |    Queue 1            |   |
|   |   +---------------+   |   |
|   |   |   Mailbox 1   |   |   |
|   |   +---------------+   |   |
|   |                       |   |
|   |    Queue 2            |   |
|   |   +---------------+   |   |
|   |   |   Mailbox 2   |   |   |
|   |   +---------------+   |   |
|   +-----------------------+   |
+-------------------------------+
```

Each queue has its own email address which can be found by opening the relevant queue and clicking either on **Upload** button or by going to queue settings and clicking on **Emails** tab.

:::note

Technically, there can also be queues _without_ the email address. In case this happens and it is not desirable, please contact your Rossum representative or support@rossum.ai.

:::

The typical format of queue emails is composed of the project name (email prefix) and a security hash:

```text
projectname-d1d85c@elis.rossum.ai

<Email prefix>-<Security hash>@elis.rossum.ai
```

You can set the prefix of your email inbox in queue settings. Rossum will append a security hash after the prefix in order to create a hard to detect email address. Easily predictable addresses could be exploited by potential attackers for sending fake documents. Moreover, the hash helps to differentiate emails for each queue.

## Submitting documents to Rossum via email

Submitting documents to Rossum via email is as simple as attaching the relevant files and sending the email. Typically, customers would create a forward rule in their email client or provide the Rossum email address to their suppliers.

Default supported file formats are **PDF**, **PNG**, **JPEG**, **TIFF**, **XLSX/XLS**, **DOCX/DOC** and **ZIP**. Maximum supported file size is **40 MB** (this limit applies also to the uncompressed size of the files within a **.zip** archive). With the help of Rossum representative, you can also submit structured formats such as **XML** and **JSON**.

Each attached file is then processed separately (in parallel) and a reference to the original email is kept.

:::tip

It might be necessary to also ingest the email body in some scenarios. By default, email bodies are ignored. They can however be converted to a PDF file for processing. For more information please visit the [Email body converter](../../learn/emails/email-body-converter.md) page.

:::
