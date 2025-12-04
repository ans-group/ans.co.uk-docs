---
sidebar_label: "Business Continuity Platform"
sidebar_position: 5
---

# Business Continuity Platform

The Business Continuity Platform (or “BCP” / “cluster”) is a highly-available configuration of [Linux](../../operating-systems/linux/) servers, allowing for failover in the event of a node going offline and for balancing workload across more than one server when all members are operational.

More information about the BCP platform is available on our [website](https://www.ans.co.uk/microsoft-business-applications/).

:::note
BCP solutions vary depending on client requirements, so the information provided here may be inaccurate for your individual deployment; however for most standard BCP solutions the principles will remain the same.
:::

There are a number of differences between managing a standalone Linux server, and managing a clustered Linux server, so it would be advisable to read over this documentation before using your cluster for the first time.

:::warning
Do not use the `service` or `systemctl` commands to start or stop [clustered services](./managing-your-cluster/). Doing so will likely cause your cluster to [fence](./fencing-stonith/).
:::

## Content

- [Introduction to BCP](./introduction-to-bcp/)
  - [Two node (active / passive) clusters]()
  - [Four node (active / active) clusters]()
- [Managing your cluster](./managing-your-cluster/)
  - [Service management]()
  - [Resource constraints]()
- [Distributed Replicated Block Device (DRBD)](./distributed-replicated-block-device-drbd/)
  - [Viewing DRBD replication status]()
- [Unison file-level replication](./unison-file-level-replication/)
  - [Configuring Unison]()
  - [Manually performing a synchronisation]()
- [Fencing / STONITH](./fencing-stonith/)
  - [Common causes of accidental fencing]()
  - [eCloud Fence Agent]()
- [Installing, updating, and configuring software](./installing-updating-and-configuring-software/)
  - [Checking whether your nodes match]()
  - [Adding new clustered software]()
- [Split brain](./split-brain/)
  - [Resolution]()
- [Frequently asked questions](./frequently-asked-questions/)
  - [Tips]()
  - [Common questions]()
