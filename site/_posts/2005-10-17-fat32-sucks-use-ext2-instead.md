--- 
status: publish
tags: 
- tech
published: true
title: FAT32 sucks. Use ext2 instead.
type: post
meta: 
  tags: ""
layout: post
---
I don't tell you anything new if I mention that <a href="http://en.wikipedia.org/wiki/File_Allocation_Table">FAT32</a> sucks. In my experience, it is simply one of the weakest and slowest known filesystems you can use.

<a title="Opened hard drive, by jonathanlovatt" href="http://flickr.com/photos/jonathanlovatt/46115400/"><img src="http://static.flickr.com/27/46115400_67e630f986_t.jpg" width="100" height="69" align="right"/></a>But, unlike <a href="http://en.wikipedia.org/wiki/NTFS">NTFS</a> or all of the possible Linux filesystems, it is supported widely on most of the current operating systems such as Windows, Linux or even Mac OS&nbsp;X.

For that reason, I used to have my external USB hard drive formatted with FAT32. I didn't really feel comfortable about having 80 Gigs as a FAT32 filesystem, but I wanted to access the drive on Linux and Windows equally so it seemed to be the only possibility.

Two days ago, the drive died. Windows said it was <em>unformatted</em>, Linux gave the (more useful) information, it had a specific error in the superblock information. Tests with both the harddrive and its USB enclosure led to the assumption that the <em>hardware</em> was still intact. However I could not repair the file system that used to be on there - let alone even accessing it at all.

So, eventually I had to re-format the drive and on a fellow student's advice <em>(thanks, hughesw!!)</em> I tried out to use the - fairly new - <a href="http://www.fs-driver.org/">ext2 installable file system driver for Windows</a>.

<!--more-->What should I say? I'm impressed. It works flawlessly like any other "native Windows" file system and it's at lease as fast or even faster than the FAT32 thing I used to have before!

Also, just in case the file system has problems again at some time, I can use a proper <a href="http://en.wikipedia.org/wiki/Fsck">fsck</a> on the file system and - obviously unlike FAT32 - I have the faint hope to retain my data at all!

That being said, the ext2 IFS driver for Windows still seems to be "a little beta" so I would not necessarily trust it for important data (especially when <em>writing</em>, as this can be the most complicated or even devastating process). However, we apparently shouldn't trust FAT32 at all, too ;) So this seems to be a great file system for USB drives that you want to use on different OSes.

Does anybody know if OS&nbsp;X is able to access ext2 file systems, by the way?
