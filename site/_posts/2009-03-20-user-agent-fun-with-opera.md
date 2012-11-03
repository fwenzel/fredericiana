--- 
status: publish
tags: 
- internet explorer
- microsoft
- mozilla
- opera
- osl
- Tech Talk
- user agent
published: true
title: User Agent Fun With Opera
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
When I was working with <a href="http://en.wikipedia.org/wiki/User_agent">User Agent strings</a> today, I made the unfortunate discovery that Opera claims to be MSIE (according to their <a href="http://www.opera.com/support/kb/view/570/">knowledge base site</a>, this is the <strong>default</strong> -- or used to be, until version 8 according to <a href="http://www.useragentstring.com/pages/Opera/">this website</a> and a friendly commenter <a href="http://fredericiana.com/2009/03/20/user-agent-fun-with-opera/#comment-213208">here</a>).

That is, of course, unpleasant, if a developer wants to display content to specific users based on their user agent. Unlike the current, ugly GeoIP epidemic (which I shall blog about another time), there are fairly good reasons for doing this -- all of which are negatively impacted by claiming to be a specific browser if you are not. Let me just name three of these reasons, off the top of my head:
<ol>
	<li><em>Relevance.</em> Some content (pictures, instructions, warnings) may simply not apply to people outside a specific user group.</li>
	<li><em>Workarounds.</em> Particularly MSIE&nbsp;6 was/is infamous for numerous bugs and inconsistencies, some of which can be worked around. There is little reason why anyone else would like to see these "hacks" applied to the page they are visiting.</li>
	<li><em>Differences in technology.</em> Some people produce browser extensions for, for example, both Firefox and MSIE. They may want to serve appropriate instructions to these users, and maybe a third page to everyone else.</li>
</ol>

I am not only convinced some Opera users would be <em>outraged</em> to be served Internet-Explorer-only content. I also assume that through Opera's claiming to be MSIE, Opera users can report numerous cases when the false user agent triggered some quirks on websites that were installed by the website author only to handle MSIE's abundant bugs at the time. Why anyone would want this setting to be <strong>the default</strong>, I cannot understand: Claiming to "be somebody else" should be the exception, not the rule.

People have <a href="http://webaim.org/blog/user-agent-string-history/">blogged before about the near-uselessness of the User Agent string</a> (in connection with Google Chrome's football-field-long UA string), and they have probably done a much better job than I would. From a developer perspective though, this is frustrating. So I <a href="http://twitter.com/fwenzel/status/1359556777">twittered</a>:

<blockquote>Uhm, why does Opera claim to be MSIE in its User Agent string?</blockquote>

<a href="http://twitter.com/fwenzel/status/1359559992">followed by</a>:

<blockquote>To be fair, only old versions of Opera do that.</blockquote>

and soon thereafter, I got this interesting answer from a friend:

<blockquote>... they were hoping to be accidentally bundled with Windows.</blockquote>

I must say, in the light of Opera being the <a href="http://www.opera.com/press/releases/2007/12/13/">initiator of the ongoing antitrust investigation</a> of the European Commission against Microsoft, this answer does not fail to convey a faint notion of irony.

<strong>Update:</strong> Commenter <a href="http://fredericiana.com/2009/03/20/user-agent-fun-with-opera/#comment-213208">Eric</a> points out that Opera's knowledge base article that I am citing on the top is outdated and the default user agent string used by Opera is much simpler. Well, excellent.

<strong>Update 2:</strong> Another commenter points out that Opera's impersonating MSIE has historic reasons dating back to the pre-Firefox era. -- Now that these reasons are not present anymore, the UA has been adapted.
