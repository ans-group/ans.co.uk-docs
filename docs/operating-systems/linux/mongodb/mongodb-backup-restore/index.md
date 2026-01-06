---
sidebar_position: 4
sidebar_label: "How to back up & restore a MongoDB database"
title: "How to back up & restore a MongoDB database"
description: How to Back Up & Restore a MongoDB Database
keywords:
  - mongodb
  - backup
  - back up
  - restore
  - howto
  - guide
  - tutorial
---

# How to back up & restore a MongoDB database

## File formats

`MongoDB` uses the `mongodump` tool to export databases. This can export to the following formats:

- **BSON** (Default for data)
- **JSON** (Default for collection metadata)
- **CSV** (specify with `--type csv`)
- **TSV** (specify with `--type tsv`)

**BSON** is the recommended database export format.

## Exporting all databases

To export all databases, `cd` to a directory path of your choosing, and run the following command:

```bash
mongodump
```

This will automatically create a `/dump` folder in that location. Alternatively, specify a folder path with the following command:

```bash
mongodump --out /your/file/path
```

## Exporting a single database

To export a single database, `cd` to a directory path of your choosing, and run the following command:

```bash
mongodump --db=yourdb
```

## Exporting from a remote host

You can use the `mongodump` utility to connect to a remote instance using the below syntax:

```bash
mongodump --host="mongodb.yourdomain.com:27017" <your other dump requirements>
```

## Restoring a MongoDB database

:::warning
If requesting a database restore from ANS Support, please provide the directory for your database dumps. Without this, only `/var/lib/mongodb` would be restored.
:::

To restore from a database backup you will need to use the `mongorestore` command. To import a dump, you just need to specify the location of the restore folder, for example:

```bash
mongorestore dump/
```

This will create the `database` and `collections` specified within the dump data.

To import a _specific collection_ from this dump, you would use the following syntax:

```bash
mongorestore --nsInclude=testdb.orders /dump
```

## Restoring from JSON

Though not recommended, if your dump is in `JSON v2.0` format you can use the `mongoimport` command to import your database:

```bash
mongoimport --db yourdb --file /path/to/database/dump.json
```

If using `JSON v1.0`, you should use the above with the addition of the `--legacy` flag.

## Restoring to a remote host

You can use the `mongorestore` utility to connect to a remote instance using the below syntax:

```bash
mongorestore --host="mongodb.yourdomain.com:27017" <your other import requirements>
```
