--- 
status: publish
tags: 
- "10100111001"
published: true
title: make error on freebsd ports
type: post
meta: 
  tags: ""
layout: post
---
<img border="0" hspace="5" align="right" src="/media/wp/beastie-rechts.serendipityThumb.gif" alt=""  />When I was just trying to build my KDE 3 internationalization package on FreeBSD 5.2.1, a strange -quite meaningless- message prevented me from that:

<blockquote>
===> Refetch for 1 more times files: kde-i18n-de-3.2.2.tar.bz2
>> kde-i18n-de-3.2.2.tar.bz2 doesn't seem to exist in /usr/ports/distfiles/KDE.
>> Attempting to fetch from http://mirrors.isc.org/pub/kde/stable/3.2.2/src/kde-i18n/.
fetch: kde-i18n-de-3.2.2.tar.bz2: local modification time does not match remote
</blockquote>

and so on... for every mirror.

Trying hard to google for a solution, I didn't find much.

After all I found out that there are some possible reasons:
<ul><li>the computer's time is wrong. check it.</li>
<li>in my case: there was a corrupt part of the file already downloaded.
so go to <pre>/usr/ports/distfiles</pre> and remove the .tar.bz file that's causing the problem. It will be downloaded correctly now.</li></ul>

have fun!
