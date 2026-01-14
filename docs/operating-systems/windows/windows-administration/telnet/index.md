---
sidebar_position: 8
sidebar_label: "Testing basic connectivity using Telnet"
title: "Testing basic connectivity using Telnet"
description: A guide to testing connectivity on Windows using Telnet
keywords:
  - ukfast
  - ans
  - network
  - telnet
  - windows
  - test
  - connect
  - basic
  - guide
  - tutorial
  - cloud
---

# Testing basic connectivity using Telnet

To test basic connectivity of a service on a specific port, please follow the below guide.

Firstly, if you computer does not have the telnet client installed, you will need to install it before following this guide.

To install Telnet, select `Start`, type `run` and select the resultant `run.exe`. Alternatively, you can press the `Windows + R` keys on your keyboard simultaneously to bring up a run dialogue box.

Type `pkgmgr /iu:"TelnetClient"` in the run box as below and select `OK`.

![Install Telnet](../../../operating-systems-images/telnetinstalltrimmed.PNG)

The `telnet` command will now be active and usable via any Command Prompt window, or PowerShell window.

Open a Command Prompt or a PowerShell window by selecting `Start` and selecting your chosen console. Once the console has opened, type `telnet <target ip> <target port>`, for example `telnet 10.20.10.20 25`, and press `Enter` on your keyboard.

If the connection is established, you will receive a response from the remote server as demonstrated below:

![Telnet Demo 80-25](../../../operating-systems-images/pscmdtelnet.PNG)

If however, you are presented with a blank window, this could mean that the connection could not be established correctly. At this point, to ensure that appropriate access is allowed to and from your target IP it is advised to review firewall rules, etc.
