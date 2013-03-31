--- 
status: publish
tags: 
- abi
- debian
- mozilla
- netbsd
- osl
- sco
- tech
- unix
- xen
published: true
title: "Xen: NetBSD VM on a Debian Dom0"
type: post
meta: {}

layout: post
---
It's been a while since I have blogged geekiness, but this one is really necessary: Today I installed a test box with an instance of the <a href="http://en.wikipedia.org/wiki/Xen">Xen Virtual Machine Monitor</a>, with Debian Lenny as the Domain 0 (or <em>Device Driver VM</em>, as the researchers at my university like to call it).

The reason was that I have to run a piece of <strong>legacy software</strong> that is in <strong>SCO Unix</strong> binary format, which is incompatible with the (unaltered) Linux kernel. There is the <a href="http://sf.net/projects/linux-abi">linux-abi project</a> whose kernel patches bring SCO binary compatibility to Linux, but I always try to avoid rebuilding the kernel because I won't be able to update it anymore with the distro's means; instead, I have to rebuild the kernel myself when I want to update, and (much worse), before long I am likely to end up in a situation where I am unable to avoid breaking package dependencies -- keeping an up-to-date system should just not be that hard.

Thus the idea was born to run <strong>several virtual machines</strong> on the same hardware, dedicating one of them to the task of running the legacy software, and another one to running the more up-to-date standard services.

However, this still doesn't change the fact that I would have to build a special linux-abi patched kernel, and this time even worse: It would also have to be modified for running in a Xen domain. To save myself that pain, I looked for alternatives and found the <a href="http://www.netbsd.org/docs/compat.html">binary compatibility page</a> in the NetBSD docs, stating that it supports UNIX binaries (including SCO) out of the box (and many more). Furthermore, NetBSD has apparently been <a href="http://www.netbsd.org/ports/xen/howto.html#netbsd-domU">supporting running on Xen</a> since quite a while now.

Installing NetBSD into a Xen VM (following the howtos) is supposedly quite easy. I created an LVM volume on the harddrive to put the new system into, set up that partition as well as a current NetBSD ISO image as virtual devices, and pointed the config file to a special NetBSD installer kernel image for Xen that NetBSD provides. Then I tried to start installing the VM. But, ouch, Xen claims: <em>"incompatible kernel"</em>. Hm. Wasn't that easy after all.

As it turns out, the problem is that current Debian kernels are all compiled with <a href="http://en.wikipedia.org/wiki/Physical_Address_Extension">Intel's physical address extensions</a> <strong>(PAE)</strong> enabled: In short, common 32bit hardware can only address 2^32 bytes of physical RAM, that's about 4GB. For modern systems, this can be a little short, so extensions where built to support more than that. Modern Linux distributions support them and they usually don't harm even if you have less RAM than that; sadly, the stable NetBSD distribution does not support PAE yet, and running two systems on the same physical box that have a <strong>different understanding of how to talk to physical memory</strong> does not work.

But, lucky as I am, just a few weeks ago, NetBSD/Xen hacker <a href="http://www.feyrer.de/NetBSD/bx/blosxom.cgi/nb_20080124_0025.html">Manuel Bouyer has implemented PAE support for NetBSD</a> to an extent that allows it to run on a Xen system with PAE-enabled dom0. Thanks, Manuel!

The respective installation and regular kernel images can be found among the <a href="ftp://ftp.netbsd.org/pub/NetBSD-daily/HEAD/200802160002Z/i386/binary/kernel/">daily builds on the NetBSD FTP server</a>, and if you use these kernel images instead, you'll easily be able to get a NetBSD instance up and running without touching the stock Debian kernel.

As expected, <strong>NetBSD was able to run the SCO binaries</strong>, so far without problems. A few iptables rules on the domain0 will soon be in place to transparently forward requests for this service to the NetBSD VM, so clients will never know that it is not the <em>Linux</em> server itself responding to their request, but a little virtual machine running in the background.
