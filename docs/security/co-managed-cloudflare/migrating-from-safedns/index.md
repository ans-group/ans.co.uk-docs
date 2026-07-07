---
sidebar_label: "Migrating from SafeDNS to Co-Managed Cloudflare"
sidebar_position: 2
description: How to migrate an existing SafeDNS domain to Co-Managed Cloudflare
keywords:
  - ans
  - cloudflare
  - safedns
  - migration
  - dns
---

# Migrating from SafeDNS to Co-Managed Cloudflare

If your domain is currently managed in [SafeDNS](../../safedns/) and you want to move
it to Co-Managed Cloudflare, ANS provides a guided migration so your existing DNS records carry
over automatically.

## Before you start

- Make sure the site/domain already exists in SafeDNS with its current DNS records —
  these are what will be copied across.
- Choose a low-traffic period if possible. DNS changes can take time to propagate
  fully — see
  [What factors affect DNS propagation time?](../../domains/dns-propagation/).
- Have your domain registrar access ready in case you need to update nameservers
  afterwards.

## Migration steps

1. Log in to Glass and go to **Cloudflare** under the `Services`
   menu.
2. Select the site you want to migrate, then choose **Migrate from SafeDNS**.
3. Review the DNS records that will be copied from SafeDNS into Cloudflare. Confirm
   the migration when you're ready.
4. Once migration completes, update your domain's nameservers to point to Cloudflare
   if you haven't already — Cloudflare will show you the nameservers to use.
5. Monitor your site to confirm everything resolves correctly before decommissioning
   the SafeDNS zone.

## After migrating

- Your domain's DNS records are now managed in Cloudflare rather than SafeDNS — use
  [Managing DNS records in Co-Managed Cloudflare](../managing-dns-records/) going forward.
- Keep the SafeDNS zone in place until you've confirmed the migration is working as
  expected; you can remove it once you're confident the cutover is complete.

If you run into an issue partway through, see
[FAQs and troubleshooting](../faqs-and-troubleshooting/) or contact ANS support.
