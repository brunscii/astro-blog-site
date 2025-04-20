---
author: "Chris Carlin"
pubDate: "04/14/2025"
title: "Systemd vs Init"
description: "Comparing systemd to init"
draft: true
---

## What is Systemd

Systemd is something that caused a bit of controversy a while ago. I distinctly remember the groves of complaints about systemd back when it was first pushed into fedora.
People would often say that the unix way was to "do one thing and do it right." Systemd does not follow that principal as it attempts to be both a initialization system as well a service management system.
It runs daemons, logging, networking, DNS, and login.
It 