--- 
status: publish
tags: 
- full
- leopard
- mozilla
- osx
- Tech Talk
- trash
published: true
title: "OSX Leopard: Trash Always Full"
type: post
meta: {}

layout: post
---
Guess I am getting closer to running a well-usable version of Leopard, but I am not quite there yet: Since yesterday, my Trash turns out to be always shown as "full":

<img src='/media/wp/2007/11/trash-always-full.jpg' alt='Leopard Trash Full' />
(Yes, <em>Papierkorb</em> is the German word for "paper bin").

So far, I haven't been able to figure out why this happens -- there's nothing in there, really. I even "<code>sudo rm -rf</code>"-deleted the <code>.Trash</code> folder out of my home folder, but it didn't help. OSX did automatically recreate it (empty!) but the dock icon won't change.

For now, I guess I'll have to live with an "overflowing" trash can -- if you have any hints though what else I could do, a comment would be very much appreciated :)

<strong>Update:</strong> It's fixed! It was a filesystem corruption in the fat32 filesystem. I ran a chkdsk which converted the "undeletable" file into one that I was able to remove. <em>Thanks for pointing me into the right direction, Jean Pierre and Greg!</em>
