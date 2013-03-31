--- 
status: publish
tags: 
- osl
- tech
published: true
title: Writing udev rules, short notes
type: post
meta: 
  tags: ""
layout: post
---
Today I was connecting a second USB harddrive to my <a href="http://fredericiana.com/2005/12/16/nslu2-linux-usb-harddrive-spindown/">NSLU2</a>.

What you get is a few interesting effects, among them device IDs (<code>/dev/sda</code>, <code>sdb</code>...) changing depending on the order in which you attach the drives. Plus, I added a USB hub, which makes the device names change anyway.

<img id="image57" src="/media/wp/2006/03/udev-tux.thumbnail.png" alt="udev plus tux, from the udev page" class="alignright" />The solution for the crazily jumping dev nodes is the <a href="http://www.kernel.org/pub/linux/utils/kernel/hotplug/udev.html">udev</a> system, which is part of Linux for quite a while now, but I never really had a need to play with it yet. But the <a href="http://www.reactivated.net/writing_udev_rules.html">howto</a> is pretty nice and easy to apply.

Still, a few notes:

<ul>
	<li>The <code>SYSFS{whatever}</code> rules support wildcards, so that you don't have to write the whole descriptor if you don't want to. For example, "<code>Max*</code>" instead of "<code>Maxtor 6</code>" works totally fine. -- That's especially useful since <code>SYSFS{model}</code> descriptors often seem to be filled up with a couple of spaces at the end.</li>
	<li>Some (all?) USB hard drives in fact don't consider themselves to be USB devices. So in this case defining <code>BUS=="usb"</code> will not result in any device links to be created at all. I had to define <code>BUS=="scsi"</code> instead. You should look at the <code>udevinfo</code> output as suggested in the "writing udev rules" howto, it will tell you exactly what setup is necessary for your device/drive configuration.</li>
</ul>

That's how my two new rules look like (each in one line only):
<code>
BUS=="scsi", KERNEL=="sd*", SYSFS{vendor}=="Maxtor*", SYSFS{model}=="L250R0*", NAME="%k", SYMLINK="usbhd/maxtor250%n"
BUS=="scsi", KERNEL=="sd*", SYSFS{vendor}=="Maxtor*", SYSFS{model}=="Y080P0*", NAME="%k", SYMLINK="usbhd/maxtor80%n"
</code>

If you have any questions, let me know.

If not, have fun :)
