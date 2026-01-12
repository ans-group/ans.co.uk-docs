---
sidebar_position: 6
sidebar_label: "Using a crossover connection"
title: "Using a crossover connection"
description: An in-depth guide to using a crossover connection on Windows
keywords:
  - ans
  - ukfast
  - network
  - crossover
  - connection
  - configure
  - tutorial
  - guide
  - server
  - cloud
---

# Using a crossover connection

If you have a requirement to frequently transfer large volumes of data between 2 servers in your solution it is recommended that you make use of a crossover connection.
Doing so alleviates any latency and throughput issues which can arise from transferring large volumes of data over the server's primary NIC, which can ultimately cause slower response to business critical functions such as web services.

If your solution is hosted with ANS, contact your account manager or service manager, who will be able to arrange for this work to be carried out.

If you host your own solution and wish to configure a crossover connection, please follow the below guide.

### Prerequisites

1.  Ensure you have an available NIC on both servers
2.  Connect both servers using a crossover cable
3.  Ensure you have administrator privileges available to you

## Configuration

### Server 1

Select `Start`, then select `Control Panel` from the list of available applications. Within Control Panel, select `Network and Sharing Centre` as below:

![Network and sharing centre](../../../operating-systems-images/netsharecentre.PNG)

You will now be presented with the Network and Sharing Centre. From this window, please select `Change adapter settings` as below:

![Change adapter Settings](../../../operating-systems-images/changeadapter.PNG)

Right click on your second adapter and select `Properties`. You will now be presented with the NIC properties as below. From this window, select `Internet Protocol Version 4 (IPv4)` from the list and select the `Properties` button.

![V4 properties](../../../operating-systems-images/2012v4props.png)

The IPv4 properties will now be displayed. In this pane, you will see a section relating to the IP address and a section relating to the DNS address as below:

![V4 propentry](../../../operating-systems-images/2012v4propentry.png)

Select the radio button named `Use the following IP address`. Once selected, you will see that the 3 fields below it become editable. At this point, you will need to enter the following information:

- An internal IP address of your choosing (in this case we have used `10.0.0.23`).
- The correct subnet mask for the address (in this case we have used `255.255.255.0`).
- And the default gateway suitable for your chosen IP (in this case we have used `10.0.0.1`).
- Finally, make a note of these details, a you will need to ensure that the subnet mask and default gateway match when configuring the connection on the second server.
  (You may use the details which we have used, as these addresses are internal only) please configure the DNS entry with your normal DNS entries.

Once you have entered the required information, please select `OK`.

### Server 2

Navigate to the Control Panel as done for Server 1. Select `Network and Sharing Centre`, and select `Change adapter settings`. You will now be presented with the connections which are enabled on your server as below.

![2016 network connections](../../../operating-systems-images/2016net2.png)

Again, right click on the second adapter and select `Properties`, within the resulting NIC Properties window, select `Internet Protocol Version 4 (IPv4)` from the list, and select the `Properties` button.

The <nospell>IPv4</nospell> properties will now be displayed, again as with server 1, you will now see a section relating to the IP address and a section relating to the DNS address as below.

![2016 <nospell>IPv4</nospell> properties](../../../operating-systems-images/2016v4propentry.png)

As before, select the radio button named `Use the following IP address`. Once selected, you will see the 3 fields below it become editable. At this point please enter the following information:

- An internal IP address of your choosing (This will need to be in the same range as on Server 1, for this example we have used `10.0.0.24`).
- The identical subnet mask which you used on server 1 (For this example, the subnet mask is `255.255.255.0`).
- The identical default gateway which you used on server 1 (For this example, the default gateway is `10.0.0.1`).

:::tip
Again, you may use these details if you wish when configuring your own connection.
:::

Once you have entered the required information, please select `OK`.

## Testing

To test the connection, you can carry out a simple reachability test from each machine to the other using the IP addresses which you assigned, to carry out this test, please follow the brief guide below:

### Server 1

- Select `Start`, type `cmd` and select the resulting `cmd.exe` icon. This will will open a Command Prompt.
- In the Command Prompt, type `ping 10.0.0.24` and press `Enter`.
- The Command Prompt should now display 4 ping responses with each line stating `Reply from 10.0.0.24: bytes=32 time=1ms TTL=128` as below:

![Ping1](../../../operating-systems-images/2012ping.png)

If you receive the above, this test is successful.

### Server 2

- Select `Start`, type `cmd` and select the resulting `cmd.exe` icon. This will open a Command Prompt.
- In the Command Prompt, type `ping 10.0.0.23` and press `Enter`.
- The Command Prompt should now display 4 ping responses with each line stating `Reply from 10.0.0.23: bytes=32 time=1ms TTL=128` as below:

![Ping2](../../../operating-systems-images/2016ping.png)

If you receive the above, this test is successful.

You can now reconfigure your application to use the IP addresses of the crossover connection to transfer your data via this link.
