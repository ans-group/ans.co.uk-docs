---
sidebar_position: 11
sidebar_label: "SSL/TLS & Schannel"
title: "SSL/TLS & Schannel"
description: Information relating to TLS and Windows Schannel
keywords:
  - ukfast
  - ans
  - ssl
  - schannel
  - TLS
  - windows
---

# SSL/TLS & Schannel

- [TLS/SSL protocols and the Schannel SSP](./tls-intro/)
  - [SSL/TLS protocols](./tls-intro/#ssltls-protocols)
    - [So what is the difference between a SSL/TLS protocol and a cipher suite?](./tls-intro/#so-what-is-the-difference-between-a-ssltls-protocol-and-a-cipher-suite)
- [The Security Scan](./security-scan/)
  - [How do you tackle this?](./security-scan/#how-do-you-tackle-this)
- [Security recommendations for internet facing web servers](./web-server-recommendations/)
  - [Server-Side Protocol Support](./web-server-recommendations/#server-side-protocol-support)
  - [Windows Server 2016](./web-server-recommendations/#windows-server-2016)
  - [Windows Server 2012 R2](./web-server-recommendations/#windows-server-2012-r2)
  - [Windows Server 2008 R2 / 2012](./web-server-recommendations/#windows-server-2008-r2--2012)
    - [Add RDP support for TLS 1.1 and TLS 1.2 on Server 2008 R2](./web-server-recommendations/#add-rdp-support-for-tls-11-and-tls-12-on-server-2008-r2)
  - [Windows Server 2008](./web-server-recommendations/#windows-server-2008)
  - [Loadbalancer, WAF, and Webcelerator solutions](./web-server-recommendations/#loadbalancer-waf-and-webcelerator-solutions)
- [TLS support for Windows Software](./software-considerations/)
  - [TLS support for Microsoft SQL Server](./software-considerations/#tls-support-for-microsoft-sql-server)
  - [TLS support for Microsoft Exchange Server](./software-considerations/#tls-support-for-microsoft-exchange-server)
  - [TLS support for the Remote Desktop Services](./software-considerations/#tls-support-for-the-remote-desktop-services)
    - [RDS Connection Broker TLS Compatibility](./software-considerations/#rds-connection-broker-tls-compatibility)
- [TLS Considerations for .NET Client connections](./dotnet-settings/)
  - [.NET Framework versions](./dotnet-settings/#net-framework-versions)
- [Logging TLS cipher usage](./tls-logging-iis/)
  - [IIS TLS logging](./tls-logging-iis/#iis-tls-logging)
- [Enabling and Disabling SSL/TLS Protocols in Windows](./tls-settings/)
  - [Automated with IIS Crypto](./tls-settings/#automated-with-iis-crypto)
  - [Manual](./tls-settings/#manual)
  - [Cipher Suite Ordering](./tls-settings/#cipher-suite-ordering)
