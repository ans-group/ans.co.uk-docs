---
sidebar_label: "Disk expansion (eCloud)"
sidebar_position: 3
---

# Disk expansion (eCloud)

This guide covers the process of expanding the size of your disks on our eCloud Public and Private platforms.

In ANS Glass, you will be presented with options to alter your allocation of storage to a virtual machine (VM):

- [Add a new disk to the server](/docs/operating-systems/linux/basics/disk-expansion/add-disk/)
- [Resize the primary disk (suggested)](/docs/operating-systems/linux/basics/disk-expansion/resize-primary-disk/)

As most customers have a simple large `/` partition, the recommended option is to resize the primary disk on the server and perform a `lvextend` on the `/` volume to make it larger. This is the easiest to perform and doesn’t require the creation of new partitions.

If you would like to add custom partitions to your server (to separate `/` and `/home` onto different volumes, for example), you can use the “add a new disk” method and then configure a new Volume Group, Logical Volume, and mount point. **This should only be performed by advanced users.**

Resizing disks should be done with care as it can lead to data loss. If you are uncomfortable with resizing a disk you could add a new separate disk.

:::warning
**For users without Commvault or ANS Backup in place:**

Before resizing any disk or performing any changes to the logical volume configuration on the server, please ensure that you have taken a backup of your data.
:::
