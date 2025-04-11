---
title       : "ZFS in a nutshell"
description : "ZFS - A quick overview"
author      : "Chris Carlin"
draft       : false
category    : "Linux"
pubDate     : "04/06/2025"
heroImage     : "/public/blogContent/imgix-pgdaAwf6IJg-unsplash.jpg"
---

## Overview

This is a quick overview of ZFS and is not a full guide. Instead this is some basic concepts of what ZFS is and how it works on a high level.

## What the heck is ZFS

ZFS stands for Zettabyte File System. Is claims that it is capable of storing 256 trillion yobibytes, or 256 quadrillion zebibytes. It's a ridiculous amount of data.

ZFS was invented by Sun Microsystems for the Solaris OS. It was pretty much abandoned when Sun unfortunately was bought by Oracle. RIP Sun. Today there is a version of ZFS that was forked from the original called [OpenZFS](https://openzfs.github.io/openzfs-docs/index.html).

Long story short ZFS allows for us to create a storage pool that spans across multiple physical drives.
It offers something called RAIDZ which has different levels. It also has mirror and stripe VDEVs. We'll get into that later.
For now just think of it as a software RAID that fixes a lot of issues while introducing new ones.

## ZPOOL: swimming with data

A ZPOOL is the storage pool that contains the VDEVs. Think of the zpool as a university and the vdev as the buildings. A dataset would then be the collection of classes you take. 

The zpool can contain any number of drives that are grouped into something called a VDEV.
The zpool is a collection of all of the data from the VDEV's and is grouped into something called datasets.

### Datasets

Datasets are the sections of the zpool in a logical sense rather than a physical sense. 
They allow you to specify the compression, deduplication, sharing, mountpoint, and way more.

Within a zpool you can have several datasets mounted to different locations that act as their own device. This is not to be confused with a virtual device.

### VDEV

A VDEV is a <mark>V</mark>irtual <mark>Dev</mark>ice that is composed of drives. The VDEV can be a raid array, a mirrored set of drives, a striped set of drives, or just a single drive.

We create the vdev at the time we create a zpool or if we are to add to the pool.

### RAIDZ

Raidz has a few levels. 
- Raidz1 - 1 parity drive
- Raidz2 - 2 parity drives
- Raidz3 - 3 parity drives
- Mirror - copies to muliple drives at the same time. Each drive contains the same data so you can have n-1 of the drives fail.
- Stripe - This is how your zpool manages to spread data across multiple vdevs or even through a single vdev. Data is written to multiple disks at once which increases write speeds.

This means that for each level of raidz we use that level's value of drives for parity.

A 10 drive raidz1 would have 10-1 drives capacity, or 9 drives of capacity.
This also means that we have a single point of failure. So you can think of it as raidz(n) in the way the you have n drives of failure possible and # of drives - n worth of capacity.

For obvous reasons if you have a lot of drives then you wouldn't want to just have all of your drives in a single raidz1 vdev if want maximum redundancy. 
What you would do instead is have a series of drives in a vdev following the basic 2 drives + 1 parity schema. Basically you want to stay in multiples of 2 + 1 parity for raidz1 or 2 + 2 parity for raidz2. 

This means if you have 9 drives total you could do a single raidz1 with 9 drives, potentially adding more for a mirror later, or you could do 3x3 drive vdevs. The latter option would give you 6 drives worth of storage and 3 drives worth of parity. The 9 drives in a single raidz1 would give you 8 drives worth of capacity but only a single point of failure.

If you had 10 drives you could run a single raidz2 with 8 drives of capacity and 2 drives worth of parity. 
You could also run 2x5 drive raidz1 vdevs. You could also run 2x5 drive raidz2 vdevs.
Comparing them you would have 8 drives worth of capacity and 1 drive of failure per vdev on the raidz1.
The raidz2 setup on the other hand would have 6 drives of capacity and 2 drives could fail per vdev.
It's all about how secure you want your data.

Mirrors work by writing the data to multiple drives at the same time. Let's use the 10 drive example see what we can do with a mirror. 
You could create a 2x5 drive mirror where each vdev contains 5 drives and is mirrored between each other.
This would mean you could lose an entire vdev by a single drive failure but it could be rebuilt with it's mirror.
Alternatively you could do 5x2 drive vdevs where each vdev is a mirror. In this situation you could lose a single drive on any vdev and not lose data. 

Using the same example we can mix our setup and have say a mirrored set of 2 raidz1 vdevs. This allows us to lose a single drive per vdev and be able to rebuild it without having to use the mirror. This allows more redundancy as you can lose anywhere from 1 to 5 drives, depending on their location, and still maintain data integrity.

Striping is where we use multiple drives as a single vdev or even across multiple vdevs in a zpool. It adds all of the capacity and the read/write performance at the cost of redundancy. Losing a single drive on a striped vdev will cause you to lose the entire vdev. If we had a 10 drive stripe and lost a single drive then we lost all 10 drives worth of data. That is why we mixed it with mirrors in the previous example for redundancy.

## Copy On Write: COW

COW or <mark>C</mark>opy-<mark>O</mark>n-<mark>W</mark>rite is a way of preserving data until a write operation is complete. It also allows for the snapshot of the current stat of a system.

If you have used virtual machines on linux then you may have heard of COW or at least qcow/qcow2.
In the VM context a .qcow2 file is the a storage format for the VM. It stands for QEMU Copy-on-Write and allows for a VM to store only used data and save space compared to a raw format which needs the entire size allocated beforehand. The QCOW2 format allows for snapshots since it only writes changes to the disk, which is great for distributed systems and backups.

Copy-on-Write is a powerful part of zfs as it ensures data integrity. How?
COW writes the changes to the disk on new blocks instead of overwriting the old data. 
When the write is complete the metadata is updated to point to the new information instead. 
This means that the old data is present until after the write is complete and, since it isn't overwritten, it can be recovered if need be.   

Like with qcow, COW can allow for quick snapshots since it just has to copy metadata instead of an entire dataset. 

## A snapshot is not a backup

A snapshot is not a replacement for a proper backup. It relies on the original data and shows changes that are made to that data.

A snapshot is a copy of the state of the dataset and can be used to rollback files or restore files. 
It can also be used to update your backups using `zfs send` and `zfs receive`.
Basically you can send and receive snapshots and use them to update your backup of the dataset.

If you only have snapshots and lose the base file system then you are out of luck as far as the backup goes.

## Conclusion

ZFS is a wonderful file system that, like most things from SUN microsystems, was ahead of it's time. The adoption into the NAS and data storage game is a natural fit for the technology that kind of filled in the RAID 5 write hole issue and allows large datasets to be stored safely.

While the configuration may be tricky to figure out and take a bit of planning it is worth it for the rich feature set that it provides.

I plan on writing more blogs going in-depth on zfs features as I use it more since I am admittedly somewhat new to the game here. I have been on btrFS for quite a while and have created storage pools using ZFS in order to better backup and group my decades of data hoarding.