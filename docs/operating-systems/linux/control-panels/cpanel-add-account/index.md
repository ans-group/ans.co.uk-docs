---
sidebar_position: 11
sidebar_label: "How to add a new account in WHM"
title: "How to add a new account in WHM"
description: How to Add a New Account in WHM
keywords:
  - ukfast
  - ans
  - cpanel
  - whm
  - domain
  - account
  - control
  - panel
  - tutorial
  - cloud
  - server
  - guide
  - virtual
---

# How to add a new account in WHM

Once you've got your WHM server setup, you're going to want to add an account. In WHM, an account can be thought of as a catch-all term for a domain and associated resources. When you add an account, this creates:

- A `Virtual Host` for your domain.
- A `User` for FTP / SFTP / SSH administration
- A `Control Panel` for your domain, allowing for per user site administration (_email, subdomains, PHP settings etc._)

On the homepage of WHM, you will see a section called "Manage Your Accounts", and a "Create a New Account" button below that:

![Create a New Account Button](../../../operating-systems-images/whm_homepage.JPG)

This will present you with a page to fill in information regarding the account that you're adding. The top section is "Domain Information". Fill in the relevant information for the account you're adding:

:::warning
Avoid adding a domain that is the same as the hostname of the server, as this will break many WHM services.
:::

![Domain Information](../../../operating-systems-images/account_creation_domain_info.JPG)

The next three sections can be left as the defaults:

![Blank Sections](../../../operating-systems-images/account_creation_blanks.JPG)

For the "DNS Settings" section, untick the box labelled "Enable DKIM on this account":

![DNS Settings](../../../operating-systems-images/account_creation_dns.jpg)

For the final section, "Mail Routing Settings", choose the automatic configuration option, then you can click "Create":

![Mail Exchange](../../../operating-systems-images/account_creation_mail.jpg)

You've now added an account to WHM. You can now login, [using the guide here!](../cpanel-connect/#connecting-to-cpanel)
