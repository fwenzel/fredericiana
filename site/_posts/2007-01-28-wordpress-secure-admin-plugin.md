--- 
status: publish
tags: 
- fredericiana
published: true
title: Wordpress Secure-Admin Plugin
type: post
meta: 
  tags: ""
layout: post
---
<img src="http://farm1.static.flickr.com/10/14497366_fc714e4397_t.jpg" alt="Diamond Lock, CC licensed on flickr by mfshadow" class="alignright" />Today I upgraded my blogs to <a href="http://wordpress.org/development/2007/01/ella-21/">Wordpress 2.1</a>, since I hadn't updated them in a little while and I didn't find the time until today.

While the upgrade worked well (and it apparently comes with quite a few MySQL optimizations and other neat features), I realized that my admin pages which I serve via HTTPS now had a "broken key" symbol: All URLs inside the page source code were unencrypted HTTP now, probably because they are now not build relatively to the page URL anymore. Bad side effect: I couldn't upload any files for blog posts anymore since my login cookie didn't work for HTTP (which is not a bug but a feature, obviously ;)).

At first I tried to change the "wordpress URL" in the options to https://... which worked, but that ended up also serving the CSS files and feeds and such on the public page as HTTPS -- leading to unnecessary stress on my little server and, much worse, to a certificate warning for every one of my users who happens not to have imported the <a href="http://cacert.org">CACert</a> root certificate (which, quite frankly, is almost everyone).

After a little research however I found the <a href="http://haris.tv/2007/01/11/wordpress-ssl-plugin-secure-admin-patched-and-working">Wordpress Secure Admin Plugin</a> which is infinitely easy to install and does exactly what it should: It makes sure all URLs in the admin interface are HTTPSed, re-enabling me to log into my blog encryptedly. It also encrypts the login cookie now, reducing the risk of session hijacking.

Another Wordpress plugin on my "must have" list.

<em>(<a href="http://flickr.com/photos/mfshadow/14497366/">lock picture</a> source: CC by-nd licensed by mfshadow on flickr)</em>
