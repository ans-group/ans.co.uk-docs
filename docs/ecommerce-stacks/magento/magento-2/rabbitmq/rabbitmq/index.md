---
sidebar_label: "RabbitMQ"
sidebar_position: 1
---

# RabbitMQ

## Install RabbitMQ

RabbitMQ is available from the `rabbitmq_rabbitmq`-server repository, this repository can be installed with the following command:

```
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | sudo bash
```

You also need the `rabbitmq_erlang` repository so you can install `erlang`:

```
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | sudo bash
```

RabbitMQ and `erlang` can then be installed with the command:

```
yum install rabbitmq-server erlang --enablerepo=rabbitmq_erlang,rabbitmq_rabbitmq-server
```

### `rabbitmq-env.conf`

You need to create the file `rabbitmq-env.conf` before starting RabbitMQ:

For external access, replace `127.0.0.1` with the servers IP address.

```
printf "HOSTNAME=localhost\nNODE_IP_ADDRESS=127.0.0.1\nNODENAME=rabbit@localhost" > /etc/rabbitmq/rabbitmq-env.conf
```

## Start RabbitMQ

You can start the RabbitMQ service with the command:

```
systemctl start rabbitmq-server
```

#### Start on boot

You can enable `rabbitmq-server` on boot after installing it with this command:

```
systemctl enable rabbitmq-server
```

### Enable and use the RabbitMQ management console

```
rabbitmq-plugins enable rabbitmq_management
chown -R rabbitmq:rabbitmq /var/lib/rabbitmq/
```

#### Create user

Replace `rmqadminuser` with your chosen username and `rmqadminuserpassword` with your desired password.

```
rabbitmqctl add_user rmqadminuser rmqadminuserpassword
rabbitmqctl set_user_tags rmqadminuser administrator
rabbitmqctl set_permissions -p / mqadmin ".*" ".*" ".*"
```

#### Create user

You can now visit the RabbitMQ management console and login on port `15672`:

You need to ensure port `15672` is open for your IP address on the firewall

```
http://[server-IP]:15672/
```
