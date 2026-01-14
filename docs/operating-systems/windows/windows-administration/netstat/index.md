---
sidebar_position: 7
sidebar_label: "Using the netstat command to find port information"
title: "Using the netstat command to find port information"
description: A guide to using the netstat command to find port informaton in Windows Server
keywords:
  - ukfast
  - ans
  - windows
  - network
  - netstat
  - port
  - find
  - tutorial
  - cloud
  - server
---

# Using the `netstat` command to find port information

To run the `netstat` command, you will first need to open a Command Prompt as administrator. To do so, select `Start`, type `cmd`, right click the resultant `cmd.exe` and `Run as Administrator` as below:

![CMD](../../../operating-systems-images/cmdprompt.PNG)

## Finding processes running on a port

In order to find what process is running on a specific port in Windows, you need to utilise the `netstat` command.

In the Command Prompt, type `netstat -ano | find ":Required port number"`, for example, if you wish to find out what process is listening on port 25, you would type `netstat -ano | find ":25"` and hit `Enter`.

The Command Prompt will now display any processes listening on port 25 as below:

![Netstat 25](../../../operating-systems-images/netstatspecificport.PNG)

At the right hand side of the result, you will see a number, this number is a PID (Process Identifier), this number is assigned to a specific process on your server.

To find out what process is assigned the displayed PID, right click on the task bar, and select `Task Manager`. Once task manager has presented itself, select the `Processes` tab and right click on the `Status` title.

This will now display a context box with a number of options as below, please select `PID` from the list.

![Enable PID](../../../operating-systems-images/enablepidviewtrimmed.png)

Now search through the list of PID's to find the one matching the PID listed by your `netstat` command. In this example 844, which as you can see below is occupied by the hMailServer application.

![PID Found](../../../operating-systems-images/identifyportholdingpid.PNG)

This means that port 25 is being occupied by hMailServer, which is as expected.

The `netstat` command can be extended to count the number of connections on a specific port, you can do this by adding `/c` to the end of the command. For example:

```console
netstat -ano | find ":25"` /c
```

## What port is my service listening on?

In order to find out what port a specific service is listening on, you simply use the `netstat` command again, but in a slightly different way.

In the Command Prompt, type `netstat -ano` and press `Enter`.

This will present you with a list of all current connections to and from your server as below:

![Flat netstat](../../../operating-systems-images/netstatdisplay.PNG)

Right click on the taskbar, and select `Task Manager`, select `Processes`, and right click on the `Title` bar. Select `PID` from the resultant list.
Find the PID of the program for which you are trying to find the corresponding port. Now review the connections in `Command Prompt` to find the Correct PID. Look to the left of the Command Prompt on the matching line to see which port that specific PID is using.
