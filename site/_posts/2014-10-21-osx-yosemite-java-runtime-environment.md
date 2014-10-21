---
layout: post
tags:
- tech
- osx
title: Java Runtime Environment Error after OS X Yosemite Upgrade
---

After [royally procrastinating](https://twitter.com/fwenzel/status/522928288076152832) the last OS X upgrade, I figured I'd tackle the OS X Yosemite upgrade a little earlier this time, starting with my least critical machine.

Many hints about upgrading have already been written. Still, snags are likely as with every major upgrade of your OS.

For instance, I was just greeted with this error:

![OS X Yosemite Java Runtime Needed](/media/2014/yosemite-jre.png)

Apparently, one of my apps (I am guessing, Vidyo, but I am not sure) requests Java. That's fine, except clicking on "Okay" does nothing, and the "more info" button takes me to an Oracle error page musing on how you should be using Java 8.

Shockingly, installing Java 8 does not make the problem go away.

And the obnoxious popup keeps grabbing the focus so it's really hard to find a solution online too.

A few googles later:

* If you see this, it is likely one of your apps is requiring **Java 6**.
* The obnoxious error message in Yosemite won't help you fix this.
* But you can download and **install Java 6** from the [Apple Support website](http://support.apple.com/kb/DL1572), and it'll make the problem go away.

Enjoy :)