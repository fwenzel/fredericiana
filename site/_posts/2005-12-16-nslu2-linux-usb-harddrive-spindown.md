--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: NSLU2-Linux USB harddrive spindown
type: post
meta: 
  tags: ""
layout: post
---
<img src='/media/wp/thumb-nslu2-Size-In-Context.jpg' alt='NSLU2; source: nslu2-linux yahoo group' class="alignright" />Recently, I bought a Linksys NSLU2 network attached storage device and installed Linux on it. I have it boot over a 64 MB USB flash stick that I had to spare and I connected a ext3-formatted USB harddrive to it. It works flawlessly with Samba, serving the USB drive to all of my client OSes.

However, as I only need the USB harddrive maybe twice a day, I did not want it to run all 24/7. The main reason is, of course, that it wastes electricity, and additionally running all the time might have an unnecessary impact on the longevity of my drive. Especially because it is used only now and then.

Almost all the pages I found about this on the net mentioned that currently (and maybe forever) it is <a href="http://www.nslu2-linux.org/wiki/FAQ/SpinDownUSBHarddisks">impossible to have a spindown time for USB harddrives</a>, due to the SCSI driver emulation in the Linux kernel.

Today, however, I found an interesting <a href="http://groups.yahoo.com/group/nslu2-linux/message/8282">thread in the nslu2-linux mailinglist</a>. Robert Demski has provided a kernel patch as well as a binary package for the OpenEmbedded system (which is the base for the OpenSlug distro).

I managed to patch my openslug image accordingly and now USB spindown with <a href="http://www.lost-habit.com/scsi.html">scsi-idle</a> works flawlessly for me with a Kernel 2.6.15-2. Once it is patched in the main images, you are good to go; If you want to build your own flash image right now, instead, here we go:
<!--more-->
<ul>
	<li>To add scsi-idle spindown functionality to the OpenSlug, we have to set up a cross-compile environment for the NSLU2 as shown on the <a href="http://www.nslu2-linux.org/wiki/Development/HomePage">NSLU2 Development Homepage</a> as well as the <a href="http://www.nslu2-linux.org/wiki/Development/MasterMakefile">Master Makefile</a> documentation.</li>
	<li>Unfortunately, the whole process is very, very poorly documented so that it is pretty hard to find out how to patch the kernel and simply have the flash image rebuilt. But once you get it, it's not that complicated anymore.</li>
	<li>So after we got all required packages, we run <code>make setup</code> followed by <code>make build-openslug-image</code>.</li>
	<li>Then we have to apply <code>kernel-patch-scsi-idle.patch</code> provided in the <a href="http://groups.yahoo.com/group/nslu2-linux/files/Custom%20Executables/">file section of the nslu2-linux yahoo group</a> (member access only...). We find the kernel files in <code>openembedded/packages/linux/nslu2-kernel/<em>$version</em></code>. The patch must be copied in here.</li>
	<li>Now add the patch file name to the BitBake file for your kernel version: <code>nslu2-kernel_<em>$version</em>.bb</code>, located in the <code>packages/linux</code> directory.</li>
	<li>In order to have the kernel rebuilt, we have to remove some files from the <code>stamps</code> directory. This dir contains dummy files that indicate if a specific step was already taken by the make process. We remove the files <code>nslu2-kernel-<em>$version</em>.do_*</code>, so that the whole kernel package will be patched and rebuilt.</li>
	<li>Then run a <code>make build-openslug-image</code> again out of the cross-compile environment's base directory. It should tell you that it compiled the kernel package again and it built a new flash image.</li>
	<li>You will find the flash image(s) in <code>openslug/tmp/deploy/</code>. Please make sure you fetch the right (newest) one as there are most likely at least two images in there.</li>
	<li>With that image you can reflash your NSLU2.</li>
</ul>

Afterwards, you want to install the scsi-idle package also provided in the <a href="http://groups.yahoo.com/group/nslu2-linux/files/Custom%20Executables/">executables section of the nslu2-linux group</a>. Afterwards, you can configure the idle timeouts in <code>/etc/default/scsi-idle</code> and start the corresponding daemon. It should spin down (and up) your hard drive as intended!

<strong>P.S.:</strong> The kernel patch will be included in the main OpenSlug images soon.
<strong>Update:</strong> I also sent in a <a href="http://www.handhelds.org/hypermail/oe/49/4973.html">patch for the OpenEmbedded source tree</a> in order to have the scsi-idle package available in the main tree shortly.
