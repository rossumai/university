---
sidebar_position: 1
sidebar_label: 'Automating emails'
title: 'Emails & Email Ingestion: automating emails'
---

## Automatic rejection based on condition

Rossum allows you to define a condition (*trigger*) and an *email template* to be sent when the condition is true. In case the template is of type "rejection", this also sets the annotation's status to be `rejected`. This can be used to inform your vendors (or anyone else you specify in the email template) about a problematic document:

1. Go to queue settings where you want to set up automatic rejections, specifically into the "Emails" section:
![alt text](_img/image.png)
2. Scroll down to "Document rejection":
![alt text](_img/image-1.png)
3. Create a new rejection template.
    - If you would like to send automated emails to your vendors, you can use the variable `{{sender_email}}` (assuming the vendor sent the email into Rossum).
4. Toggle the automatic sending based on a trigger:
![alt text](_img/image-2.png)
5. Select the condition you want from the list (for details):
![alt text](_img/image-3.png)

:::tip

For rejecting documents with missing fields, both the "required field missing" and "selected fields missing" triggers require a very high AI engine confidence (0.95) that the field is not on the document. However, you can also the following trigger that is checking for an empty value (by using a regex):
![alt text](_img/image-4.png)

:::