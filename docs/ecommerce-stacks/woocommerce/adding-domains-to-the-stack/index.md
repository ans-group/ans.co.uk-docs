---
sidebar_label: "Adding domain(s) to the stack"
sidebar_position: 1
---

# Adding domain(s) to the stack

To add a domain to your WooCommerce optimised stack please provide us with the following information:

- Domain name
- WordPress version
- Is this domain for UAT / Staging or is it going to be used for live traffic?

We will then setup the following for you:

- NGINX configuration file (`/etc/nginx/conf.d/exampledomain.co.uk.conf`)
- PHP-FPM configuration file (`/etc/php-fpm.d/exampledomain.co.uk.conf`)
- Document root (`/var/www/vhosts/exampledomain.co.uk/htdocs/`)
- Local system user and password (`exampledomain.co.uk`)
- Database (`exampledomaincouk`)
- Database user and password (`exampleFwpO`)

The credentials will be saved on the server in the `/root/` directory similar to:

```
~]$ /root/WooCommerce.exampledomain.co.uk_setup.txt
```
