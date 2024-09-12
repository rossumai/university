---
title: 'AI training best practices'
---

Rossum's AI-powered document processing doesn't need complex templates to be built for each vendor layout to be able to predict where the values should be.

What the AI needs is precise and consistent data which we can get from User feedback - annotations.

Annotations refer to all the captured data from a document. You can recognize them by the blue bounding boxes (b-boxes) that appear on the document after it is processed in Rossum.

Please review these resources before starting:

- [Annotations Guide](https://rossum.ai/help/article/annotations-guide-and-rules-to-follow/)
- [Interactive Bounding Boxes](https://rossum.ai/help/article/interactive-bounding-boxes-in-rossum/)

:::info

When you first start using our product, it may not be clear what triggers AI learning. You upload your documents and apply corrections, but when will you start seeing improvements? It's simple. Every document must be `confirmed` or `exported`, depending on your settings. The entity confirming the document must be a real person, not an automated process or external script. Depending on your AI engine, you will be able to see changes in newly uploaded documents either immediately or after an agreed-upon time.

:::

## 🚀 Three key concepts to maintain good AI performance {#three-key-concepts-to-maintain-good-ai-performance}

### Precision

1. Check that [bounding boxes](https://rossum.ai/help/article/interactive-bounding-boxes-in-rossum/) are correctly applied to the value.
   - No overlapping with another bounding box.
   - The value is captured fully.

### Accuracy

1. If value is placed in the wrong field, correct it.
2. If there are typos or other issues, try adjusting the bounding box to get the correct reading.

### Consistency

1. If you have multiple values in a document, it is recommended to always select them from the same position. This is especially important when working with similar or identical layouts. Sometimes, it may be difficult to remember how you annotated a similar document. In such cases, you may want to consult previously confirmed documents or use the following rules to help maintain consistency.

   - Prefer values that appear earlier in the document.
   - If multiple values can fit, choose the one that is closer to the header part of the document.
   - If multiple values fit but are scattered across multiple pages, choose the one that is closest to the first page (or on the first page if possible).
   - If the value usually accompanies other fields' values, choose the location that is close to these other fields' values.
     In case multiple values are on the same level (on the right and left of the bottom of the document) just decide to go always closer to the right side of the document.

2. Capture all and only the values in the documents.

   - If there is data in the document that has a corresponding field in the schema for extraction, capture it in each document where it is present, even if you may not need it to be extracted for a particular vendor or in a particular case.
   - Amounts should also always be captured, even if the value on the document is "0".
   - Conversely, if a value is not present on the invoice, please do not enter it manually.

For in detail explanation please reach out to [Annotations Guide](https://rossum.ai/help/article/annotations-guide-and-rules-to-follow/).

## 🛟 Common issues {#common-issues}

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

## 🤔 Considerations {#considerations}

1. Always try to annotate text for names. Avoid logos or visual representations of data.
2. Handwritten data is not currently supported, even though it may be partially recognized.

## 🏆 Priority of rules {#priority-of-rules}

It may happen that some of the recommendations contradict each other in particular cases.

- The principles of Precision and Accuracy should take priority.
- When applying the Consistency principle, be reasonable. For example, if there is a logo at the top of the first page and a written sender name in the footer of the document, choose the footer, even if the recommendation is to prefer the header.
- Another example is when two values always appear together in the footer, but one of them is also present in the header section (e.g., Sender Name and Sender Address). In this case, you can choose to annotate both together in the footer, but be consistent and do not occasionally switch to another location. In the end, consistency itself is more important

## 🙋 FAQ {#faq}

### When should I use multiple queues for my documents?

Different queues should be used if there is a different set of fields to capture from the documents (e.g., if in one case you are capturing tables, and in another, you are not, the documents should be separated into different queues).

:::tip

✅ One queue - no need to separate: You have `Document X` with line items and `Document Y` without line items. You capture line items in `Document X` and skip them in `Document Y`. You can have one queue because you train the AI to capture line items where they are present and do not attempt to capture them where they do not exist. This way, you differentiate various layouts and achieve better training.

⛔ Two queues are required: You have `Document Z` and `Document W`. Both have line items. You capture line items in `Document Z`, and for some reason, you do not want to spend time correcting/extracting line items from `Document W`. Then, you can't have one unified queue for data capture. Load these documents in two different queues to maximize extraction performance.

⛔ Multiple queues are required when you have small overlaps in the extracted fields across different document types.

:::

Documents in unique scripts should be in separate queues (e.g., documents in Latin script should be in one queue, and documents in Cyrillic script in another).

Documents from different regions should also be sent to separate queues to ensure correct date and number parsing.


### How can I correct inaccurate annotations to improve AI predictions?
If you have manually processed a document and later discovered mistakes in the annotations, you can correct them to prevent the AI from repeating these errors.

If the document has already been exported, you will need to return it to the "Review" status. Simply select the document and move it to the same queue without re-extracting the data. Then, correct the data points and export it again.

If you are using the "Confirmed" status without exporting, you can open the document in this status and make the necessary edits. Once the changes are made, confirm it again.

:::info
Depending on your version of the AI engine, changes may affect predictions either immediately or after an agreed-upon period. For more information, please contact Rossum.
:::

:::danger
⚠️ Always make sure you fully understand the consequences of re-confirming or re-exporting a document.

Ensure that exporting again or making changes to a confirmed document does not cause complications with integrations or existing business logic. 
For example, if you have an integration with a downstream system triggered every time you export data, re-exporting may cause duplicates or errors in that system.
:::