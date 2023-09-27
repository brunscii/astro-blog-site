---
title: "SMB"
description: "Server Message Block"
author: "Chris Carlin"
draft: true
---

## What is it?
SMB, or Server Message Block, is a network protocol for sharing folders and files between a server and client. It started as a Microsoft standard for sharing files over a network but was quickly adapted by the linux community as something called SAMBA. A dialect is the version of the standard, for instance CIFS is a dialect of SMB. 

SMB is an application layer protocol that works on a client server basis.
It requires a configured SMB server and a client computer that has SMB enables.

## Vulnerability

EternalBlue is an exploit that allows for remote code execution on a vulnerable machine that's running SMBv1. It was reported and patched in 2017, though there are still computers at risk to this day. EternalBlue was used to make the WannaCry ransomware