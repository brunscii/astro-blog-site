---
title: 'What is DISM'
description: 'Deployment Image Servicing and Management'
---

## What is DISM

**DISM** is a an acronym for **Deployment Image Servicing and Management**. It is a command line tool for (un)installing, updating, 
and configuring windows features in an image. DISM can be used to capture, split, and manage .wim files, which hold windows images. What's an image?
Image files are a way of representing a disk, more on that later. 

DISM is a powerful utility that allows you to modify your copy of windows from the command line. This allows you to customize the operating 
system in ways that aren't available in the system itself. I have used it to install packages, fix the operating system, and remove unwanted features. 
This is a great tool shrouded in mystery so let's take a deeper look and unwrap this windows gem. 

One thing I always like to do is try the command out first. In linux I would run `man` to get the manual pages but in windows you can often run the 
command with no options or with `/?` to get information on the command itself. This allows us (in most cases) to see a list of options for the command.
It also provides a syntax for how to use the command and any required arguments. This is what I got when I ran `DISM` in the windows terminal.


    

    Deployment Image Servicing and Management tool
    Version: 10.0.22621.1


    DISM.exe [dism_options] {Imaging_command} [<Imaging_arguments>]
    DISM.exe {/Image:<path_to_offline_image> | /Online} [dism_options] 
            {servicing_command} [<servicing_arguments>]

    DESCRIPTION:

    DISM enumerates, installs, uninstalls, configures, and updates features
    and packages in Windows images. The commands that are available depend 
    on the image being serviced and whether the image is offline or running.

    ****
    FFU COMMANDS:

    /Capture-Ffu            - Captures a physical disk image into a new FFU file.
    /Apply-Ffu              - Applies an .ffu image.
    /Split-Ffu              - Splits an existing .ffu file into multiple read-only
                                split FFU files.
    /Optimize-Ffu           - Optimizes a FFU file so that it can be applied to storage 
                                of a different size.

    WIM COMMANDS:

    /Apply-CustomDataImage  - Dehydrates files contained in the custom data image.
    /Capture-CustomImage    - Captures customizations into a delta WIM file on a 
                                WIMBoot system. Captured directories include all 
                                subfolders and data.
    /Get-WIMBootEntry       - Displays WIMBoot configuration entries for the 
                                specified disk volume.
    /Update-WIMBootEntry    - Updates WIMBoot configuration entry for the 
                                specified disk volume.
    /List-Image             - Displays a list of the files and folders in a 
                                specified image.
    /Delete-Image           - Deletes the specified volume image from a WIM file
                                that has multiple volume images.
    /Export-Image           - Exports a copy of the specified image to another
                                file.
    /Append-Image           - Adds another image to a WIM file.
    /Capture-Image          - Captures an image of a drive into a new WIM file.
                                Captured directories include all subfolders and 
                                data.
    /Get-MountedWimInfo     - Displays information about mounted WIM images.
    /Get-WimInfo            - Displays information about images in a WIM file.
    /Commit-Wim             - Saves changes to a mounted WIM image.
    /Unmount-Wim            - Unmounts a mounted WIM image.
    /Mount-Wim              - Mounts an image from a WIM file.
    /Remount-Wim            - Recovers an orphaned WIM mount directory.
    /Cleanup-Wim            - Deletes resources associated with mounted WIM 
                                images that are corrupted.

    GENERIC IMAGING COMMANDS:

    /Split-Image            - Splits an existing .wim file into multiple 
                                read-only split WIM (SWM) files.
    /Apply-Image            - Applies an image.
    /Get-MountedImageInfo   - Displays information about mounted WIM and VHD
                                images.
    /Get-ImageInfo          - Displays information about images in a WIM, a VHD
                                or a FFU file.
    /Commit-Image           - Saves changes to a mounted WIM or VHD image.
    /Unmount-Image          - Unmounts a mounted WIM or VHD image.
    /Mount-Image            - Mounts an image from a WIM or VHD file.
    /Remount-Image          - Recovers an orphaned image mount directory.
    /Cleanup-Mountpoints    - Deletes resources associated with corrupted
                                mounted images.

    IMAGE SPECIFICATIONS:

    /Online                 - Targets the running operating system.
    /Image                  - Specifies the path to the root directory of an
                                offline Windows image.

    DISM OPTIONS:

    /English                - Displays command line output in English.
    /Format                 - Specifies the report output format.
    /WinDir                 - Specifies the path to the Windows directory.
    /SysDriveDir            - Specifies the path to the system-loader file named
                                BootMgr.
    /LogPath                - Specifies the logfile path.
    /LogLevel               - Specifies the output level shown in the log (1-4).
    /NoRestart              - Suppresses automatic reboots and reboot prompts.
    /Quiet                  - Suppresses all output except for error messages.
    /ScratchDir             - Specifies the path to a scratch directory.

    For more information about these DISM options and their arguments, specify an
    option immediately before /?.

    Examples:     
        DISM.exe /Mount-Wim /?
        DISM.exe /ScratchDir /?
        DISM.exe /Image:C:\test\offline /?
        DISM.exe /Online /?


