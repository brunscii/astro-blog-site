---
title: "Universal Media Server"
description: "Can Universal Media Server do what Jellyfin can't?"
author: "Chris Carlin"
pubDate: "02/14/2025"
draft: false
---

Warning -- This is still a work in progress

## Intro
With the rise and fall of streaming services and the withdrawel of several shows and movies that once justified their existence, it becomes increasingly hard to justify the cost. I found myself several times over watching something on a streaming service instead of just standing up and finding the DVD or BLURAY that I own. But when the benefits of convienience is taken away what are we left with? A costly bill of services unused, sometimes for months on end.

I used to run XBMC and later KODI on my media PC and I even had it connected to my file server at one time. Over the years however, I have fellen prey to the smart-tv/streaming service trap. Netflix, Hulu, HBO max, Amazon, and Disney+ were all active on my TV. Having seen that I only watch a few services, and mostly for shows and movies I already own, I decided it was time to downsize. My roommate got the ad-tier of Netflix after I cancelled for their korean dramas and as it turned out we both had Hulu as they had a Disney+ subscription. I cancelled the HBO/Hulu subscription as I only really used it for The Last of Us and old movies. Also Hulu originals went down hill after they were acquired by the big D. Using my many shelves and boxes of Vinyls's, CD's, DVDs, Blu-rays, and even old VHSs it was time to use the backup's I had once made and work on the new material I gained during the lazy times of the golden age of streaming. For legal reasons I won't advocate for piracy eventhough many streamers, including LTT, may say they use it to aqcuire their "digital backups" of the media they own. I don't want to debate that and will just say this is for your media files. I will also not go into detail on how to rip or backup media here as this is more about the streaming of personal files and not of their aqcuisition. I have spent many a black friday buying whole series of TV shows and collecting movies on sale.

## File server

Like many nerds, I have a file server for my backups and to store copies of my pictures, movies, and tv shows. I even keep copies of my ebooks and games so I hopefully don't lose anything. Shoot, I even have copies of my old college work from my CS classes.

The server is an old 8 core processor that can keep up with a few VMs and a server version of Fedora.
The GPU in the server is a 980ti Hybrid. A water cooled beast of a graphics card when it was new. Now unfortunately it's 5 generations too old to be useful. It sucks at x265 and x264 transcoding, it doesn't support AV1 or HEVC transcode, and it suffers from a bad case of NVIDIA drivers being garbage on linux. Thanks Jensen Huang. <br>
Even the most basic of Intel CPUs can do these things nowadays but, who has money for upgrades in times like these?
The first upgrade I need is more large drives to fill out some zpools. A topic for another time...

I can easily install a media server in either docker or directly on the system since I am t he only one using it.
The question is which one?

I know I want the following things:
- UPnP support - so my smart TV picks it up with no fuss
- A web interface - so I can watch from other computers
- Basic transcoding abilities - not all formats play on all devices
- For it to recognize basic metadata - even if I have to add it in a separate file

With the rise of people complaining about plex and the point being to freely watch my own content, I also what it to be free and open source if possible.

## Jellyfin?

Having seen the power of jellyfin a few years back I decided to run it on my fileserver. It worked pretty well when I tried it on windows and it did a fair job of figuring out what my media was. The problem? My file server runs linux and, while I have heard of people having good luck running Jellyfin on linux, I have not. I only have bout 7 TB in my desktop and, while that sounds like a enough to serve some media, most of my space is taken up by steam games and projects.
This is why it is crucial to run it on my server.

## Jellyfin is great, until it isn't

Anyways, long story long, I have problems running Jellyfin on my file server. Jellyfin recognizes the folder and will show the files when I'm in the folder mode, but it refuses to find metadata and recognize the media enough to sort it into the appropriate library. I ruled out permissions issues and configuration issues through days of troubleshooting. I even went as far as to use TinyMediaManager to rename and manually find metadata for serveral of the files. You would think with the shows and movies being recognized my TinyMediaManager, the files/folders being renamed, and the metadata being saved, that Jellyfin would quickly recognize the media right?

Apparantly not.

It will sometimes recognize the media as it will show episodes of TV shows in the "suggested" or "newly added" sections but it doesn't show in the actual "shows" section. Sometimes I can get Jellyfin to find and recognize shows just to not play anything claiming there was no playable media found. Thinking this could be transcode issues I made sure the files would play fine through a vlc stream. 

That being, said I also know my TV can directly play some of these files from flash drives.
Why can't Jellyfin just serve up these files directly without transcode issues or recognition issues?

After days of changing permissions, renaming files, making nfo files for the metadata using tinyMediaManager, and even completely removing the program and reinstalling I still had the same issues. The documentation always shows how to do things on debian. Is the problem that I am using Fedora?

I asked my brother if he had issues with jellyfin since I knew he was a linux mint user. He said he also had similar issues with the program.

- Would these problems persist with the docker version? Yes
- Is the problem that I am using Fedora Server? Maybe
- Is is the NVIDIA drivers? Maybe
- Is it the crappy old hardware? Maybe
- Was it the file permissions? No
- Was it the configurations? No
- Was it the TV? No

## What to do

Honestly my first instinct was to delve into the Jellyfin code and try to figure out what my issue was. Having already spent days sifting through reddit and github issues, I knew this would take longer than I wanted and would do nothing for my immediate problems. I wanted to add a feature to make Jellyfin go into a low hardware state and act as a file server if it can't transcode the files. Something like a safe-mode.  
Not knowing if that was the actual issue and not having months to go over the code and do this, I decided to find a more simpe fix. 

To use something else entirely after wasting days of my life troubleshooting. Sometimes I get tunnel-vision when troubleshooting and care more about the endorphine rush of solving the problem than finding the quickest or best solution. This didn't have to be a months long project to get everything perfect and I could still watch from my other computers using SMB. I just wanted to check off the rest of my boxes and get a media server running on old hardware.

I remembered using PS3mediaServer as precursor to `Universal Media Server` back in the day.
I figured it was time to revisit this avenue and see how UMS had progressed. 

