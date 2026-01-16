---
sidebar_position: 3
sidebar_label: "eCloud Public Edit CPU"
title: "eCloud Public Edit CPU"
description: Programatic control of your eCloud Public resources
keywords:
  - ans
  - ukfast
  - cloud
  - ecloud
  - public
  - hosting
  - infrastructure
  - vmware
  - CPU
---

# eCloud Public Edit CPU

f resource contention on CPU is noticed and additional resource is required this can be easily scaled within [ANS Portal](https://portal.ans.co.uk/ecloud-public) by selecting the VM in question which will open the below VM configuration page.

![edit cpu](../../ecloud-public-images/edit-cpu/vmConfigLaunched.png)

Within this screen you can drag the CPU slider to increase or decrease the CPU count allocated to this VM specifically. After this has been set you can then apply changes for this to take effect. This can be done while the VM stays online as we allow CPU hot-add on the platform. A reduction of CPU allocation however will require a reboot this is clearly stated before actioned as shown below.

![reboot warning](../../ecloud-public-images/edit-cpu/rebootWarning.png)
