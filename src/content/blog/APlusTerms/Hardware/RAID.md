---
title: "RAID Configurations"
description: "A breif overview of RAID configurations for the A+ exam"
author: "Chris Carlin"
heroImage: "/blob/master/public/blogContent/imgix-pgdaAwf6IJg-unsplash.jpg"
draft: false
---

## What is RAID?

RAID, or Redundant Array of Independent Disks, is a way for configuring your storage devices. There are different arrays for different needs; whether it be redundancy, speed, or both. Hardware RAID is not as common as it use to be since ZFS and brtfs both have their own versions with their own benefits and pitfalls.

## Types of RAID

| Name    | RAID Type                  | Max Drive Failure | Min number of drives |
| ---     | ---                        |  ---              | ---                  | 
| RAID 0  | Striping                   | 0                 | 2                    |
| RAID 1  | Mirroring                  | n-1               | 2                    | 
| RAID 5  | Striping and Parity        | 1                 | 3                    |
| RAID 6  | Striping and Double Parity | 2                 | 6                    |
| RAID 10 | Mirroring and Striping     | 1 per array       | 4                    |

### RAID 0

RAID 0 is the simplest RAID as it simply stripes the data that is distributed to the drives. 
This means that the data is split between the two drives in order to increase the speed of reads and writes. If you have two drives in RAID 0 then you have a speed that is in theory two times faster. The speed of reads and writes is considered to be n times the speed of a single drive, where n is the number of drives in the array.

RAID 0 is dangerous as it has zero redundancy. This means that if a single drive fails then so does the entire array. 

RAID 0 is to be used for speed and performance, not long term storage. This is useful for doing large data calculations, where the computer can read and write large sets of data faster. While this doesn't make the calculation faster, it does reduce the time in between calculations, thus increasing performance when making multiple computaitons. 

### RAID 1

RAID 1 is when the information on a single drive is also writtent to a redundant drive. This array mirrors data and writes it simultaneously to multiple drives, making the write speed the same as the slowest drive. When reading from this array the speed can be as fast as the speed of the drives combined, as it can read the same data from multiple drives at once. 
As long as a single drive in this array is still operable, all of the data should be preserved. This means that you can lose all but 1 drive and be OK.

This is one of the safest RAID configurations but it does not offer the same performace gains as RAID 0.

### RAID 5

RAID 5 is when striping and parity is used in order to gain speed and maintain some form of safety. In RAID 5 the data is striped across all disks and a parity bit is added for redundancy. This data is used to store the calculation from the XOR of the striped data. This can be used to recalculate and rebuild the array on the loss of a single drive. If more than one drive fails then the information cannot be recalculated. 

### RAID 6

RAID 6 is similar to RAID 5 but there is double the parity data. This means that the parity bits are written to multiple drives and the array can handle up to 2 drive failures. The double parity als means that the array is more likily to succeed on a rebuild after a failure.

### RAID 10

RAID 10 is actually RAID 1 + 0. It is a combination of RAID 1's mirroring process as well as the striping process of RAID 0. This offers both speed and reliability. The downside is that it requires twice as many drives to acheive the same storage as a simple RAID 0 and is also slower since it has to mirror the data from the array. The benefits are the increased speed over RAID 1 as well as the ability to withstand a drive failure unlike RAID 0.


## Which RAID should I use?

That all depends on your needs. If you need a fast read and write and aren't worried about data loss then RAID 0 just might be for you. Perhaps you need speed but also value your data, in that case there is RAID 10. It offers speed gains like RAID 0 with the data mirroring of RAID 1. 

Maybe you want a large data pool for a server, RAID 5 might be useful as it allows you to combine size and speed of drives at the cost of the CPU. Since server processors are often built for this use case they are better equippewd for this work load than desktop processors. 
Care more about your data, then RAID 6 might be useful as it offers many of the beneifts of 5 with an added set of parity information. This means rebuilds are more likily to succeed and more drives can fail. This makes it good for data servers or movie libraries, as data integrity is appreciated. 

## ZFS

### What is ZFS and how it works

ZFS is a file system that was made by Sun Microsystems for use on Solaris. It stands for *Z*ettabyte *F*ile *S*ystem and was designed to deal with larger files and capacities. 

ZFS has since been adopted by freeNAS and has many RAID configurations. 

RAID 0 is considered a striped VDev. RAID 1 is acheived by mirroring the VDevs. RAID 5 is considered RAIDZ1, RAID 6 is RAIDZ2 and RAIDZ3 is just a continuation of the pattern with 3 parity block instead of 2. 