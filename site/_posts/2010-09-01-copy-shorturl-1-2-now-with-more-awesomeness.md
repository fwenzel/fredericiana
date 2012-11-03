--- 
status: publish
tags: 
- addons
- copyshorturl
- Mozilla Crosspost
- Tech Talk
published: true
title: Copy ShortURL 1.2 now with more awesomeness
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  _wp_old_slug: ""
  aktt_notify_twitter: "yes"
layout: post
---
Last week, I secretly released <a href="https://addons.mozilla.org/en-US/firefox/addon/197224/">version 1.2 of my Copy ShortURL add-on</a>. It contains a lot of improvements based on your feedback! Here's the 411 on the new features and how to use them:

<strong>is.gd is the new default</strong>
I switched to <a href="http://is.gd">is.gd</a> (from tinyurl) as the default shortening service. I am affiliated with neither of them, but I though the point of short URLs is, well, being short. So is.gd wins on that front. If you don't like that, don't fret, because...:

<strong>You can pick your own short URL service now</strong>
If you have a short URL service that you like more than the default, you can pick your own now. <a href="http://github.com/fwenzel/copy-shorturl/blob/master/README.md">Instructions</a> are in the README file on github (towards the bottom). By setting the preference <code>extensions.copyshorturl.serviceURL</code> in <code>about:config</code>, you can for example use tinyurl, bit.ly (requires an API key) and lots of other URL shorteners. If you have <strong>additional service URLs to share</strong> with the class, please leave a comment!

<strong>Notifications</strong>
Initially, there was no way to tell if the add-on had already done its job, except for checking your clipboard contents (hint, <em>if in doubt, yes, it worked</em>). So I added unobtrusive Growl notifications for platforms that support it. For example:

<img src="/media/wp/2010/09/copyshorturl-growl.jpg" alt="" title="Copy ShortURL Growl Notification" width="314" height="118" class="aligncenter size-full wp-image-2942" />

If you don't have Growl, a Firefox notification bar is shown instead:

<img src="/media/wp/2010/09/copyshorturl-nogrowl-575x219.jpg" alt="" title="Copy ShortURL NoGrowl notification" width="575" height="219" class="aligncenter size-large wp-image-2945" />

Finally, Copy ShortURL is now compatible with Firefox versions 3.6 to 4.0b5pre.

Hope you like it, and feel free to leave a comment here or <a href="http://github.com/fwenzel/copy-shorturl/issues">file issues on github</a> if anything is not working as expected.
