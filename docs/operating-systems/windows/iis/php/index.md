---
sidebar_position: 5
sidebar_label: "Installing PHP for use in IIS"
title: "Installing PHP for use in IIS"
description: A guide to installing PHP for use in IIS
keywords:
  - ukfast
  - ans
  - windows
  - iis
  - php
  - install
  - guide
  - tutorial
  - server
  - net
  - microsoft
---

# Installing PHP for use in IIS

To install PHP, please follow the below steps.

Firstly, please obtain the `Microsoft Web Platform Installer` if you do not currently have it installed, this can be downloaded for free from the following link:

- [Microsoft Web Platform Installer](https://www.microsoft.com/web/downloads/platform.aspx)

Once this has been downloaded, please open the file. You will now be presented with the Web Platform Installer, please select `Products` from the menu on the top banner, then select `Frameworks` from the left hand side of the window. You will now be shown a list of available IIS modules including PHP as below.

![Web Platform Installer](../../../operating-systems-images/frameworkselection.PNG)

Please select the version of PHP which you wish to install and select `Add` as below. Once you have chosen your desired version, please select `Install`.

![Select PHP](../../../operating-systems-images/phpselected.PNG)

You will be provided with a list of pre-requisites for your version of PHP. Select `I Accept` as below.

![Confirm Pre-requisites](../../../operating-systems-images/confirmation.PNG)

The installation process will now begin and you will be presented with the below progress window.

![Install](../../../operating-systems-images/installation.PNG)

Once the process has completed, you will be presented with the below confirmation screen, please select `Finish` to complete the installation.

![Complete](../../../operating-systems-images/complete.PNG)

Now that the installation has been completed, please open IIS Manager, and select your site/s. Within the central module section you should now be able to select PHP Manager as below. This will present information and options related to your PHP installation.

![PHP in IIS](../../../operating-systems-images/phpmanageriis.PNG)
