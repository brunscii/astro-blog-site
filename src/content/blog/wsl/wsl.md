---
title: 'WSL - Windows Subsystem for Linux'
description: 'This is a reference for WSL'
---

Table Of Contents
> 1) [What is WSL](#what-is-wsl)
> 2) [How Does it work](#how-does-wsl-work)
> 3) [Getting Started](#getting-started)
>    - [Using Store](#using-the-microsoft-store)
>    - [Using Terminal](#using-the-terminal)
> 4) [Using WSL](#once-its-running)
---
## What is WSL

As the name of the article suggests, **WSL** stands for **Windows Subsyem for Linux**. It is a way of letting you install a linux distribution inside of windows. Why would you want to do this? It's simple, Linux is a wonderful environment with a plethora of built-in tools. Having access to this environment and tools inside of windows means not having to worry about running a virtual machine. It means not having to dual-boot, or run a separate computer to have access to these tools. It also allows you to access the windows environment with these linux tools.

Having used Linux for many years means certain features and tools are second nature. WSL allows us to have the best of both worlds. An easy example is being able to run `grep` in windows. You could also run `vim` or other *nix style environments. Another is having the ability to deploy your code in a linux environment without having to send it to another machine. This can increase productivity for cross-platform development. 

You can use it to run GIT, or a database easily with little setup. This means you can run a production server and the production on the same machine. 

## How does WSL work

We know there are differences in Linux and Windows on a fundamental level. From file/folder structure to the function of these systems. So how do we get these different systems to work together. Traditionally we used a virtual machine to emulate the hardware of another computer and run the different operating system. This is limited as the guest and host OS can't communicate effectively. As we know communication is the key to success. 

With WSL we can have the guest operating system be installed on the host operating system without the need for a virtual machine platform. We eliminate the need for VirtualBox or Hyper-V in this case. While we don't need them for WSL they still provide important use when testing and deploying images.

WSL allows the linux kernel to run on top of the windows kernel by using a kernel interface. This allows us to run a shell or a background service as if we were running linux natively on the hardware with a little more overhead.

According to the wsl program:
```text

    Copyright (c) Microsoft Corporation. All rights reserved.
    For privacy information about this product please visit https://aka.ms/privacy.

    Usage: wsl.exe [Argument] [Options...] [CommandLine]

    Arguments for running Linux binaries:

        If no command line is provided, wsl.exe launches the default shell.

        --exec, -e <CommandLine>
            Execute the specified command without using the default Linux shell.

        --shell-type <Type>
            Execute the specified command with the provided shell type.

            Types:
                standard
                    Execute the specified command using the default Linux shell.

                login
                    Execute the specified command using the default Linux shell as a login shell.

                none
                    Execute the specified command without using the default Linux shell.

        --
            Pass the remaining command line as-is.

    Options:
        --cd <Directory>
            Sets the specified directory as the current working directory.
            If ~ is used the Linux user's home path will be used. If the path begins
            with a / character, it will be interpreted as an absolute Linux path.
            Otherwise, the value must be an absolute Windows path.

        --distribution, -d <Distro>
            Run the specified distribution.

        --user, -u <UserName>
            Run as the specified user.

        --system
            Launches a shell for the system distribution.

    Arguments for managing Windows Subsystem for Linux:

        --help
            Display usage information.

        --install <Distro> [Options...]
            Install a Windows Subsystem for Linux distribution.
            For a list of valid distributions, use 'wsl.exe --list --online'.

            Options:
                --no-launch, -n
                    Do not launch the distribution after install.

                --web-download
                    Download the distribution from the internet instead of the Microsoft Store.

                --pre-release
                    Download a pre-release version if available. Implies --web-download.

        --mount <Disk>
            Attaches and mounts a physical or virtual disk in all WSL 2 distributions.

            Options:
                --vhd
                    Specifies that <Disk> refers to a virtual hard disk.

                --bare
                    Attach the disk to WSL2, but don't mount it.

                --name <Name>
                    Mount the disk using a custom name for the mountpoint.

                --type <Type>
                    Filesystem to use when mounting a disk, if not specified defaults to ext4.

                --options <Options>
                    Additional mount options.

                --partition <Index>
                    Index of the partition to mount, if not specified defaults to the whole disk.

        --set-default-version <Version>
            Changes the default install version for new distributions.

        --shutdown
            Immediately terminates all running distributions and the WSL 2
            lightweight utility virtual machine.

        --status
            Show the status of Windows Subsystem for Linux.

        --unmount [Disk]
            Unmounts and detaches a disk from all WSL2 distributions.
            Unmounts and detaches all disks if called without argument.

        --update
            Update the Windows Subsystem for Linux package.

            Options:
                --web-download
                    Download the update from the internet instead of the Microsoft Store.

        --version, -v
            Display version information.

    Arguments for managing distributions in Windows Subsystem for Linux:

        --export <Distro> <FileName> [Options]
            Exports the distribution to a tar file.
            The filename can be - for standard output.

            Options:
                --vhd
                    Specifies that the distribution should be exported as a .vhdx file.

        --import <Distro> <InstallLocation> <FileName> [Options]
            Imports the specified tar file as a new distribution.
            The filename can be - for standard input.

            Options:
                --version <Version>
                    Specifies the version to use for the new distribution.

                --vhd
                    Specifies that the provided file is a .vhdx file, not a tar file.
                    This operation makes a copy of the .vhdx file at the specified install location.

        --import-in-place <Distro> <FileName>
            Imports the specified .vhdx file as a new distribution.
            This virtual hard disk must be formatted with the ext4 filesystem type.

        --list, -l [Options]
            Lists distributions.

            Options:
                --all
                    List all distributions, including distributions that are
                    currently being installed or uninstalled.

                --running
                    List only distributions that are currently running.

                --quiet, -q
                    Only show distribution names.

                --verbose, -v
                    Show detailed information about all distributions.

                --online, -o
                    Displays a list of available distributions for install with 'wsl.exe --install'.

        --set-default, -s <Distro>
            Sets the distribution as the default.

        --set-version <Distro> <Version>
            Changes the version of the specified distribution.

        --terminate, -t <Distro>
            Terminates the specified distribution.

        --unregister <Distro>
            Unregisters the distribution and deletes the root filesystem.

```

## Getting started

### Using the Microsoft Store

![Microsoft Store Showing WSL App](/astro-blog-site/public/blogContent/wsl/MSStoreWSL.png)

The first step is to make sure that you have WSL installed on your computer.

The next step is to find a version of Linux that you would like to use from the Microsoft Store. There is a small selection of Linux distributions that are already built for you. 

Some of the most common are Ubuntu, Debian, Suse, and Kali.

If you're looking for the easiest way to get started with WSL then you can't get easier than installing 2 apps from the MS Store.

![Ubuntu from the MS Store](/astro-blog-site/public/blogContent/wsl/MSStoreWSLUbuntu.png)

So what do we get with this installation?

Well, we get a working copy of Ubuntu for starters. 

TO BE CONTINUED...


### Using the terminal

According to the [documentation](https://learn.microsoft.com/en-us/windows/wsl/install-manual) it is a simple process.
***Microsoft describes this as a 6 step process but if you are running a modern install of windows then you can probably just do steps 1, 3 and 6 and be fine. This would make this more like a 3 easy step program.***

#### Step 1 Enable WSL

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

#### Step 2 Make sure you are using a supported version of Windows

- x64 systems need Version 1903, Build 18362 or later.
- ARM64 systems need Version 2004, Build 19041 or later.

#### Step 3 Enable Virtual Machine feature

> I thought you said WSL didn't use a VM?

Well, yes and no. WSL 1 didn't use VM's but WSL 2 uses Windows hypervisor feature to run the linux kernel seamlessly with Windows. 

To enable Windows hypervisor feature we simply enter the following into the terminal with administrator privlidges.

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

#### Step 4 Download the Linux kernel

Download the latest kernel update from the [Microsoft Store](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) and run the update package.

#### Step 5 Set WSL 2 as default

```powershell
wsl --set-default-version 2
```
This will set the default version of wsl to 2.

#### Step 6 Install Linux Distro from MS Store

![MS Store](/astro-blog-site/public/blogContent/wsl/MSStoreWSL.png)

Open the MS Store and install a Linux distro.

## Once it's running

We finally return to the list of available options for the `wsl` command. Let's start with the basics. 

##### Lists

Here's how we list the wsl distros installed on the machine `wsl --list`. We have the following opetions we can add to this:

        --all
            List all distributions, including distributions that are
            currently being installed or uninstalled.

        --running
            List only distributions that are currently running.

        --quiet, -q
            Only show distribution names.

        --verbose, -v
            Show detailed information about all distributions.

        --online, -o
            Displays a list of available distributions for install with 'wsl.exe --install'.

Let's make a not of a couple of those. `--running` allows us to see the running distros and `--online` allows us to see the available distributions we can install using wsl and an internet connection. Wsl will download the distro from the microsoft store.
##### Terminate
While running a WSL distro isn't as demanding on your system as a full VM, it is still a resource drain and there are cases when you might want to stop that. To terminate a distribution you can use `wsl --terminate <wsl name>`. So for example, let's say you wanted to terminate a distro named kali-linux. You would enter 
```powershell
wsl --terminate kali-linux
```
##### Shutdown

If you want to shutdown all running distributions then you can use `wsl --shutdown`. This will shutdown all of the running distributions.

##### Install

Using `wsl --install <distro>` we can install a distro straight from wsl.exe. Which distros do they have? Well, look back at our `--list` section. If we use `wsl --list --online` we will get a list of available distros. 

    The following is a list of valid distributions that can be installed.
    Install using 'wsl.exe --install <Distro>'.

    NAME               FRIENDLY NAME
    Ubuntu             Ubuntu
    Debian             Debian GNU/Linux
    kali-linux         Kali Linux Rolling
    SLES-12            SUSE Linux Enterprise Server v12
    SLES-15            SUSE Linux Enterprise Server v15
    Ubuntu-18.04       Ubuntu 18.04 LTS
    Ubuntu-20.04       Ubuntu 20.04 LTS
    OracleLinux_8_5    Oracle Linux 8.5
    OracleLinux_7_9    Oracle Linux 7.9

This list changes as new versions of distributions are released and updated. This is, at least for me, the easiest way of installing a wsl distro. Simply enable wsl, and install a distro from the app. Microsoft takes care of the rest.

##### Running

So we can run the default distribution by using the `wsl` command with no arguments. This is fine but what if you want to run the one you installed after that? You can choose your distribution by using the `--distribution` or `-d` option. 

Let's say we want to run Debian from our installed distros. We would use 
`wsl -d Debian`.