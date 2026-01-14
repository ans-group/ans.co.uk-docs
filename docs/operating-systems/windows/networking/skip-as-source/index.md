---
sidebar_position: 5
sidebar_label: "Add an IP using Skip as Source"
title: "Add an IP using Skip as Source"
description: A guide to adding an IP using SkipAsSource in Windows
keywords:
  - ans
  - ukfast
  - windows
  - ip
  - address
  - information
  - skip
  - source
  - add
  - skipassource
  - interface
  - cloud
  - server
---

# Add an IP using Skip as Source

If you are having issues with outbound connections coming from the wrong IP after adding an additional IP, this is usually because the IP that was added is lower than the primary IP and was added via the GUI.

This is a known issue with Sage Pay and mail servers, but it will affect most applications.

Remove the additional IP, then in Command Prompt (as Administrator) use the following:

```console
netsh interface ipv4 add address [network connection name] [ip address] [subnet mask] skipassource=true
```

```console
netsh interface ipv4 add address "Local Area Connection" 172.31.0.0 255.255.255.0 skipassource=true
```
