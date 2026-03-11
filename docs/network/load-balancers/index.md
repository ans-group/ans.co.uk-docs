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
  - [Target groups](./components/target-groups)
    - [Basic configuration](./components/target-groups/#basic-configuration)
    - [Cookie settings](./components/target-groups/#cookie-settings)
    - [Load balancing methods](./components/target-groups/#load-balancing-methods)
    - [Timeouts](./components/target-groups/#timeouts)
    - [Monitoring](./components/target-groups/#monitoring)
    - [SSL settings](./components/target-groups/#ssl-settings)
    - [Advanced options](./components/target-groups/#advanced-options)
    - [Saving and deploying](./components/target-groups/#saving-and-deploying)
  - [Listeners](./components/listeners)
    - [Basic configuration](./components/listeners/#basic-configuration)
    - [Binds](./components/listeners/#binds)
    - [Additional SSL settings](./components/listeners/#additional-ssl-settings)
    - [Advanced options](./components/listeners/#advanced-options)
    - [Saving and deploying](./components/listeners/#saving-and-deploying)
  - [Targets](./components/targets)
    - [Basic configuration](./components/targets/#basic-configuration)
    - [Target availability](./components/targets/#target-availability)
    - [Advanced options](./components/targets/#advanced-options)
    - [Saving and deploying](./components/targets/#saving-and-deploying)
  - [Access IPs](./components/access-ips)
    - [Adding IPs](./components/access-ips/#adding-ips)
    - [Removing IPs](./components/access-ips/#removing-ips)
    - [Deploying](./components/access-ips/#deploying)
  - [SSLs](./components/ssls)
    - [Using an ANS SSL](./components/ssls/#using-an-ans-ssl)
    - [Using an SSL from elsewhere](./components/ssls/#using-an-ssl-from-elsewhere)
    - [Saving and deploying](./components/ssls/#saving-and-deploying)
  - [Geo IP](./components/geo-ip)
    - [List type](./components/geo-ip/#list-type)
    - [EU filtering](./components/geo-ip/#eu-filtering)
    - [Adding countries/continents](./components/geo-ip/#adding-countriescontinents)
    - [Removing countries/continents](./components/geo-ip/#removing-countriescontinents)
    - [Deploying](./components/geo-ip/#deploying)
  - [Access controls](./components/access-controls)
    - [Available conditions](./components/access-controls/#available-conditions)
    - [Available actions](./components/access-controls/#available-actions)
    - [Saving and deploying](./components/access-controls/#saving-and-deploying)
- [Common changes](./common-changes/)
  - [Adding a new server behind the load balancer](./common-changes/#adding-a-new-server-behind-the-load-balancer)
  - [Replacing an expired SSL certificate](./common-changes/#replacing-an-expired-ssl-certificate)
  - [Drain traffic from a particular target server](./common-changes/#drain-traffic-from-a-particular-target-server)
  - [Temporarily remove a target server from behind the load balancer](./common-changes/#temporarily-remove-a-target-server-from-behind-the-load-balancer)
- [FAQs](./faqs/)
  - [How do I replace an expired certificate?](./faqs/#how-do-i-replace-an-expired-certificate)
  - [How do I drain traffic from a particular target server?](./faqs/#how-do-i-drain-traffic-from-a-particular-target-server)
  - [How can I temporarily take a server out of load to run updates/maintenance?](./faqs/#how-can-i-temporarily-take-a-server-out-of-load-to-run-updates-maintenance)
  - [Why is all my traffic now coming from one IP?](./faqs/#why-is-all-my-traffic-now-coming-from-one-ip)
  - [I’m getting a redirect loop when redirecting to HTTPS, how can I fix this?](./faqs/#im-getting-a-redirect-loop-when-redirecting-to-https-how-can-i-fix-this)
  - [How do I setup SSL passthrough?](./faqs/#how-do-i-setup-ssl-passthrough)
  - [What is the meaning behind the SERVERID cookie?](./faqs/#what-is-the-meaning-behind-the-severid-cookie)
