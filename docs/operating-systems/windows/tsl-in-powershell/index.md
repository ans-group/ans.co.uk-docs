---
sidebar_position: 8
sidebar_label: "TLS 1.2 in PowerShell"
title: "TLS 1.2 in PowerShell"
description: Information and Instructions about Windows PowerShell TLS options
keywords:
  - ukfast
  - ans
  - windows
  - powershell
  - tls
  - ssl
  - secure
  - transport
  - layer
  - connection
---

# TLS 1.2 in PowerShell

By default, PowerShell will use SSL3.0 and TLS1.0. This can prove problematic when performing web requests to sites that have disabled these insecure protocols and you may see an error such as:

![TLSError](../../operating-systems-images/PowershellTLSError.PNG)

In order to allow a connection to be established, we can force PowerShell to use a more secure protocol, like TLS 1.2, using this command:

```console
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
```

You can use this command to see what protocols will be used:

```console
[Net.ServicePointManager]::SecurityProtocol
```

Voila! You can now establish a connection to the site over a secure protocol.

:::note
This will only change this for the current session. If you want this change to be persistent, you'll need to apply this change in your PowerShell profile
:::
