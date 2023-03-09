---
title: 'WSLg'
description: 'Windows Subsystems for Linux GUI'
---

# What is WSLg

If you are unfamiliar with WSL then might I suggest that you start with my previous post [here](../wsl)

WSL has changed a lot over it's short life. When it first came out it only worked for **CLI**, or **C**ommand **L**ine **I**nterface, programs. Since then there have been advancements allowing graphical linux apps that use X11 or Wayland to run on windows. This is thanks to something called [WSLg](https://github.com/microsoft/wslg). *I remember when WSLg first came out you had to download it separate from WSL, now it is an included feature.*

If you have a WSL distro from before WSLg then you can update your distro. First thing is to switch to version 2 of WSL for the distro if you haven't already.
> `wsl --set-version <distro> 2`

Next you update the distro using `wsl --update <distro>`

# Installing WSLg apps

Now it's as simple as installing X11 or Wayland apps on your WSL distro. The people at microsoft have worked hard to make WSLg a built in part of WSL. 

## Examples

### x11-apps
We can install the x11 apps fron the terminal like so:

```
sudp apt install x11-apps
```

Whats in the x11-apps package? Well, let's take a look.

    dpkg -L x11-apps

gives us the following
    
    ...
    /usr/bin/atobm
    /usr/bin/bitmap
    /usr/bin/bmtoa
    /usr/bin/ico
    /usr/bin/oclock
    /usr/bin/rendercheck
    /usr/bin/transset
    /usr/bin/x11perf
    /usr/bin/x11perfcomp
    /usr/bin/xbiff
    /usr/bin/xcalc
    /usr/bin/xclipboard
    /usr/bin/xclock
    /usr/bin/xconsole
    /usr/bin/xcursorgen
    /usr/bin/xcutsel
    /usr/bin/xditview
    /usr/bin/xedit
    /usr/bin/xeyes
    /usr/bin/xgc
    /usr/bin/xload
    /usr/bin/xlogo
    /usr/bin/xmag
    /usr/bin/xman
    /usr/bin/xmore
    /usr/bin/xwd
    /usr/bin/xwud
    ...



> Speculatory side note:
>
> *So we can run xcalc on windows. Why, you might ask. It's not about running an uglier calculator on windows. This represents a proof of concept that demonstrates linux applicaitons running in windows. This is something I have wanted since I learned linux in 2008. Yes you could run a VM, but that's extra overhead on your computer. Being able to run linux and now android apps in windows means a unified space for developers. We have seen how certain game console failed because they were challenging to develop for. This added feature means an evnironment that can be used to develop for other environments. We have seen a massive shift in developers moving to linux thanks to it's build in tools, ease of use for networking and many other features, a powerful command line, and it being open. If windows can become a decent development environment then maybe they'll win back the devs. VS Code was a good start.*

Let's try something more useful than these basic utility apps shall we.

### Firefox

Everyone that's familiar with computers should be familiar with firefox. Mozilla, the company behind firefox, offers one of the best resources for web developers, the MDN. The Mozilla Developer Network is a free set of documentation for javascript, HTML, CSS, web API's and more. 

Firefox itself may have seen better days usage-wise, but it is still a very capable browser and is often times the default for many linux distos. 

Maybe you are tired of all of your browsers having 20-50 tabs open, or maybe you like a little extra privacy. Whatever the case we can install and run firefox through WSLg quickly and easily.

On Debian systems

> `sudo apt install firefox-esr -y`

So it's installed on our Debian WSL, now what?

Simple, just run it. You should get something like this.

![firefox](/astro-blog-site/blogContent/wsl/firefox-esr-debian-wsl.png)


Sure the windows theme is lost a bit with wslg, but it is a running version of a debian build of firefox on windows. That in itself, is impressive. 

*I remeber learning about VM's and thinking it was the coolest thing 15 years ago. This would have blown my mind back then*



