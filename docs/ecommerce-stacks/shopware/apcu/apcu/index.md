---
sidebar_label: "APCu"
sidebar_position: 1
---

# APCu

## Version check

You can check the version of APCu installed with the command:

```
~]# rpm -qa | grep -i apcu
php-pecl-apcu-5.1.17-1.el7.remi.7.2.x86_64
```

## Module check

You can confirm the module has been loaded:

```
~]# php -m | grep -i APCu
apcu
```

## Flush APCu

### Service reload

You can flush APCu with a reload of the PHP-FPM service, always run a configuration test before reloading:

```
~]# php-fpm -t
[19-Aug-2019 08:48:54] NOTICE: configuration file /etc/php-fpm.conf test is successful
~]# systemctl reload php-fpm
```

### PHP function

You can also clear APCu using the PHP function:

```
<?php
 if (extension_loaded('apcu')) {
    echo "APCu cache: " . apcu_clear_cache() . "\n";
 }
?>
```

## APCu settings

We use the following `sed` to change the default settings of APCu on our Shopware stacks:

```
sed -i 's/;apc.shm_size=32M/apc.shm_size=512M/g' /etc/php.d/*apcu.ini
```
