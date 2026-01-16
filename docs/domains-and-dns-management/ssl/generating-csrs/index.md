---
sidebar_position: 2
sidebar_label: "Generating a CSR (Certificate Signing Request)"
title: "Generating a CSR (Certificate Signing Request)"
description: Generating a CSR with ANS
keywords:
  - ans
  - ukfast
  - domains
  - dns
  - csr
---

# How to generate a CSR file

This guide will help you generate a Certificate Signing Request (CSR) on different operating systems.

## Pre-requisite reading

On SSL certificates that protect a single hostname/domain, your primary hostname is the hostname/domain you have chosen.

For multi-domain SSL certificates, the primary hostname is the first hostname that is listed on your SSL certificate inside [ANS Glass](https://ans.glass).

You should also ensure to make sure your key and CSR are in a safe folder, as you’ll need the the key to install the SSL certificate and the CSR to generate your SSL Certificate.

## Generate a CSR on Linux

First, check if OpenSSL is installed:

```
openssl version
```

If OpenSSL is not installed, you will see an error message. In that case, install OpenSSL:

### Ubuntu

```
sudo apt install openssl
```

### RHEL/AlmaLinux

```
sudo yum install openssl
```

Now you can generate the CSR. You need to replace `yourhostname` with your primary hostname (Common Name) that the SSL will protect.

```
openssl req -new -newkey rsa:2048 -nodes -keyout /path/to/yourhostname.key -out /path/to/yourhostname.csr
```

## Generate a CSR on Windows

1. Open `IIS Manager`.
2. Select the server in the `Connections` pane.
3. Double-click the `Server Certificates` icon.
4. Click the `Create Certificate Request` link in the Actions pane.
5. Fill out the `Distinguished Name Properties` form with the required information (`Common Name` (primary hostname),` Organization`, `City/locality`, `State/province`, `Country/region`).
6. Set the `Cryptographic Service Provider Properties` (Microsoft RSA Schannel Cryptographic Provider and a bit length of 2048).
7. Create a file name for your CSR and click the `Finish` button.
