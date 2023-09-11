---
title: "DHCP"
description: "What is DHCP?"
author: "Chris Carlin"
draft: true

---

## What is DHCP?

DHCP is an acronym for Dynamic Host Configuraion Protocol. This is a protocol that is used to assign IP addresses to devices on a network as they are connected. The IP address is automatically assigned from a given range. Imagine if each device had to be configured to a specific IP address to work on the network. Then imagine moving that device to a new network only to run into IP collisions and other routing errors. This protocol allows for you to connect your laptop or phone to a Wi-Fi without a time consuming configuration. It also allows for your network to run more autonomously, which is great for busy system administrators.

DHCP consists of a server and client. The client leases an IP from the server, the server is responsible for handling the assignment of IP addresses based on the connected devices MAC adresses. The client leases the IP for a given **lease time**

DHCP servers usually have a given IP address range, subnet mask, lease time, default gateway, primary and secondary DNS. Different servers may have different settings like TFTP, boot files, and white/black lists of MAC addresses.