---
title: "Universal Media Server"
description: "Can Universal Media Server do what Jellyfin can't?"
author: "Chris Carlin"
draft: true
---

## Jellyfin is great, until it isn't

Having seen the power of jellyfin a few years back, I decided to run a server for my TV. It worked pretty well on windows and did a fair job of figuring out what my media was. The problem? My file server runs linux. I only have bout 7 TB in my desktop and, while that sounds like a enough for a decent server, most of my space is taken up by steam games.

I have a file server for a reason. I wanted a backup of my movies, tv shows, drives, games, and whatever else. I don't have a proper set up currently due to budget cuts, but I would love to set up a RAIDZ1 configuration with several 20 TB drives. Until then however, we will have to settle for the many 1 and 2 TB drives hoddled together in this raggety old computer. 

Speaking of old, I just looked at the firmware date on my server, let's just say it was over a decade old.
This server is made from an on gaming computer that was mid at the time. It was AMD before it was good. 
AMD tends to do big things and then fade away. I was happy with the dual core CPU I had years before so I chose the FX-8150. Ewwwwww gross. 

In case you don't remember, the fx-8150 was one of the chips that led AMD stocks into the grave. I, unfortunatelty,  sold my stocks when they went down to $2 a share. This was the chip before the end of the worst generation of AMD CPUs.

The GPU in the server is a 980ti Hybrid. A water cooled beast of a graphics card for the time. Unfortunately it's 5 generations too old to be useful. It sucks at x265 and x264 transcoding. It doesn't support AV1 or HEVC transcode.
Even the most basic of Intel CPUs can do these things. CPUs are way worse at these tasks but Quick Sync is a beast.
In fact, Quick Sync came out right around the time of this AMD flop that is in here.

Building a server now I would definitely choose a AMD CPU for performace and Intel GPU for transcodes.

Anyways, long story long, we can't rule hardware out from the equation in the fact that Jellyfin refuses to cooperate in serving my media. It will obviously recognize the media as it sometimes shows episodes of TV shows in the "suggested" or "newly added" sections but it doesn't show in the actual "shows" section. Sometimes I can get Jellyfin to find and recognize shows just to not play anything claiming there was no playable media found. 

Maybe I can't transcode theses files with hardware but I should still be able to serve the file raw right? 
That being, said I know my TV can directly play some of these files from flash drives.
Why can't Jellyfin just serve up these files, or even find these shows?

After days of changing permissions, renaming files, finding and making nfo files for the metadata using tinyMediaManager, and even completely removing the program and cache just to reinstall and have similar but different issues. The documentation always shows how to do things on debian. Is this my problem?

- Is the problem that I am using Fedora Server? Maybe
- Is is the NVIDIA drivers? Maybe
- Is it the crappy old hardware? Maybe
- Was it the file permissions? No
- Was it the configurations? No
- Was it the TV? No

So with more problems than it's worth, let's get up and running with `Universal Media Server`.

## Universal Media Server

So to be honest with you, when Jellyfin wasn't just giving the file directly to my TV, I wanted to fix the code to just go into a low hardware state and act as a file server if it can't transcode the file. Not knowing if that was the actual issue and not having months to go over the code and do this, I decided to find a simpler fix. To use something else.  

I then reconfigured SAMBA to make sure I could just access and over the network, my TV however didn't want to recognize it the same as windows. 

I then remembered using PS3mediaServer back in the day as a alternative to Universal Media Server back in the day. Universal Media Server would probably still be around in the time of the PS5 right? Right.

Let's see if it runs better now on Fedora Linux than it did on Windows 7, from when this computer was new.

Surprise, surprise, it works like a charm. It even has a headless mode that I figured out how to properly use on my server.

I SSHd into the server and explored all of the config files

--- List thems here

--- Describe them here