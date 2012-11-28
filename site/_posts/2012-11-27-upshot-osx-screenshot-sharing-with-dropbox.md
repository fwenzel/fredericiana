---
layout: post
title: Meet UpShot, Screenshot Sharing via Dropbox on OS X
tags:
- tech
- mozilla
---

Ways to share screenshots on the Internet are [a dime a dozen][services].

I used [Skitch][skitch] happily for quite a while. But after their acquisition by *Evernote*, they recently changed their share URLs to a ridiculously ugly, **108** character long (!) monstrosity. I own a number of my own domains, and not only does my screenshot sharing tool keep me from using my domains, but it also gives me URLs that look like I facerolled my keyboard? No way!

In addition, Evernote made it hard to share the URL *to the image itself*, rather than a *webpage showing the image on it*. This may help their revenue, but unnecessarily hampers the recipients' ability to use the images I share with them.

After a while, I was fed up with it, so I looked around for alternatives. I found [TinyGrab][tinygrab], which works with OS X's screenshot function. I can even upload the files to my own server, but only using unencrypted FTP, which is scarily insecure.

[CloudApp][cloudapp] is also nice, but their for-pay plan was a little overkill for my needs.

Finally [GrabBox][grabbox] has a great approach: It uses Dropbox (which I already have) to quickly share screenshots. The chance of using my own domain with it, however, is pretty slim.

So I made a thing.

[services]: https://www.google.com/search?q=screenshot+sharing
[skitch]: http://www.skitch.com/
[tinygrab]: http://tinygrab.com/
[cloudapp]: http://www.getcloudapp.com/
[grabbox]: http://grabbox.devsoft.no/


Enter UpShot
------------
I built **UpShot**, a simple (Python-based) OS X application that does the following:

* It hangs out in your OS X statusbar, waiting for you to take a screenshot
* when you do, it moves that file to the Dropbox public directory
* and copies the URL to the file into your clipboard automatically

![UpShot menu in the status bar](/media/2012/upshot-menu.png)

After a few weeks of tinkering with it on and off, I am happy to have released the first version: **UpShot 0.9**. (Why not 1.0? Read on.)

Contributions welcome
---------------------
The first version seems to work great for me. However, I am sure there are bugs or more or less obvious things missing.

My most attentive readers may also have noticed that this first version does not yet actually support *your own domain name*. The code exists, but I will need to write a blog post about it, so I am waiting to call it version 1.0 until that's done!

If you want to give it a shot, I suggest you install it, try to break it, peruse the code and shudder at my PyObjC skills -- and then **please contribute issues and pull requests** to the [UpShot github project][github].

UpShot is open source and licensed under a BSD license!

[github]: https://github.com/fwenzel/upshot/issues

Try UpShot now!
---------------
I compiled UpShot as an OS X app and put a standard .dmg file up on github:

> **[Download UpShot][download]**

I tested it on OS X 10.7. You only need to have [Dropbox installed][db] and off you go:

* Download the DMG file, double click to open
* drag the UpShot app into your ``/Applications`` directory
* go to the Applications directory and start UpShot from there. UpShot will show up in your status bar in the top right corner of the screen.
* Then go ahead and take a screenshot (CMD+3 or CMD+4) and witness it being shared automatically!

[download]: https://github.com/fwenzel/upshot/downloads
[db]: http://db.tt/0F4SoxMp

**Hope you like it! Let me know what you think!**
