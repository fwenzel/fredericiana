--- 
status: publish
tags: 
- hardware
- linux
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- udev
published: true
title: udevinfo on Ubuntu 10.4 "Lucid"
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
The latest versions of Ubuntu do not <a href="http://packages.ubuntu.com/search?suite=lucid&arch=any&mode=filename&searchon=contents&keywords=udevinfo">appear</a> to have the tool <code>udevinfo</code> anymore, which is vital to find information about devices connected to the computer.

There is, however, a new tool called <code>udevadm</code>, and with a little syntax trick you can get it to spit out your familiar udevinfo syntax:

<blockquote><code>udevadm info -a -p `udevadm info -q path -n /dev/sdb`</code></blockquote>

shows:

<pre>Udevadm info starts with the device specified by the devpath and then
walks up the chain of parent devices. It prints for every device
found, all possible attributes in the udev rules key format.
A rule to match, can be composed by the attributes of the device
and the attributes from one single parent device.

  looking at device '/devices/pci0000:00/0000:00:13.2/usb2/2-1/2-1:1.0/host5/target5:0:0/5:0:0:0/block/sdb':
    KERNEL=="sdb"
    SUBSYSTEM=="block"
    DRIVER==""
    ATTR{range}=="16"
    ATTR{ext_range}=="256"
    ATTR{removable}=="1"
(...)

  looking at parent device '/devices/pci0000:00':
    KERNELS=="pci0000:00"
    SUBSYSTEMS==""
    DRIVERS==""
</pre>

If you use this more often and don't like the idea of entering a huge line of code for such a simple command, drop the following into your <code>.bashrc</code> file (all in one line):

<blockquote><code>udevinfo () { udevadm info -a -p `udevadm info -q path -n "$1"`; }</code></blockquote>

Now (after starting a new session or typing <code>source ~/.bashrc</code>), a simple <code>udevinfo /dev/sdb</code> will do the trick.

Also helpful: A long time ago, I wrote a <a href="http://fredericiana.com/2006/03/15/writing-udev-rules-short-notes/">blog post about udev rules</a>, showing what rules I used at the time to have consistent device names for my USB drives, no matter in what order I connect or disconnect them. The devices I mention there are long gone, but I keep going back to that post every time I need to write a new udev rule.
