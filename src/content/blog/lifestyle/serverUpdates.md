---
title: "Updating from Fedora server 37 to 41"
description: "Documentation of me updating my much out of date file serve"
author: "Chris Carlin"
draft: false
category: "Linux"
pubDate: "01/24/2025"
---

## Introductions

As the data hoarder I am, I have a server that I use for my files and backups. It runs jellyfin and is used to run a few VMs. One of which being made from my old windows 7 hard drive. 
It's is a very simple server.
So simple in fact that you might even say that is isn't even a server at all.
One might say that it's an old clapped out gaming PC that's been repurposed into a lean, mean, file-slinging machine.
This server has one of the first desktop 8 core CPU's and a 980ti hybrid. 
That's right, I have a water cooled gpu from several generations ago. 
Can it still game? Probably. I just use it for my media server and honestly, I would love to upgrade to the new battlemage card with a more powerful and power effecient system. 
But in the mean time we have to maintain what we have.

Through neglect, and the fact that fedora releases a new version every 6 months, my server is horribly out of date. It is currently running Fedora Server 37, which is still several versions newer than when this machine started being a server.
Currently, at least as of the time I am writing this, Fedora Server is on version 41.

This means we get to upgrade as such: `37 -> 38 -> 39 -> 40 -> 41`.

## 37 to 38

So, for our first upgrade I make sure we have a up-to-date as possible version of 37 before moving on to 38. 
To do this we run `sudo dnf --refresh upgrade`.

```
[root@server]# dnf --refresh upgrade
Fedora 37 - x86_64                                                                       13 kB/s | 6.0 kB     00:00
Fedora 37 openh264 (From Cisco) - x86_64                                                2.7 kB/s | 989  B     00:00
Fedora Modular 37 - x86_64                                                               16 kB/s | 5.9 kB     00:00
Fedora 37 - x86_64 - Updates                                                             15 kB/s | 5.9 kB     00:00
Fedora Modular 37 - x86_64 - Updates                                                     10 kB/s | 5.8 kB     00:00
RPM Fusion for Fedora 37 - Free                                                         3.5 kB/s | 2.6 kB     00:00
RPM Fusion for Fedora 37 - Free tainted                                                 1.7 kB/s | 1.2 kB     00:00
RPM Fusion for Fedora 37 - Free - Updates                                               5.3 kB/s | 2.4 kB     00:00
RPM Fusion for Fedora 37 - Nonfree                                                      3.0 kB/s | 1.4 kB     00:00
RPM Fusion for Fedora 37 - Nonfree tainted                                              1.7 kB/s | 1.2 kB     00:00
RPM Fusion for Fedora 37 - Nonfree - Updates                                            2.6 kB/s | 1.1 kB     00:00
RPM Fusion for Fedora 37 - Nonfree - Updates                                            0.0  B/s |   0  B     01:03
Errors during downloading metadata for repository 'rpmfusion-nonfree-updates':
  - Curl error (28): Timeout was reached for http://mirror.epn.edu.ec/rpmfusion/nonfree/fedora/updates/37/x86_64/repodata/repomd.xml [Connection timeout after 30000 ms]
  - Status code: 404 for https://mirror.karneval.cz/pub/linux/rpmfusion/nonfree/fedora/updates/37/x86_64/repodata/repomd.xml (IP: 89.102.0.150)
Error: Failed to download metadata for repo 'rpmfusion-nonfree-updates': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
Tailscale stable                                                                        975  B/s | 832  B     00:00
Ignoring repositories: rpmfusion-nonfree-updates
Dependencies resolved.
Nothing to do.
Complete!
```

Then we hit them with the old `sudo dnf system-upgrade download --releasever=38`. 
We follow that up with a `sudo dnf system-upgrade reboot`.

## 38 to 39

After a long wait we are able to SSH back into the server and update.

