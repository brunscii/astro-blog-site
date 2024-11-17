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

## How to configure DHCP

Most of the time the default settings should work fine for your DHCP server; however, there may be a time in which you need to change the settings to suit your needs. You want to take into account for your IP range and lease time when configuring a DHCP server in order to accomadate all of the devices and traffic necessary. 

### Example 


#### Coffee Shop

Let's say that you are configuring a router for a local coffee shop. Observing the shop we notice that there is never more that 20 devices connected simultaneously. While an IP range of 192.168.1.1-20 might cover the current need, what happens when more devices try to connect. There are no more IP addresses to use. These addresses are held to a MAC address for a given lease time. To give ourselves some leeway, let's just set the range to from 192.168.1.1-127.

After determining the range of IP addresses to use for this WLAN network we can then look at the lease time. In this coffee shop environment we notice that the average user stays 10-15 minutes while the longest is maybe 2-3 hours. If we set our lease time to 4 hours then we will only reserve IP addresses to MAC addresses for at most 4 hours. This means that the users that left and no longer require a local IP aren't hogging up space in the IP range.

Depending on the traffic of the shop, how many people use the WIFI concurrently, and the duration of each visit, we can determine the optimal settings for the environment. This gives us a more reliable and steady network to be shared publicly or privately.
