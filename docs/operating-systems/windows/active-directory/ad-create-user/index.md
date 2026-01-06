---
sidebar_position: 1
sidebar_label: "How to create a user in Active Directory"
title: "How to create a user in Active Directory"
description: A guide to creating a new user in Windows Active Directory
keywords:
  - ukfast
  - ans
  - windows
  - active directory
  - active
  - directory
  - server
  - vm
  - user
  - ad
  - virtual
---

# How to create a user in Active Directory

- If your solution makes use of an Active Directory Domain Services (Domain Controller) server, then you will need to create a Domain User account for each user that you wish to have access to servers on the Domain. Local user accounts created on individual servers, will not be suitable as they will only allow access to the machine which they were created on.
- To create a Domain User in Active Directory, please follow the below guide.

Log on to the Domain Controller with domain administrator credentials, once logged on, open "Active Directory Users and Computers", you can do this by selecting `Start`, and then selecting `Active Directory Users and Computers` from the list of available applications as below.

![AD Users and Computers](../../../operating-systems-images/adusersandcomputers1.PNG)

You will now be presented with the `Active Directory Users and Computers` window as below.

![Users and Computers](../../../operating-systems-images/usersandcomputersopen.PNG)

In the left hand section of the window, you will see your domain, in this example `contoso.domain`, please pop out the menu by selecting the pop out arrow, and you will be presented with a number of extra folders, from the extra folders, please select `Users` as below.

![Users](../../../operating-systems-images/users.PNG)

Right click on the `Users` folder, and select `New`, then `User` as below.

![New Users](../../../operating-systems-images/rightclicknewuser.PNG)

You will now be presented with a `New Object - User` window as below. In this window, enter details for your user, and then enter the desired logon name in the `User Logon name:` box, then select `Next`.

![New user create](../../../operating-systems-images/newuser.PNG)

You will now be prompted to enter a password for your new user as below, you will need to enter the password twice to ensure that the password has not been typed incorrectly. You can also set basic options for the user account here. Once you have entered a password, and have chosen the required options, please select `Next`.

![New User Password](../../../operating-systems-images/newuserpassword.PNG)

You will now be presented with a summary pane as below, please review the details presented, once you have confirmed that they are correct, please select `Finish`.

![Summary](../../../operating-systems-images/finish.PNG)

You have now finished the process for creating a Domain User. This process can be repeated for each user that you require.
