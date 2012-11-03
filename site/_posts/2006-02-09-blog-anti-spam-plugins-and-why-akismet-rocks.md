--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: Blog Anti-Spam Plugins and why Akismet rocks
type: post
meta: 
  tags: ""
layout: post
---
<blockquote>The king is dead -- long live the king!</blockquote>

<img src="http://static.flickr.com/25/94372462_0a2e940b29_m.jpg" alt="Spam; CC-licensed by phil-it; Source: http://flickr.com/photos/phil-it/94372462/" class="alignright" />Most of us Blog authors have kind of a spam problem. So do I, since my blog engine is quite popular not only among publishers but also among spammers. There are several anti-spam plugins out there. The easiest ones use a <a href="http://en.wikipedia.org/wiki/Captcha">Captcha</a>, what I never liked at all. It breaks any single aspect of usability. And it keeps annoying the legitimate users of the weblog. I want people to be able to comment on my blog entries with as little effort as possible. If I start bugging them with hardly readable and ambiguous characters, I simply deserve getting no comments. I should not waste people's time.

Others work with some sort of embedded Java Script stuff (assuming the spammers' user agents, unlike regular web browsers, do not interpret JS). That's better, but not good either. Lots of these plugins refuse to take a comment from a user if he or she disables Javascript of course or if the page is accessed through a proxy or whatnot. Just getting a "sorry, I don't like your comment you just spent 10 minutes on writing" will certainly scare away also the most curious visitor of your weblog.

The best approach currently available is similar to the one used by email spam filters: Accepting every comment, but doing a Bayes propability check on it to find out how likely it is spam and putting comments under a specific threshold either into moderation or the waste bin. When I still had Wordpress 1.5, I used to use the fantastic <a href="http://unknowngenius.com/blog/wordpress/spam-karma/">SpamKarma 2</a> that did a wonderful job on filtering my blog spam. After learning a few legitimate comments, it did not make any mistakes for the last year-or-so.

However, its major drawback was that it kept filling up my database (which is restricted to 50 Megs by my ISP) with spam comments until they were wiped after a week. At times where I got a real flood of spam comments, I even once experienced a broken blog since the database literally did not allow to write any single new record.

When updating to Wordpress 2.0, I therefore decided to give <strong><a href="http://akismet.com/">Akismet</a></strong> a shot, a new anti-spam web service whose plugin is now shipped with WP. You have to obtain an API key (which, AFAIK, you currently only get by registering a free weblog on wordpress.com), activate the plugin, hack in the key you just got and off you go.

Since tons of users are contributing good and bad comments, the web service does an impressively good job on putting spam where it belongs: in the virtual waste bin!

While I am still checking it out, I can already say that it does not seem to have a high false positive rate at all. Some legitimate comments went into moderation (therefore asking me to mark them as <em>ham</em>) but none of them was flagged as spam in the first place.

Akismet++  -- and kiss your captchas goodbye!
