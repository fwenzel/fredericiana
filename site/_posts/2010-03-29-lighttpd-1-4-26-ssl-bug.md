--- 
status: publish
tags: 
- bug
- lighttpd
- ssl
- tech
published: true
title: lighttpd 1.4.26 SSL bug
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
If you noticed an unexpected outage of my blog and all other sites on this web server, I apologize. This morning, I was greeted by a dead lighttpd web server and when restarting it, it decided to give me this error message instead:

<code>2010-03-05 10:23:01: (network.c.529) SSL: error:00000000:lib(0):func(0):reason(0)</code>

Luckily, a little bit of googling showed that this is a <a href="http://blog.sekuritatea.com/index.php/archives/34">bug in lighttpd 1.4.26's SSL interface</a> that can be fixed with this little workaround until a new version is released:

<pre>
cd /tmp
wget http://download.lighttpd.net/lighttpd/releases-1.4.x/lighttpd-1.4.26.tar.gz
tar xzf lighttpd-1.4.26.tar.gz
cd lighttpd-1.4.26

cd src
rm network.c
wget http://redmine.lighttpd.net/projects/lighttpd/repository/revisions/2716/raw/branches/lighttpd-1.4.x/src/network.c
cd ..
./configure && make install
</pre>

As you can see, the server is happily back up and running. Thanks to sekuritatea for the fix.
