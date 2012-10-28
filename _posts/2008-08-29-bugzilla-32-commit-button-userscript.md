--- 
status: publish
tags: 
- bugzilla
- button
- commit
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- userscript
- ux
published: true
title: Bugzilla 3.2 Commit Button Userscript
type: post
meta: 
  _edit_last: "2"
layout: post
---
Last night, <a href="https://bugzilla.mozilla.org">Mozilla's Bugzilla bug tracker</a> was updated to <a href="http://www.bugzilla.org/releases/3.2/new-features.html">Bugzilla 3.2</a> with a lot of UI changes, some of which are improvements, others are not.

One of the things that struck me as weird is how all flags, resolutions, etc. moved to the top of the page, while the "commit" button remained at the bottom, by the comment field. That means to resolve a bug, you need to (including the additional click that is now needed to pick something from the resolutions dropdown list):

<ul>
	<li>Click on the "status" dropdown list</li>
	<li>Click on RESOLVED</li>
	<li>Scroll all the way down the page</li>
	<li>Click on Commit</li>
</ul>

So I decided to throw a quick Greasemonkey user script together to put an additional commit button to the top of the page (just so we can drop the scrolling part), like this:

<img src="/media/wp/2008/08/bugzilla-commit.jpg" alt="" title="Second Bugzilla Commit Button" width="500" height="223" class="alignnone size-full wp-image-1498" />

And here's the script for your enjoyment:
<a href="http://people.mozilla.com/~fwenzel/files/bugzilla-commit.user.js">bugzilla-commit.user.js</a> (click to install)

(Please note, it remotely imports jquery from jquery's google code repository; that's probably something that should change in version 0.2 ;) ).

<strong>Update:</strong> It seems, this patch has been upstreamed and deployed at least on the Mozilla bugzilla instance. That makes this user script obsolete. In a good way :)
