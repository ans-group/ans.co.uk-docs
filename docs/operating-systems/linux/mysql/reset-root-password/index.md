---
sidebar_position: 5
sidebar_label: "Reset MySQL root password"
title: "Reset MySQL root password"
description: A basic guide to using the MySQL command line in Linux
keywords:
  - ukfast
  - ans
  - mysql
  - database
  - command
  - line
  - basics
  - tutorial
  - guide
  - linux
  - centos
---

# Reset MySQL root password

## Skip the grants table

The first step to resetting a lost MySQL root password, is to restart your MySQL server with this variable set:

- `skip-grant-tables`

You can do this, by editing the MySQL configuration file usually found here:

```
vim /etc/my.cnf
```

As per the below, add `skip-grant-tables` to your MySQL config:

```
[mysqld]
skip-grant-tables
```

Now that this has been set, you can restart MySQL:

```
systemctl restart mysql
```

And try connecting:

```
mysql
```

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 8
Server version: 10.3.18-MariaDB MariaDB Server

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

## Updating the password

Now that MySQL is running with `skip-grant-tables`, you can update the password with this command:

```sql
UPDATE mysql.user SET Password=PASSWORD('password_here') WHERE User='root';
```

```
MariaDB [(none)]> UPDATE mysql.user SET Password=PASSWORD('password_here') WHERE User='root';
Query OK, 4 rows affected (0.002 sec)
Rows matched: 4  Changed: 4  Warnings: 0
```

Now run `FLUSH PRIVILEGES;` to write the changes to disk:

```
MariaDB [(none)]> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.003 sec)
```

You can now remove the `skip-grant-tables` flag from `/etc/my.cnf`, and restart MySQL:

```
systemctl restart mysql
```
