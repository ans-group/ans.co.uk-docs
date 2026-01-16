---
sidebar_position: 9
sidebar_label: "Using Let's Encrypt on Windows"
title: How to use Let's Encrypt on Windows
description: How to use Let's Encrypt on Windows
keywords:
  - ukfast
  - ans
  - ssl
  - letsencrypt
  - let's encrypt
  - secure
  - security
  - windows
  - powershell
  - iis
  - server
  - guide
  - tutorial
---

# How to use Let’s Encrypt on Windows

`Windows` operating systems have a number of `ACME` clients available. Here are a couple that clients have found to be simple to use and feature rich.

## Certify the Web

`Certify the Web` is one of the most popular `Let's Encrypt` services available on `Windows` currently. This offers features such as;

- Automatic renewal
- `IIS` Integration
- Option to integrate alternative `ACME` certificate authorities

One downside to this product is that it does only offer a few certificates for free before requiring you to purchase an upgrade key.

For a complete guide on how to install this client and start issuing `Let's Encrypt` certificates, please see the following guide.

[Certify the Web - Docs](https://docs.certifytheweb.com/docs/intro/)

## Win-ACME

`Win-ACME` is a popular command line alternative for issuing and maintaining `Let's Encrypt` certificates. This offers the following features:

- `IIS` Integration
- A simple command line interface
- Support for alternative web servers, such as `Apache`
- Automatic renewal via an integrated scheduled task

For a complete guide on how to install and use this client, please see the following official documentation

[Win-ACME - Docs](https://www.win-acme.com/manual/getting-started)

## Posh-ACME

For `PowerShell` users, we recommend using `Posh-ACME` for your `Let's Encrypt` needs. This offers a feature set similar to `certbot`, and can be incorporated into environments that use APIs for DNS Challenges and automated certificate renewal.

### Installation

To install this client, first open your `PowerShell` terminal and run the following, replacing `youruser` for the system user in question.

```
Install-Module -Name Posh-ACME -Scope youruser
```

If you have elevated privileges and wish for this to be available for all system users, use the following syntax:

```
Install-Module -Name Posh-ACME -Scope AllUsers
```

Once installed, you will need to **import** the module:

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
Import-Module Posh-ACME
```

### Issuing a certificate

To issue a certificate for your chosen domain, run the following command, adjusting as per your specific requirements.

```
New-PACertificate yourdomain.com -AcceptTOS  -Contact admin@yourdomain.com
```

This will default to using the **Manual** plugin, and prompt you to create a `TXT` record for the `DNS-01` challenge. Please be aware of your chosen DNS provider’s DNS propagation time.

### Using a DNS Plugin

Please see the list of [Available Posh-ACME DNS Plugins](https://poshac.me/docs/v4/Plugins/) for a full list of available DNS Plugins for use with this software.

As an example, to use this with Route53, please see the following usage guide, which falls outside the scope of this article.

[Route53 Posh-ACME Guide](https://poshac.me/docs/v4/Plugins/Route53/)
