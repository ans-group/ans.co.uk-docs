---
sidebar_label: "FAQs and troubleshooting"
sidebar_position: 5
description: Frequently asked questions and troubleshooting for Cloudflare through ANS
keywords:
  - ans
  - cloudflare
  - faq
  - troubleshooting
---

# FAQs and troubleshooting

## Do I need my own Cloudflare account?

No. Cloudflare through ANS is set up and billed through your existing ANS Glass
client area — you don't need a separate Cloudflare account or billing relationship.

## My site isn't resolving after setup — what should I check?

- Confirm your domain's nameservers point to the values shown in Cloudflare after
  setup or migration.
- Allow time for DNS propagation — this can take longer than expected depending on
  your previous DNS provider's TTL settings. See
  [What factors affect DNS propagation time?](../../domains/dns-propagation/).
- Check that the relevant DNS record exists and is correctly configured in
  Cloudflare — see [Managing DNS records in Cloudflare](../managing-dns-records/).

## Can I migrate from SafeDNS without downtime?

Migrating from SafeDNS copies your existing DNS records into Cloudflare before you
switch nameservers, so there's no need to recreate records manually. Keep the
SafeDNS zone in place until you've confirmed everything resolves correctly through
Cloudflare — see [Migrating from SafeDNS to Cloudflare](../migrating-from-safedns/).

## How do I add someone else to manage my Cloudflare account?

You can add additional account members from the **Cloudflare** area of your ANS
Glass client area — see [Getting started with Cloudflare](../getting-started/).

## Who do I contact if I'm stuck?

Contact ANS support via your Glass client area, and include the site/domain name and
a description of what you're seeing.
