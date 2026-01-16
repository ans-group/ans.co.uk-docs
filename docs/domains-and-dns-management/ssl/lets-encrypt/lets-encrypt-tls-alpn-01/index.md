---
sidebar_position: 10
sidebar_label: "Revocation of TLS-ALPN-01 validated certificates"
title: "Revocation of TLS-ALPN-01 validated certificates"
description: Information regarding Let's Encrypt Revocation of TLS ALPN 01 Validated Certificates
keywords:
  - ukfast
  - ans
  - security
  - ssl
  - letsencrypt
  - tls-alpn-01
  - revocation
  - revoke
---

# Let’s Encrypt Revocation of TLS-ALPN-01 validated certificates

## Overview

On **26th January 2022**, `Let’s Encrypt` notified customers via email that on **28th January 2022** they will revoke any certificates issued in the last 90 days and validated by the [TLS-ALPN-01 challenge](https://letsencrypt.org/docs/challenge-types/#tls-alpn-01). Irregularities were discovered in `Let’s Encrypt`’s implementation of the TLS-ALPN-01 challenge, and as such any certificates issued prior to **26th January** using `TLS-ALPN-01` are to be considered mis-issued.

This revocation only affects certificates issued and validated with the `TLS-ALPN-01` challenge. Unless you receive an email regarding this from your ACME SSL provider/client then _**you do not need to take any action**_.

:::warning
You are not impacted if using Certbot, ACME.sh, AutoSSL or SSLit!
:::

## Affected Software Information

:::note
For a more comprehensive, non-exhaustive, list of affected software, please use the following `Let’s Encrypt` link.

- [https://community.letsencrypt.org/t/questions-about-renewing-before-tls-alpn-01-revocations/170449](https://community.letsencrypt.org/t/questions-about-renewing-before-tls-alpn-01-revocations/170449)

Please note that ANS are not responsible for external links, and the inclusion of any external URL should not be interpreted as an endorsement of that site, its content, or any product or service it may provide.
:::

## ANS's Response

ANS encourage any client using this specific validation method, or any of the software listed in [this comprehensive but non-exhaustive link](https://community.letsencrypt.org/t/questions-about-renewing-before-tls-alpn-01-revocations/170449) to make appropriate amendments to their `Let’s Encrypt` validation configuration.

- [Let’s Encrypt Challenge Types](https://letsencrypt.org/docs/challenge-types/)
