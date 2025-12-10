---
sidebar_label: "OPCache"
sidebar_position: 1
---

# OPCache

OPcache will cache `.php` and `.phtml` files within your Magento 2 application. Therefore you should add flushing OPcache to your deployment process.

## Version check

You can check the version of OPcache installed with the command:

```
~]# php -v | grep -i opcache
    with Zend OPcache v7.2.19, Copyright (c) 1999-2018, by Zend Technologies
```

## Module check

You can confirm the module has been loaded:

```
~]# php -m | grep -i opcache
Zend OPcache
```

## Flush OPcache

### Service reload

You can flush OPcache with a reload of the PHP-FPM service, always run a configuration test before reloading:

```
~]# php-fpm -t
[19-Aug-2019 08:48:54] NOTICE: configuration file /etc/php-fpm.conf test is successful
~]# systemctl reload php-fpm
```

### PHP function

You can also clear OPcache using the PHP function:

```
<?php
 opcache_reset();
?>
```

## Stack OPcache settings

We use the following `sed` to change the default settings of OPcache on our Magento 2 stacks:

```
sed -i 's/opcache.memory_consumption=128/opcache.memory_consumption=512/g' /etc/php.d/*opcache.ini
sed -i 's/opcache.interned_strings_buffer=8/opcache.interned_strings_buffer=12/g' /etc/php.d/*opcache.ini
sed -i 's/opcache.max_accelerated_files=4000/opcache.max_accelerated_files=60000/g' /etc/php.d/*opcache.ini
sed -i 's/;opcache.save_comments=0/opcache.save_comments=1/g' /etc/php.d/*opcache.ini
sed -i 's/;opcache.save_comments=1/opcache.save_comments=1/g' /etc/php.d/*opcache.ini
sed -i 's/opcache.save_comments=0/opcache.save_comments=1/g' /etc/php.d/*opcache.ini
sed -i 's/;opcache.load_comments=1/opcache.load_comments=1/g' /etc/php.d/*opcache.ini
sed -i 's/;opcache.enable_file_override=0/opcache.enable_file_override=1/g' /etc/php.d/*opcache.ini
```

This changes the values to:

```ini
opcache.memory_consumption=512
pcache.interned_strings_buffer=12
opcache.max_accelerated_files=60000
opcache.save_comments=1
opcache.load_comments=1
opcache.enable_file_override=1
```

## OPcache GUI

The OPcache GUI (https://github.com/amnuts/opcache-gui) is a very handy tool which allows you to flush cache, view the files in cache, memory statistics and lots more. You simply need to download the files to your document root:

```
~]# cd /var/www/vhosts/magentodomain.com/htdocs/pub/
~]# git clone https://github.com/amnuts/opcache-gui
~]# chown -R magentouser: opcache-gui
```

You can then browse `www.magentodomain.com/opcache-gui`. We recommend password /IP redirection for this URI. We have guides on how to do this [here](../../restrict-file-folder/).
