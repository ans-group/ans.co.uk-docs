---
sidebar_label: "Composer"
sidebar_position: 1
---

# Composer

## Composer setup

Download composer installer:

```
~]# wget -O /tmp/composer-installer.php https://getcomposer.org/installer
```

Composer can be then installed with the following commands:

### Composer 1

```
~]# php /tmp/composer-installer.php --version=1.10.20 --filename=composer1 --install-dir=/usr/bin
```

### Composer 2

```
~]# php /tmp/composer-installer.php --version=2.0.1 --filename=composer2 --install-dir=/usr/bin
```

Please make sure to update Composer 2 to the latest version:

```
~]# php /usr/bin/composer2 self-update
```

### Version check

You can check the installed version of Composer with the command:

```
~]$ composer1  -V
Composer version 1.10.20 2021-01-27 15:41:06
```

```
~]$ composer2  -V
Composer version 2.1.3 2021-06-09 16:31:20
```

:::warning
**Do not run Composer as the `root` user!**
:::
