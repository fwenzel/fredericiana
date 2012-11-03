--- 
status: publish
tags: 
- OSU OSL Crosspost
- Tech Talk
published: true
title: Hot-plugging a SATA drive under Linux
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Hard drives (or controllers, rather) capable of <a href="http://en.wikipedia.org/wiki/Hot_swapping">hot-swapping</a> (that is, plugging and un-plugging a drive into a running system) used to be a feature reserved for expensive professional RAID installations.

With the advent of SATA in the mainstream, that has changed. <em>Supposedly</em> any SATA hard drive can be hot-plugged now. But what if you actually try and nothing happens? Chances are your controller doesn't let the OS know about the newly found drive on its own.

Try this to rescan the SCSI hosts (each SATA port appears as a SCSI bus):

<pre><code>echo "0 0 0" >/sys/class/scsi_host/host&lt;n&gt;/scan</code></pre>

and to remove a drive:

<pre><code>echo x > /sys/bus/scsi/devices/&lt;n&gt;:0:0:0/delete</code></pre>

Replace <code>&lt;n&gt;</code> with the right numbers for your system, respectively.

Also, just to state the obvious, don't do that to a mounted drive, ever. Especially not the one that holds your system partition ;)

<p class="credits">(<a href="http://forums.whirlpool.net.au/forum-replies-archive.cfm/1041574.html">via</a>.)</p>
