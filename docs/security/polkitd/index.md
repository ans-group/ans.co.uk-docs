---
sidebar_label: "Polkit security vulnerability CVE-2021-4034"
sidebar_position: 17
---

# Polkit security vulnerability CVE-2021-4034

| Reference     | Severity | Date     |
| ------------- | -------- | -------- |
| CVE-2021-4034 | 7.8      | 25/01/22 |

**_Last Updated: 31/01/22 10:15 AM_**

:::tip
Patched packages for Ubuntu and CentOS 7/8 are now available via the ANS Public Mirrors.
:::

## Overview

On **Tuesday 25th January 2022**, a local privilege escalation was discovered in the **polkit** component in all major Linux distributions. This toolkit is responsible for organising/controlling how non-privileged processes communicate with privileged ones. A vulnerability was discovered in the `pbexec` command in which a specifically crafted environment variable can be leveraged to execute arbitrary code, leading to a local privilege escalation.

- [Red Hat](https://access.redhat.com/security/cve/CVE-2021-4034)
- [Ubuntu](https://ubuntu.com/security/CVE-2021-4034)
- [AlmaLinux](https://errata.almalinux.org/8/ALSA-2022-0267.html)

## ANS's response

Once patches are available, ANS is encouraging all clients to upgrade **polkit** to the latest version, applying the appropriate mitigations where upgrade isn't an option. For our part, ANS is currently working through all our systems to be absolutely sure we are protected.

Our support teams are looking at not only updating those products and services managed by ANS, but are also looking into the wider scope of affected applications, with a view to better informing our clients the best mitigation methods with systems they manage.

## Identification

### Vulnerable versions

:::warning
For CentOS 6x, Ubuntu 14.04 and 16.04, an Extended Security Maintenance Contract with the vendor is required to obtain the patch for CVE-2021-4034
:::

| OS           | Notes                       |
| ------------ | --------------------------- |
| CentOS 6x    | Vulnerable to CVE-2021-4034 |
| CentOS 7x    | Vulnerable to CVE-2021-4034 |
| CentOS 8x    | Vulnerable to CVE-2021-4034 |
| Ubuntu 14.04 | Vulnerable to CVE-2021-4034 |
| Ubuntu 16.04 | Vulnerable to CVE-2021-4034 |
| Ubuntu 18.04 | Vulnerable to CVE-2021-4034 |
| Ubuntu 20.04 | Vulnerable to CVE-2021-4034 |
| Ubuntu 21.10 | Vulnerable to CVE-2021-4034 |
| AlmaLinux    | Vulnerable to CVE-2021-4034 |

### Patched versions

:::note
A reboot is required to apply this patch due to the number of services that rely on this component.
:::

| OS           | Patched Version                         |
| ------------ | --------------------------------------- |
| CentOS 7x    | polkit-0.112-26.el7_9.1.x86_64          |
| Ubuntu 14.04 | policykit-1_0.105-4ubuntu3.14.04.6+esm1 |
| Ubuntu 16.04 | policykit-1_0.105-14.1ubuntu0.5+esm1    |
| Ubuntu 18.04 | policykit-1_0.105-20ubuntu0.18.04.6     |
| Ubuntu 20.04 | policykit-1_0.105-26ubuntu1.24          |
| Ubuntu 21.10 | policykit-1_0.105-31ubuntu0.1           |
| Alma Linux   | polkit-0.115-13.el8_5.1.x86_64.rpm      |

## Manual mitigation

In lieu of a patched version of **polkit**, Red Hat have detailed an alternative method of mitigation, linked below:

- [Red Hat](https://access.redhat.com/security/cve/CVE-2021-4034)
