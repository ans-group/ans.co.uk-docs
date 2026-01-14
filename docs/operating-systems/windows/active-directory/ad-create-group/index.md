---
sidebar_position: 2
sidebar_label: "How to create a group in Active Directory"
title: "How to create a group in Active Directory"
description: A guide to creating a group in Windows Active Directory
keywords:
  - ukfast
  - ans
  - windows
  - guide
  - active
  - directory
  - group
  - virtual
  - server
  - admin
  - management
---

# How to create a group in Active Directory

In an Active Directory Environment, you can make use of security groups for applying various configuration and permission changes across the domain. To create new Groups, please follow the below guide.

Log in to the Domain controller using administrator credentials, once logged in, select `Start`, and select `Active Directory Users and Computers` from the available list of applications as below.

![AD Users and Computers](../../../operating-systems-images/adusersandcomputers.PNG)

You will now be presented with the `Active Directory Users and Computers` window. On the left hand side of the window you will see your domain; in this example `contoso.domain`. Please pop out the menu by selecting the pop out arrow next to the domain.
Several more menu items will now be presented. From those new items, right click on the `Users` folder, select `New` and select `Group` as below.

![New Group](../../../operating-systems-images/newgroup.png)

You will now be presented with the `New Object - Group` window as below. In this window enter the desired name for your new group, and select your required group scope and type.

![Group Name](../../../operating-systems-images/newgroupname.png)

With the above fields completed, please select OK and you will now be able to see your new group in the list.
