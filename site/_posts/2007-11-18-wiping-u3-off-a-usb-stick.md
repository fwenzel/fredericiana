--- 
status: publish
tags: 
- tech
- u3
- uninstall
- usb stick
published: true
title: Wiping U3 Off A USB Stick
type: post
meta: {}

layout: post
---
A few months ago, I bought a 4&nbsp;GB USB stick and at the time, I didn't know what it meant that it said <em>"(U3)"</em> in the price list behind it. At home, I realized that the stick had some weird partition on it, resulting in a "CD drive" being mounted along with the actual data partition when I plugged it into a Mac or Linux computer.

After short digging, it turns out <a href="http://en.wikipedia.org/wiki/U3">U3 is a proprietary software</a> made by Sandisk and others intended to allow portable applications on USB drives. This sounds like a good idea, but drawbacks are numerous: For once, it only works on Windows: When you plug in the USB stick, the computer starts working hard and some sort of software called the "Launchpad" is started magically:
<img src='/media/wp/2007/11/u3-starting.jpg' alt='The U3 Launchpad starting' />
This is not only slow, but I can also see fellow students killing me for messing with their computer when they just wanted to copy a file real quick.

Luckily, I got a hint that the U3 software is uninstallable, making my USB drive decently usable on all platforms as expected: Click yourself through the U3 site, <a href="http://u3.com/support/default.aspx#CQ3">download the uninstaller</a> and if you want to be nice, even tell them why you uninstalled it ("I needed the 6 Megabytes", funny):
<img src='/media/wp/2007/11/u3-removal.jpg' alt='U3 Removal' />

Note though that uninstalling U3 will wipe your entire USB stick, so you better make sure you backup everything valuable before you do this. Afterwards, you and your USB stick can finally live happily ever after. :)

By the way: Quality- and speed-wise, Toshiba USB sticks rock.
