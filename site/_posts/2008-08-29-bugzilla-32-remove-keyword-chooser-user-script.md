--- 
status: publish
tags: 
- bugzilla
- delicious
- greasemonkey
- keyword
- mozilla
- tags
- tech
- userscript
published: true
title: "Bugzilla 3.2: Remove Keyword Chooser User Script"
type: post
meta: 
  _edit_last: "2"
layout: post
---
Second Bugzilla-related user script today: Bugzilla 3.2 introduced a <strong>keyword chooser</strong> that always pops up when you click on the keywords field. Sadly, it keeps you from entering the keywords by hand, even if you know exactly what you want to type. Choosing it from the list and clicking the arrow, then okay takes much longer.

<img src="/media/wp/2008/08/bugzilla-keyword-chooser.jpg" alt="" title="Bugzilla 3.2 Keyword Chooser" width="402" height="161" class="alignnone size-full wp-image-1512" />

So here's another very simple Greasemonkey user script that just reverts to the original behavior of a simple text field:
<a href="http://people.mozilla.com/~fwenzel/files/bugzilla-fix-keywords.user.js">bugzilla-fix-keywords.user.js</a> (click to install)

I really think instead of the current chooser, a simple keyword suggestion feature should be used that works somehow like the del.icio.us tag find-as-you-type feature:

<img src="/media/wp/2008/08/delicious-tag-suggestion.jpg" alt="" title="delicious tag suggestions" width="256" height="165" class="alignnone size-full wp-image-1513" />

That could be another user script (or rather an extension to this simple script here). Anyone feel like making it?

<strong>Update:</strong> This user script of mine has <a href="http://fredericiana.com/2008/08/29/bugzilla-32-commit-button-userscript/">also</a> been deprecated by the fix introduced with <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=452734">bug 452734</a> -- we now have a convenient auto-complete feature, similar to the one I suggested above. Great! Here's a screenshot:

<img src="/media/wp/2008/09/bugzilla-new-keyword-autocomplete.jpg" alt="" title="Bugzilla: New Keyword Auto-Complete" width="489" height="197" class="alignnone size-full wp-image-1527" />
