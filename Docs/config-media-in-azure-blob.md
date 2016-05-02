# Config: Media in Azure Blobs

All content media (images, PDF's, downloads, etc)  for all tenants is stored in Azure blob storage. Each tenant has its own storage account.

Enable this by installing / enabling the following two modules in the admin of the tenant:

- Microsoft Azure Media Services
- Microsoft Azure Services

Then add app settings for each tenant within the Azure Web App's app settings. Each one points to the respective tenant's storage account.

For instance:

- **Name**: `<TENANT_ID>:Orchard.Azure.Media.StorageConnectionString`
- **Value**: `BlobEndpoint=<TENANT_URL>;DefaultEndpointsProtocol=http;AccountName=<ACCOUNT_ID>;AccountKey=<ACCOUNT_KEY>`

Referencing the placeholders above:

- **TENANT_ID**: Id of the tenant (*ie: Default for the default tenant*)
- **TENANT_URL**: Should links reference the default Azure blob URL or use a custom domain? This is the root of the custom domain. The storage account must already have this custom domain listed.
- **ACCOUNT_ID**: Id of the Azure Storage Blob
- **ACCOUNT_KEY**: A valid key used to connect to the Azure Storage Blob

> Ensure **Slot Setting** is checked assuming you don't want this shared with other deployment slots. If checked, each deployment slot can have it's own value, which I want for my production & development deployment slots.