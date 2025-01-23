---
tite: "Updating Linux"
description: "Updating Linux"
author: "Chris Carlin"
draft: true
category: "Linux Commands"
---

## How to update most distros

One of the main advantages of linux over windows is that the update process can be much much easier and smoother than on windows.
I've had Windows unexpectedly restart in the middle of a movie, while I was sleeping, while downloading files and just about any other inconveinient time. 

So if you have been using pretty much any distro of linux then you have propbably performed and update. 

Debian has `sudo apt update && sudo apt upgrade`. <br>
Fedora has `sudo dnf upgrade`. <br>
Arch has `pacman -Syu`. <br>

If you trust windows package manager then you can even do `winget upgrade --all`.
It also happens to be aliased as `winget update --all`, incase that feels more comfortable.

## So what is the difference between an upgrade and an update?

As you can see, Debian has an update and upgrade command. Windows aliased update to upgrade. What is the difference and why is it not the same thing?

Debian's package manager apt has a 3 part update process. You update the package manager's information on the packages with `update`, then use that to update the packages themselves with `upgrade`, and finally you tidy up unneeded packages with `autoremove`.


``` 
update (apt-get(8))
    update is used to download package information from all configured sources. Other commands operate on this
    data to e.g. perform package upgrades or search in and display details about all packages available for
    installation.
```
Update is their verbage to update the package manager's knowlege of the packages you have installed. It updates the package manager, not the packages.

```
upgrade (apt-get(8))
    upgrade is used to install available upgrades of all packages currently installed on the system from the
    sources configured via sources.list(5). New packages will be installed if required to satisfy
    dependencies, but existing packages will never be removed. If an upgrade for a package requires the
    removal of an installed package the upgrade for this package isn't performed.
```
Upgrade is used when you want to upgrade/update your packages. It installs the new version of the package and grabs any new dependencies. It doesn't remove any outdated or unused dependenies however so you may want to run autoremove.

```
autoremove (apt-get(8))
    autoremove is used to remove packages that were automatically installed to satisfy dependencies for other
    packages and are now no longer needed as dependencies changed or the package(s) needing them were removed
    in the meantime.

    You should check that the list does not include applications you have grown to like even though they were
    once installed just as a dependency of another package. You can mark such a package as manually installed
    by using apt-mark(8). Packages which you have installed explicitly via install are also never proposed for
           automatic removal.
```
Autoremove removes dependency packages you don't need anymore. If the package is an app that you don't want to have removed you can mark it, or just reinstall it to keep it. 

Back in the day, when I started using fedora, the package manager was YUM. YUM, at least in fedora 8, used `update` to perform package updates and `upgrade` to update the os and new packages after downloaded the new package lists. Now upgrade and update are synonyms and update is just aliased to upgrade. Confusing, right?