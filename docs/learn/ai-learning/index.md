---
title: 'AI training best practices'
---

## Three key concepts to maintain good AI performance
- ✅ **Precision**
- ✅ **Accuracy**
- ✅ **Consistency**

### Precision
1. Check that [bounding boxes](https://rossum.ai/help/article/interactive-bounding-boxes-in-rossum/) are correctly applied to the value. 
- No overlapping with another bounding box.
- The value is captured fully. 

### Accuracy
1. If value is placed in the wrong field, correct it.
2. If there are typos or other issues, try adjusting the bounding box to get the correct reading.

### Consistency
1. Prefer values that appear earlier in the document.
- If multiple values can fit, choose the one that is closer to the header part of the document.
- If multiple values fit but are scattered across multiple pages, choose the one that is closest to the first page (or on the first page if possible).
- If the value usually accompanies other fields' values, choose the location that is close to these other fields' values. 
2. Capture all and only the values in the documents.
- If there is data in the document that has a corresponding field in the schema for extraction, capture it in each document where it is present, even if you may not need it to be extracted for a particular vendor or in a particular case.
- Amounts should also always be captured, even if the value on the document is "0".
- Conversely, if a value is not present on the invoice, please do not enter it manually.

For in detail explanation please reach out to [Annoations Guide](https://rossum.ai/help/article/annotations-guide-and-rules-to-follow/).


## Common Issues
1. The AI has predicted the correct value, but the reading of the text is incorrect
- Re-adjust the Bounding Box so that the OCR is applied again
- If, after a couple of attempts the value is not corrected, change the value manually
2. The AI has predicted the correct value, but only partially or included extra text
- Correct the position of the Bounding Box so that it goes around the correct data
- The learning is then stored & will be applied to later annotations
3. The date format is read incorrectly 
- The date format is pre-defined by the schema 
- The interpretation of ambiguous dates relies the document region that is set for the queue
- Re-adjust the bounding box or ask your Admin to adjust the field to the correct date format, if the formatting is consistently not correct


## When should I use multiple queues for my documents?
1. Different queues should be used if there is a different set of fields to capture from the documents (e.g., if in one case you are capturing tables, and in another, you are not, the documents should be separated into different queues).

:::note

✅ One queue - no need to separate: You have **Document X** with line items and **Document Y** without line items. You capture line items in **Document X** and skip them in **Document Y**. You can have one queue because you train the AI to capture line items where they are present and do not attempt to capture them where they do not exist. This way, you differentiate various layouts and achieve better training.

⛔ Two queues are required: You have **Document Z** and **Document W**. Both have line items. You capture line items in **Document Z**, and for some reason, you do not want to spend time correcting/extracting line items from **Document W**. Then, you can't have one unified queue for data capture. Load these documents in two different queues to maximize extraction performance.

⛔ Multiple queues are required when you have small overlaps in the extracted fields across different document types.
:::

2. Documents in unique scripts should be in separate queues (e.g., documents in Latin script should be in one queue, and documents in Cyrillic script in another).
3. Documents from different regions should be sent to separate queues to ensure correct date and number parsing.
