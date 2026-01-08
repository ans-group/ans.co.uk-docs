---
sidebar_position: 6
sidebar_label: "Configuring a redirect in IIS"
title: "Configuring a redirect in IIS"
description: A guide to configuring a redirect in IIS
keywords:
  - ukfast
  - windows
  - iis
  - configure
  - redirect
  - setup
  - tutorial
  - guide
---

# Configuring a redirect in IIS

Redirection is helpful in the following situations:

- You change the location of your website and want to redirect users to your new site.
- Your website is under construction and you want part of the site to be unavailable.
- Your content is not located on the webserver.
- You have changed the name of a virtual directory and you want users to be able to access files from the old URL.

To configure a redirect in IIS, please follow the below instructions.

Launch `IIS Manager` on your server by selecting `Server Manager`, then selecting `Tools` and `Internet Information Services Manager`. Once you have opened the IIS Manager, select your site in the `Connections list` and select the `HTTP Redirect` module which should be located in the central field of IIS Manager as below.

![IIS Modules](../../../operating-systems-images/httpredirectmodule.PNG)

The centre field should now present the `HTTP Redirect` options as below.

![IIS HTTP Redirect](../../../operating-systems-images/redirectconfigurationexample.PNG)

Within the field `Redirect requests to this destination` please enter the destination URL which you would like to redirect to. Please ensure that you select the tick box next to this option in order to enable it.

When you have entered the new destination URL, continue to configure the behaviour of the redirect by selecting from the options within the `Redirect Behaviour` section.

Once you have configured all of the redirect options to your requirements, please select `Apply` from the `Actions` pane to the right hand side of the window to apply your redirect.
