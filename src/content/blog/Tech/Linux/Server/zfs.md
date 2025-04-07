---
title       : "Creating a zpool"
description : "How I made a zpool with a raidz1 vdev on fedora"
author      : "Chris Carlin"
draft       : true
category    : "Linux"
pubDate     : "04/06/2025"
---

## What the heck is ZFS

ZFS stands for Zettabyte File System. Is claims that it is capable of storing 256 trillion yobibytes, or 256 quadrillion zebibytes. It's a ridiculous amount of data.

ZFS was invented by Sun Microsystems for the Solaris OS. It was pretty much abandoned when Sun unfortunately was bought by Oracle. RIP Sun. Today there is a version of ZFS that was forked from the original called [OpenZFS](https://openzfs.github.io/openzfs-docs/index.html).

Long story short ZFS allows for us to create a storage pool that spans across multiple physical drives.
It offers something called RAIDZ which has different levels. It also has mirror and stripe VDEVs. We'll get into that later.
For now just think of it as a software RAID that fixes a lot of issues while introducing new ones.

## ZPOOL: swimming with data

A ZPOOL is the storage pool that contains the VDEVs. Think of the zpool as a hard drive and the vdev as a folder. Instead, the zpool can contain any number of drives that are grouped into something called a VDEV. 

### VDEV

A VDEV is a virtual device that is composed of drives. The VDEV can be a raid array, a mirrored set of drives, a striped set of drives, or just a single drive.

We create the vdev at the time we create a zpool or if we are to add to the pool.

### RAIDZ

Raidz has a few levels. 
- Raidz1 - 1 parity drive
- Raidz2 - 2 parity drives
- Raidz3 - 3 parity drives

This means that for each level of raidz we use that level's value of drives for parity.

A 10 drive raidz1 would have 10-1 drives capacity, or 9 drives of capacity.
This also means that we have a single point of failure. So you can think of it as raidz(n) in the way the you have n drives of failure possible and # of drives - n worth of capacity.

For obvous reasons if you have a lot of drives then you wouldn't want to just have all of your drives in a single raidz1 vdev if want maximum redundancy. 