Let's take a minute to parse this information.

### DISM Command Structure

> DISM.exe [dism_options] {Imaging_command} [<Imaging_arguments>]

We can say that DISM works by taking a list of options as most programs do. It then accepts a `Imaging_command` and a list of `Image_arguments`. 

We know from the description above that the `Imaging_command` is sorted into three groups: `FFU COMMANDS`, `WIM COMMANDS`, and `GENERIC IMAGING COMMANDS`.

> DISM.exe {/Image:<path_to_offline_image> | /Online} [dism_options] {servicing_command} [<servicing_arguments>] 


In this structure we either choose an offline image or a use `/Online` to signify that we are working on the running copy of windows. ***Not all of the servicing commands work on online images, aka running machines.***



### What is a FFU?
A **FFU** is a **Full Flash Update** and it is a image that allows you to deploy a physical disk's image to another drive. It includes windows, system partition information, and recovery information.

We know the FFU capture commands from the above output.

    /Capture-Ffu            - Captures a physical disk image into a new FFU file.
    /Apply-Ffu              - Applies an .ffu image.
    /Split-Ffu              - Splits an existing .ffu file into multiple read-only
                                split FFU files.
    /Optimize-Ffu           - Optimizes a FFU file so that it can be applied to storage 
                                of a different size.

### What is a WIM?

A **WIM**, as previously stated, is a file that uses **Windows Imaging Format**. It is a **W**indows **IM**age, or multiple, in a single disk image. 
This first came with windows in Vista and allowed for a better customization of the disk image before deployment. You can also boot and run a **WIM**. 
Most images are sector based like drives. WIM files on the other hand are file based. 

Many WIM files will contain multiple copies of windows. For instance, the Windows install disk actually contains all of the copies of the desktop version.
Windows s, Home, Professional can all be on the same disk. That's why you can install either version from one disk. It has been like this since at least Windows Vista. 
I remeber the disks that came with laptops often had each version and you would have to choose based on you key if you reinstalled. --Perhaps that's just me showing my age.

In the Vista days there was a took called ImageX. It was used to customized the OS for OEM builds. This meant that manufacturers could add
drivers, or bloatware, straight on the installer. ImageX was replaced with DISM in later versions of Windows. 

Windows Vista and 7 used ImageX to create **WIM** files.

Windows 8 and later can use **DISM** to create and modify **WIM** files.

*I vaguely remember using Norton Ghost in IT to create disk images that would be deployed to the many computers over the network using GhostCast and PXE boot. The more modern approach is to use Windows server to set up a PXE server. This is done using WIM files of the windows installer.*

As with the **FFU** commands, we can see that our **WIM** commands are as follows:

    WIM COMMANDS:

    /Apply-CustomDataImage  - Dehydrates files contained in the custom data image.
    /Capture-CustomImage    - Captures customizations into a delta WIM file on a 
                                WIMBoot system. Captured directories include all 
                                subfolders and data.
    /Get-WIMBootEntry       - Displays WIMBoot configuration entries for the 
                                specified disk volume.
    /Update-WIMBootEntry    - Updates WIMBoot configuration entry for the 
                                specified disk volume.
    /List-Image             - Displays a list of the files and folders in a 
                                specified image.
    /Delete-Image           - Deletes the specified volume image from a WIM file
                                that has multiple volume images.
    /Export-Image           - Exports a copy of the specified image to another
                                file.
    /Append-Image           - Adds another image to a WIM file.
    /Capture-Image          - Captures an image of a drive into a new WIM file.
                                Captured directories include all subfolders and 
                                data.
    /Get-MountedWimInfo     - Displays information about mounted WIM images.
    /Get-WimInfo            - Displays information about images in a WIM file.
    /Commit-Wim             - Saves changes to a mounted WIM image.
    /Unmount-Wim            - Unmounts a mounted WIM image.
    /Mount-Wim              - Mounts an image from a WIM file.
    /Remount-Wim            - Recovers an orphaned WIM mount directory.
    /Cleanup-Wim            - Deletes resources associated with mounted WIM 
                                images that are corrupted.

