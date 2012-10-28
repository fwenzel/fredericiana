--- 
status: publish
tags: 
- Tech Talk
published: true
title: Curiosity appeased
type: post
meta: 
  tags: ""
layout: post
---
I know, I know. Curiosity killed the cat. But sometimes when I blog "something fancy", I totally want to know who's looking at it. Or why some things are so popular... (darn image stealers...)

<img src="http://static.flickr.com/7/12364944_14794d1055_t.jpg" alt="Question mark. CC-licensed. From LeoL30, http://flickr.com/photos/lwr/12364944/" class="alignright" />-- Knowing that my RSS feeds get a few thousand hits a week sometimes just isn't enough to know :)

Thank heaven on my ISP's server, I have access to my apache log files.

So, let's find out the hostnames of the people reading my (imaginary) article about <em>someting-fancy</em>.

<code>for ip in `grep&nbsp;<em>something-fancy</em>&nbsp;access.log.current | awk&nbsp;'{print $1}' | sort&nbsp;-u`; do resolveip $ip; done</code>

<blockquote>...
Host name of 128... is 128-...public.oregonstate.edu
Host name of 128... is pxxx.wlan.cs.mu.OZ.AU
Host name of 131... is Cs-xxx.CS.UCLA.EDU
Host name of 147... is ...FSV.CVUT.CZ
Host name of 132... is ...rz.uni-wuerzburg.de
Host name of 210... is ...stu.edu.tw
</blockquote>

You wouldn't believe how much information a hostname can give you. (Or sometimes not.) The usual customer lines don't give you much - however it's interesting what universities people sometimes come from. Who in <a href="http://www.stu.edu.tw/">Taiwan</a>, <a href="http://www.cvut.cz/">Czech</a> or at the <a href="http://www.unimelb.edu.au/">University of Melbourne</a> is reading my blog??

Anyway. Good to know that it's not just the usual search engine bots creating traffic on my blog :)

Curiosity appeased. For a while.
