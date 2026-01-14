---
sidebar_position: 12
sidebar_label: "How to create an FTP account in cPanel"
title: "How to create an FTP account in cPanel"
description: How to Create an FTP Account In cPanel
keywords:
  - ukfast
  - ans
  - cpanel
  - whm
  - control
  - panel
  - ftp
  - cloud
  - server
  - guide
  - virtual
---

# How to create an FTP account in cPanel

You might need to create FTP accounts in cPanel, so that you and/or your developers can upload and download content from your website.

In order to do this, start by logging into the cPanel account that you want to create the FTP account for. [You can find our guide on this here!](../cpanel-connect/)

Now, navigate to:

```
Files >> FTP Accounts
```

![FTP Accounts](../../../operating-systems-images/ftp_accounts_button.JPG)

You will be looking at this page:

![FTP Account Page](../../../operating-systems-images/ftp_accounts_page.JPG)

Firstly, choose and input a username and password for your account.

The next box is "Directory". Unless the account you're adding should only be allowed to access a specific subdirectory of the site, this can be left as blank. This will allow the FTP user to access all the files in the site's home directory.

The last box is for "Quota". This determines how much bandwidth the FTP account can use. By default, this can be left as unlimited.

Now you can click "Create FTP Account".