### Generic imaging commands?

They provide a set of options for working with images despite their type.

    GENERIC IMAGING COMMANDS:

    /Split-Image            - Splits an existing .wim file into multiple 
                                read-only split WIM (SWM) files.
    /Apply-Image            - Applies an image.
    /Get-MountedImageInfo   - Displays information about mounted WIM and VHD
                                images.
    /Get-ImageInfo          - Displays information about images in a WIM, a VHD
                                or a FFU file.
    /Commit-Image           - Saves changes to a mounted WIM or VHD image.
    /Unmount-Image          - Unmounts a mounted WIM or VHD image.
    /Mount-Image            - Mounts an image from a WIM or VHD file.
    /Remount-Image          - Recovers an orphaned image mount directory.
    /Cleanup-Mountpoints    - Deletes resources associated with corrupted
                                mounted images.

## Using DISM "Online"

As we previously stated, using DISM online is using it on the currently running version of windows. This is an incredibly useful tool for working on the current system without having to redeploy or reimage. 

As with the `DISM /?` command we can also get manual pages from specific parts of the DISM command. For instance, `DISM /online /?` will produce the following:

    Deployment Image Servicing and Management tool
    Version: 10.0.22621.1

    Image Version: 10.0.22621.963


    The following commands may be used to service the image:

    OS UNINSTALL SERVICING COMMANDS:

    /Set-OSUninstallWindow  - Sets the OS Uninstall Window.
    /Get-OSUninstallWindow  - Gets the OS Uninstall Window.
    /Remove-OSUninstall     - Remove the OS Uninstall.
    /Initiate-OSUninstall   - Initiates the OS Uninstall

    APPX SERVICING COMMANDS:

    /Get-NonRemovableAppPolicy - Lists the package families configured 
                                to be nonremovable by enterprise policy.
    /Set-NonRemovableAppPolicy - Sets enterprise nonremovable policy for 
                                a given package family. 
    /Optimize-ProvisionedAppxPackages - Optimizes provisioned appx footprint by 
                                hard-linking identical files across appx packages.
    /Set-ProvisionedAppxDataFile - Places custom data into the specified app 
                                package (.appx or .appxbundle). The specified  
                                application package must already be in the image.
    /Remove-ProvisionedAppxPackage - Removes app packages (.appx or .appxbundle)
                                from the image. App packages will not be installed 
                                when new user accounts are created.
    /Add-ProvisionedAppxPackage - Adds app packages (.appx or .appxbundle) to the
                                image and sets them to install for each new user.
    /Get-ProvisionedAppxPackages - Displays information about app packages 
                                (.appx or .appxbundle) in an image that are 
                                set to install for each new user.

    PACKAGE SERVICING COMMANDS:

    /Add-Package            - Adds packages to the image.
    /Remove-Package         - Removes packages from the image.
    /Enable-Feature         - Enables a specific feature in the image.
    /Disable-Feature        - Disables a specific feature in the image.
    /Get-Packages           - Displays information about all packages in 
                                the image.
    /Get-PackageInfo        - Displays information about a specific package.
    /Get-Features           - Displays information about all features in
                                a package.
    /Get-FeatureInfo        - Displays information about a specific feature.
    /Cleanup-Image          - Performs cleanup and recovery operations on the
                                image.
    /Export-Source          - Export a set of capabilities into a new repository.
    /Add-Capability         - Add one or more capabilities to an image.
    /Remove-Capability      - Remove a capability from one image.
    /Get-Capabilities       - Get capabilities in the image.
    /Get-CapabilityInfo     - Get information of a capability in the image.
    /Get-ReservedStorageState - Gets the current state of reserved storage.
    /Set-ReservedStorageState - Sets the state of reserved storage.

    OS GENERAL COMMANDS:

    /Optimize-Image         - Performs specified configurations to an offline 
                                image.

    DRIVER SERVICING COMMANDS:

    /Remove-Driver          - Removes driver packages from an offline image.
    /Add-Driver             - Adds driver packages to an offline image.
    /Get-DriverInfo         - Displays information about a specific driver
                                in an offline image or a running operating system.
    /Get-Drivers            - Displays information about all drivers in
                                an offline image or a running operating system.
    /Export-Driver          - Export all third-party driver packages from an
                                offline image or a running operating system.

    APPLICATION SERVICING COMMANDS:

    /Check-AppPatch         - Displays information if the MSP patches are 
                                applicable to the mounted image.
    /Get-AppPatchInfo       - Displays information about installed MSP patches.
    /Get-AppPatches         - Displays information about all applied MSP patches
                                for all installed applications.
    /Get-AppInfo            - Displays information about a specific installed MSI
                                application.
    /Get-Apps               - Displays information about all installed MSI
                                applications.

    DEFAULT ASSOCIATIONS COMMANDS:

    /Remove-DefaultAppAssociations - Removes the default application associations
                                from a Windows image.
    /Import-DefaultAppAssociations - Imports a set of default application 
                                associations to a Windows image.
    /Get-DefaultAppAssociations - Displays the list of default application 
                                associations from a Windows image.
    /Export-DefaultAppAssociations - Exports the default application associations
                                from a running operating system.

    INTERNATIONAL SERVICING COMMANDS:

    /Set-SysUILang          - Sets the system UI language that is used
                                in the mounted offline image.
    /Set-LayeredDriver      - Sets keyboard layered driver.
    /Set-UILang             - Sets the default system UI language that is used
                                in the mounted offline image.
    /Set-UILangFallback     - Sets the fallback default language for the system 
                                UI in the mounted offline image.
    /Set-UserLocale         - Sets the user locale in the mounted offline image.
    /Set-SysLocale          - Sets the language for non-Unicode programs (also
                                called system locale) and font settings in the 
                                mounted offline image.
    /Set-InputLocale        - Sets the input locales and keyboard layouts to 
                                use in the mounted offline image.
    /Set-TimeZone           - Sets the default time zone in the mounted offline
                                image.
    /Set-AllIntl            - Sets all international settings in the mounted
                                offline image.
    /Set-SKUIntlDefaults    - Sets all international settings to the default
                                values for the specified SKU language in the
                                mounted offline image.
    /Gen-LangIni            - Generates a new lang.ini file.
    /Set-SetupUILang        - Defines the default language that will be used
                                by setup.
    /Get-Intl               - Displays information about the international 
                                settings and languages.

    UNATTEND SERVICING COMMANDS:

    /Apply-Unattend         - Applies an unattend file to an image.

    EDGE SERVICING COMMANDS:

    /Add-Edge               - Adds Edge to image.
    /Add-EdgeBrowser        - Adds Edge browser to image.
    /Add-EdgeWebView        - Adds Edge WebView to image.

    PROVISIONING PACKAGE SERVICING COMMANDS:

    /Get-ProvisioningPackageInfo - Gets the information of provisioning package.
    /Add-ProvisioningPackage - Adds provisioning package.

    WINDOWS EDITION SERVICING COMMANDS:

    /Set-ProductKey         - Sets the product key of the offline image.
    /Get-TargetEditions     - Displays a list of Windows editions that an image 
                                can be upgraded to.
    /Get-CurrentEdition     - Displays the edition of the current image.
    /Set-Edition            - Upgrades an image to a higher edition.

    For more information about these servicing commands and their arguments,
    specify a command immediately before /?.

        Examples: 
            DISM.exe /Image:C:\test\offline /Apply-Unattend /?
            DISM.exe /Image:C:\test\offline /Get-Features /?
            DISM.exe /Online /Get-Drivers /?

