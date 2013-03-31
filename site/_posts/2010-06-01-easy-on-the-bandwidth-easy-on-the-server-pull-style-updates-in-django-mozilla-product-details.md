--- 
status: publish
tags: 
- django
- library
- mozilla
- osl
- tech
published: true
title: "Easy on the bandwidth, easy on the server: Pull-style updates in django-mozilla-product-details"
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Over on the Mozilla Webdev blog, I just <a href="http://blog.mozilla.com/webdev/2010/06/01/django-mozilla-product-details-because-short-library-names-are-for-wimps/">posted</a> about a new library of ours, <a href="http://github.com/fwenzel/django-mozilla-product-details">django-mozilla-product-details</a>. This tongue twister allows you to periodically update the latest Mozilla product version information as well as language details from our SVN server.

The geeks among you are surely wondering, <em>isn't that going to lead to a lot of useless traffic if the data does not change as frequently as it is being updated?</em>

You are right. Because re-downloading unchanged data is evil and because we like our servers, we are using a fun little trick to keep the data transferred as little as possible:

<del datetime="2010-06-02T08:17:19+00:00">Every time the update script is run, we first issue a HEAD request to the SVN server: A HEAD request is a type of <a href="http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">HTTP</a> request that asks for some location from a server, but instead of receiving the actual data in return (an HTML document, for example, or some binary data), the server only returns the response headers, not the actual data.

From these headers, which are very small, we can read the <em>Last-Modified</em> timestamp and compare that to the time we last updated our local copy of the product data. If the timestamp hasn't changed since then, there's no need for us to download further data.</del>

Instead of blindly downloading the data files on every update, we send the time of our last successful update along to the server, in a <code>If-Modified-Since</code> HTTP request header. If the files have changed since then, the server will send us the updated list, but if nothing has changed in the meantime, the server will just return a "<code>304 Not Modified</code>" status.

This is how we ensure that (almost) no matter how often you choose to update the product data, neither your nor our resources will be wasted.

This is not only a good idea for this specific library: Next time you consume RSS feeds or other "pull" data from various places on the Internet, make sure to query for updates before downloading unnecessary data. Caveat: This method only works if the server can handle an <em>If-Modified-Since</em> header. Servers that serve bogus timestamps or no such header at all leave you no choice but to download and investigate the feed itself.

<strong>Update:</strong> A few readers pointed out that the If-Modified-Since request header would be an even better method to update the data conditionally than an initial HEAD request. They are, of course, right, which is why I <a href="http://github.com/fwenzel/django-mozilla-product-details/commit/d02bc6c">updated</a> the library accordingly. Thanks, everyone!
