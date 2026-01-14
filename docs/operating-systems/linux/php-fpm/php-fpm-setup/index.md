---
sidebar_position: 2
sidebar_label: "Installing & configuring PHP-FPM"
title: "Installing & configuring PHP-FPM"
description: A guide to installing and configuration of PHP-FPM on Linux
keywords:
  - ukfast
  - ans
  - linux
  - PHP
  - FPM
  - PHP-FPM
  - install
  - configuration
  - module
  - tutorial
  - guide
---

# Installing & configuring PHP-FPM

`PHP-FPM` is a service which executes PHP code on behalf of a web server. As `NGINX` is unable to natively execute PHP code, it can be onfigured to pass all `.php` files over to `PHP-FPM.`

`Apache` is able to execute PHP itself with `mod_php`, but from version `2.4+` you can now also pass `.php` files to `PHP-FPM`.

## Installation

To install `PHP-FPM` use the following command:

```
yum install php-fpm
```

This will create the file `/etc/php-fpm.d/www.conf`.

Using the `enable --now` flag, we can _start_ the service and set it to _start on boot_ all at once:

```
systemctl enable --now php-fpm
```

## Configuration

### Remote server

By default, this configuration starts a `PHP-FPM` server listening on _port 9000_ that binds to `127.0.0.1` (localhost).

If your intention is to run `PHP-FPM`on a _separate server_, then you will need to amend the following values in your `PHP-FPM` domain configuration file:

```
listen = <add your internal IP address>:9000
listen.allowed_clients = 127.0.0.1,<add your remote server IP address>
```

You can then pass all your PHP requests over to this port on your dedicated `PHP-FPM` server.

:::warning
Always be aware of the risks of opening additional firewall ports, and restrict to specific IP addresses where possible.
:::

### Local server

If you're running `PHP-FPM` on the _same_ server as your web server, it's a much better idea to configure a `unix socket` to pass requests to, instead of a `port`. This means the communication is handled by the `kernel`, instead being tied to any network `TCP` limits.

```
listen = '/var/run/php-fcgi-firstdomaincom.sock'
```

#### Example

:::note
Creating a PHP-FPM pool per site allows for greater separation of resource, and makes it simpler to identify problematic sites using up excessive resource.
:::

Here is a sample configuration for a domain called `domain.com`:

```
[firstdomaincom]

listen = '/var/run/php-fcgi-firstdomaincom.sock'
;listen.backlog = -1
listen.allowed_clients = 127.0.0.1
listen.owner = apache
listen.group = apache
;listen.mode = 0666

user = firstdomainuser
group = firstdomainuser

pm = dynamic
pm.max_children = 300
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 20
pm.max_requests = 2000
;pm.status_path = /status

;ping.path = /ping
;ping.response = pong

;request_terminate_timeout = 0
;request_slowlog_timeout = 0
slowlog = /var/www/vhosts/firstdomain.com/phpfpm-slow.log

;rlimit_files = 1024
;rlimit_core = 0

;chroot =

;chdir = /var/www

;catch_workers_output = yes

;env[HOSTNAME] = $HOSTNAME
;env[PATH] = /usr/local/bin:/usr/bin:/bin
;env[TMP] = /tmp
;env[TMPDIR] = /tmp
;env[TEMP] = /tmp

php_admin_value[error_log] =  /var/www/vhosts/firstdomain.com/phpfpm-error.log
php_admin_flag[log_errors] = on
```

This is configured to work with `Apache`. If you were configuring this with `NGINX`, you would replace these lines:

```
listen.owner = nginx
listen.group = nginx
```

The `PHP-FPM` pool itself needs to run as its _own_ Linux user:

```
user = firstdomainuser
group = firstdomainuser
```

You will then need to run a **configuration test**:

```
php-fpm -t
```

And then _reload_ the configuration:

```
systemctl reload php-fpm
```

You should now be able to see the `PHP-FPM` socket:

```
stat /var/run/php-fcgi-firstdomaincom.sock
```

which should show something like:

```
  File: '/var/run/php-fcgi-firstdomaincom.sock'
 Size: 0               Blocks: 0          IO Block: 4096   socket
Device: 13h/19d Inode: 3108659     Links: 1
Access: (0666/srw-rw-rw-)  Uid: (   48/  apache)   Gid: (   48/  apache)
Access: 2016-08-10 13:15:26.968222080 +0100
Modify: 2016-08-10 13:15:26.968222080 +0100
Change: 2016-08-10 13:15:26.968222080 +0100
Birth: -
```

:::note
The pm values in the configuration are there mainly to prevent the server from running out of memory. However, on servers with higher specification these values can be increased.
:::
