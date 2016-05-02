# Config: Settings.txt in Azure Blob

By default Orchard CMS stores the basic configuration details for a tenant, including the default tenant in a single-tenant deployment, in the `/App_Data/Sites/[tenantid/Settings.txt` file. This file contains important things like:
- name (ID) of the tenant
- database details including the connection string and prefix of tables for the tenant
- themes available

I don't want these in GitHub, first because they can change from deployment to deployment (local dev, cloud dev or testing or production). Orchard added support for storing these settings files within an Azure storage blob, effectively mapping the `/App_Data/Sites` folder to a container named `Sites`.

This is the **only** time I am modifying configuration information in the code. Everything else is in the database(s), Azure blob storage or settings in the Azure Web App. It's required to tell Orchard where to find it's configuration starting point.

> I had trouble getting this working in 1.9.1 & 1.9.2, but worked like a champ in 1.9.3, thus why this repo starts with my 1.9.3 deployment and an empty `App_Data` folder.

> See ffb60c342214fcc30f603e0564ef8036f6c5a7f6 for these change

To make this work, I had to do three things to my Azure Web App & codebase:


## Configure Autofac to load Orchard's Settings Azure Storage Blob Handler

This is done within the `/Config/Host.config` file:

1. Remove the default machine name provider:

  ```xml
  <component instance-scope="single-instance" 
             type="Orchard.Environment.MachineNameProvider, Orchard.Framework" 
             service="Orchard.Environment.IMachineNameProvider, Orchard.Framework">
  </component>
  ```

2. Replace it with the Azure version:

  ```xml
  <component instance-scope="single-instance" 
             type="Orchard.Azure.Services.TaskLease.AzureMachineNameProvider, Orchard.Azure" 
             service="Orchard.Environment.IMachineNameProvider, Orchard.Framework">
  </component>
  ```

3. Add Orchard's Azure storage Blob settings file handler:

  ```xml
  <component instance-scope="single-instance" 
             type="Orchard.FileSystems.Media.ConfigurationMimeTypeProvider, Orchard.Framework" 
             service="Orchard.FileSystems.Media.IMimeTypeProvider">
  </component>
  <component instance-scope="single-instance" 
             type="Orchard.Azure.Services.Environment.Configuration.AzureBlobShellSettingsManager, Orchard.Azure" 
             service="Orchard.Environment.Configuration.IShellSettingsManager">
 </component>
  ```


## Copy Orchard's Azure Module Assembly to Root

Seems Orchard could never see the assembly for the module **Orchard.Azure** until I copied it to the root of the project, so I need to remember every time I update the Orchard version, I copy the files:

- `Orchard.Azure.dll`
- `Orchard.Azure.dll.config`
- `Microsoft.WindowsAzure.Configuration.dll`

From `/Modules/Orchard.Azure/bin` to the root of the web project: `/bin`.


## Add App Setting in Azure Web App

The above steps simply tell orchard to look in the app settings for the web application for the location & connection details of the Azure blob store. This can be the `web.config` but that defeats the purpose of keeping code & configuration separate. Therefore I'm using app settings in Azure Web Apps. Create the following setting with the correct value:

- **Name**: `Orchard.Azure.Settings.StorageConnectionString`
- **Value**: `DefaultEndpointsProtocol=https;AccountName=<STORAGE_ACCOUNT_NAME>;AccountKey=<STORAGE_ACCOUNT_KEY>`

The storage account must contain a folder `Sites` that contains the same `Settings.txt` file typically found in `\App_Data\Sites`.

> Ensure **Slot Setting** is checked assuming you don't want this shared with other deployment slots. If checked, each deployment slot can have its own value, which I want for my production & development deployment slots.