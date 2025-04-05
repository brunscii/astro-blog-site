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

## How it works

As a server-client style of application layer protocol, SMB relies on having both a server and client in order to work. So how does the client communicate with the server and how does it all work?

The first step is for the client and server to establish a NetBIOS connection. This allows for communication. This starts with he client creating a full-duplex TCP connection with the server. Once the connection is established the client sends the NetBIOS request to the server over the TCP connection. If all goes well then the server sends back an acknowledgment of the connection. 

They then negotiate for a SMB dialect. A dialect is a version of SMB and each version could have a different set of instructions and features. We don't want to call a feature that the server can't understand and vice versa so it automatically determines the best dialect, or version, for communication.

Next is authentication. The client must log into the server if required.

The client then connects to a share, folder, on the server.

From there the client can open a file in the share and read it's contents, or just browse the shared directory.

## SMB in Linux

Being a MS technology, SMB is closed source. That being said, the crafy linux user base developed a solution. SAMBA.

## Vulnerability

EternalBlue is an exploit that allows for remote code execution on a vulnerable machine that's running SMBv1. It was reported and patched in 2017, though there are still computers at risk to this day. EternalBlue was used to make the WannaCry ransomware

