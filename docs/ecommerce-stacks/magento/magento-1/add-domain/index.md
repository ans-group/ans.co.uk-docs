---
sidebar_label: "Adding domain(s) to the stack"
sidebar_position: 6
---

# Adding domain(s) to the stack

To add a domain to your Magento optimised stack please provide us with the following information:

- Domain name
- Magento version
- If this a multi-store domain? If so please provide the main website domain name?
- Will WordPress run within the same document root? If so please provide the path (`wp`, `wordpress` and `blog` for example)
- Is this domain for UAT / Staging or is it going to be used for live traffic?
- What PHP version is required?

We will then setup the following for you:

- NGINX configuration file (`/etc/nginx/conf.d/exampledomain.co.uk.conf`)
- PHP-FPM configuration file (`/etc/php-fpm.d/exampledomain.co.uk.conf`)
- Document Root (`/var/www/vhosts/exampledomain.co.uk/htdocs/`)
- Local System User and password (`exampledomain.co.uk`)
- Database (`exampledomaincouk`)
- Database User and password (`exampleFwpO`)

The credentials will be saved on the server in the `/root/` directory similar to:

```
~]$ /root/magento1.exampledomain.co.uk_setup.txt
```

## Multi-store

You can edit the NGINX configuration file (`/etc/nginx/conf.d/exampledomain.co.uk.conf`) to configure the `MAGE_RUN_CODE` and `MAGE_RUN_TYPE` variables for this domain by uncommenting the following lines:

```ini
#fastcgi_param  MAGE_RUN_CODE default;<br>
#fastcgi_param  MAGE_RUN_TYPE store;
```

To implement this change you need to reload the NGINX service. First, perform a configuration test with the following command:

```
 ~]$ nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

If there are no errors in the configuration test proceed to reload the NGINX service with the following command:

```
 ~]$ nginx -s reload
```
