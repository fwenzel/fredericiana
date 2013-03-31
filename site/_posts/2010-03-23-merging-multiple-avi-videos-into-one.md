--- 
status: publish
tags: 
- avi
- merge
- tech
- video
published: true
title: Merging multiple AVI videos into one
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
So, you have a bunch of .avi video files (from your cell phone, for example) that you'd like to combine into one (so you can upload the collection to YouTube)?

Here are two options on how to do this. The first one uses a tool from the <a href="http://www.transcoding.org/">transcode</a> package:

<blockquote><code>avimerge -i one.avi two.avi three.avi -o output.avi</code></blockquote>

<code>avimerge</code> is appropriately named, and if it works, it works well. Sometimes, however, it produces out-of-sync audio, which is kind of lame if people are actually, you know, talking in your videos.

Second method to the rescue: <code>mencoder</code> is part of the <a href="http://www.mplayerhq.hu/">MPlayer</a> family and can also concatenate avi files:

<blockquote><code>mencoder -oac copy -ovc copy one.avi two.avi three.avi -o output.avi</code></blockquote>

Note: Both methods are <em>lossless</em>, as neither the video nor audio stream is re-encoded in any way, but they also require all input files to use the same stream formats. If you took the different videos with the same device though, that shouldn't be a problem.
