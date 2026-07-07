---
sidebar_label: "Managing DNS records in Cloudflare"
sidebar_position: 3
description: How to manage DNS records for a site set up in Cloudflare through ANS
keywords:
  - ans
  - cloudflare
  - dns
  - records
---

# Managing DNS records in Cloudflare

Once a site is set up with Cloudflare through ANS, DNS records for that domain are
managed directly within Cloudflare rather than in Glass.

## Where to manage records

Cloudflare provides its own dashboard for adding, editing, and removing DNS records
(A, AAAA, CNAME, MX, TXT, and others) for your site. Glass is
used to manage the ANS side of the relationship — your package, billing, and account
membership — while day-to-day record changes happen in Cloudflare directly.

## Common tasks

- **Adding a record** — add the record type, name, and target value in Cloudflare,
  choosing whether traffic should be proxied through Cloudflare (orange cloud) or
  DNS-only (grey cloud).
- **Updating a record** — edit the existing record's value, for example if a server's
  IP address changes.
- **Removing a record** — delete records that are no longer needed.
- **Proxied vs. DNS-only records** — proxied records get Cloudflare's performance and
  security features (caching, WAF, DDoS mitigation); DNS-only records simply resolve
  without passing through Cloudflare's network.

## Propagation

DNS changes can take time to fully propagate across the internet. See
[What factors affect DNS propagation time?](../../domains/dns-propagation/) for more
detail on expected timings.

## CNAME onboarding requests

If you need a CNAME-based Cloudflare onboarding path rather than standard nameserver
delegation, raise this with ANS support through Glass Services so the request can be
validated before implementation.

## Getting help

If you're unsure which record type you need, or a change isn't behaving as expected,
see [FAQs and troubleshooting](../faqs-and-troubleshooting/) or contact ANS support
via Glass.
