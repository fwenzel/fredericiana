--- 
status: publish
tags: 
- applescript
- Mozilla Crosspost
- OSU OSL Crosspost
- python
- Tech Talk
- things
- to-do
published: true
title: "Things-Bugzilla or: Embedding Python into AppleScript"
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
To keep track of my ever-growing to-do list, I am using a fabulous little application called <a href="http://culturedcode.com/things/">"Things"</a>. And most of my work-related to-do items are bugs in <a href="https://bugzilla.mozilla.org">Mozilla's bugzilla bug tracker</a>.

So, me being a geek and all, I quite naturally wanted to integrate the two and wrote a little AppleScript that asks the user for a bugzilla.mozilla.org <strong>bug number</strong>, obtains its <strong>bug title</strong>, and makes a new <strong>to-do item</strong> for it in Things' Inbox folder.

The script is available as a <a href="http://gist.github.com/282373">gist on github</a>. <a href="http://gist.github.com/gists/282373/download">Click here to download it.</a>

If you look at the code, you'll notice that I went ahead and embedded some Python code to the script to do the heavy lifting. The problem with AppleScript is not only that it has a hideous syntax, it also completely lacks a standard library for things like downloading websites and regex-parsing strings. Let's look at it a little closer:

<pre><code>set bugtitle to do shell script "echo \"" &amp; bugzilla_url &amp; "\" | /usr/bin/env python -c \"
import re
import sys
import urllib2
bug = urllib2.urlopen(sys.stdin.read())
title = re.search('&lt;title&gt;([^&lt;]+)&lt;/title&gt;', bug.read()).group(1)
title = title.replace('&amp;ndash;', '-')
print title
\""</code></pre>

<ul>
	<li><code>set bugtitle to do shellscript ""</code> means, assign whatever this shell expression returns to the variable <code>bugtitle</code>. This way, we just need to <code>print</code> our final result to <em>stdout</em> and keep using it in AppleScript.</li>
	<li><code>echo \&quot;&quot; &amp; bugzilla_url &amp; &quot;\&quot; | /usr/bin/env python</code> feeds some input data into the Python script through <em>stdin</em>. We read that a few lines later with <code>sys.stdin.read()</code>. Another method, especially for more than one input values, would be command-line parameters, all the way at the end of the Python block (after the source code).</li>
	<li>Finally, in <code>python -c \"mycode\"</code> the <code>-c</code> marks an inline code block to be executed by the Python interpreter. Other languages, such as Perl, PHP, or Ruby, have similar operating modes, so you can use those as well.</li>
</ul>

If you want to install the Things-Bugzilla AppleScript, make sure to download <a href="http://gist.github.com/282373">the entire Gist</a> as it also contains an install script for your convenience.

