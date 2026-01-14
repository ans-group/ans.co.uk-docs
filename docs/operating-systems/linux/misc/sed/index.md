---
sidebar_position: 8
sidebar_label: "The sed command"
title: "The sed command"
description: Information and guidance on using the SED command to edit text files in Linux
keywords:
  - ans
  - ukfast
  - server
  - linux
  - sed
  - command
  - files
  - edit
  - text
  - editor
  - cloud
---

# The `sed` command

`sed` is a stream editor, and it can be used to edit text files, with its most common use being to replace occurrences of words in a files. This is extremely helpful in situations where a configuration file has a lot of instances of the same word that needs replacing throughout the file.

For example if you were to copy a configuration to use for a new site and wanted to replace all instances of the original domain with the new domain then you could use this command. The example below replaces all instances of `ukfast.co.uk` with `ukfast.net`:

```
sed 's/ukfast.co.uk/ukfast.net/g' ukfast.co.uk.conf > ukfast.net.conf
```
