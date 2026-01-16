---
sidebar_position: 1
sidebar_label: "Purchasing & renewing"
title: "Purchasing & renewing"
description: Purchasing and renewing SSL certificates from ANS
keywords:
  - ans
  - ukfast
  - domains
  - dns
  - ssl
  - certificates
---

# Purchasing and renewing SSL certificates

This guide covers how to purchase and renew SSL certificates with ANS. Our [guide on the different types of SSL certificates](../types/) available may also be a useful read.

## Purchasing

SSL certificates are available to purchase via [ANS Glass](https://ans.glass).

Select the SSL certificate you want and click `Buy Now`. You’ll be asked to provide some information regarding the organisation responsible for the domain in question. At the end of the purchase process you will be asked to select which validation method you wish to use, in order to prove your legitimate ownership of the domain in question. The three possible validation options are set out below:

- **File Upload** - This is typically the fastest form of validation, but requires you to have access to the webserver currently hosting the domain’s site. You will need to upload a `.txt` file to your website, which must be publicly accessible via the `Protocol` specified, either `HTTP` or `HTTPS`. If you already have an SSL-secured site that is available via `HTTPS`, you should typically choose this option when purchasing the certificate, otherwise leave this on `HTTP`.

  The file will need to be accessible at `http(s)://example.com/.well-known/pki-validation/<MD5 Hash>.txt` - specific instructions are provided in [ANS Glass](https://ans.glass) at the point of purchase.

  This file will need to be present throughout validation, but can be safely removed once the certificate has been issued.

- **DNS Lookup** - You will need to create a new CNAME DNS record for your domain. This will be in the format:

  `_<MD5 Hash>.example.com CNAME <SHA-256 hash (part 1)>.<SHA-256 hash (part 2)>.<uniqueValue>.comodoca.com`

  Full details are provided at point of purchase and, as before, this record can be safely deleted once validation is complete.

- **Email** - An email will be sent to an administrative contact registered for the domain (e.g. `admin@example.com`). You’ll see a list of possible email addresses to choose from in ANS Glass.

  The email will contain a unique validation code and link that are only valid for 30 days. The email can be resent in the event that validation is not completed within this time frame.

Once validation is complete, a ANS support engineer will be in touch if you’ve selected the option for ANS to install the certificate for you. If you’ve chosen to install the SSL certificate yourself, you’ll find a link to the certificate in [ANS Glass](https://ans.glass)

## Renewing

We will send you a number of email alerts in the run up to your SSL certificate expiring. Simply click the link in one of these emails and follow the process to renew your certificate within ANS Glass. Alternatively you can login to ANS Glass and go to `Products and Services` then `SSL Certificates` to check when your certificates are due to expire, and manage their renewal.
