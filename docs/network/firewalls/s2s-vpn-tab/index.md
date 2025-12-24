---
sidebar_position: 11
sidebar_label: "Site To Site VPN dashboard"
title: Site to Site VPN Dashboard
description: A guide to site-to-site VPN administration and set up
keywords:
  - ukfast
  - ans
  - firewall
  - vpn
  - setup
  - site-to-site
  - ipsec
  - ip
---

# Site To Site VPN dashboard

On the VPN tab of the editor, click the `Details` button on the **Site to Site** Section.

![Site to Site Dashboard](../../networking-images/editor2_s2s_dash.PNG)

This screen displays information about the currently configured site-to-site VPNs on your firewall. There is also the option to create a site-to-site VPN by clicking the `Add New` button at the top of the page.

## Existing connections

You can see the peer IP and connection status for VPNs configured on the firewall. If the VPN is connected you can force a termination of the tunnel by clicking the `Rekey Connection` button. If you click
the `Edit` button you are then given the option to change the Peer IP and/or Pre-shared key in use on the tunnel.

![Edit Peer IP](../../networking-images/editor2_change_peer_ip.PNG)

Enter the peer IP and PSK into the boxes provided and click `Update`.

Please note, the change is not made to the firewall until you click `Apply Changes`.

## Creating a new Site to Site VPN

If you click the `Add New` button at the top of the page you can configure a new site-to-site VPN on your firewall.

![New S2S VPN](../../networking-images/editor2_config_new_s2s.PNG)

### Required elements:

#### Name

Each VPN needs to have a unique name. This name is administrative and will be used to reference the VPN.

#### Peer IP

This is the public IP or the remote IPsec device where the VPN will be terminating.

#### PSK

This is the pre-shared key that will be used on both ends of the VPN to authenticate the tunnel at establishment.

#### Zones to be accessed

Please select which zones on your firewall you would like to be able to access over the VPN. This can be further restricted to individual servers by editing the access lists later.

#### Remote subnets

Please enter the remote subnets (encryption domains) that will be accessed over the VPN.

#### IKE version (IKEv2 is recommended)

Select the IKE version to be used on the VPN. This setting needs to match at both ends of the VPN as the version are not interoperable.

When these fields are completed please click `Next`.

### IKEv1 options

#### Phase 1

![New S2S VPN v1P1](../../networking-images/editor2_ikev1_p1.png)

Select the required encryption, Diffie-Hellman group and hashing for Phase 1. This will need to match the settings on the remote end.

#### Phase 2

![New S2S VPN v1P2](../../networking-images/editor2_ikev1_p2.png)

Select the required encryption, Diffie-Hellman group and hashing for Phase 2. This will need to match the settings on the remote end.

The next screen will be an overview of the VPN settings you have chosen, to send the config to the firewall click `Configure VPN`.

### IKEv2 options

#### Phase 1

![New S2S VPN v2P1](../../networking-images/editor2_ikev2_p1.png)

Select the required encryption, Diffie-Hellman group and hashing and PRF value for Phase 1. This will need to match the settings on the remote end.

#### Phase 2

![New S2S VPN v2P2](../../networking-images/editor2_ikev2_p2.png)

Select the required encryption, Diffie-Hellman group and hashing for Phase 2. This will need to match the settings on the remote end.

The next screen will be an overview of the VPN settings you have chosen, to send the config to the firewall click `Configure VPN`.

:::note
If you require assistance with this, simply give the ANS Support Team a call, or raise a Priority Support Ticket and we'll be happy to advise/help.
:::