## Enter Universal Media Server

> Universal Media Server (UMS) is a DLNA compliant UPnP Media Server. Originally written to support the PlayStation 3, it has been expanded to support a range of other media renderers, including Xbox 360 and various televisions and media centers. Written in Java, it streams or transcodes many different media formats with minimum configuration from many platforms. It is supported by the MPlayer and FFmpeg packages.


Let's see if it runs better now on Fedora Linux than it did on Windows 7 when I had last used it.

I had a small issue with running on a server vs running on a desktop OS, the lack of a GUI. Luckily there is kind of a headless mode for this software and a web interface. I mean it wouldn't really be a server software without headless mode, right?

The problem lies witht the headless mode not allowing me to access it from another computer. I needed to set the software up but had no DE (desktop environment) in order to pull it up in a browser on the same machine. This was a firewall issue as I state later on but it can happen to anyone.

I SSHd into the server and explored all of the config files in order to get started and found this to be a fun experience to set up. Doing it the hard way allowed me to get a better insight as to how this configuration works and how I could have done this much more easily if I had just RTFM'ed. Of course, the easiest way would have been to run a desktop environment and then just configured everything from the UI. But where is the fun in that?

### Installation on a server

I started with downloading the tarball file from UMS with wget. 
`wget https://github.com/UniversalMediaServer/UniversalMediaServer/releases/download/14.9.0/UMS-Linux-14.9.0-x86_64.tgz` 

