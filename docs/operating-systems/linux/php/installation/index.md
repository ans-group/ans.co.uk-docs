---
sidebar_position: 1
sidebar_label: "Installing PHP"
title: "Installing PHP"
description: A guide to installing and configuring PHP on Linux
keywords:
  - ukfast
  - ans
  - linux
  - install
  - configuration
  - PHP
  - modules
---

# Installing PHP

## Installation

If you want to display much beyond static HTML, it's likely that you'll be looking to use PHP on your server.

Installing is pretty simple from the standard CentOS repositories, and can be achieved like so:

```
yum install php php-common php-devel php-pear php-mysql
```

This will install PHP along with the relevant configuration to tie it into Apache (provided Apache was installed from the standard repositories).

:::note
As CentOS/RHEL are long term release style operating systems, you won't get bleeding edge or even recent releases of PHP from the standard repositories.

They will however, have backported security fixes from higher versions to keep it secure. See [Vulnerability scans](../../../../security/vulnerability-scans/) guide for more information.
:::

## Configuration

Out of the box, PHP doesn't really need much configuration, so unless you have any particular values in mind that you'd like to change there probably isn't much to see here.

It can't hurt to familiarise yourself with the location of config files however, so you can find the main PHP configuration file here:

```
/etc/php.ini
```

Configuration for individual modules may be found in the following directory, depending on how the module is configured:

```
/etc/php.d/
```

## Starting it up

PHP isn't a service on Linux, so there's no `init` script you need to run.

If you've only just installed it though, you probably want to restart Apache so that it can load in the new PHP runtime:

```
service httpd restart
```

## Further modules

It's likely that you'll need more modules than the basic ones described above, especially if you're going to run a site that depends on a database.

To install other modules, such as `php-mysql` or `php-mcrypt` the following guide should help:

- [Installing PHP Modules](../../php/module-installation/)
