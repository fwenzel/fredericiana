--- 
status: publish
tags: 
- avi
- index
- MPlayer
- tech
published: true
title: Fixing an AVI File Index
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
<div style="width: 226px;" class="wp-caption alignright"><dt class="wp-caption-dt"><a href="http://commons.wikipedia.org/wiki/Image:MPlayer.svg"><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/81/MPlayer.svg/216px-MPlayer.svg.png" alt="MPlayer" title="MPlayer" height="185" width="216"/></a></dt></div>Today, I was watching an .avi file that neither allowed me to forward/rewind nor did it say the right total length of the video. At least, it played fine.

Time to fix the AVI index metadata.

Sadly, none of the tools from the <a href="http://www.transcoding.org/transcode">"transcode"</a> package whose names so conveniently start with "avi..." (<code>avifix</code>, or <code>aviindex</code>, for example) was able to help. But over <a href="http://ubuntuforums.org/showpost.php?p=4296384&postcount=8">here</a>, I found the right command for <a href="http://en.wikipedia.org/wiki/MEncoder">mencoder</a> (part of the MPlayer package, I think) that will take your audio and video stream, leave it untouched, and rewrite a new, but <strong>correctly indexed</strong>, file:

<blockquote><code>mencoder -idx input.avi -ovc copy -oac copy -o output.avi</code></blockquote>

Hope this helps!
