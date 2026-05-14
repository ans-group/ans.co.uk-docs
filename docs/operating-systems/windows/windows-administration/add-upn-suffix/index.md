---
sidebar_position: 1
sidebar_label: "Adding a UPN suffix in Active Directory"
title: "Adding a UPN suffix in Active Directory"
description: A guide to adding a UPN Suffix in Active Directory in Windows
keywords:
  - ukfast
  - ans
  - windows
  - active
  - directory
  - upn
  - suffix
  - add
  - tutorial
  - guide
  - cloud
  - server
---

# Adding a UPN suffix in Active Directory

How to add an alternative UPN suffix (User Principle Name Suffix), the typical reason for making this change is to allow users to login with an alternate domain name.

In order to add a UPN Suffix to your domain, please follow the below guide.

Log in to your domain controller using your domain administrator credentials. Once logged in, select `Start` and select `Active directory Domains and Trusts` as demonstrated below.

![AD domains and trusts](../../../operating-systems-images/addomainsandtrusts.png)

You will now be presented with the active directory domains and trusts window, from this window, please right click on`Active directory domains and Trusts` from the left hand side of the window as below, then select `Properties` from the resultant context menu.

![Active Directory domains and trusts](../../../operating-systems-images/addantcontextmenu.png)

You will now be presented with the UPN Suffixes pane, within this pane, you will see a field named `Alternative UPN suffixes`. Enter your new UPN Suffix in to this field as below:

![Add UPN Suffix](../../../operating-systems-images/enteraltupn.png)

Now select `Add` from the right hand side of the pane and your new UPN Suffix should now be visible in the bottom field of the pane as below. Select `OK` to close the pane.

![Alternative UPN](../../../operating-systems-images/addaltupn.png)

Now that you have added your additional UPN Suffix, you can carry out the below steps to test that it is visible and usable.

Select `Start`, and select `Active Directory Users and Computers` as below:

![AD Users and Computers](../../../operating-systems-images/adusersandcomputers.png)

You will now be presented with the Active Directory Users and Computers window. Please select `Users`. Right click and select `New User`, the New User context box will be presented to you.

In the `User logon name` field, select the drop down arrow to the right hand side and you should see that your new UPN Suffix is now visible as below:

![New Suffix Working](../../../operating-systems-images/newupnselected.png)

The process of adding your new UPN Suffix is now complete. You can repeat the above steps should you wish to add any further UPN Suffix's.
