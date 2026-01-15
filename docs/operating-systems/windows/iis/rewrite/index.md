---
sidebar_position: 8
sidebar_label: "IIS URL Rewrite module"
title: "IIS URL Rewrite module"
description: A guide to installing and using the IIS URL rewrite module on Windows Server
keywords:
  - ukfast
  - ans
  - windows
  - iis
  - web
  - module
  - rewrite
  - install
  - tutorial
  - guide
---

# IIS URL Rewrite module

## Installing the URL Rewrite module

The IIS URL Rewrite module is an add-in component for IIS that allows an administrator to create rules which can be used to rewrite a URL along with several other functions.

To install the URL Rewrite module on your server, please follow the below guide.

:::note
This guide assumes that you already have IIS installed. If you do not, and are unsure how to do this, please follow our guide: [Installing IIS](../install/).
:::

Firstly, you will need to obtain the URL Rewrite module for IIS, this can be downloaded for free from the link below:

- [IIS URL Rewrite module](https://www.iis.net/downloads/microsoft/url-rewrite)

Once you have obtained the module, please select it from the location which you downloaded it to. Once opened, you should be presented with a licence agreement. Please tick the accept box as below:

![Module Install](../../../operating-systems-images/licenceagreement.png)

Once you have selected the accept box, please click the `Install` button. The installation of the module will begin immediately as below and will confirm once it has completed.

![Module Installing](../../../operating-systems-images/installation.png)

## Accessing the URL Rewrite module

This guide assumes that you have completed the installation steps above, if not, please do so before attempting this stage. To access the URL Rewrite module, please follow the below guide.

Select `Server Manager`, you can do this by selecting `Start` and then selecting `Server Manager` from the list of available applications, or by selecting the `Server Manager` taskbar shortcut.

Once the `Server Manager` has opened, please select `Tools`, and select `Internet Information Services (IIS)` from the resulting menu as below:

![Server Manager](../../../operating-systems-images/servermanager.png)

You will now be presented with the IIS window. Pop out the server instance and then pop out the `Sites` option from the `Connections` pane.
Select the site which you wish to configure URL rewrites for. Once you have done so, locate the URL Rewrite module in the central feature view. Right click on it as below and select `Open Feature` from the resulting context menu.

![Rewrite module selected](../../../operating-systems-images/moduleselected.png)

You will now be presented with the URL Rewrite module as below. Over to the right hand side of the pane, you will see the `Actions` section. From here you can carry out a number of different functions.

![Rewrite Open](../../../operating-systems-images/moduleopened.png)

The URL Rewrite module requires rules to be written for each function you wish to carry out, a guide on how to write these rules can be found at the link below which explains the various different functions and how to implement them.

- [How to write URL Rewrite rules](https://www.iis.net/learn/extensions/url-rewrite-module/creating-rewrite-rules-for-the-url-rewrite-module)