After the download I extracted and looked over the files. What's that tarball extraction command again? `tar -xvzf UMS-Linux-14.9.0-x86_64.tgz` works pretty well.
We get something like this:
``` bash extraction
user@server:~$ tar -xvzf UMS-Linux-14.9.0-x86_64.tgz
ums-14.9.0/ums.jar
ums-14.9.0/linux/ffmpeg
ums-14.9.0/linux/tsMuxeR
ums-14.9.0/UMS.sh
ums-14.9.0/linux/youtube-dl
ums-14.9.0/jre17/
ums-14.9.0/jre17/bin/
ums-14.9.0/jre17/conf/
ums-14.9.0/jre17/conf/management/
ums-14.9.0/jre17/conf/sdp/
ums-14.9.0/jre17/conf/security/
ums-14.9.0/jre17/conf/security/policy/
ums-14.9.0/jre17/conf/security/policy/limited/
ums-14.9.0/jre17/conf/security/policy/unlimited/
ums-14.9.0/jre17/legal/
ums-14.9.0/jre17/legal/java.base/
ums-14.9.0/jre17/legal/java.compiler/
ums-14.9.0/jre17/legal/java.datatransfer/
ums-14.9.0/jre17/legal/java.desktop/
ums-14.9.0/jre17/legal/java.instrument/
ums-14.9.0/jre17/legal/java.logging/
ums-14.9.0/jre17/legal/java.management/
ums-14.9.0/jre17/legal/java.management.rmi/
ums-14.9.0/jre17/legal/java.naming/
ums-14.9.0/jre17/legal/java.net.http/
ums-14.9.0/jre17/legal/java.prefs/
ums-14.9.0/jre17/legal/java.rmi/
ums-14.9.0/jre17/legal/java.scripting/
ums-14.9.0/jre17/legal/java.se/
ums-14.9.0/jre17/legal/java.security.jgss/
ums-14.9.0/jre17/legal/java.security.sasl/
ums-14.9.0/jre17/legal/java.smartcardio/
ums-14.9.0/jre17/legal/java.sql/
ums-14.9.0/jre17/legal/java.sql.rowset/
ums-14.9.0/jre17/legal/java.transaction.xa/
ums-14.9.0/jre17/legal/java.xml/
ums-14.9.0/jre17/legal/java.xml.crypto/
ums-14.9.0/jre17/legal/jdk.accessibility/
ums-14.9.0/jre17/legal/jdk.charsets/
ums-14.9.0/jre17/legal/jdk.crypto.cryptoki/
ums-14.9.0/jre17/legal/jdk.crypto.ec/
ums-14.9.0/jre17/legal/jdk.dynalink/
ums-14.9.0/jre17/legal/jdk.httpserver/
ums-14.9.0/jre17/legal/jdk.incubator.foreign/
ums-14.9.0/jre17/legal/jdk.incubator.vector/
ums-14.9.0/jre17/legal/jdk.internal.vm.ci/
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler/
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler.management/
ums-14.9.0/jre17/legal/jdk.jdwp.agent/
ums-14.9.0/jre17/legal/jdk.jfr/
ums-14.9.0/jre17/legal/jdk.jsobject/
ums-14.9.0/jre17/legal/jdk.localedata/
ums-14.9.0/jre17/legal/jdk.management/
ums-14.9.0/jre17/legal/jdk.management.agent/
ums-14.9.0/jre17/legal/jdk.management.jfr/
ums-14.9.0/jre17/legal/jdk.naming.dns/
ums-14.9.0/jre17/legal/jdk.naming.rmi/
ums-14.9.0/jre17/legal/jdk.net/
ums-14.9.0/jre17/legal/jdk.nio.mapmode/
ums-14.9.0/jre17/legal/jdk.sctp/
ums-14.9.0/jre17/legal/jdk.security.auth/
ums-14.9.0/jre17/legal/jdk.security.jgss/
ums-14.9.0/jre17/legal/jdk.unsupported/
ums-14.9.0/jre17/legal/jdk.xml.dom/
ums-14.9.0/jre17/legal/jdk.zipfs/
ums-14.9.0/jre17/lib/
ums-14.9.0/jre17/lib/client/
ums-14.9.0/jre17/lib/jfr/
ums-14.9.0/jre17/lib/security/
ums-14.9.0/jre17/lib/server/
ums-14.9.0/jre17/bin/java
ums-14.9.0/jre17/bin/jfr
ums-14.9.0/jre17/bin/jrunscript
ums-14.9.0/jre17/bin/keytool
ums-14.9.0/jre17/bin/rmiregistry
ums-14.9.0/jre17/conf/logging.properties
ums-14.9.0/jre17/conf/management/jmxremote.access
ums-14.9.0/jre17/conf/management/jmxremote.password.template
ums-14.9.0/jre17/conf/management/management.properties
ums-14.9.0/jre17/conf/net.properties
ums-14.9.0/jre17/conf/sdp/sdp.conf.template
ums-14.9.0/jre17/conf/security/java.policy
ums-14.9.0/jre17/conf/security/java.security
ums-14.9.0/jre17/conf/security/policy/limited/default_local.policy
ums-14.9.0/jre17/conf/security/policy/limited/default_US_export.policy
ums-14.9.0/jre17/conf/security/policy/limited/exempt_local.policy
ums-14.9.0/jre17/conf/security/policy/README.txt
ums-14.9.0/jre17/conf/security/policy/unlimited/default_local.policy
ums-14.9.0/jre17/conf/security/policy/unlimited/default_US_export.policy
ums-14.9.0/jre17/conf/sound.properties
ums-14.9.0/jre17/legal/java.base/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.base/aes.md
ums-14.9.0/jre17/legal/java.base/asm.md
ums-14.9.0/jre17/legal/java.base/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.base/c-libutl.md
ums-14.9.0/jre17/legal/java.base/cldr.md
ums-14.9.0/jre17/legal/java.base/icu.md
ums-14.9.0/jre17/legal/java.base/LICENSE
ums-14.9.0/jre17/legal/java.base/public_suffix.md
ums-14.9.0/jre17/legal/java.base/siphash.md
ums-14.9.0/jre17/legal/java.base/unicode.md
ums-14.9.0/jre17/legal/java.compiler/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.compiler/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.compiler/LICENSE
ums-14.9.0/jre17/legal/java.datatransfer/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.datatransfer/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.datatransfer/LICENSE
ums-14.9.0/jre17/legal/java.desktop/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.desktop/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.desktop/colorimaging.md
ums-14.9.0/jre17/legal/java.desktop/freetype.md
ums-14.9.0/jre17/legal/java.desktop/giflib.md
ums-14.9.0/jre17/legal/java.desktop/harfbuzz.md
ums-14.9.0/jre17/legal/java.desktop/jpeg.md
ums-14.9.0/jre17/legal/java.desktop/lcms.md
ums-14.9.0/jre17/legal/java.desktop/libpng.md
ums-14.9.0/jre17/legal/java.desktop/LICENSE
ums-14.9.0/jre17/legal/java.desktop/mesa3d.md
ums-14.9.0/jre17/legal/java.desktop/pipewire.md
ums-14.9.0/jre17/legal/java.desktop/xwd.md
ums-14.9.0/jre17/legal/java.instrument/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.instrument/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.instrument/LICENSE
ums-14.9.0/jre17/legal/java.logging/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.logging/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.logging/LICENSE
ums-14.9.0/jre17/legal/java.management/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.management/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.management/LICENSE
ums-14.9.0/jre17/legal/java.management.rmi/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.management.rmi/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.management.rmi/LICENSE
ums-14.9.0/jre17/legal/java.naming/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.naming/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.naming/LICENSE
ums-14.9.0/jre17/legal/java.net.http/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.net.http/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.net.http/LICENSE
ums-14.9.0/jre17/legal/java.prefs/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.prefs/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.prefs/LICENSE
ums-14.9.0/jre17/legal/java.rmi/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.rmi/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.rmi/LICENSE
ums-14.9.0/jre17/legal/java.scripting/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.scripting/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.scripting/LICENSE
ums-14.9.0/jre17/legal/java.se/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.se/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.se/LICENSE
ums-14.9.0/jre17/legal/java.security.jgss/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.security.jgss/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.security.jgss/LICENSE
ums-14.9.0/jre17/legal/java.security.sasl/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.security.sasl/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.security.sasl/LICENSE
ums-14.9.0/jre17/legal/java.smartcardio/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.smartcardio/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.smartcardio/LICENSE
ums-14.9.0/jre17/legal/java.smartcardio/pcsclite.md
ums-14.9.0/jre17/legal/java.sql/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.sql/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.sql/LICENSE
ums-14.9.0/jre17/legal/java.sql.rowset/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.sql.rowset/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.sql.rowset/LICENSE
ums-14.9.0/jre17/legal/java.transaction.xa/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.transaction.xa/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.transaction.xa/LICENSE
ums-14.9.0/jre17/legal/java.xml/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.xml/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.xml/bcel.md
ums-14.9.0/jre17/legal/java.xml/dom.md
ums-14.9.0/jre17/legal/java.xml/jcup.md
ums-14.9.0/jre17/legal/java.xml/LICENSE
ums-14.9.0/jre17/legal/java.xml/xalan.md
ums-14.9.0/jre17/legal/java.xml/xerces.md
ums-14.9.0/jre17/legal/java.xml.crypto/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/java.xml.crypto/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/java.xml.crypto/LICENSE
ums-14.9.0/jre17/legal/java.xml.crypto/santuario.md
ums-14.9.0/jre17/legal/jdk.accessibility/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.accessibility/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.accessibility/LICENSE
ums-14.9.0/jre17/legal/jdk.charsets/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.charsets/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.charsets/LICENSE
ums-14.9.0/jre17/legal/jdk.crypto.cryptoki/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.crypto.cryptoki/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.crypto.cryptoki/LICENSE
ums-14.9.0/jre17/legal/jdk.crypto.cryptoki/pkcs11cryptotoken.md
ums-14.9.0/jre17/legal/jdk.crypto.cryptoki/pkcs11wrapper.md
ums-14.9.0/jre17/legal/jdk.crypto.ec/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.crypto.ec/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.crypto.ec/LICENSE
ums-14.9.0/jre17/legal/jdk.dynalink/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.dynalink/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.dynalink/dynalink.md
ums-14.9.0/jre17/legal/jdk.dynalink/LICENSE
ums-14.9.0/jre17/legal/jdk.httpserver/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.httpserver/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.httpserver/LICENSE
ums-14.9.0/jre17/legal/jdk.incubator.foreign/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.incubator.foreign/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.incubator.foreign/LICENSE
ums-14.9.0/jre17/legal/jdk.incubator.vector/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.incubator.vector/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.incubator.vector/LICENSE
ums-14.9.0/jre17/legal/jdk.internal.vm.ci/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.internal.vm.ci/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.internal.vm.ci/LICENSE
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler/LICENSE
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler.management/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler.management/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.internal.vm.compiler.management/LICENSE
ums-14.9.0/jre17/legal/jdk.jdwp.agent/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.jdwp.agent/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.jdwp.agent/LICENSE
ums-14.9.0/jre17/legal/jdk.jfr/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.jfr/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.jfr/LICENSE
ums-14.9.0/jre17/legal/jdk.jsobject/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.jsobject/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.jsobject/LICENSE
ums-14.9.0/jre17/legal/jdk.localedata/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.localedata/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.localedata/cldr.md
ums-14.9.0/jre17/legal/jdk.localedata/LICENSE
ums-14.9.0/jre17/legal/jdk.localedata/thaidict.md
ums-14.9.0/jre17/legal/jdk.management/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.management/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.management/LICENSE
ums-14.9.0/jre17/legal/jdk.management.agent/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.management.agent/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.management.agent/LICENSE
ums-14.9.0/jre17/legal/jdk.management.jfr/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.management.jfr/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.management.jfr/LICENSE
ums-14.9.0/jre17/legal/jdk.naming.dns/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.naming.dns/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.naming.dns/LICENSE
ums-14.9.0/jre17/legal/jdk.naming.rmi/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.naming.rmi/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.naming.rmi/LICENSE
ums-14.9.0/jre17/legal/jdk.net/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.net/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.net/LICENSE
ums-14.9.0/jre17/legal/jdk.nio.mapmode/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.nio.mapmode/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.nio.mapmode/LICENSE
ums-14.9.0/jre17/legal/jdk.sctp/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.sctp/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.sctp/LICENSE
ums-14.9.0/jre17/legal/jdk.security.auth/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.security.auth/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.security.auth/LICENSE
ums-14.9.0/jre17/legal/jdk.security.jgss/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.security.jgss/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.security.jgss/LICENSE
ums-14.9.0/jre17/legal/jdk.unsupported/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.unsupported/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.unsupported/LICENSE
ums-14.9.0/jre17/legal/jdk.xml.dom/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.xml.dom/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.xml.dom/LICENSE
ums-14.9.0/jre17/legal/jdk.zipfs/ADDITIONAL_LICENSE_INFO
ums-14.9.0/jre17/legal/jdk.zipfs/ASSEMBLY_EXCEPTION
ums-14.9.0/jre17/legal/jdk.zipfs/LICENSE
ums-14.9.0/jre17/lib/classlist
ums-14.9.0/jre17/lib/client/classes.jsa
ums-14.9.0/jre17/lib/client/classes_nocoops.jsa
ums-14.9.0/jre17/lib/client/libjsig.so
ums-14.9.0/jre17/lib/client/libjvm.so
ums-14.9.0/jre17/lib/jexec
ums-14.9.0/jre17/lib/jfr/default.jfc
ums-14.9.0/jre17/lib/jfr/profile.jfc
ums-14.9.0/jre17/lib/jrt-fs.jar
ums-14.9.0/jre17/lib/jspawnhelper
ums-14.9.0/jre17/lib/jvm.cfg
ums-14.9.0/jre17/lib/libawt.so
ums-14.9.0/jre17/lib/libawt_headless.so
ums-14.9.0/jre17/lib/libawt_xawt.so
ums-14.9.0/jre17/lib/libdt_socket.so
ums-14.9.0/jre17/lib/libextnet.so
ums-14.9.0/jre17/lib/libfontmanager.so
ums-14.9.0/jre17/lib/libfreetype.so
ums-14.9.0/jre17/lib/libinstrument.so
ums-14.9.0/jre17/lib/libj2gss.so
ums-14.9.0/jre17/lib/libj2pcsc.so
ums-14.9.0/jre17/lib/libj2pkcs11.so
ums-14.9.0/jre17/lib/libjaas.so
ums-14.9.0/jre17/lib/libjava.so
ums-14.9.0/jre17/lib/libjavajpeg.so
ums-14.9.0/jre17/lib/libjawt.so
ums-14.9.0/jre17/lib/libjdwp.so
ums-14.9.0/jre17/lib/libjimage.so
ums-14.9.0/jre17/lib/libjli.so
ums-14.9.0/jre17/lib/libjsig.so
ums-14.9.0/jre17/lib/libjsound.so
ums-14.9.0/jre17/lib/libjsvml.so
ums-14.9.0/jre17/lib/liblcms.so
ums-14.9.0/jre17/lib/libmanagement.so
ums-14.9.0/jre17/lib/libmanagement_agent.so
ums-14.9.0/jre17/lib/libmanagement_ext.so
ums-14.9.0/jre17/lib/libmlib_image.so
ums-14.9.0/jre17/lib/libnet.so
ums-14.9.0/jre17/lib/libnio.so
ums-14.9.0/jre17/lib/libprefs.so
ums-14.9.0/jre17/lib/librmi.so
ums-14.9.0/jre17/lib/libsctp.so
ums-14.9.0/jre17/lib/libsplashscreen.so
ums-14.9.0/jre17/lib/libsyslookup.so
ums-14.9.0/jre17/lib/libverify.so
ums-14.9.0/jre17/lib/libzip.so
ums-14.9.0/jre17/lib/modules
ums-14.9.0/jre17/lib/psfont.properties.ja
ums-14.9.0/jre17/lib/psfontj2d.properties
ums-14.9.0/jre17/lib/security/blocked.certs
ums-14.9.0/jre17/lib/security/cacerts
ums-14.9.0/jre17/lib/security/default.policy
ums-14.9.0/jre17/lib/security/public_suffix_list.dat
ums-14.9.0/jre17/lib/server/classes.jsa
ums-14.9.0/jre17/lib/server/classes_nocoops.jsa
ums-14.9.0/jre17/lib/server/libjsig.so
ums-14.9.0/jre17/lib/server/libjvm.so
ums-14.9.0/jre17/lib/tzdb.dat
ums-14.9.0/jre17/LICENSE
ums-14.9.0/jre17/readme.txt
ums-14.9.0/jre17/release
ums-14.9.0/BUILD.md
ums-14.9.0/CHANGELOG.md
ums-14.9.0/INSTALL.txt
ums-14.9.0/LICENSE.txt
ums-14.9.0/README.md
ums-14.9.0/DummyInput.ass
ums-14.9.0/logback.headless.xml
ums-14.9.0/logback.xml
ums-14.9.0/renderers/.gitignore
ums-14.9.0/renderers/Amazon-FireTVStick-VimuPlayer.conf
ums-14.9.0/renderers/AnyCast.conf
ums-14.9.0/renderers/Apple-iDevice-AirPlayer.conf
ums-14.9.0/renderers/Apple-iDevice-VLC.conf
ums-14.9.0/renderers/Apple-iDevice-VLC32bit.conf
ums-14.9.0/renderers/Apple-iDevice.conf
ums-14.9.0/renderers/Apple-TV-4K-VLC.conf
ums-14.9.0/renderers/Apple-TV-VLC.conf
ums-14.9.0/renderers/Bigscreen.conf
ums-14.9.0/renderers/BlackBerry-PlayBook-KalemSoftMP.conf
ums-14.9.0/renderers/Bush-FreeviewHighDefinitionDigitalSetTopBox.conf
ums-14.9.0/renderers/Caliber-HPG336DAB.conf
ums-14.9.0/renderers/CambridgeAudio-AzurBD.conf
ums-14.9.0/renderers/DefaultRenderer.conf
ums-14.9.0/renderers/Denon-4311CI.conf
ums-14.9.0/renderers/Denon-X4200W.conf
ums-14.9.0/renderers/DirecTV.conf
ums-14.9.0/renderers/DLink-DSM510.conf
ums-14.9.0/renderers/FetchTV.conf
ums-14.9.0/renderers/foobar2000-mobile.conf
ums-14.9.0/renderers/Free-Freebox.conf
ums-14.9.0/renderers/Freecom-MusicPal.conf
ums-14.9.0/renderers/Google-Android-BubbleUPnP-MXPlayer.conf
ums-14.9.0/renderers/Google-Android-Chromecast.conf
ums-14.9.0/renderers/Google-Android.conf
ums-14.9.0/renderers/Google-ChromecastUltra.conf
ums-14.9.0/renderers/Hama-IR320.conf
ums-14.9.0/renderers/Hisense-K680.conf
ums-14.9.0/renderers/Kodi.conf
ums-14.9.0/renderers/LG-BDP.conf
ums-14.9.0/renderers/LG-BP.conf
ums-14.9.0/renderers/LG-BP550.conf
ums-14.9.0/renderers/LG-EG910V.conf
ums-14.9.0/renderers/LG-L-2022+.conf
ums-14.9.0/renderers/LG-L.conf
ums-14.9.0/renderers/LG-LA6200.conf
ums-14.9.0/renderers/LG-LA644V.conf
ums-14.9.0/renderers/LG-LB.conf
ums-14.9.0/renderers/LG-LM620.conf
ums-14.9.0/renderers/LG-LM660.conf
ums-14.9.0/renderers/LG-LS5700.conf
ums-14.9.0/renderers/LG-NANO.conf
ums-14.9.0/renderers/LG-OLED-2020+.conf
ums-14.9.0/renderers/LG-OLED.conf
ums-14.9.0/renderers/LG-ST600.conf
ums-14.9.0/renderers/LG-TV-2023+.conf
ums-14.9.0/renderers/LG-UB820V.conf
ums-14.9.0/renderers/LG-UH770.conf
ums-14.9.0/renderers/LG-WebOS.conf
ums-14.9.0/renderers/Linn_CP.conf
ums-14.9.0/renderers/Logitech-Squeezebox.conf
ums-14.9.0/renderers/Lumin-u1mini.conf
ums-14.9.0/renderers/Lumin.conf
ums-14.9.0/renderers/Mediaplayer.conf
ums-14.9.0/renderers/Microsoft-WindowsMediaPlayer.conf
ums-14.9.0/renderers/Microsoft-Xbox360.conf
ums-14.9.0/renderers/Microsoft-XboxOne.conf
ums-14.9.0/renderers/Miracast-M806.conf
ums-14.9.0/renderers/Mirascreen.conf
ums-14.9.0/renderers/Movian.conf
ums-14.9.0/renderers/Naim-Mu-So-Qb.conf
ums-14.9.0/renderers/Naim-Mu-So.conf
ums-14.9.0/renderers/Netgear-NeoTV.conf
ums-14.9.0/renderers/Netgem-N7700.conf
ums-14.9.0/renderers/Nextcp2.conf
ums-14.9.0/renderers/Nokia-N900.conf
ums-14.9.0/renderers/Onkyo-TXNR7xx.conf
ums-14.9.0/renderers/Onkyo-TXNR8xx.conf
ums-14.9.0/renderers/OPPO-BDP.conf
ums-14.9.0/renderers/OPPO-BDP83.conf
ums-14.9.0/renderers/Panasonic-DMPBDT.conf
ums-14.9.0/renderers/Panasonic-DMPBDT220.conf
ums-14.9.0/renderers/Panasonic-DMPBDT360.conf
ums-14.9.0/renderers/Panasonic-DMR.conf
ums-14.9.0/renderers/Panasonic-HZ1500.conf
ums-14.9.0/renderers/Panasonic-SCBTT.conf
ums-14.9.0/renderers/Panasonic-Viera.conf
ums-14.9.0/renderers/Panasonic-VieraAS600E.conf
ums-14.9.0/renderers/Panasonic-VieraAS650.conf
ums-14.9.0/renderers/Panasonic-VieraCX680.conf
ums-14.9.0/renderers/Panasonic-VieraCX700.conf
ums-14.9.0/renderers/Panasonic-VieraDX.conf
ums-14.9.0/renderers/Panasonic-VieraE6.conf
ums-14.9.0/renderers/Panasonic-VieraET60.conf
ums-14.9.0/renderers/Panasonic-VieraGT50.conf
ums-14.9.0/renderers/Panasonic-VieraGX800B.conf
ums-14.9.0/renderers/Panasonic-VieraS60.conf
ums-14.9.0/renderers/Panasonic-VieraST60.conf
ums-14.9.0/renderers/Panasonic-VieraTHPU30Z.conf
ums-14.9.0/renderers/Panasonic-VieraTXL32V10E.conf
ums-14.9.0/renderers/Panasonic-VieraVT60.conf
ums-14.9.0/renderers/Philips-AndroidTV.conf
ums-14.9.0/renderers/Philips-AureaAndNetTV.conf
ums-14.9.0/renderers/Philips-PFL.conf
ums-14.9.0/renderers/Philips-PUS-6500Series.conf
ums-14.9.0/renderers/Philips-PUS.conf
ums-14.9.0/renderers/Philips-Streamium.conf
ums-14.9.0/renderers/Pigasus.conf
ums-14.9.0/renderers/Pioneer-BDP.conf
ums-14.9.0/renderers/Pioneer-Kuro.conf
ums-14.9.0/renderers/PopcornHour.conf
ums-14.9.0/renderers/README.txt
ums-14.9.0/renderers/Realtek.conf
ums-14.9.0/renderers/Roku-4640x.conf
ums-14.9.0/renderers/Roku-DVP10.conf
ums-14.9.0/renderers/Roku-Roku3-3.conf
ums-14.9.0/renderers/Roku-Roku3-5.conf
ums-14.9.0/renderers/Roku-Roku3-6-7.conf
ums-14.9.0/renderers/Roku-TV-4K.conf
ums-14.9.0/renderers/Roku-TV.conf
ums-14.9.0/renderers/Roku-TV8.conf
ums-14.9.0/renderers/Roku-Ultra.conf
ums-14.9.0/renderers/Samsung-5300series.conf
ums-14.9.0/renderers/Samsung-8series.conf
ums-14.9.0/renderers/Samsung-9series.conf
ums-14.9.0/renderers/Samsung-BDC6800.conf
ums-14.9.0/renderers/Samsung-BDH6500.conf
ums-14.9.0/renderers/Samsung-C6600.conf
ums-14.9.0/renderers/Samsung-CD.conf
ums-14.9.0/renderers/Samsung-D6400.conf
ums-14.9.0/renderers/Samsung-D7000.conf
ums-14.9.0/renderers/Samsung-EH5300.conf
ums-14.9.0/renderers/Samsung-EH6070.conf
ums-14.9.0/renderers/Samsung-ES6100.conf
ums-14.9.0/renderers/Samsung-ES6575.conf
ums-14.9.0/renderers/Samsung-ES8000.conf
ums-14.9.0/renderers/Samsung-ES8005.conf
ums-14.9.0/renderers/Samsung-F5100.conf
ums-14.9.0/renderers/Samsung-F5505.conf
ums-14.9.0/renderers/Samsung-F5900.conf
ums-14.9.0/renderers/Samsung-GalaxyNoteTab.conf
ums-14.9.0/renderers/Samsung-GalaxyS5.conf
ums-14.9.0/renderers/Samsung-GalaxyS7.conf
ums-14.9.0/renderers/Samsung-H4500.conf
ums-14.9.0/renderers/Samsung-H6203.conf
ums-14.9.0/renderers/Samsung-H6400.conf
ums-14.9.0/renderers/Samsung-HTE3.conf
ums-14.9.0/renderers/Samsung-HTF4.conf
ums-14.9.0/renderers/Samsung-HU7000.conf
ums-14.9.0/renderers/Samsung-HU9000.conf
ums-14.9.0/renderers/Samsung-J55xx.conf
ums-14.9.0/renderers/Samsung-J6200.conf
ums-14.9.0/renderers/Samsung-JU6400.conf
ums-14.9.0/renderers/Samsung-Mobile.conf
ums-14.9.0/renderers/Samsung-NotCD.conf
ums-14.9.0/renderers/Samsung-OLED.conf
ums-14.9.0/renderers/Samsung-PL51E490.conf
ums-14.9.0/renderers/Samsung-Q6.conf
ums-14.9.0/renderers/Samsung-Q70.conf
ums-14.9.0/renderers/Samsung-Q9.conf
ums-14.9.0/renderers/Samsung-SMTG7400.conf
ums-14.9.0/renderers/Samsung-Soundbar-MS750.conf
ums-14.9.0/renderers/Samsung-Soundbar.conf
ums-14.9.0/renderers/Samsung-The-Frame.conf
ums-14.9.0/renderers/Samsung-TV-2021-0.conf
ums-14.9.0/renderers/Samsung-TV-2021-1.conf
ums-14.9.0/renderers/Samsung-TV-2021-2.conf
ums-14.9.0/renderers/Samsung-TV-2021-3.conf
ums-14.9.0/renderers/Samsung-TV-2021-4.conf
ums-14.9.0/renderers/Samsung-UHD-2019-8K.conf
ums-14.9.0/renderers/Samsung-UHD-2019.conf
ums-14.9.0/renderers/Samsung-UHD.conf
ums-14.9.0/renderers/Samsung-WiseLink.conf
ums-14.9.0/renderers/Sharp-Aquos.conf
ums-14.9.0/renderers/Showtime3.conf
ums-14.9.0/renderers/Showtime4.conf
ums-14.9.0/renderers/SkyBoxVRPlayer.conf
ums-14.9.0/renderers/Sony-Bluray-BDP-S3700.conf
ums-14.9.0/renderers/Sony-Bluray-UBP-X800M2.conf
ums-14.9.0/renderers/Sony-Bluray.conf
ums-14.9.0/renderers/Sony-Bluray2013.conf
ums-14.9.0/renderers/Sony-Bravia.conf
ums-14.9.0/renderers/Sony-Bravia4500.conf
ums-14.9.0/renderers/Sony-Bravia5500.conf
ums-14.9.0/renderers/Sony-BraviaAG.conf
ums-14.9.0/renderers/Sony-BraviaBX305.conf
ums-14.9.0/renderers/Sony-BraviaEX.conf
ums-14.9.0/renderers/Sony-BraviaEX620.conf
ums-14.9.0/renderers/Sony-BraviaEX725.conf
ums-14.9.0/renderers/Sony-BraviaHX.conf
ums-14.9.0/renderers/Sony-BraviaHX75.conf
ums-14.9.0/renderers/Sony-BraviaNX70x.conf
ums-14.9.0/renderers/Sony-BraviaNX800.conf
ums-14.9.0/renderers/Sony-BraviaW.conf
ums-14.9.0/renderers/Sony-BraviaX.conf
ums-14.9.0/renderers/Sony-BraviaXBR-OLED.conf
ums-14.9.0/renderers/Sony-BraviaXBR.conf
ums-14.9.0/renderers/Sony-BraviaXD.conf
ums-14.9.0/renderers/Sony-BraviaXH.conf
ums-14.9.0/renderers/Sony-BraviaXR.conf
ums-14.9.0/renderers/Sony-HomeTheatreSystem.conf
ums-14.9.0/renderers/Sony-NetworkSpeaker.conf
ums-14.9.0/renderers/Sony-PlayStation3.conf
ums-14.9.0/renderers/Sony-PlayStation4.conf
ums-14.9.0/renderers/Sony-PlayStationVita.conf
ums-14.9.0/renderers/Sony-SMPN100.conf
ums-14.9.0/renderers/Sony-STR-DN1080.conf
ums-14.9.0/renderers/Sony-STR5800ES.conf
ums-14.9.0/renderers/Sony-X-Series-TV.conf
ums-14.9.0/renderers/Sony-Xperia.conf
ums-14.9.0/renderers/Sony-XperiaZ3.conf
ums-14.9.0/renderers/Technisat-S1Plus.conf
ums-14.9.0/renderers/Telefunken-TV.conf
ums-14.9.0/renderers/Telstra-Tbox.conf
ums-14.9.0/renderers/Thomson-U3.conf
ums-14.9.0/renderers/VideoWeb-VideoWebTV.conf
ums-14.9.0/renderers/Vizio-SmartTV.conf
ums-14.9.0/renderers/VLC-for-desktop.conf
ums-14.9.0/renderers/WesternDigital-WDTVLive.conf
ums-14.9.0/renderers/XBMC.conf
ums-14.9.0/renderers/Yamaha-AV.conf
ums-14.9.0/renderers/Yamaha-RN303.conf
ums-14.9.0/renderers/Yamaha-RN500.conf
ums-14.9.0/renderers/Yamaha-RXA1010.conf
ums-14.9.0/renderers/Yamaha-RXA2050.conf
ums-14.9.0/renderers/Yamaha-RXV3900.conf
ums-14.9.0/renderers/Yamaha-RXV500D.conf
ums-14.9.0/renderers/Yamaha-RXV671.conf
ums-14.9.0/UMS.conf
ums-14.9.0/documentation/
ums-14.9.0/documentation/css/
ums-14.9.0/documentation/images/
ums-14.9.0/web/
ums-14.9.0/web/react-app/
ums-14.9.0/web/react-app/static/
ums-14.9.0/web/react-app/static/css/
ums-14.9.0/web/react-app/static/js/
ums-14.9.0/web/react-client/
ums-14.9.0/web/react-client/static/
ums-14.9.0/documentation/applications.html
ums-14.9.0/documentation/avisynth.html
ums-14.9.0/documentation/commandline.html
ums-14.9.0/documentation/coreavc.html
ums-14.9.0/documentation/css/style.css
ums-14.9.0/documentation/general_configuration.html
ums-14.9.0/documentation/help.html
ums-14.9.0/documentation/images/autonegotiation.jpg
ums-14.9.0/documentation/images/btn_donateCC_LG.gif
ums-14.9.0/documentation/images/coreavc1.jpg
ums-14.9.0/documentation/images/coreavc2.jpg
ums-14.9.0/documentation/images/coreavc3.jpg
ums-14.9.0/documentation/images/netzwerkverbindungen.jpg
ums-14.9.0/documentation/images/pms-eng-general.jpg
ums-14.9.0/documentation/images/pms-eng-general1.jpg
ums-14.9.0/documentation/images/pms-eng-status1.jpg
ums-14.9.0/documentation/images/pms-eng-status2.jpg
ums-14.9.0/documentation/images/pms-engines1.jpg
ums-14.9.0/documentation/images/pms-engines2.jpg
ums-14.9.0/documentation/images/pms-searching.jpg
ums-14.9.0/documentation/images/ps3-browsing.jpg
ums-14.9.0/documentation/images/ps3-server.jpg
ums-14.9.0/documentation/images/ps3screen.jpg
ums-14.9.0/documentation/images/setupwin1.jpg
ums-14.9.0/documentation/images/setupwin2.jpg
ums-14.9.0/documentation/images/setupwin3.jpg
ums-14.9.0/documentation/images/setupwin4.jpg
ums-14.9.0/documentation/images/ssdp.jpg
ums-14.9.0/documentation/images/topology_ps3.jpg
ums-14.9.0/documentation/index.html
ums-14.9.0/documentation/installation.html
ums-14.9.0/documentation/introduction.html
ums-14.9.0/documentation/links.html
ums-14.9.0/documentation/navigation_share.html
ums-14.9.0/documentation/networking.html
ums-14.9.0/documentation/transcoding.html
ums-14.9.0/documentation/videolan.html
ums-14.9.0/DummyInput.jpg
ums-14.9.0/web/browse.html.orig
ums-14.9.0/web/react-client/apple-touch-icon.png
ums-14.9.0/web/react-client/favicon.ico
ums-14.9.0/web/react-client/icon-256.png
ums-14.9.0/web/react-client/icon-32.png
ums-14.9.0/web/react-client/index.html
ums-14.9.0/web/react-client/manifest.json
ums-14.9.0/web/react-client/robots.txt
ums-14.9.0/web/react-client/static/index-34e34650.js
ums-14.9.0/web/react-client/static/index-34e34650.js.map
ums-14.9.0/web/react-client/static/index-9dc024e1.css
```

