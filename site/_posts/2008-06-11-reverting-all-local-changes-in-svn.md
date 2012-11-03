--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- revert
- subversion
- svn
- Tech Talk
published: true
title: Reverting All Local Changes in SVN
type: post
meta: 
  _edit_last: "2"
layout: post
---
Whenever I apply somebody else's big patch to review it, I obviously go ahead and revert the changes to my local Subversion working copy afterwards. Here's the line I use to do it, maybe somebody will find it useful (though I mainly blog it not to forget it myself):

<blockquote><code>svn st -q | awk '{print $2;}' | xargs svn revert</code></blockquote>

(To be honest, I also expect about 17 comments now that tell me how I can do this more efficiently, or what I didn't consider when writing this in about 5 seconds -- so, don't disappoint me, fire away! :) )