Thus the rabbit hole deepins. 


---
## Why Use DISM?

### Repairing Windows

**DISM** is used to repair or (un)install packages or to repair, install, or backup a windows image.

Lets dive into the world of `DISM /cleanup-image`.

Thanks to the help info, we know the following: 

    
    Deployment Image Servicing and Management tool
    Version: 10.0.22621.1

    Image Version: 10.0.22621.963


    /Cleanup-Image /RevertPendingActions 

    WARNING! You should use the /RevertPendingActions option only in a 
    system-recovery scenario to perform recovery operations on a Windows image 
    that did not boot. 

        Example: 
        DISM.exe /Image:C:\test\offline /Cleanup-Image /RevertPendingActions 

    /Cleanup-Image /spsuperseded [/hidesp] 
    Use /SPSuperseded to remove any backup files created during the installation 
    of a service pack. Use /HideSP to prevent the service pack from being listed 
    in the Installed Updates for the operating system. 

    WARNING! The service pack cannot be uninstalled after the /SPSuperseded 
    operation is completed. 

        Example: 
        DISM.exe /Image:C:\test\offline /Cleanup-Image /spsuperseded /hidesp 

    /Cleanup-Image {/CheckHealth | /ScanHealth | /RestoreHealth} 
    Use /CheckHealth to check whether the image has been flagged as corrupted 
    by a failed process and whether the corruption can be repaired. 
    Use /ScanHealth to scan the image for component store corruption. 
    Use /RestoreHealth to scan the image for component store corruption, and 
    then perform repair operations automatically. 
    Use /Source with /RestoreHealth to specify the location of known good 
    versions of files that can be used for the repair. For more information on 
    specifying a source location, see 
    https://go.microsoft.com/fwlink/?LinkId=243077. 
    Use /LimitAccess to prevent DISM from contacting WU/WSUS. 

        Example: 
        DISM.exe /Online /Cleanup-Image /ScanHealth

        DISM.exe /Image:c:\offline /Cleanup-Image /RestoreHealth 
        /Source:c:\test\mount 

    /Cleanup-Image /StartComponentCleanup [/ResetBase [/Defer]]
    Use /StartComponentCleanup to clean up the superseded components and reduce
    the size of the component store. Use /ResetBase to reset the base of 
    superseded components, which can further reduce the component store size.
    Use /Defer with /ResetBase to defer long-running cleanup operations to the 
    next automatic maintenance. 

    WARNING!  The installed Windows Updates cannot be uninstalled after the 
    /StartComponentCleanup with /ResetBase operation is completed. 

        Example: 
        DISM.exe /Image:C:\test\offline /Cleanup-Image /StartComponentCleanup

    /Cleanup-Image /AnalyzeComponentStore 
    Use /AnalyzeComponentStore to create a report of the WinSxS component store.
    For more information about the WinSxS report and how to use the information
    provided in the report, see
    https://go.microsoft.com/fwlink/?LinkId=293367. 

        Example: 
        DISM.exe /Image:C:\test\offline /Cleanup-Image /AnalyzeComponentStore


