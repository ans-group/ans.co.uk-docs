---
sidebar_position: 2
sidebar_label: "How to map a network share"
title: "How to map a network share"
description: A guide to mapping a network share on Windows
keywords:
  - ans
  - ukfast
  - windows
  - network
  - share
  - mapping
  - drive
  - cloud
  - server
---

# How to map a network share

To map a network share, please follow the below guide.

:::note
This guide assumes that you have already configured a network share.
:::

Select `Start`, select `This-PC` or `My Computer` depending on the version of Windows which you are using. In the new window, select `Computer` from the top menu and then select `Add a network location` as below:

![This-PC](../../../operating-systems-images/thispccomputer.PNG)

You will now be presented with the `Add Network Location` wizard. Select `Next`.
The next window will ask you where you want to create this location. Select `Choose a custom network location` as below and select `Next`.

![Choose Custom](../../../operating-systems-images/choosecustom.PNG)

The next page asks you to specify the location in the `Internet or network address` box as below. Enter the address and path of your share, for example `\\server1\remoteshare`, and select `Next`.

![Add location](../../../operating-systems-images/specifylocation.PNG)

You will now be given the option to name this share. Enter a name of your choosing which will allow you to identify the location easily. Once you have done so, select `Next`.

The final pane will confirm that you have created the location. Select `Finish` and you should now be presented with your share as below.

![Share](../../../operating-systems-images/shareadded.PNG)
