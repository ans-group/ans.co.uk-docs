---
sidebar_position: 5
sidebar_label: "Installing Roles and Features on Windows Server"
title: "Installing Roles and Features on Windows Server"
description: A guide to installing new roles and features on Windows
keywords:
  - ukfast
  - ans
  - windows
  - server
  - install
  - roles
  - features
  - cloud
  - tutorial
---

# Installing `Roles and Features` on Windows Server

In order to install `Roles and Features` on your Windows Server, Please carry out the following steps.

Open the `Server Manager`, this can be done via the Server Manager icon next to the Start button, or by selecting the Start menu, right clicking on `This PC` and selecting `Manage`.
You should now be presented with the Server Manager window, from this window, select the `Manage` button in the top right hand corner of the window as below, within this context box, you will be given 5 options. For this guide, please select `Add Roles and Features`.

![Server Manager Add Roles and Features](../../../operating-systems-images/addrolesandfeatures.PNG)

You will now be presented with the `Add Roles and Features Wizard` as below. The first page of the wizard is the `Before You Begin` page. This page outlines a small number of prerequisite recommendations. These recommendations are not compulsory, however it is advised that you ensure these are in place, if you are happy that your server meets these requirements, please select `Next`.

![Add Roles and Features Before you Begin](../../../operating-systems-images/beforeyoubegin.PNG)

The next page asks you to select the installation type. This provides you with the option to select a role or feature based installation, or a Remote Desktop Services installation. In this instance, the default option of "Role-based or feature-based installation" is the suitable option, with this selected, please select `Next`.

![Select installation type](../../../operating-systems-images/selectinstllationtype.PNG)

You will now be presented with the `Select destination server` window. Within this window, you will need to ensure that the `Select a server from the server pool` radio button and your server are selected as below. Once selected, please select `Next`.

![Select destination](../../../operating-systems-images/selectdestination.PNG)

The wizard will now ask you to choose the required roles as below. Within this window, search the `Roles` menu, and select the role/s which you wish to install. Once you have made your selection, select `Next`.

![Select Roles](../../../operating-systems-images/selectserverroles.PNG)

The next window is the `Select features` window as below. Features which are directly related to the roles which you selected on the previous page will automatically be selected here. However you can choose to install additional features if required.

![Select Features](../../../operating-systems-images/selectfeatures.PNG)

Once you have selected the required features, please select `Next`, and you will be asked to confirm the installation selections, on this pane, you will also be given the option to restart the server if required. Once you have reviewed this page, please select `Install` as below:

![confirm selections](../../../operating-systems-images/confirmselections.PNG)

The installation of your chosen `Roles and Features` will now begin and will look similar to the example below. Once the installation is complete this pane will notify you and you can select `Close`.

![install progress](../../../operating-systems-images/installprogress.PNG)

This process can be repeated as and when you need to install any new roles or features on the server.
