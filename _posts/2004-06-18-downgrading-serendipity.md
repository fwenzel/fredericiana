--- 
status: publish
tags: 
- "10100111001"
published: true
title: Downgrading Serendipity
type: post
meta: 
  tags: ""
layout: post
---
<img border="0" hspace="20" vspace="10" align="right" src="/media/wp/logos/s9y_logo.png" alt=""  />Today I needed to patch my <a href="http://www.s9y.org" title="http://www.s9y.org" onmouseover="window.status='http://www.s9y.org';return true;" onmouseout="window.status='';return true;">Serendipity</a> weblog software.

I activated the option to &quot;tell&quot; <a href="http://www.blogg.de" title="http://www.blogg.de" onmouseover="window.status='http://www.blogg.de';return true;" onmouseout="window.status='';return true;">blogg.de</a> about any of my new blog entries - nice, but unfortunately, there never displayed an excerpt of the text on their page. Instead, only the (more or less meaningful) title was the only information to be displayed.<br /><br />The blogg.de support guys took a look at it and quickly told me they only displayed the <i>&lt;description&gt;</i> item - which s9y's RSS 2.0 feed doesn't include anymore. There it was replaced by a <i>&lt;content:encoded&gt;</i> directive (which is - by the way - no &quot;bug&quot; ).<br /><br />&quot;Bad news&quot;, I thought - in the <a href="http://php-blog.sourceforge.net/forums/index.php" title="http://php-blog.sourceforge.net/forums/index.php" onmouseover="window.status='http://php-blog.sourceforge.net/forums/index.php';return true;" onmouseout="window.status='';return true;">s9y forum</a>, <a href="http://www.supergarv.de/serendipity/" title="http://www.supergarv.de/serendipity/" onmouseover="window.status='http://www.supergarv.de/serendipity/';return true;" onmouseout="window.status='';return true;">Garvin</a> gave me <a href="http://php-blog.sourceforge.net/forums/viewtopic.php?p=940#940" title="http://php-blog.sourceforge.net/forums/viewtopic.php?p=940#940" onmouseover="window.status='http://php-blog.sourceforge.net/forums/viewtopic.php?p=940#940';return true;" onmouseout="window.status='';return true;">a hint</a> how to add the description directive...<br /><br />By duplicating the data in the RSS feed you get awfully more traffic and the redundancy is quite weird. So I'll try hard to find a better solution soon (How about the blogg.de guys supporting <i>content:encoded</i> anyway?)<br /><br />Time to &quot;downgrade&quot; s9y to RSS 1.0 pings until the blog services &quot;like&quot; its 2.0 feed again...

So I made a <em>tiny little</em> patch you can <a href="http://www.magenson.de/data/s9y_rss2_desc.patch" title="http://www.magenson.de/data/s9y_rss2_desc.patch" onmouseover="window.status='http://www.magenson.de/data/s9y_rss2_desc.patch';return true;" onmouseout="window.status='';return true;">download here</a>. (Please note that you have to uncomment my addition in <i>serendipity_functions.inc.php</i> to make it work). Have fun!
            <br /><!--more--><br />
