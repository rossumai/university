---
title: 'Supported Integration Patterns'
---

# Supported Integration Patterns

Integrating systems efficiently is critical for seamless data exchange and workflow automation. When working with the Rossum API, various integration patterns can be employed to suit different technical requirements and business needs. In this article, we explore five key integration methods—each with its own pros and cons—to help you determine the best approach for your system.

## 1. Scheduled polling integration

In this model, the target system schedules regular queries to the Rossum API to retrieve annotations that are ready for export.

<b>Pros:</b>

- Full control over query frequency, error handling, and resource management.

<b>Cons:</b>

- No real-time updates.
- Requires tracking loaded annotations (Rossum’s “Confirmed” to “Exported” statuses help with this).
- Hosting computational resources is necessary to run these scheduled queries.

![Scheduled-Polling-Integration](img/Scheduled-Polling-Integration.png)

## 2. Webhook-driven integration

Here, the target system listens for real-time notifications via Rossum’s Webhook. When a notification is received, the system queries the Rossum API to retrieve the annotation data. This eliminates the need for a scheduled job and for tracking which annotations are ready, compared to approach #1 above. Notifications Webhook is provided by Rossum out of the box.

<b>Pros:</b>

- Real-time updates.
- Ability to respond dynamically to status changes, customizing actions based on business logic.
- Webhook setup is straightforward, requiring just a target URL and specified triggers.

<b>Cons:</b>

- Requires readiness to handle incoming webhook data.
- Even after receiving the notification, an API query is still necessary to retrieve the full annotation (except for certain event types that include annotation data. Please see [documentation](https://elis.rossum.ai/api/docs/#webhook-events) and option #3).

![Webhook-Driven-Integration](img/Webhook-Driven-Integration.png)

## 3. Direct push integration using webhook with annotation data

In this variation, Rossum’s Webhook delivers a direct push of data to the target system.
It will be possible to do for the range of actions like: confirmation or export. For more see [documentation](https://elis.rossum.ai/api/docs/#webhook-events). But if you want to react only on status change the attached payload will have no content of the annotation.

<b>Pros:</b>

- Real-time updates.
- Rossum provides the Webhook integration out of the box.

<b>Cons:</b>

- The system must be able to handle incoming requests.
- Not all events deliver annotation data.
- Limited customization of the Webhook logic, as it is offered "as-is."

![Direct-Push-Integration-(Option-#2)](<img/Direct-Push-Integration-(Option-2).png>)

## 4. Direct push integration using serverless function hosted in Rossum

Rossum’s serverless function pushes data directly to the target system’s public endpoint, eliminating the need for the system to pull data.

<b>Pros:</b>

- Real-time updates.
- Flexibility to push data to any public endpoint.
- No external hosting required, as Rossum provides the serverless function for integration development.

<b>Cons:</b>

- The target system must be capable of receiving requests.
- Development is needed within Rossum, which requires knowledge of Python or Node.js.

![Direct-Push-Integration-(Option-#1)](<img/Direct-Push-Integration-(Option-1).png>)

## 5. File-based integration

With this method, Rossum exports documents to an SFTP server, and the target system retrieves the files based on its internal logic.

<b>Pros:</b>

- Simple setup process in Rossum.

<b>Cons:</b>

- Must track new vs. old documents.
- Potential latency due to the polling interval by the target system.

![File-based-Integration](img/File-based-Integration.png)

## Conclusion

Selecting the right integration pattern depends on your business’s real-time data needs, technical capabilities, and the resources available. Webhook-driven and direct push integrations offer the benefit of immediate updates, while scheduled polling and file-based integrations provide flexibility and simplicity at the cost of real-time responsiveness. By weighing the pros and cons of each approach, you can build a more efficient and tailored integration strategy with Rossum.
