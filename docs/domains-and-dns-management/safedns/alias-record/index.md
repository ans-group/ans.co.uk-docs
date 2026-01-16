---

sidebar_label: "ALIAS record"
sidebar_position: 9
description: a guide to ALIAS records
keywords:

- ans
- ukfast
- domain
- dns
- cname

---

# ALIAS record

## Why should you use an `ALIAS` record over a `CNAME` record?

`ALIAS` records are used to overcome a limitation of the `CNAME` record. From the [RFC2181](https://datatracker.ietf.org/doc/html/rfc2181#section-10.1):

_10.1. CNAME resource records_

_The DNS CNAME(”canonical name”) record exists to provide the canonical name associated with an alias name. There may be only one such canonical name for any one alias._

Which means you can’t have another record along with a `CNAME` record. For example, this would be an invalid configuration:

```
www.mydomain.example 300 IN CNAME mydomain.example
www.mydomain.example 300 IN TXT "some text"
```

However you can’t just remove all records from your [apex domain](../apex-domain/) when you want to use the `CNAME` record. This would break another RFC from the [Zone authority section](https://datatracker.ietf.org/doc/html/rfc2181#section-6.1):

_The authoritative servers for a zone are enumerated in the `NS` records for the origin of the zone, which, along with a Start of Authority (`SOA`) record are the mandatory records in every zone._

You have a mandatory `NS` and `SOA` record on your [apex domain](../apex-domain/), so if using a `CNAME` too there is an invalid configuration. This is where the `ALIAS` record comes in, to help work around this problem.

If you want to use a domain name that been provided by a CDN / DDoS provider on your [apex domain](../apex-domain/), SafeDNS allows you to set the `ALIAS` record and we will return the address records. For example:

```
example.org 300 IN ALIAS example.com
```

In that example, when you look up `mydomain.example`, we will return the `A` and (if configured) the `AAAA` records of `mydomain.example`.

:::note
The `ALIAS` record is not an official type under the RFC, so where possible you should use the `CNAME` record
:::

#### CLI

```
ans safedns record create mydomain.example --content "mydomain.example.cdn.example.net" --name "mydomain.example" --type "ALIAS"
```
