---
sidebar_label: "Connecting to ANS Veeam Cloud Connect"
sidebar_position: 2
---

# Connecting to ANS Veeam Cloud Connect

1. Open “Veeam Backup & Replication Console” and connect to your Veeam Backup and Replication Server.

2. Navigate to `Backup Infrastructure` > `Service Providers`.

3. Select `Add Provider` or right click and select `Add Service Provider`.

4. **Service Provider** - Type the external DNS address that has been provided to you in the “DNS name or IP address” section.

   - Tick the box “Allow this Veeam Backup & Replication Installation to be managed by the service provider” - this is required for license reporting through our VAC console and also to provide you with licenses if you are purchasing one through ANS. We will not be able to control your Veeam server without these credentials.

   - Select “Next”.

[]

5. Ensure that next to “Verified by” it says “CN=Let’s Encrypt Authority”.

6. If you click on the `Certificate` > `Details` the **Subject** field should be `*.vdraas.ukfast.co.uk`.

[]

7. Select `Add…` in the bottom right to add the credentials provided to you by ANS.

8. Select `Apply`.

[]

9. **Replica Resources** - This section shows you the DRaaS resources provided to you by ANS. Please double check these are correct and get in touch with us if you believe they are not.

10. **Network Extension** - You need to add and configure your “Network Extension Appliances” (NEA). You will need to launch one per Internal Subnet/VLAN that you will be replicating to ANS.

11. Select `Add`.
    - **Host** - Select a Host that you would like the NEA appliance to run off. It must have access to the internal network that this appliance will be used for.
    - **Resource pool** - Select a resource pool for the appliance. If you don’t use these, select the host object.
    - **Datastore** - Select a datastore for the appliance to be stored in.
    - **Network** - Select the internal network for the appliance. This section needs to be different for each appliance, if you are launching multiple.
    - **IP address** - The NEA Appliance needs to be given an internal IP address on the network it is going to be attached to. This can be done manually or via DHCP if you have a server set up.

[]

12. Select `Apply` and then `Next`.

13. **Summary** - Give all of the settings one final check before clicking `Finish`.
