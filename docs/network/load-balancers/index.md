---
sidebar_position: 5
sidebar_label: "Load balancers"
title: Load balancers
description: A guide to ANS loadbalancers including set up, configuration, and deployment
keywords:
  - loadbalancing
  - loadbalancer
  - ukfast
  - ans
---

# Load balancers

Here you can find all the information you need to get started with our load balancers including how to configure and deploy them.

- [Key terms](./key-terms/)
- [Getting started](./getting-started/)
  - [Load balancer overview](./getting-started/#load-balancer-overview)
  - [Target groups](./getting-started/#target-groups)
  - [Targets](./getting-started/#targets)
  - [Listeners](./getting-started/#listeners)
  - [First deployment](./getting-started/#first-deployment)
- [Deploying changes](./deploying-changes/)
- [Components](./components/)
  - [Target groups](./components/#target-groups)
    - [Basic configuration](./components/#basic-configuration)
    - [Cookie settings](./components/#cookie-settings)
    - [Load balancing methods](./components/#load-balancing-methods)
    - [Timeouts](./components/#timeouts)
    - [Monitoring](./components/#monitoring)
    - [SSL settings](./components/#ssl-settings)
    - [Advanced options](./components/#advanced-options)
    - [Saving and deploying](./components/#saving-and-deploying)
  - [Listeners](./components/#listeners)
    - [Basic configuration](./components/#basic-configuration-1)
    - [Binds](./components/#binds)
    - [Additional SSL settings](./components/#additional-ssl-settings)
    - [Advanced options](./components/#advanced-options-1)
    - [Saving and deploying](./components/#saving-and-deploying-1)
  - [Targets](./components/#targets)
    - [Basic configuration](./components/#basic-configuration-2)
    - [Target availability](./components/#target-availability)
    - [Advanced options](./components/#advanced-options-2)
    - [Saving and deploying](./components/#saving-and-deploying-2)
  - [Access IPs](./components/#access-ips)
    - [Adding IPs](./components/#adding-ips)
    - [Removing IPs](./components/#removing-ips)
    - [Deploying](./components/#deploying)
  - [SSLs](./components/#ssls)
    - [Using an ANS SSL](./components/#using-an-ans-ssl)
    - [Using an SSL from elsewhere](./components/#using-an-ssl-from-elsewhere)
    - [Saving and deploying](./components/#saving-and-deploying-3)
  - [Geo IP](./components/#geo-ip)
    - [List type](./components/#list-type)
    - [EU filtering](./components/#eu-filtering)
    - [Adding countries/continents](./components/#adding-countries-continents)
    - [Removing countries/continents](./components/#removing-countries-continents)
    - [Deploying](./components/#deploying-1)
  - [Access controls](./components/#access-controls)
    - [Available conditions](./components/#available-conditions)
    - [Available actions](./components/#available-actions)
    - [Saving and deploying](./components/#saving-and-deploying-4)
- [Common changes](./common-changes/)
  - [Adding a new server behind the load balancer](./common-changes/#adding-a-new-server-behind-the-load-balancer)
  - [Replacing an expired SSL certificate](./common-changes/#replacing-an-expired-ssl-certificate)
  - [Drain traffic from a particular target server](./common-changes/drain-traffic-from-a-particular-target-server)
  - [Temporarily remove a target server from behind the load balancer](./common-changes/#temporarily-remove-a-target-server-from-behind-the-load-balancer)
- [FAQs](./faqs/)
  - [How do I replace an expired certificate?](./faqs/#how-do-i-replace-an-expired-certificate)
  - [How do I drain traffic from a particular target server?](./faqs/#how-do-i-drain-traffic-from-a-particular-target-server)
  - [How can I temporarily take a server out of load to run updates/maintenance?](./faqs/#how-can-i-temporarily-take-a-server-out-of-load-to-run-updates-maintenance)
  - [Why is all my traffic now coming from one IP?](./faqs/#why-is-all-my-traffic-now-coming-from-one-ip)
  - [I’m getting a redirect loop when redirecting to HTTPS, how can I fix this?](./faqs/#im-getting-a-redirect-loop-when-redirecting-to-https-how-can-i-fix-this)
  - [How do I setup SSL passthrough?](./faqs/#how-do-i-setup-ssl-passthrough)
  - [What is the meaning behind the SERVERID cookie?](./faqs/#what-is-the-meaning-behind-the-severid-cookie)