But what does this mean? 

Well let's take a look at one of the most used arguments. `DISM /Online /Cleanup-Image {/CheckHealth | /ScanHealth | /RestoreHealth} `

If you have had one of the many issues that exist with windows since 7 then there is a good chance you have seen this command. This uses the DISM tool on the "Online" windows image and the `Cleanup-Image` option. We then use the `/CheckHealth`, `/ScanHealth`, or `/RestoreHealth` servicing command to attempt to aqcuire information or attempt to fix the current windows image. ***This is a powerful tool.***


 #### CheckHealth
 
 > `DISM /Online /Cleanup-Image /CheckHealth`
 
 This is used to check the DISM version, image version, and weather or not the component store is currupted or repairable. This is one of the quickest ways of seeing if something is wrong with your current system. 
 
#### ScanHealth

> `DISM /Online /Cleanup-Image /ScanHealth`

This is probably one of the most comman fix suggestions on the internet. Anything wonky with windows and people will suggest this as a quick fix. Why is this? Well, it works a small percentage of the time. 

What this does is scans the currently running windows image and checks for any issues that it can resolve. It can fix these issues by pulling the missing or broken dependencies from Microsoft. This option means not having to pull out installation media to attempt a fix of windows, or having to reinstall in many cases.

#### RestoreHealth

> `DISM /Online /Cleanup-Image /RestoreHealth

This is the powerful tool we mentioned above. This allows us to restore the missing or currupt files from a trusted source. Using this command will pull the needed files from Microsoft to repair your running version of Windows. This isn't a cure-all but it works for most system corruption issues.
 