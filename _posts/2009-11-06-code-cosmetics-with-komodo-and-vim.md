--- 
status: publish
tags: 
- code
- development
- komodo
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- vim
published: true
title: Code Cosmetics With Komodo and vim
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
The <a href="http://viewvc.svn.mozilla.org/vc/addons/">source code</a> for the Mozilla Add-ons project tries to follow the <a href="http://pear.php.net/manual/en/standards.php">PEAR Coding Standards</a>. One of these standards is to use <a href="http://pear.php.net/manual/en/standards.indenting.php">4 spaces per level of indentation, and no tabs</a>.

Over time, unfortunately, some files start to contain a significant amount of mixed-up indentation (both from badly set-up IDEs and third-party contributions that came with tab indentation but went un-noticed). That's both tedious and error-prone to fix by hand.

A similar problem poses trailing whitespace. While it's just annoying in general, especially in HTML template files, it also increases page size unnecessarily by leading to more bytes transmitted on the wire, with no benefit to neither the users nor the developers.

Luckily, there are two quick fixes for these problems in both the editor vim and my IDE of choice, Komodo:

To remove tabs and replace them with spaces...
<ul>
	<li>in <strong>Komodo</strong>, select a code block, then click <strong>Code -> Untabify Region</strong>.</li>
	<li>in <strong>vim</strong>, type <code>:%s/\t/&nbsp;&nbsp;&nbsp;&nbsp;/g</code> (those are four spaces) -- or, as oremj points out in the comments, you could just to <code>:retab</code> .</li>
</ul>

And to wipe out trailing whitespace...
<ul>
	<li>in <strong>Komodo</strong>, in <strong>Preferences -> Editor / Save Options</strong>, activate the option <strong>"Clean trailing whitespace and EOL markers"</strong>. Then open your document of choice and just save it again. However, when writing patches, you might want to refrain from keeping this option on at all times: It might result in confusion if a lot of lines are touched that do not have anything to do with the current patch. I wish there was a one-time way to run this, instead of a config option.</li>
	<li>in <strong>vim</strong>, type <code>:%s/\s\+$//g</code> which the regex-savvy among you have quickly decyphered as: <em>"in the entire document, replace all one or more whitespace characters that are followed by a line ending with the empty string"</em>.</li>
</ul>

Happy cleaning!
