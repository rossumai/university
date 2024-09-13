---
title: 'Master data hub: Using API'
sidebar_label: 'Using API'
sidebar_position: 6
---

# Using API

## Dataset differential update using API

This part describes best practices for implementation of the differential updates of the dataset stored in the Rossum's Master Data Hub (MDH) using the API.

### Recommended implementation

#### General description

The MDS's API for the replication of the datasets is file based and asynchronous. The client sending the file to the endpoint does not get the status of the replication run in the response to the call of the replication endpoint (the replication can take minutes depending on the size of the file). The first call however returns ID of the operation that can be then monitored using other API endpoint and the result of the replication job can be determined based on the operation status.

#### Implementation steps

1. Call [login endpoint](https://elis.rossum.ai/api/docs/#login) of Rossum API to obtain access token that will be used for authentication of the dataset file push call. The username and password is required for this call. There can be an integration user created for this purpose in Rossum.
1. Call the [Dataset Update](https://elis.rossum.ai/svc/data-matching/api/docs#tag/Dataset/operation/update_dataset_api_v1_dataset__dataset_name__patch) endpoint of the MDH API.
   1. It is assumed that the file that you are sending contains records to be upserted (inserted or updated) in the target dataset, and it is therefore necessary to specify the `id_keys` parameter to tell the system how to uniquely identify the record, so it can either update existing or determine that it does not exist and import it.
1. The dataset operations are asynchronous and the API calls will return the ID of the operation in the Location header of the reply.
1. The operation should be monitored after the call by repeated calls (every 30 seconds or so) of the [Get Operation](https://elis.rossum.ai/svc/data-matching/api/docs#tag/Operation/operation/get_operation_api_v1_operation__operation_id__get) endpoint.
1. If the operation finishes successfully the job ends.
1. If the operation fails or takes longer than 30 minutes the API call should be retried (3 retries are recommended).
1. If all retries fail the whole job can be considered failed and should produce an alert in the monitoring system.

## Downloading whole collections using API

It might be useful to download the whole collection to update it locally or to analyze its structure. This is currently not possible via UI but can be achieved using simple [Node.js](https://nodejs.org/en) script. Download it locally, change the token and collection name in the script and run it (no external libraries are needed):

```bash
node download_collection.js
```

Source code:

```js
const fs = require('fs');

const ROSSUM_TOKEN = '__CHANGE_ME__';
const COLLECTION_NAME = '__CHANGE_ME__';
const BASE_URL = 'https://elis.rossum.ai/svc/data-storage/api/v1';
const FIND_ENDPOINT = `${BASE_URL}/data/find`;

async function* downloadCollection(collectionName, token) {
  let startIndex = 0;
  const batchSize = 2500;
  const maxRetries = 5;
  const retryDelay = 5000; // Delay between retries in milliseconds

  while (true) {
    const payload = {
      collectionName: collectionName,
      query: {},
      projection: { _id: 0 },
      skip: startIndex,
      limit: batchSize,
      sort: { _id: -1 },
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    let attempts = 0;
    let success = false;
    let data;

    // Retry logic
    while (attempts < maxRetries && !success) {
      try {
        console.log(FIND_ENDPOINT, JSON.stringify(payload));
        const response = await fetch(FIND_ENDPOINT, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Fetch failed with status ${response.status}`);
        }

        data = await response.json();
        success = true;
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed: ${error.message}`);
        if (attempts < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay)); // Wait before retrying
        } else {
          throw new Error('Max retries reached. Aborting.');
        }
      }
    }

    const documents = data.result;

    // Break the loop if no more documents are returned
    if (!documents || documents.length === 0) {
      break;
    }

    // Yield the documents as they are fetched
    yield documents;

    // Update the start index for the next batch
    startIndex += batchSize;
  }
}

(async () => {
  const fileStream = fs.createWriteStream(`${COLLECTION_NAME}.json`);
  fileStream.write('['); // Start the array

  let firstBatch = true;

  for await (const documents of downloadCollection(COLLECTION_NAME, ROSSUM_TOKEN)) {
    if (!firstBatch) {
      fileStream.write(','); // Separate batches with commas
    }
    fileStream.write(JSON.stringify(documents).slice(1, -1)); // Remove the array brackets from each batch
    firstBatch = false;
  }

  fileStream.write(']'); // End the array
  fileStream.end();
})();
```
