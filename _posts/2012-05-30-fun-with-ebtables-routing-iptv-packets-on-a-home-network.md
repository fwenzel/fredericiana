--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
published: true
title: "Fun with ebtables: Routing IPTV packets on a home network"
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  pdrp_attributionLocation: end
  aktt_notify_twitter: "yes"
layout: post
---
In my home network, I use IPv4 addresses out of the <strong>10.x.y.z/8 private IP block</strong>. After <strong>AT&T U-Verse</strong> contacted me multiple times to make me reconfigure my network so they can establish a <a href="http://en.wikipedia.org/wiki/Large-scale_NAT">large-scale NAT</a> and give me a private IP address rather than a public one (this might be material for a whole separate post), I reluctantly switched ISPs and now have Comcast. I did, however, keep AT&T for television. Now, U-Verse is an <a href="http://en.wikipedia.org/wiki/IPTV">IPTV provider</a>, so I had to put the two services <strong>(Internet and IPTV) onto the same wire</strong>, which as it turned out was not as easy as it sounds.
<!--more-->

<blockquote><strong title="Too long, didn't read">tl;dr:</strong> This is a "war story" more than a crisp tutorial. If you really just want to see the <em>ebtables</em> rules I ended up using, scroll all the way to the end.</blockquote>

IPTV uses <a href="http://en.wikipedia.org/wiki/IP_multicast">IP Multicast</a>, a technology that allows a single data stream to be sent to a number of devices at the same time. If your AT&T-provided router is the centerpiece of your network, this works well: The router is intelligent enough to determine which one or more receivers (and on what LAN port) want to receive the data stream, and it only sends data to that device (and on that wire).

<figure class="img-label">
<img src="http://fredericiana.com/wp-content/uploads/2012/05/multicast.png" alt="" title="IP Multicast" width="200" height="133" class="alignnone size-full wp-image-4932" /><!--
--><figcaption>Multicast, the way it is supposed to work: The source server (red) sending the same stream to multiple, but not all, receivers (green).</figcaption>
</figure>

Turns out, my <a href="http://dd-wrt.com/">dd-wrt-powered</a> Cisco E2000 router is--out of the box--not that intelligent and, like most consumer devices, will <strong>turn</strong> such <strong>multicast packets</strong> simply into <strong>broadcast packets</strong>. That means, it takes the incoming data stream and delivers it to <strong>all attached ports and devices</strong>. On a wired network, that's sad, but not too big a deal: Other computers and devices will see these packets, determine they are not addressed to them, and drop the packets automatically.

Once your wifi becomes involved, this is a much bigger problem: The IPTV stream's unwanted packets easily satisfy the wifi capacity and keep any wifi device from doing its job, while it is busy discarding packets. This goes so far as to making it entirely impossible to even connect to the wireless network anymore. Besides: Massive, bogus wireless traffic empties device batteries and fills up the (limited and shared) frequency spectrum for no useful reason.

<figure class="img-label">
<img src="http://fredericiana.com/wp-content/uploads/2012/05/broadcast.png" alt="" title="Broadcast" width="200" height="133" class="alignnone size-full wp-image-4939" /><!--
--><figcaption>Suddenly, everyone gets the (encrypted) data stream. Whoops.</figcaption>
</figure>

One solution for this is only to install manageable switches that support <a href="http://en.wikipedia.org/wiki/IGMP_snooping">IGMP Snooping</a> and thus limit multicast traffic to the relevant ports. I wasn't too keen on replacing a bunch of really expensive new hardware though.

In comes <strong>ebtables</strong>, part of <a href="http://en.wikipedia.org/wiki/Netfilter">netfilter</a> (the Linux kernel-level firewall package). First I wrote a simple rule intended to keep all multicast packets (no matter their source) from exiting on the wireless device (eth1, in this case).

<pre><code>ebtables -A FORWARD -o eth1 -d Multicast -j DROP</code></pre>

This works in principle, but has some ugly drawbacks:
<ol>
	<li><code>-d Multicast</code> translates into a destination address pattern that <strong>also covers (intentional) broadcast packets</strong> (i.e., every broadcast packet is a multicast packet, but not vice versa). These things are important and power DHCP, SMB networking, Bonjour, ... . With a rule like this, none of these services will work anymore on the wifi you were trying to protect.</li>
	<li><code>-o eth1</code> keeps us from flooding the wifi, but will do nothing to keep the needless packets sent to <em>wired</em> devices in check. While we're in the business of filtering packets, might as well do that too.</li>
</ol>

So let's create a new VLAN in the dd-wrt settings that only contains the incoming port (here: W) and the IPTV receiver's port (here: 1). We bridge it to the same network, because the incoming port is not only the source of IPTV, but also our connection to the Internet, so the remaining ports need to be able to connect to it still.

<figure class="img-label">
<img src="http://fredericiana.com/wp-content/uploads/2012/05/dd-wrt-vlan.jpg" alt="" title="dd-wrt: New vlan" width="550" height="197" class="alignnone size-full wp-image-4951" /><!--
--><figcaption>dd-wrt vlan settings</figcaption>
</figure>

Then we tweak our filters:

<pre><code>ebtables -A FORWARD -d Broadcast -j ACCEPT
ebtables -A FORWARD -p ipv4 --ip-src ! 10.0.0.0/24 -o ! vlan1 -d Multicast -j DROP</code></pre>

This first accepts all broadcast packets (which it would do by default anyway, if it wasn't for our multicast rule), then any other multicast packets are dropped if their output device is not vlan1, and their source IP address is not local.

With this modified rule, we make sure that any internal applications can still function properly, while we tightly restrict where external multicast packets flow.

That was easy, wasn't it!

<p class="credits">Some illustrations courtesy of Wikipedia.</p>
