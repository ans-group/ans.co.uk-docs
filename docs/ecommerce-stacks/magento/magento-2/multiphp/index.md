---
sidebar_label: "Multiple PHP installations"
sidebar_position: 3
---

# Multiple PHP installations

Guides to installing and running multiple versions of PHP on the same server. This is ideal for testing/switching to different versions of PHP with only a reload of NGINX required, so no downtime.

Once testing is complete we recommend changing the base install to the desired version and configuring the domain to use the base PHP version.

- [Multiple PHP installations](./multiphp/)
  - [Install additional PHP version](./multiphp/#install-additional-php-version)
    - [PHP 7.3](./multiphp/#php-73)
    - [PHP 7.4](./multiphp/#php-74)
    - [PHP 8.1](./multiphp/#php-81)
    - [PHP 8.2](./multiphp/#php-82)
  - [Apply Magento 2 PHP optimisations](./multiphp/#apply-magento-2-php-optimisations)
  - [Configure PHP-FPM](./multiphp/#configure-php-fpm)
    - [Copy original PHP-FPM configuration file(s)](./multiphp/#copy-original-php-fpm-configuration-files)
    - [Edit the copied file(s)](./multiphp/#edit-the-copied-files)
  - [PHP-FPM configuration check](./multiphp/#php-fpm-configuration-check)
  - [Start and enable](./multiphp/#start-and-enable)
  - [Reload](./multiphp/#reload)
  - [NGINX VirtualHost change](./multiphp/#nginx-virtualhost-change)
  - [Checking running PHP installations](./multiphp/#checking-running-php-installations)
  - [Checking installed PHP versions](./multiphp/#checking-installed-php-versions)
  - [Magento 2 CLI](./multiphp/#magento-2-cli)
  - [Uninstalling additional PHP version](./multiphp/#uninstalling-additional-php-version)
