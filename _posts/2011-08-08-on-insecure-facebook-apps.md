--- 
status: publish
tags: 
- Mozilla Crosspost
- Tech Talk
published: true
title: On Insecure Facebook Apps
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
I am a fan of Words with Friends, a Scrabble clone made by Zynga (of FarmVille fame). The app's competitive edge is the availability across platforms (iOS and Android). In the same, cross-platform, spirit, they recently started offering a Facebook app, so people can waste their time not only when they are out and about, but also wherever they have access to a full-blown computer. Unfortunately, clicking on the <strong>Words With Friends Facebook app</strong> leads to this screen:

<a href="/media/wp/2011/08/wordswithfriends-insecure.jpg"><img src="/media/wp/2011/08/wordswithfriends-insecure-575x267.jpg" alt="" title="Words with Friends: Insecure Connection" width="575" height="267" class="aligncenter size-large wp-image-4133" /></a>

My Facebook session is SSL-encrypted by default, but Words with Friends requires me to disable this encryption. This is wrong on many levels. Most notably, if I disable "secure browsing" on Facebook altogether, even only for this session, my session cookie will be sent in plain text over the wire (or worse, on Wifi, over the air). If I do this at a coffee shop or airport, this is a great invitation for every evildoer in the general vicinity to hijack my Facebook account.

While I appreciate Facebook's transparency in the matter, I find it upsetting that companies like Zynga wouldn't account for Facebook users on SSL. By encouraging people to access Facebook over an unencrypted connection, they are foolishly endangering user data and are demonstrating an utter disregard for user privacy.

I wish Facebook <strong>enabled SSL encryption by default</strong>, and furthermore <strong>required third party apps</strong> to be served over SSL. You can't have it both ways: Either you don't handle user data, then you don't need to care about encryption. Or you <em>do</em> handle user data (and yes, a session cookie counts!), then you need to properly secure it. I am tired of software makers weaseling themselves out of their self-imposed responsibility.

<strong>Update:</strong> As pointed out in the comments, moving to HTTPS for apps is on <a href="https://developers.facebook.com/blog/post/497/">Facebook's developer roadmap</a>. I appreciate it!