As you can see there are quite a few files here and there are a few config files. I then manually installed this program on the server by moving this directory into `/opt`. It is an optional program afterall. 

I found a INSTALL.txt file that contained the following: 
``` INSTALL.txt
Installers for Windows and macOS and tarballs for Linux can be found at:

    https://www.universalmediaserver.com

To install UMS from the tarball on Linux, open a terminal and enter the
following commands (set VERSION to the version you're installing):
Note: These instructions have been tested on Ubuntu 22.04, but something similar
should work on most Unix distributions)

1. Install the dependencies (this only needs to be done once):
    
    All releases of UMS come with Java Runtime Environment bundled, except for
    the ARM architecture releases. You will need to ensure you have JRE 17 installed.

    Next, add some other pre-reqs:

        sudo apt-get install mediainfo dcraw vlc-bin mplayer mencoder
      
  you can also optionally install dcraw: `sudo apt-get install dcraw`

2. Download the tarball e.g.:

    Get the direct link from https://www.universalmediaserver.com

    Your operating system and architecture should be automatically detected so
    that you get the correct download. If for some reason you get the wrong file,
    you can manually select a file by clicking the big arrow to the right of the
    download buttons.

3. Extract the tarball into a ums-$VERSION directory:

        tar xzvf ums-$VERSION.tgz

4. Run (note: UMS should NOT be run as root):

        cd ums-$VERSION
        ./UMS.sh

UMS accesses some files in the `ums-$VERSION/` directory (the working directory).
Other files will be looked for in `~/.config/UMS`
```

