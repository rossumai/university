---
title: 'Using API'
sidebar_position: 6
---

## Dataset Differential Update using API

The part describes best practices for implementation of the differential updates of the dataset stored in the Rossum's Master Data Hub (MDH) using the API.

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
