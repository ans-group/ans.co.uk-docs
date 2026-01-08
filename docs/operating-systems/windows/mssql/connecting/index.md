---
sidebar_position: 3
sidebar_label: "Connecting to a Microsoft SQL Server instance"
title: "Connecting to a Microsoft SQL Server instance"
description: A guide to connecting to a Microsoft SQL Server instance
keywords:
  - ukfast
  - ans
  - mssql
  - sql server
  - database
  - connecting
  - microsoft
  - windows
  - tutorial
  - guide
---

# Connecting to a Microsoft SQL Server instance

:::note
In order to connect to a Microsoft SQL Server instance, you will first need to ensure that you have a version of MSSQL Management Studio installed on your workstation. If you do not currently have a version installed, you can obtain one for free from the following link:

- [Microsoft SQL Server Management Studio](https://msdn.microsoft.com/en-us/library/mt238290.aspx)
  :::

In order to connect to the instance, you will need to select `Start`, then navigate to `Microsoft SQL Server Management Studio` as below, and select it from the list of available apps.

![SSMS](../../../operating-systems-images/startssmsopen1.PNG)

You will now be presented with the `SQL Server Management Studio`, in most instances, a pane called `Connect to Server` should present itself in which you will enter your connection details. If however this does not present itself, please select `Connect` from the object explorer on the left hand side of the window. This will launch the `Connect to Server` pane as below.

![Login](../../../operating-systems-images/login.PNG)

In order to connect to the instance, you will need to enter the correct connection details in to the `Connect to Server` pane as has been demonstrated above.

:::note
Windows Authentication may not be enabled on your instance. If this is the case, you will need to use the `SA` Credentials to authenticate instead. In order to do this, you simply need to select the arrow next to the `Authentication` field, and select "SQL Server Authentication" then enter your SA credentials in the user name and password fields below.
:::

Once you have entered the required details, please select `Connect`.

SQL Server Management Studio will now log you in and you will be able to see your SQL instance within the Object Explorer as below.

![Logged in](../../../operating-systems-images/loggedin1.PNG)

You should now be connected to your database and you now have the ability to administer the instance in the same way that you would be able to if you were logged directly in to the database server.
