---
sidebar_position: 1
sidebar_label: "Installing IIS"
title: "Installing IIS"
description: A guide to installing IIS on Windows Server
keywords:
  - ukfast
  - ans
  - windows
  - iis
  - web
  - domain
  - server
  - cloud
  - features
  - host
---

# Installing IIS

In order to install IIS please follow the below process.

- Open `Server Manager` and select `Manage` from the top menu, then select `Add roles and features` as below:

![Add roles](../../../operating-systems-images//addrolesandfeatures.PNG)

- You will now be presented with the add roles and features wizard. The first pane in this wizard is the `Before you begin` pane. This will provide you information on some prerequisite checks which are considered best practice.
- The next tab will present you with the choice to carry out a role/feature-based installation, or a remote desktop services installation. Please choose the first option and select next.
- You will now be taken to the server selection screen. As the name suggests, this page allows you to choose the server on which you wish to install the role/s or feature/s. Make your selection and press `Next`.
- Once the above steps have been taken, you will be presented with the `Roles` selection screen. Scroll down the available choices until you are presented with the `Web Server (IIS)` option. Select this option by clicking on the box next to it as below and select `Next`.

![Choose Web Server Role](../../../operating-systems-images//installiis.PNG)

- The next page which you will be shown is the `Features` pane. This allows you to choose additional features to install along side your chosen role/s. You will notice that some options have already been selected here. This is because they are included with the previously chosen role. Once you are happy with the choices which you have made, please select `Next`.

![Choose Features](../../../operating-systems-images//selectfeatures.PNG)

- You will now be asked to confirm your choices. Check to ensure that all required components are in the list, and select `Install` to begin the installation process.
  The installation progress will be displayed in the next window and will be updated throughout the process. Once the installation has completed the status will change to `Complete`.

![Install](../../../operating-systems-images//installprogresstrimmed.png)

- Once this step has finished, IIS will be installed.
