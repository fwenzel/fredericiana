--- 
status: publish
tags: 
- bouncer
- download
- firefox
- mirror
- mozilla
- osl
- Tech Talk
published: true
title: What happens when you click the Firefox download button?
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Everybody knows Mozilla makes Firefox. But there is a lot more software at work here at Mozilla that you might not be aware of. For example: What happens when you go to <a href="http://getfirefox.com">getfirefox.com</a> and click on the <strong>download button</strong>?

<img src="/media/wp/2010/05/directions.jpg" alt="" title="directions" width="240" height="180" class="alignright size-full wp-image-2706" align="right" />By clicking on the button, you ask our servers to send you a specific file, for example: Firefox 3.6.3, for Windows, in German. On a small website, the server would just fetch the file and hand it to you. But if you need to handle millions of downloads a day like we do, a single server can't handle it all by itself, so it gets more complicated. In order to provide you with downloads, updates, etc., as fast and conveniently as possible, Mozilla collaborates with a number of <a href="http://www.mozilla.org/community/mirrors.html">mirror providers</a> that have volunteered to host Firefox and other downloads on our behalf, thus sharing the load of our numerous downloads between a number of servers all over the world.

For some years now, we have been running a bundle of software called <a href="http://viewvc.svn.mozilla.org/vc/projects/bouncer/">"Bouncer"</a> to handle our downloads for us.

Bouncer consists of of three components: The user-facing <strong>bounce script</strong>, an <strong>administrative interface called Tuxedo</strong>, and a mirror checker called <strong>Sentry</strong>.

First, the <strong>bounce script</strong>. It is the only component the "ordinary user" gets to interact with. It essentially does the following after you click on a download link:
<ul>
	<li>It determines if the product you asked for exists.</li>
	<li>Out of our list of mirrors, it picks one that has your file. Initially, it would pick one at random. Over the years, the logic has become more elaborate though: Meanwhile, it takes into account in what country you currently are, as well as how strong the mirrors are (stronger mirrors serve more downloads, weaker ones serve less).</li>
	<li>A split-second later, Bouncer refers you to the server it decided on, and that server will send you the file you asked for.</li>
</ul>

But wait, there is more! How does Bouncer know what products are available, for what operating systems, and in what languages? That's where the <strong>admin interface</strong> comes in. We have a release engineering team who work hard every day to deliver the newest software versions to you in handy little packages. Previously, during every release, an engineer would manually tell Bouncer that a new version was available for download. But just last week, we improved this process by introducing a new interface to Bouncer, with a project called <a href="http://github.com/fwenzel/tuxedo/">Tuxedo</a>. The release engineering team can now, fully automatically, feed new versions into Bouncer at the time of release, with no manual intervention. With less time spent on repetitive tasks, we can spend more time making Firefox awesome.

Finally, the <strong>Sentry</strong> component is a script that periodically checks the health of our mirrors, and adjusts our settings accordingly. This is to ensure that a situation where you are forwarded to a mirror that is currently unavailable is very, very rare. So far, these mirror checks happen from Mozilla Headquarters, and therefore reflect the connectivity we get to the mirrors from here. In the future, we want to improve that by taking into account more how <em>our users' connectivity</em> is to the specific mirrors (for the geeks out there: <em>Network proximity != geographical proximity</em>), which has the potential to result in faster download times, less expenses for mirror providers, and general happiness.

As you can see, there are a lot of things happening behind the scenes before Firefox makes its way onto your computer at home, and we are constantly working on improving the way we are doing things. Plus, as always: Bouncer is completely <a href="http://github.com/fwenzel/tuxedo/">open source</a>, and we have a <a href="https://bugzilla.mozilla.org/buglist.cgi?query_format=advanced;product=Webtools;component=Bouncer;resolution=---">public bug tracker</a>, so if you notice any problems or see room for improvement, make sure to <a href="https://bugzilla.mozilla.org/enter_bug.cgi?product=Webtools&component=Bouncer">let us know</a>.

<p class="credits">Photo credit: <a href="http://www.flickr.com/photos/philliecasablanca/3263799851/">"directions"</a>, CC-by licensed by Phillie Casablanca.</p>
