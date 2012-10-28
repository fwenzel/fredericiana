--- 
status: publish
tags: 
- OSU OSL Crosspost
- Tech Talk
published: true
title: Flash video and no sound on OSX
type: post
meta: 
  tags: ""
  _edit_last: "2"
layout: post
---
One of the newer technologies on the web are the flash video players used by <a href="http://video.google.com">Google Video</a> and <a href="http://youtube.com">YouTube</a>.

Every once in a while though, on Mac OS X it can happen that these Flash video players <em>don't have sound</em> anymore.

It is pretty hard to figure out why, and the solution is quite random, but on macosxhints I found a <a href="http://www.macosxhints.com/article.php?story=20060310164835119">comment</a> mentioning that it could be a sampling rate problem:

<ol>
	<li>open <code>/Applications/Utilities/Audio MIDI Setup</code></li>
	<li>check the properties for Built In Output.</li>
	<li>It might be set to <em>96KHz</em>. Change it to <strong>44KHz</strong> and audio in Flash will return immediately.</li>
</ol>

Now, I don't know what software it is messing up that setting, but I am glad it can be fixed.

I am still wondering why the Flash player would care about <strong>MIDI settings</strong>. Obviously it's no MIDI file that is being played as movie sound there.
