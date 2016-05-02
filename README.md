# ACI Orchard CMS

This repo contains the codebase for the [OrchardCMS](http://www.orchardproject.net) multitenant deployment I use to host multiple content sites in [Microsoft Azure](https://www.azure.com). Specifically it runs **[andrewconnell.com](http://www.AndrewConnell.com)** & **[MicrosoftCloudShow.com](http://www.microsoftcloudshow.com)** among others.


## Why Maintain a Copy of Orchard Here?

I don't like the model Orchard offers where I deploy the code and upload modules and themes through the admin or installed by the gallery, rather I want all code preserved for XCOPY deployments.

The point is to have a source enlistment of the deployment with all my customizations in GitHub that **includes** all code I need to stand the deployment up but **excludes** all private configuration & settings data stored in Azure blob storage or Azure SQL Databases. Codebase updates are then applied using continious deployment (CD). Pushes to the `master` or `dev` branches notify Azure to pull the code and deploy the latest to a specific Azure Web App Deployment Slot.

> More details on the configuration [in the Docs](https://github.com/andrewconnell/aci-orchardcms/tree/master/Docs).

This isn't a full source enlistment of the main [OrchardCMS codebase](https://github.com/orchardcms/orchard), it's just the compiled website source + my stuff, specifically:

- Contents of **Orchard.Web.zip** for a specific [OrchardCMS release](https://github.com/OrchardCMS/Orchard/releases).
- Add 3rd party modules I use in the site
- Add custom themes for sites
- Add any mandatory changes for use in Azure