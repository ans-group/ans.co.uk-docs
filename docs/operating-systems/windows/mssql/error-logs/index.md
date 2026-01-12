---
sidebar_position: 7
sidebar_label: "Reviewing SQL error logs"
title: "Reviewing SQL error logs"
description: A guide to reviewing Microsoft SQL Server error logs
keywords:
  - ans
  - ukfast
  - mssql
  - windows
  - sql server
  - error
  - log
  - review
  - database
  - cloud
  - server
---

# Reviewing SQL error logs

In order to Review MSSQL error logs, please follow the below steps.

:::note
This guide assumes that you already have MSSQL Management Studio installed and that you are connected to your database. If this is not the case and you are unsure of how to go about this, please follow our respective guides on those subjects.
:::

The MSSQL error logs can provide information to help diagnose problems with your databases and surrounding functions within the SQL environment.
To access the MSSQL error logs, pop out the `Management` section within the Object Explorer, then pop out the `SQL Server Logs` section. You will now be presented with a brief list of available logs and their date and timestamps as below:

![Logs in management studio](../../../operating-systems-images/sqlserverlogs.PNG)

To open these logs, please double click on the required file. Do not worry if you select the wrong file, as you will be able to navigate through all log files in the next window.
You will now be presented with the `Log File Viewer` window as below. To the left of the window is the `Select Logs` pane, this pane allows you to include and to exclude different log files from your field of view
(for our example, we have selected the current log only, however including the archive logs, can help when attempting to diagnose historical issues and to establish a pattern.)

![Logs Presented](../../../operating-systems-images/logspresented.PNG)

If you wish to access the logs directly rather than through the MSSQL Management Studio log viewer, you can do so by navigating to the installation directory of MSSQL and entering the log file as below:

![Manual Logs](../../../operating-systems-images/logsinexplorer.PNG)

The majority of the files stored in this directory can be viewed by using a standard text editor such as Notepad.
