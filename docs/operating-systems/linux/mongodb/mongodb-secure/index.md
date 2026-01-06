---
sidebar_position: 2
sidebar_label: "How to secure MongoDB on CentOS 7"
title: "How to secure MongoDB on CentOS 7"
description: How to Secure MongoDB on CentOS 7
keywords:
  - ans
  - ukfast
  - mongodb
  - secure
  - howto
  - guide
  - tutorial
  - centos
  - centos 7
---

# How to secure MongoDB on CentOS 7

`MongoDB` allows you to restrict database actions by specifying roles for users. The default installation does not include an admin user, so in this tutorial we will create one.

## Creating an admin user

To start, you will need to enable access control on your `MongoDB` instance.

- Ensure your `MongoDB` is not currently running:

```bash
[root@ ~]# systemctl status mongod
● mongod.service - MongoDB Database Server
   Loaded: loaded (/usr/lib/systemd/system/mongod.service; enabled; vendor preset: disabled)
   Active: inactive (dead) since Mon 2020-09-14 16:31:20 BST; 6s ago
     Docs: https://docs.mongodb.org/manual
```

- Start up an instance of `MongoDB` with no authentication:

```bash
mongod --port 27017 --dbpath /var/lib/mongo
```

- Create your admin user with a strong password, and then exit:

```bash
use admin
db.createUser(
  {
    user: 'admin',
    pwd: 'Some1ncrediblystrongpassword!',
    roles: [ { role: 'root', db: 'admin' } ]
  }
)

db.adminCommand( { shutdown: 1 } )
```

- As a `sudo` user, edit the `MongoDB` configuration file to specify that authentication is to be **enabled**. Un-comment the `security` directive and amend as below:

```bash
[root@ ~]# vi /etc/mongod.conf
...
security:
  authorization: "enabled"
```

- Ensure the directory is owned by `mongod`:

```bash
[root@ ~]# chown -R mongod: /var/lib/mongo
```

- Start the service:

```bash
[root@ ~]# systemctl start mongod
```

- Test your new admin user:

```bash
[root@~]# mongo -u admin -p --authenticationDatabase admin
...
> show dbs
admin    0.000GB
config   0.000GB
local    0.000GB
```
