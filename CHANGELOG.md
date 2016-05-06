# Changelog

## 1.9.3.2 - May 6, 2016

- Upgrade **Contrib.Podcasts** module to 1.4 ([11bcf10](https://github.com/andrewconnell/aci-orchardcms/commit/11bcf102c1d5df6d8f7721b75a54d138d77f3d1b))
  - updates dynamic RSS feed to include all required elements
  - includes significant performance improvements

## 1.9.3.1 - May 2, 2016

- Upgrade from Orchard 1.9.1.* to [1.9.3](https://github.com/OrchardCMS/Orchard/releases/tag/1.9.3)
  - Got rid of the old codebase repo which was massive and a mess due to keeping a copy of the full OrchardCMS source enlistment. Moved to only keeping the compiled website codebase for simplicity. Added all files from the production 1.9.3 release. ([e6417190](https://github.com/andrewconnell/aci-orchardcms/commit/e64171907835e6608a6a85553d9686f5250468d8))
  - Added all the custom themes, modules & newrelic files to the site. ([85dc469](https://github.com/andrewconnell/aci-orchardcms/commit/85dc4697d5d4ac3df7b565f25534e172095260db))
  - Modified codebase to support pulling settings for tenants not from `App_Data` but from Azure blob storage (linked to in app settings in Azure Web App). ([daa444c](https://github.com/andrewconnell/aci-orchardcms/commit/daa444c9a1104179949152c69576c33c74303139))