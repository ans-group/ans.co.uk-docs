---
sidebar_position: 3
sidebar_label: "Run a virus scan"
title: "Run a virus scan"
description: A guide to running a server-wide virus scan on Linux using CLAM
keywords:
  - ukfast
  - ans
  - clam
  - antivirus
  - scan
  - security
  - server
  - clamscan
  - clamav
---

# Run a virus scan

You can run a server wide virus scan using the ClamAV utility. ClamAV is a free and open source antivirus toolkit that allows you to configure on access scanning and also run a virus scan. This guide will only explain how to run a scan. If you would like to configure on demand scanning you can refer to this [ClamAV blog post](http://blog.clamav.net/2016/03/configuring-on-access-scanning-in-clamav.html).

To run a virus scan using the ClamAV toolkit you will use the `clamscan`command. There is a lot of available flags that can be used in conjunction with the scan but the two that will be described here are the `-r` and `-i` flags. The `-r` flag specifies for the scan to run recursively through the directory specified to scan. The `-i` flag specifies to only print infected files. The below command will search through the /home directory and then print the results into a file.

```
  clamscan -r -i /home/ > clamresults.txt
```
