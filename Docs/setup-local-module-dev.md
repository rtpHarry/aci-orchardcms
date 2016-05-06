# Setup: Local Module Dev

This explains how to setup a local machine for development of a custom module.

## Get Orchard Source

1. Clone the main [Orchard](https://github.com/orchardcms/orchard) repo.

  ```cmd
  cd repos
  git clone https://github.com/orchardcms/orchard Orchard
  ```

1. Decide which version to develop against. The default branch is `dev` so that's what you get initially but you likely don't want to build and test against that specific version.

  In this doc I'm going to work with version **1.9.3**. Thankfully the project managers tag each version, so I need to checkout a specific tag:

  ```cmd
  git checkout tags/1.9.3 -b v1.9.3
  ```

1. Build and test the site. Press `[F5]` to start the process and run through the initial setup.

With an initial deployment working you can create a new custom module... follow the instructions [Orchard: Getting Started with Modules](http://docs.orchardproject.net/Documentation/Getting-Started-with-Modules), or use an existing module.


## Import an Existing Module for Development

In this scenario, take an existing module under development and load it into the new application to test it out.

1. Clone the module from source to the module folder in the main source repo:

  ```cmd
  # jump to the source
  cd <path_to_orchard_root_source_from_above>
  cd src\Orchard.Web]\Modules
  # clone it into the current folder
  git clone https://github.com/andrewconnell/contrib.podcasts contrib.podcasts
  ```

1. Add the module to Orchard.
  1. Open Visual Studio.
  1. Open the Orchard project at `\Src\Orchard.sln`.
  1. Click the **Show All Files** toggle button in the **Solution Explorer** to show hidden folders & files.
  1. Right-click the `Modules\Contrib.Podcasts` project and select **Include in Project**
  1. Click the **Show All Files** toggle button in the **Solution Explorer** tool window to hide hidden folders & files.

At this point the **Contrib.Podcasts** module is ready.