```
[root@server]# dnf --refresh upgrade
Copr repo for PyCharm owned by phracek                                                  252  B/s | 158  B     00:00
Errors during downloading metadata for repository 'copr:copr.fedorainfracloud.org:phracek:PyCharm':
  - Status code: 404 for https://download.copr.fedorainfracloud.org/results/phracek/PyCharm/fedora-38-x86_64/repodata/repomd.xml (IP: 108.138.85.53)
Error: Failed to download metadata for repo 'copr:copr.fedorainfracloud.org:phracek:PyCharm': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
Fedora 38 - x86_64                                                                       14 MB/s |  83 MB     00:05
Fedora 38 openh264 (From Cisco) - x86_64                                                2.0 kB/s | 2.6 kB     00:01
Fedora Modular 38 - x86_64                                                              2.0 MB/s | 2.8 MB     00:01
Fedora 38 - x86_64 - Updates                                                             12 MB/s |  42 MB     00:03
Fedora Modular 38 - x86_64 - Updates                                                    1.3 MB/s | 2.2 MB     00:01
RPM Fusion for Fedora 38 - Free                                                         186 kB/s | 693 kB     00:03
RPM Fusion for Fedora 38 - Free tainted                                                 931  B/s | 1.8 kB     00:02
RPM Fusion for Fedora 38 - Free - Updates                                               133 kB/s | 342 kB     00:02
RPM Fusion for Fedora 38 - Nonfree                                                       72 kB/s | 263 kB     00:03
RPM Fusion for Fedora 38 - Nonfree tainted                                              0.0  B/s |   0  B     01:02
Errors during downloading metadata for repository 'rpmfusion-nonfree-tainted':
  - Curl error (28): Timeout was reached for http://mirror.epn.edu.ec/rpmfusion/nonfree/fedora/tainted/38/x86_64/repodata/repomd.xml [Failed to connect to mirror.epn.edu.ec port 80 after 30000 ms: Timeout was reached]
  - Status code: 404 for https://mirror.karneval.cz/pub/linux/rpmfusion/nonfree/fedora/tainted/38/x86_64/repodata/repomd.xml (IP: 89.102.0.150)
  - Curl error (28): Timeout was reached for http://mirror.epn.edu.ec/rpmfusion/nonfree/fedora/tainted/38/x86_64/repodata/repomd.xml [Connection timeout after 30000 ms]
Error: Failed to download metadata for repo 'rpmfusion-nonfree-tainted': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
RPM Fusion for Fedora 38 - Nonfree - Updates                                            0.0  B/s |   0  B     02:00
Errors during downloading metadata for repository 'rpmfusion-nonfree-updates':
  - Curl error (28): Timeout was reached for http://mirror.epn.edu.ec/rpmfusion/nonfree/fedora/updates/38/x86_64/repodata/repomd.xml [Failed to connect to mirror.epn.edu.ec port 80 after 30000 ms: Timeout was reached]
Error: Failed to download metadata for repo 'rpmfusion-nonfree-updates': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
Tailscale stable                                                                        1.0 kB/s | 832  B     00:00
Ignoring repositories: copr:copr.fedorainfracloud.org:phracek:PyCharm, rpmfusion-nonfree-tainted, rpmfusion-nonfree-updates
Dependencies resolved.
Nothing to do.
Complete!
```

Hmm, some errors again. What is this rpmfusion-nonfree-tainted? Also the pycharm thing?
Don't worry about it, were going to take care of it now by disabling those repos.

`sudo dnf config-manager --set-disabled rpmfusion-nonfree-tainted`

`sudo dnf config-manager --set-disabled copr:copr.fedorainfracloud.org:phracek:PyCharm`

`sudo dnf config-manager --set-disabled rpmfusion-nonfree-updates`

Now we get this:

```
[root@server]# dnf --refresh upgrade
Fedora 38 - x86_64                                                                       14 kB/s | 6.0 kB     00:00
Fedora 38 openh264 (From Cisco) - x86_64                                                1.9 kB/s | 989  B     00:00
Fedora Modular 38 - x86_64                                                               15 kB/s | 5.9 kB     00:00
Fedora 38 - x86_64 - Updates                                                             17 kB/s | 5.9 kB     00:00
Fedora Modular 38 - x86_64 - Updates                                                     10 kB/s | 5.8 kB     00:00
RPM Fusion for Fedora 38 - Free                                                         3.8 kB/s | 2.6 kB     00:00
RPM Fusion for Fedora 38 - Free tainted                                                 6.0 kB/s | 2.4 kB     00:00
RPM Fusion for Fedora 38 - Free - Updates                                               6.2 kB/s | 2.4 kB     00:00
RPM Fusion for Fedora 38 - Nonfree                                                      1.8 kB/s | 1.2 kB     00:00
Tailscale stable                                                                        1.1 kB/s | 832  B     00:00
Dependencies resolved.
Nothing to do.
Complete!
```

And now we move on to the next version, good to see you 38 but we're ready for 39.

`sudo dnf system-upgrade download --releasever=39` and we are off to the races. 

## 39 to 40 and 40 to 41

Instead of showing the repitition of this process we can just say it's update, download new version, install new version, rinse and repeat.
After removing the repositories that were giving the warnings before we had zero issue with the system upgrades.

Yes going through each version is tedious and I could have probably skipped a few versions without issue.
It is a safe way to perform the upgrade though since it is tested going from one version to the directly newer one.

I will add that it is useful to add the `--allowerasing` flag to the updates every once in a while as it will remove unneeded dependencies and clear up space used by downloaded packages that are already installed.

## Conclusion

As stated, the process is simple if you have performed any package management in Fedora. 

1. Make sure your system is up to date with `sudo dnf --refresh upgrade`
2. Use the dnf plugin to download the next version of fedora and get it ready for install with `sudo dnf system-upgrade download --releasever={version_you_want}`
3. Install the new version with `sudo dnf system-upgrade reboot`

It's that simple. 

The reason I didn't include installing the system-upgrade pluging for dnf is that it is a one and done type of deal. 
Once you install it you have it into your future versions.
It is also included in DNF5 so you won't need to install it in the future. 
If however you have one of those old copies of fedora and you need to install it just try `sudo dnf install dnf-plugin-system-upgrade
`

I don't want to understate how long of a process this is. Doing version upgrades will take time and require rebooting. 
This took me nearly all day, although I would often walk away and do another upgrade when I remembered. 

I did this completely through SSH which made it hard to tell when the server was back up and ready to reconnect. 
If you are doing this on the desktop version of Fedora, aka Fedora Workstationm, then you can easily use the GUI to perform the system update. 
I, however, prefer the feel, speed, and responsiveness of doing this through the terminal.
You get more information about what is going on and you have more control over the entire process.
