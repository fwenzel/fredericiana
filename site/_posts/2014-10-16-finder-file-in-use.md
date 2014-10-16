---
layout: post
tags:
- tech
- osx
title: OS X Finder Cannot Copy a File Because It Is in Use
---

After I finally upgraded my OS X machine to 10.9 "Mavericks", I was greeted with a new error almost anytime I wanted to copy a video or similar file from my local box to my NAS:

> Finder cannot copy file because the "file is currently in use."

In use? Not by me!

This got particularly obnoxious because Finder would first transfer the entire file (with all the waiting that entails), and only after doing all that it would decide it could not proceed and had to *delete* the perfectly fine file on the target device.

After some googling I found a hint on a [forum thread](https://discussions.apple.com/thread/5512219?start=15&tstart=0) that seemed to go into the right direction: Finder has a **show icon preview** feature which will replace the file icon with a preview frame from the video. If it's a long video, it'll apparently go through an elaborate process to fetch that frame.

![Finder: Icon Preview off](/media/2014/finder-icon-preview-off.png)
![Finder: Icon Preview on](/media/2014/finder-icon-preview-on.png)

In other words, it is **Finder itself** that opens the file and then stumbles over the file being "in use"!

The simple workaround is a right-click on the Finder window, "show view options", then **disable "show icon preview"** and click on "use as defaults" so it applies everywhere going forward.

![Finder: View options, disable show icon preview](/media/2014/finder-view-options.png)

And that's it, we saved OS X from its own overly smart behavior. Thanks, Apple...