---
sidebar_position: 3
sidebar_label: "Managing databases & users"
title: "Managing databases & users"
description: A guide to managing MySQL database users
keywords:
  - ukfast
  - ans
  - mysql
  - database
  - users
  - add
  - create
  - reset
  - sql
  - root
  - password
---

# Managing databases & users

This guide outlines some common tasks when it comes to managing your MySQL database and users.

## Reset a normal user's password

Run the following query to change a user's password:

```sql
 UPDATE mysql.user SET Password = PASSWORD("ChooseAStrongPassword") WHERE User="username" ;
 exit
```

## Reset the root user password

Losing your MySQL root password can be a problem. Luckily there is a fairly quick solution to reset the root password with minimal downtime.

Stop MySQL, and start it with the `--skip-grant-tables` option so you can login without the password. Log into MySQL as root:

```console
  service mysql stop
  mysqld --skip-grant-tables
  mysql -u root
```

Run the following query to change the root user password, then exit:

```sql
 UPDATE mysql.user SET Password = PASSWORD("ChooseAStrongPassword") WHERE User="root" ;
 exit
```

Stop and restart MySQL:

```
 service mysql stop
 service mysql start
```

Test logging in with the new password:

```
 mysql -u root -p
```

## To change GRANTS, create new users or modify existing users

Use the commands below:

```sql
  CREATE DATABASE dbname;
  CREATE USER dbuser@00.00.00.00;
  SET PASSWORD FOR dbuser@00.00.00.00= PASSWORD("password");
  GRANT ALL PRIVILEGES ON dbname.* TO dbuser@00.00.00.00 IDENTIFIED BY 'password';
  FLUSH PRIVILEGES;
```

For a guide on a more common CLI commands, please do check out our [MySQL Command Line Basics](../mysql-cli-basics/) guide.
