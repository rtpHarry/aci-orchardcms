# Branches & Deployment Slots

I leverage Azure Web App Deployment Slots for implementing a continuous deployment model for reliable and peace of mind updates. This is an overview of the setup:

## Azure Web App Deployment Slots

- **[production]**: This is the default site that `www` points to for all tenants.
  - For settings it points to a production storage account separate from the media storage accounts.
  - This points to production storage blobs & database connections.
  - All `www` domains point to this slot. The same naked domains are redirected to `www` at the DNS level.
  - *No CD setup on this slot. I want to have eyes on code / deployment before making it live.*
- **[staging]**: This is used to update the production codebase but give me eyes on the deployment before making it live.
  - For settings it points to a production storage account separate from the media storage accounts & databases.
  - This points to production storage blobs & database connections.
  - This is tied to the `master` branch on this repo. When a push happens to `master`, GitHub notifies Azure which pulls the current codebase and refreshes this slot.
  - *Normally left off when not in use*
- **[int]**: This is used for testing CD code on dev before pushing to production.
  - For settings it points to a dev storage account separate from the media storage accounts.
  - This points to development storage blobs & database connections.
  - This is tied to the `dev` branch on this repo. When a push happens to `dev`, GitHub notifies Azure which pulls the current codebase and refreshes this slot.
  - *Normally left off when not in use*
- **[wip]**: This is used manual pushes from local dev (aka: work in progress) to bypass stuff going to the `dev` branch.
  - For settings it points to a dev storage account separate from the media storage accounts.
  - This points to development storage blobs & database connections.
  - *No CD setup on this slot. I want to have eyes on code / deployment before making it live.*
  - *Normally left off when not in use*

  > I commonly use this last one as my live development environment. Orchard is .NET so it needs Windows to run locally, but I work on OSX so I just modify & push manually. Once I'm happy with the changes, I squash the commits and rebase `dev` on it.


## Repo Branches

  - **master**: reflection of production at any given time
  - **dev**: main branch of live development; this can be equal to or ahead of `master`, but never behind
  - **others**: used for various dev projects or updates