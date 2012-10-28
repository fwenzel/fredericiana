--- 
status: publish
tags: 
- keyboard
- leopard
- Mozilla Crosspost
- osx
- Tech Talk
- unresponsive
published: true
title: "OSX Leopard: Keyboard Problems"
type: post
meta: {}

layout: post
---
Sorry to say this, but it seems like Apple is doing a pretty good job at curbing the users' joy about new and improved features by the severity of the bugs that have slipped through into the final release. (Don't get me wrong, as I work in the software business I know and understand how hard it is to catch all bugs -- but that doesn't make the remaining ones any more fun ;) )

Some people, including me, experience that their keyboards <strong>become unresponsive</strong> intermittently, mainly but not exclusively on the Macbook/Pro laptops. This has been described many times on the net, for example by the <a href="http://www.applegazette.com/leopard/reports-online-of-macbookmacbook-pro-leopard-keyboard-problems/">"Apple Gazette"</a>.

For most people, the problem seems to boil down to these key points:
<ul>
	<li>It happens after waking up from <em>safe sleep</em></li>
	<li>While the keyboard becomes unresponsive, the trackpad and its button are not influenced</li>
	<li>No apparent spikes in load or similar reduction of overall system performance are noticeable</li>
	<li>A reboot remedies the situation until the next time it is triggered (possibly by a safe sleep cycle, see above)</li>
</ul>

So far, I was unable to find a confirmed solution for the problem, but some readers suggest that the problem has not (yet) reappeared after they reset their NVRAM and PRAM as described in <a href="http://docs.info.apple.com/article.html?artnum=2238">this Apple help document</a> (if your Apple boot sound becomes so loud your neighbor across the street could hear it, you did it right).

Note that this issue was not fixed by the recently released OSX 10.5.1 update (though it fixed <a href="http://blog.jeanpierre.de/2007/11/08/the-data-loss-bug-in-os-x-caught-me/">a pretty bad data loss issue</a>, so you want to install it).

If you experience the issue too and want to <strong>share some thoughts</strong>, or if you have other household <strong>remedies</strong> at hand that may heal "spontaneous keyboard loss", please feel free to leave a comment.

<strong>Update:</strong> The PRAM reset did not help; after waking up my laptop, I still frequently experience the loss of my keyboard. But as reported in the comments, Apple tech support frequently tells people they know about the problem and they're working on fixing it. Let's hope that's true.

<strong>Update 2, 12/19/07:</strong> Apple released a software update that is <strong>supposed to fix the problem</strong>. Please <a href="http://fredericiana.com/2007/12/19/apple-allegedly-fixes-leopard-keyboard-bug/">read my followup post</a>.