The key takeaway is that you need to install the dependencies `mediainfo dcraw vlc-bin mplayer mencoder`. Using dnf instead of apt-get or apt I was able to find and install the dependencies.

Let's look into the config files.

In UMS.conf we can see a well written intro to the configuration files.

``` bash UMS.conf
# ============================================================================
# Configuration file for Universal Media Server
# ============================================================================
# Introduction:
#
# This "UMS.conf" file holds the configuration settings for UMS. These
# settings are usually set using a graphical user interface. If you are
# running UMS on a headless system, you may may be able to access the web GUI
# in a browser (see the web_gui_port setting), or you can edit this file.
# A restart of UMS is required after editing this file.
#
# Commenting out an option or leaving it empty forces the UMS default
# that is indicated.
#
# Key value pairs
# ---------------
# The configuration file contains key/value pairs separated by an equals (=)
# sign; the key on the left and the value on the right. The value is edited in
# this file or set using the UMS GUI and saved. The value can take a number of
# different forms:
#
#  - toggle: a checkbox or boolean; either "true" or "false"
#  - selector: a dropdown menu in the GUI, generating a string or numeric
#              value. Available options will usually be stated below
#  - string: a short text or a number
#  - text: a longer text with embedded line breaks
#  - list: a comma-separated list of strings or numbers
#
# In the file below the value type is shown after the Default label; strings
# have quotation marks, toggles are true or false, the others are explained.
...
```

