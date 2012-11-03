--- 
status: publish
tags: 
- bluetooth
- hibernation
- mozilla
- osl
- osx
- sleep
- Tech Talk
- zombie
published: true
title: Zombie-MacBook Wakes Itself up from Sleep
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
<a href="http://www.flickr.com/photos/27403767@N00/219581402"><img src="http://farm1.static.flickr.com/62/219581402_4cd89ec4cc_m.jpg" alt="Zombies Invade San Francisco!" title="Zombies Invade San Francisco!" height="150" width="240" class="alignright" align="right"/></a>For the longest time, I was sending my laptop to <a href="http://en.wikipedia.org/wiki/Hibernate_%28OS_feature%29">"hibernation" mode</a> every night. Why? Not because I particularly mind the minute power consumption it might have while sleeping, but because it would <strong>randomly wake up</strong> during the course of the night. My <strong>"zombie laptop"</strong> would particularly annoy me because it'd log back into my messaging service in my absence (thus prompting people to think I am awake at 3 a.m.), get unnecessarily warm (due to its being closed), and when I opened it back up, it'd not switch its monitor back on (due to a feature that OS&nbsp;X calls <a href="http://www.macosxhints.com/article.php?story=20060607121656766">"clamshell mode"</a>).

Today, I had enough, and after a little more googling, I stumbled across a comment in a <a href="http://www.macosxhints.com/article.php?story=20070729205103490">macosxhints article</a> mentioning <strong>Bluetooth settings</strong>: Apparently, there's a setting for letting bluetooth devices power your Mac up from sleep. As I have a bluetooth-based wireless Mac keyboard, I tried out switching that setting off -- and long story short, it seems to have worked.

If you have the same problem, uncheck the following box in <em>System Settings</em> / <em>Bluetooth</em> / <em>Advanced Settings</em> to give it a shot:

<img src="/media/wp/2009/11/bluetooth-wake.jpg" alt="Bluetooth Wake" title="Bluetooth Wake" class="alignnone size-full wp-image-2497" height="482" width="566"/>

Happy zombie-Mac killing!
