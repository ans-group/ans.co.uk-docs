---
sidebar_position: 14
sidebar_label: "VPN capacity on ANS dedicated firewalls"
title: VPN capacity on ANS dedicated firewalls
description: A reference for the number of supported VPN connections per firewall type
keywords:
  - ans
  - ukfast
  - firewall
  - network
  - glass
  - vpn
  - capacity
  - ipsec
  - webssl
  - sessions
  - concurrent
---

# VPN capacity on ANS dedicated firewalls

The VPN capacity on your firewall depends on the model of firewall you're using. You can check your firewall model in [ANS Glass](https://ans.glass), and then refer to the list below for the maximum number of concurrent connections for IPsec VPN and WebSSL VPN, depending on whether you have a default configuration or upgraded license:

| Firewall Model                                    | Cisco ASA5505 | Cisco ASA5506X | Cisco ASA5508X | Cisco ASA5512X |
| ------------------------------------------------- | ------------- | -------------- | -------------- | -------------- |
| Concurrent IPsec VPN sessions (default)           | 10            | 10             | 100            | 250            |
| Concurrent IPsec VPN sessions (upgraded license)  | 25            | 50             |                |                |
| Concurrent WebSSL VPN sessions (default)          | 2             | 2              | 2              | 2              |
| Concurrent WebSSL VPN sessions (upgraded license) | 50            | 50             | 100            | 250            |

If you are on a default configuration and need additional VPN capacity, please contact your UKFast Account Manager to discuss upgrading your firewall license.
