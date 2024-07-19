---
title: 'AI training best practices'
---

## Considerations for separating document flow into multiple queues

1. Different queues should be used if there is a different set of fields to capture from the documents (e.g., if in one case you are capturing tables, and in another, you are not, the documents should be separated into different queues).

:::note

✅ One queue - no need to separate: You have **Document X** with line items and **Document Y** without line items. You capture line items in **Document X** and skip them in **Document Y**. You can have one queue because you train the AI to capture line items where they are present and do not attempt to capture them where they do not exist. This way, you differentiate various layouts and achieve better training.

⛔ Two queues are required: You have **Document Z** and **Document W**. Both have line items. You capture line items in **Document Z**, and for some reason, you do not want to spend time correcting/extracting line items from **Document W**. Then, you can't have one unified queue for data capture. Load these documents in two different queues to maximize extraction performance.

⛔ Multiple queues are required when you have small overlaps in the extracted fields across different document types.
:::

2. Documents in unique scripts should be in separate queues (e.g., documents in Latin script should be in one queue, and documents in Cyrillic script in another).
3. Documents from different regions should be sent to separate queues to ensure correct date and number parsing.
