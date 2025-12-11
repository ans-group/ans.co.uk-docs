---
sidebar_label: "Redis"
sidebar_position: 1
---

# Redis

## Magento 2 modules

We recommend you ensure the Magento 2 modules are kept up to date, these can be located here:

### Sessions

```
https://github.com/colinmollenhour/Cm_RedisSession
https://github.com/colinmollenhour/credis
```

### Cache

```
https://github.com/colinmollenhour/Cm_Cache_Backend_Redis
```

## Configure Magento 2 for Redis

You can use the Magento 2 CLI to configure Redis. Please review the below commands before running, you may need to change the host, port and or db values.

### Sessions

```
php bin/magento setup:config:set --session-save=redis --session-save-redis-host=127.0.0.1 --session-save-redis-port=6379 --session-save-redis-log-level=3 --session-save-redis-db=2
```

### Cache

```
php bin/magento setup:config:set --cache-backend=redis --cache-backend-redis-server=127.0.0.1 --cache-backend-redis-port=6380 --cache-backend-redis-db=0
```

### Page cache

```
php bin/magento setup:config:set --page-cache=redis --page-cache-redis-server=127.0.0.1 --page-cache-redis-port=6381 --page-cache-redis-db=1
```

## Redis service

You can find more information on the Redis service [here](../../../../../operating-systems/linux/redis/redis/).
