---
sidebar_position: 5
sidebar_label: "Apache / NGINX on Ubuntu with Certbot"
title: "Apache / NGINX on Ubuntu with Certbot"
description: How to secure your sites with Let's Encrypt on Ubuntu
keywords:
  - ubuntu
  - ukfast
  - ans
  - ssl
  - letsencrypt
  - let's encrypt
  - secure
  - security
  - Apache
  - NGINX
  - linux
  - server
  - guide
  - tutorial
---

# How to secure your sites with Let’s Encrypt on Ubuntu

You can install the `Certbot` utility in `Ubuntu` using the official PPA (Personal Package Archive).

First, install the `software-properties-common` package, if you don’t already have this.

```
apt install software-properties-common
```

Next, install the repo, update the apt database and install the module for your chosen web service.

For `Apache`

```
add-apt-repository ppa:certbot/certbot
apt update
apt install certbot python3-certbot-apache
```

or for `NGINX`

```
apt install python-certbot-nginx
```

There after you can use the same methods to install a certificate as previously mentioned for [Apache](../lets-encrypt-centos-apache/) and [NGINX](../lets-encrypt-centos-nginx/)
