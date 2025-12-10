---
sidebar_label: "Varnish"
sidebar_position: 11
---

# [Varnish](https://vinyl-cache.org/)

Varnish is recommended for Full Page Caching with Magento2. Website performance is greatly increased when using Varnish.

Traffic flow on a single server with Varnish is typically:

- Port 80 (Varnish) -> Port 8080 ([NGINX](../../../../operating-systems/linux/nginx/)) -> [PHP-FPM](../../../../operating-systems/linux/php-fpm/)
- Port 443 ([NGINX](../../../../operating-systems/linux/nginx/)) - Port 80 (Varnish) -> Port 8080 ([NGINX](../../../../operating-systems/linux/nginx/)) -> [PHP-FPM](../../../../operating-systems/linux/php-fpm/)

---

- [Varnish](./varnish/)
  - [Install Varnish](./varnish/#install-varnish)
    - [Version 7.0](./varnish/#version-70)
      - [CentOS](./varnish/#centos)
      - [Ubuntu](./varnish/#ubuntu)
      - [`DAEMON_OPTS`](./varnish/#daemon_opts)
  - [Example `VCL`](./varnish/#example-vcl)
  - [Configuration test](./varnish/#configuration-test)
  - [Start Varnish](./varnish/#start-varnish)
    - [Start on boot](./varnish/#start-on-boot)
  - [Reload Varnish](./varnish/#reload-varnish)
  - [Restart Varnish](./varnish/#restart-varnish)
  - [Version check](./varnish/#version-check)
  - [`Varnishlog`](./varnish/#varnishlog)
    - [Monitor for purge requests](./varnish/#monitor-for-purge-requests)
    - [Monitor HTTP response code (Example 503)](./varnish/#monitor-http-response-code-example-503)
    - [Filter `varnishlog` by IP address](./varnish/#filter-varnishlog-by-ip-address)
  - [Generate VCL in Magento 2](./varnish/#generate-vcl-in-magento2)
  - [Set Varnish for FPC in Magento 2](./varnish/#set-varnish-for-fpc-in-magento2)
  - [Health check](./varnish/#health-check)
    - [Health check status](./varnish/#health-check-status)
  - [Cache static files](./varnish/#cache-static-files)
  - [Too many restarts](./varnish/#too-many-restarts)
  - [HIT/MISS headers](./varnish/#hitmiss-headers)
  - [`cacheable="false"`](./varnish/#cacheablefalse)
  - [Exclude domain from cache](./varnish/#exclude-domain-from-cache)
  - [Exclude URI from cache](./varnish/#exclude-uri-from-cache)
  - [HTTP -> HTTPS redirect](./varnish/#http---https-redirect)
  - [Custom 503 error page](./varnish/#custom-503-error-page)
    - [Custom error page for all sites](./varnish/#custom-error-page-for-all-sites)
    - [Custom error page for a single site](./varnish/#custom-error-page-for-a-single-site)
  - [Load balancing](./varnish/#load-balancing)
    - [`import directors`](./varnish/#import-directors)
    - [Create/add backends](./varnish/#createadd-backends)
    - [Directors](./varnish/#directors)
    - [Set backend](./varnish/#set-backend)
  - [Purge cache](./varnish/#purge-cache)
  - [SSL termination](./varnish/#ssl-termination)
  - [SSL offloading](./varnish/#ssl-offloading)
- [Default VCL config](./ans-vcl)