Now this intro says we can use the GUI and the web GUI in order to set these configuration setting.
I ignored this and went with the third option of editing the config file manually using nano over SSH, this is not recommended for beginners. 

You not only don't have to do it this way but I would strongly advise against it unless you are a power user or are very familiar with the linux terminal.
As a matter of fact, I will be walking through how to get to the web interface as it is way more simple to setup.

Basically we can go to <server_name>:webUI_port and see the gui of the server right?
Not quite. 

First we have to run UMS.sh from the /opt/ums<ver> folder.
We might have to give it permissions to execute using sudo `sudo chmod +x`. Then we can run it in the background using the headless command. 
`./UMS.sh headless` or `sh UMS.sh headless`.

WARNING: you may want to open the ports in the next step before running UMS as it might trigger the wizard to not run if you start it and then stop it.

When we go to our server's IP and try to access the web ui on port 9001 we are blocked with the old `ERR_CONNECTION_REFUSED` error. This means we need to add a rule to the firewall to allow for the use of this port from other computers.

How do we do this? 
We allow access through the firewall by adding the ports that UMS uses.

- 5001 - For devices
- 9001 - Admin Page -> this is the one we currently need for our setup
- 9001 - Web Player

`sudo firewall-cmd --zone=FedoraServer --add-port=5001/tcp --permanent`

`sudo firewall-cmd --zone=FedoraServer --add-port=9001/tcp --permanent`

`sudo firewall-cmd --zone=FedoraServer --add-port=9002/tcp --permanent`

This does depend on the zone name you have setup for your firewall but in my case it was FedoraServer. 

Restart UMS and try again.

If you are having issues with UMS not wanting to set up and just going to the login page eventhough you haven't created any users then you can turn on the setup wizard like so:
``` bash UMS.conf
# Run wizard on startup
# ---------------------
# When true, this offers to run a wizard with the most frequently-changed
# settings to allow users to quickly customize UMS without digging through
# all of our advanced settings
# Default: true until it has run once
run_wizard = true
```

If you have a desktop version of fedora or perhaps a server with a Desktop Environment installed, then you can do the configuration locally through the web ui or the actual GUI of the program. This will save some time.
