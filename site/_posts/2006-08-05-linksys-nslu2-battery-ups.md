--- 
status: publish
tags: 
- osl
- tech
published: true
title: "The Battery-buffered Slug: A UPS for the Linksys NSLU2"
type: post
meta: 
  tags: ""
layout: post
---
As you all know (or not, whatever), I am sharing files between all of my computers using a <a href="http://fredericiana.com/2005/12/16/nslu2-linux-usb-harddrive-spindown/">Linksys NSLU2, running OpenSlug</a>.

Recently, however, I had a few problems because the power connection in my apartment was a little unstable. My whole town seems to have a very fuzzy connection, so power outages of a few seconds happen maybe once or twice a months, resetting all non-battery clocks. Until now, I just restarted the Slug, re-mounted everything in the Slug and on the clients, and it worked again until the next outage a few weeks later.

Lately, it turned into a bigger problem: The power did not go off all the way, but it flickered sometimes (read: <em>daily</em>), killing the poor Slug. Every bigger appliance (including "real" computers) didn't have a problem with that, however the Slug couldn't handle it.

So I asked for suggestions on the mailinglist, and Chacko came up with the idea to <a href="http://groups.yahoo.com/group/nslu2-linux/message/14409">connect a few rechargable batteries across the output of the power supply</a>, providing the slug with at least a few minutes of battery backup in case the power goes out, depending on the power consumption of the attached devices etc.

Let's build a custom UPS for the NSLU2!

I made a small sketch of how it is supposed to look like:
<a class="imagelink" href="/media/wp/2006/08/slug-ups.png" title="NSLU2 battery backup"><img id="image88" src="/media/wp/2006/08/slug-ups.png" alt="NSLU2 battery backup" width="300"  class="centered" /></a>
<!--more-->
I got the parts at RadioShack (you can get them on ebay, too, or wherever). This is what I needed:
<ul>
	<li>1 DC power plug (male), size N (don't let them tell you it's another one, I had to go back to get an exchange *sigh*)</li>
	<li>1 DC power jack (female), same size</li>
	<li>1 battery holder for four AA batteries, connected in series. Nice if it is closed (you don't need to get in there often) and a small on/off switch on there is a plus too.</li>
	<li>4 rechargable batteries, type AA, Ni-Cd or Ni-Mh</li>
	<li>some wire to connect all that</li>
	<li>the usual items to solder it all together (solder, soldering iron)</li>
</ul>

<h2>Heat it up!</h2>
Now the actual wiring is really easy. Connect the negative (black) connector of the battery holder to the negative (outer) part of the female connector, together with a short piece of black wire. Now connect the positive (red) connector of the battery holder to the positive (inner) part of the female connector, along with another piece of (red) wire.

Afterwards, solder the other ends of the red and black wire pieces to the male connector, red on the inside, black on the outside.

Close everything (and make sure you didn't produce a short circuit, if you don't want to fry your slug...).

Now you want to make sure when your new cable is plugged between the power adapter and the slug, the slug switches on as expected. If that works, switch it off again.

Now add the batteries. Again, connect power source and batteries, try if the slug works.

Now you can test if the battery backup works: Disconnect the power cord and see if the slug stays on. If so: <strong>Success!</strong> :)

<h2>A few thoughts</h2>
<strong>1) The batteries.</strong> As CN <a href="http://groups.yahoo.com/group/nslu2-linux/message/14467">mentioned</a>, the batteries will never get fully charged. That's good (so they won't explode and whatnot) but it means your "UPS" will not quite last forever, especially if your battery also feeds a harddrive via the USB port. But it should still give you a considerable amount of backup time until the batteries are empty. (We are speaking about tens of minutes).

Also, with Ni-Cd batteries, it could come to a <a href="http://en.wikipedia.org/wiki/Memory_effect">memory effect</a> (voltage depression). However, the NSLU2 wiki mentions the lowest voltage to run the Slug seems to be <a href="http://www.nslu2-linux.org/wiki/HowTo/MakeABatteryPoweredSlug">around 3.5 volts</a>, which I expect to be reached even by batteries that have the characteristics of a "memory effect". Unlike "greedy" devices (like digital cameras etc), the slug might still work flawlessly with a less than ideal battery voltage. Additionally, the typical "memory effect" happens because of over-, not undercharging Ni-Cd batteries. In this case, this should not happen, because the voltage of the power supply (around 5V) is expected to be a little less than the one of four fully charged batteries (around 1.4V each, 5.6V total). If we are lucky, this keeps our batteries healthy for a long time.

For me, this seems to be the perfect solution. Since none of my other computers have UPSes, I can't access any files during a power outage anyway. But for the short power gaps that happen every once in a while (or very often, like in my apartment), the batteries will reliably keep the slug running until the power is back on.

<strong>2) The hard drives.</strong> Since my Slug does not feed the harddrives, I still have to find out what will happen when these become powerless and they are switched back on shortly after. Will they stay mounted? Will I still be able to connect to them without manual maintenance on the Slug? We'll see.

<h2>Acknowledgements</h2>
Thanks to Chacko (CN) for pointing out this simple yet effective possibility. And thanks to <a href="http://dowhaus.com/blog/">Jabba</a> for helping me geek out and doing the soldering part professionally as usual. :)
