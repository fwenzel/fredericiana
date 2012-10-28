--- 
status: publish
tags: 
- "10100111001"
published: true
title: "Fighting Wordpress Spam: HashCash modifications"
type: post
meta: 
  tags: ""
layout: post
---
After getting far too much <strong>comment spam</strong> during the last few days, I decided to introduce hopefully effective spam countermeasures to my blog. But at the same time, I wanted the users to lose as little comfort as possible. So I tried to avoid "captchas" as they <a href="http://blog.schockwellenreiter.de/7168">terrificly infringe accessibility</a>.

Therefore, I tried to find a script being totally out of the visitor's sight, and I did:

Today, I patched the original <strong>wordpress <a href="http://elliottback.com/wp/archives/2004/11/29/spam-stopgap-extreme/">hashcash plugin</a></strong> which introduces a really effective way of spam protection: Once someone opens a blog entry, the plugin creates an individual comment key. After pressing the "submit" key, the visitor's browser computes a new value out of the initial key (through a javascript function) and submits this value back to the server.
<!--more-->
So far so good: As spambots usually don't support javascript, the spam check fails and the comment is not allowed.

But I was forced to modify the original script in some points (if you don't want to read about the modifications but only download the patch, <a href="#patch">see below</a>):

<strong>1. Comment moderation</strong>

Usually, the script simply <code>die()</code>s when the spam check fails. I don't liked this behaviour as I don't expect everyone to have JavaScript enabled. Generally spoken, I also want to have comments from <a href="http://lynx.isc.org/">Lynx</a> users!
So I introduced the possibility to have the comments moderated that don't pass the spam test and made this the default.


<strong>2. Remote IP vs. session ID</strong>

When testing, I realized that any of my comments failed the spam test whereas my brother <a href="http://blog.jeanpierre.de/">Jean Pierre</a> didn't have any problems at all.
The problem seemed to lie in my computer setup. I found out that the <em>proxy server structure</em> I use to access the internet impacts the IP address seen by the spam script - and thus, a different IP was used for the initial generation of the spam key and the later spam check. Oops.
So I made it possible to choose between the remote IP and the session ID as the "key seed" and made the latter the default. Everything works flawlessly now.
(Unfortunately, people are supposed to have cookies enabled in their browser, then. If they have not, the comments are moderated automagically (see above), so don't worry ;) ).


<a name="patch"><strong>Now get the patch</strong></a>

I made the modifications to the <a href="http://dev.wp-plugins.org/browser/wp-hashcash/trunk/">wp hashcash trunk</a> from Jan 15th, 2005.

If you've already installed the plugin and want to patch it, <a href="http://www.magenson.de/data/wp-hashcash-mod.patch">get the diff file here</a>.
Or <a href="http://www.magenson.de/data/wp-hashcash-mod.zip">download the modified version</a> of wp hashcash 1.5 and follow the <a href="http://elliottback.com/wp/archives/2004/11/29/spam-stopgap-extreme/">installation instructions</a> with my PHP file instead.


Happy spam fighting! ;)

<!--adsense-->

P.S.: I will submit my patch to the original development branch. Let's see if it's included soon.
