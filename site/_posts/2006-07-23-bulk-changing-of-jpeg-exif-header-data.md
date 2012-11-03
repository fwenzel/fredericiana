--- 
status: publish
tags: 
- OSU OSL Crosspost
- photo
- USA
published: true
title: Bulk changing of JPEG EXIF header data
type: post
meta: 
  tags: ""
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Last week, I was on vacation in New York City where I met a German friend of mine. Both of us brought digital cameras and we got, let's say, pretty trigger happy.

It wasn't till after the vacation that we realized that both of our cameras had mentally stayed where they came from: My camera's time zone was set to Pacific Daylight Time, his to Middle European Summer Time. All in all, this adds up to a difference of 3 or 6 hours respectively to the actual time the picture was taken, and 9 hours between the two cameras. Perfect to find the morning pics between the evening ones and vice versa.

When putting the photos together into a gallery software, this results in a totally messed up order and a pain in the arm to fix it for more than 1.2 gigabytes of pictures.

Searching the internet for a remedy (for the pictures and the headache they made me), I stumbled across a fabulous little tool called <a href="http://www.sentex.net/~mwandel/jhead/">jhead</a>. It is an EXIF header and thumbnail manipulator that flawlessly works also on bigger amounts of files.

Not only is the <a href="http://www.die.net/doc/linux/man/man1/jhead.1.html">syntax</a> quite straightforward and easy to understand, it also has an armada of neat little options for fixing numerous ugly things that may happen to JPEG header files when taking digital photos.

This is what I did:
<code>jhead -ta-6:00 nyc/p*.jpg   # friend's pics
jhead -ta+3:00 nyc/cimg*.jpg   # mine
jhead -n%Y%m%d-%H%M%S nyc/*.jpg    # rename uniformly
</code>

Besides the time zone issue, I was also able to automatically rename the files according to the (now correct) timestamp so that the pictures taken by different cameras now have uniform file names and can easily be sorted by name.

Thank you for saving a few hours of my life, jhead.
