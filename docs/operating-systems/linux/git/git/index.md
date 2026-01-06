---
sidebar_position: 1
sidebar_label: "Git"
title: "Git"
description: A guide to using Git
keywords:
  - ukfast
  - ans
  - linux
  - install
  - centos
  - cloud
  - server
  - virtual
  - git
  - eCommerce
---

# Git

## Install Git

You can install git with the following command:

```bash
~]# yum install git
```

### Updating Git

You can update git with the following command:

```bash
~]# yum update git
```

### Version check

You can check the version of git installed with the following command:

```bash
~]# git --version
git version 1.8.3.1
```

## SSH port

If the server has port 2020 defined as the default outbound SSH port:

```bash
~]# grep Port /etc/ssh/ssh_config
   Port 2020
```

You will need to add a host name match to change the port to 22 in the file `/etc/ssh/ssh_config`:

```bash
Host github.com
    HostName github.com
    Port 22
```

This block needs to be added at the top of the file.

### Firewall

You need to ensure the firewall for the server allows port 22 outbound. This can be done through ANS Glass, you can find more information on this [here](../../../../network/firewalls/).
