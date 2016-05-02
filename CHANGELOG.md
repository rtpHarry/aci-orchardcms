# Changelog

## 1.9.3.1 - May 2, 2016

- Upgrade from Orchard 1.9.1.* to [1.9.3](https://github.com/OrchardCMS/Orchard/releases/tag/1.9.3)
  - Got rid of the old codebase repo which was massive and a mess due to keeping a copy of the full OrchardCMS source enlistment. Moved to only keeping the compiled website codebase for simplicity. Added all files from the production 1.9.3 release. ([e6417190](https://github.com/andrewconnell/aci-orchardcms/commit/e64171907835e6608a6a85553d9686f5250468d8))
  - Added all the custom themes, modules & newrelic files to the site. ([23aa298](https://github.com/andrewconnell/aci-orchardcms/commit/23aa29876a3186665db070e6bd01eae576a29aae))
  - Modified codebase to support pulling settings for tenants not from `App_Data` but from Azure blob storage (linked to in app settings in Azure Web App). ([ffb60c3](https://github.com/andrewconnell/aci-orchardcms/commit/ffb60c342214fcc30f603e0564ef8036f6c5a7f6))