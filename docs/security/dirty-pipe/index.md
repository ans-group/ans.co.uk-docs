---
sidebar_label: "CVE-2022-0847 - Dirty Pipe vulnerability"
sidebar_position: 18
---

# CVE-2022-0847 - Dirty Pipe vulnerability

**_Last Updated: 15/03/2022 10:59 AM_**

:::tip
Patched kernels are available via the ANS Public Mirrors.
:::

## Overview

On Monday 7th March 2022, a flaw was found in the way the "flags" member of the new pipe buffer structure was lacking proper initialization in `copy_page_to_iter_pipe` and `push_pipe` functions in the Linux kernel and could thus contain static values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.

| Reference     | Severity | Date       |
| ------------- | -------- | ---------- |
| CVE-2022-0847 | High     | 07/03/2022 |

## Impact assessment

### ANS's response

Patches are currently available for Ubuntu 21.10. ANS encourages all clients to upgrade their kernel to the latest version to mitigate this vulnerability.

We have confirmed that we do not deploy Ubuntu 21.10 or any other interim releases for managed services and thus are not impacted by [Dirty Cow](../dirty-cow/).

### Vulnerable versions

| Distro       | Comment                       |
| ------------ | ----------------------------- |
| CentOS 6.x   | Not vulnerable                |
| CentOS 7.x   | Not vulnerable                |
| CentOS 8.x   | Not vulnerable                |
| Ubuntu 14.04 | Not vulnerable (3.11.0-12.19) |
| Ubuntu 16.04 | Not vulnerable (4.4.0-2.16)   |
| Ubuntu 18.04 | Not vulnerable (4.13.0-16.19) |
| Ubuntu 20.04 | Not vulnerable (5.4.0-9.12)   |
| Ubuntu 21.10 | Vulnerable to CVE-2022-0847   |

## Mitigation

The specific flaw exists in the bionic and focal, but is not currently exploitable due to lack of a flag that was introduced in kernel 5.8. The flaw will be fixed as part of the next round of bionic and focal kernel updates in case some other way of exploiting it is discovered in the future. The hardware enablement kernel for focal, linux-hwe-5.13, was updated to fix this issue in USN-5317-1.

## Fix

### Patched versions

:::note
A reboot is required to load the new kernel.
:::

| Distro       | Comment                  |
| ------------ | ------------------------ |
| Ubuntu 21.10 | linux-image-5.13.0.35.40 |

## Links

- [Ubuntu Security Report](https://ubuntu.com/security/CVE-2022-0847)
