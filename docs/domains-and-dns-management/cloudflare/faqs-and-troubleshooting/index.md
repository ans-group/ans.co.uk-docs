---
sidebar_label: "FAQs and troubleshooting"
sidebar_position: 5
description: Frequently asked questions and troubleshooting for Co-Managed Cloudflare
keywords:
  - ans
  - cloudflare
  - faq
  - troubleshooting
---

# FAQs and troubleshooting

## Do I need my own Cloudflare account?

No. Co-Managed Cloudflare is set up and billed through your existing Glass account —
you don't need a separate Cloudflare account or billing relationship.

## Which sites are supported by ANS?

ANS support is only available for sites in Co-Managed Cloudflare accounts provisioned by ANS.

## My site isn't resolving after setup — what should I check?

- Confirm your domain's nameservers point to the values shown in Cloudflare after
  setup or migration.
- Allow time for DNS propagation — this can take longer than expected depending on
  your previous DNS provider's TTL settings. See
  [What factors affect DNS propagation time?](../../domains/dns-propagation/).
- Check that the relevant DNS record exists and is correctly configured in
  Cloudflare — see
  [Managing DNS records in Co-Managed Cloudflare](../managing-dns-records/).

## Can I migrate from SafeDNS without downtime?

Migrating from SafeDNS copies your existing DNS records into Cloudflare before you
switch nameservers, so there's no need to recreate records manually. Keep the
SafeDNS zone in place until you've confirmed everything resolves correctly through
Cloudflare — see [Migrating from SafeDNS to Cloudflare](../migrating-from-safedns/).

## How do I request ANS access to help manage my Co-Managed Cloudflare service?

Request access through the Glass Services support process. Do not add ANS staff
members directly in Cloudflare.

## When does billing stop?

Billing stops only when your Cloudflare resources are deleted through Glass.

## What if I cancel my contract but keep Co-Managed Cloudflare active?

If the Co-Managed Cloudflare service is not deleted in Glass, it moves to **Co-Managed
Cloudflare full rate**.

## Who do I contact if I'm stuck?

Contact ANS support via Glass, and include the site/domain name and a description of
what you're seeing.
