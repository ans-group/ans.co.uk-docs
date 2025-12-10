---
sidebar_label: "Multiple PHP installations"
sidebar_position: 12
---

# Multiple PHP installations

Guides to installing and running multiple versions of PHP on the same server. This is ideal for testing/switching to different versions of PHP with only a reload of NGINX required, so no downtime.

Once testing is complete we recommend changing the base install to the desired version and configuring the domain to use the base PHP version.

- [Multiple PHP installations](./multi-php/)
  - [Install additional PHP version](./multi-php/#install-additional-php-version)
    - [PHP 5.6](./multi-php/#php-56)
    - [PHP 7.0](./multi-php/#php-70)
    - [PHP 7.1](./multi-php/#php-71)
    - [PHP 7.2](./multi-php/#php-72)
    - [PHP 7.3](./multi-php/#php-73)
  - [Apply Magento PHP optimisations](./multi-php/#apply-magento-php-optimisations)
  - [Configure PHP-FPM](./multi-php/#configure-php-fpm)
    - [Copy original PHP-FPM configuration file(s)](./multi-php/#copy-original-php-fpm-configuration-files)
    - [Edit the copied file(s)](./multi-php/#edit-the-copied-files)
  - [PHP-FPM configuration check](./multi-php/#php-fpm-configuration-check)
  - [Start and enable](./multi-php/#start-and-enable)
  - [Reload](./multi-php/#reload)
  - [NGINX VirtualHost change](./multi-php/#nginx-virtualhost-change)
  - [Checking running PHP installations](./multi-php/#checking-running-php-installations)
  - [Checking installed PHP versions](./multi-php/#checking-installed-php-versions)
  - [Magento Cron jobs](./multi-php/#magento-cron-jobs)
