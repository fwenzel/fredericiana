--- 
status: publish
tags: 
- addons
- copyshorturl
- mozilla
- osl
- Tech Talk
published: true
title: Next Steps for the Copy ShortURL Addon
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  _wp_old_slug: ""
  aktt_notify_twitter: "yes"
layout: post
---
The <a href="https://addons.mozilla.org/en-US/firefox/addon/197224/">Copy ShortURL Add-on</a> has been on AMO for a week now and was recently approved to be public, so now I have a user base to please ;)

I am inclined to drop the code onto github, where I'd get a proper version history along with a bug tracker. <strong>Update:</strong> <a href="http://github.com/fwenzel/copy-shorturl/">It's on github now!</a>

For now though, here are a few <strong>ideas</strong> I have for the add-on, in no particular order and with no promise that I'm about to implement any of this right away:

<ul>
	<li><strong>Allow other URL shortening services.</strong> tinyURL is all fun and games, and I chose it over bit.ly because it does not require an API key -- but if you have one at hand, you should be able to use any service you like. Even if only by setting an about:config preference.</li>
	<li><strong>Incorporate selected sites</strong> that support short URLs but do not publish them as a header. Zappos (zapp.me), for example. Others seem to have a short URL available (such as: NY Times (nyti.ms), Amazon (amzn.to),  ESPN (es.pn)) but only use them on their twitter account and not on every webpage, so there might be nothing we can do :(.</li>
	<li>When shortening, need to make sure not to use the <em>current</em> URL but the <strong>canonical URL</strong> if such a header exists. (<a href="http://github.com/fwenzel/copy-shorturl/issues/issue/3">Fixed!</a>)</li>
</ul>

Let me know what you think! I'd like to know if any other things come to your minds, or which of the above you'd find especially useful.
