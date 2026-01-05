---
sidebar_position: 1
sidebar_label: "Network File System (NFS)"
title: "Network File System (NFS)"
description: A guide to using NFS
keywords:
  - ukfast
  - linux
  - install
  - centos
  - cloud
  - server
  - virtual
  - Magent0
  - Magento2
  - Shopware
  - NFS
  - eCommerce
---

# Network File System (NFS)

## Install NFS on client server

You can install NFS on a RPM-based server with the following command:

```
yum install nfs-utils nfs-utils-lib
```

You can install NFS on an Ubuntu server with the following command:

```
apt install nfs-common
```

## Distributed files / folders

It's very important to only use NFS for files / folder which need to be distributed between multiple servers. We strongly advise against having the entire document root of your website on NFS.

### Direct mount point

You can directly mount NFS to the folder within your document root:

```
NFSSERVER/nfsshare/media -> /var/www/vhosts/domain.com/htdocs/media
```

You can do this with the following entry in `/etc/fstab`:

```
cat /etc/fstab | grep -i nfs
```

```
NFSSERVER:/nfsshare/media /var/www/vhosts/domain.com/htdocs/media nfs rw,noatime,nodiratime,async,timeo=1800 0 0
```

```
mount /var/www/vhosts/domain.com/htdocs/media
```

### Symbolic Links

You can use Symbolic Links (symlinks) to link files / folders from your document root to the NFS mount point.

```
ln -s /var/www/vhosts/domain.com/htdocs/media /nfsshare/media
```

## Open file check

You can see all the NFS open files with the following command:

```
lsof -N
```

## Write speed test

Using the `dd` command you can write a file to the local file system and then to the NFS mount point to then compare the speed results. The write speeds over NFS should always be slower

### Local file system

```
dd if=/dev/zero of=/root/testfile bs=1G count=1 oflag=direct
```

```
1073741824 bytes (1.1 GB) copied, 1.12829 s, 952 MB/s
```

```
rm -f /root/testfile
```

### NFS mount point

This write speed test creates the file `/nfsshare/testfile` with NFS being mounted to `/nfsshare/`.

```
dd if=/dev/zero of=/nfsshare/testfile bs=1G count=1 oflag=direct
```

```
1073741824 bytes (1.1 GB) copied, 1.82611 s, 588 MB/s
```

```
rm -f /nfsshare/testfile
```
