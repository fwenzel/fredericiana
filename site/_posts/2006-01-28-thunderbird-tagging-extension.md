--- 
status: publish
tags: 
- osl
- tech
published: true
title: Thunderbird Tagging Extension
type: post
meta: 
  tags: ""
layout: post
---
We need a <a href="http://en.wikipedia.org/wiki/Tags">tagging</a> extension for <a href="http://www.mozilla.com/thunderbird/">Thunderbird</a>. Urgently. It's just a pain (and soooo "web 1.0"!) not being able to combine emails in an IMAP folder by other means than making yet another folder. I currently have a class whose mailinglist covers many different topics, and sometimes more than one in the same email. And even though there are only 30 emails so far, yet it has become near to impossible to find what I am searching for efficiently.

Wait - <a href="http://www.tagthe.net/blog/stories/1437718/">there is already a tagging extension available</a>, right? Well, somehow. It's called "Tag the Bird" and provides some sort of automated tagging approach for your email.

<img src="http://static.flickr.com/35/71695530_82d9d1372f_m.jpg" alt="Tagging; CC-licensed, by GliderKing; Source: http://flickr.com/photos/gliderking/71695530/" class="alignleft" />However, I don't feel good about sending all my emails in full text to <a href="http://www.tagthe.net/">some sort of web service</a>. No matter if I trust them or not. That's maybe nice for one or two newsletters a week you want to condense to a handful of keywords on the fly (just to find out that the current issue focuses on dancing hamsters so that you can delete the boring thing before even looking at it any closer).

But apart from any automatic tagging approach, I suggest to write a <em>Thunderbird Mail Tagging Extension</em> that allows the users to manually tag their emails (and of course includes searching for the tags). The on-the-fly search field in Thunderbird would not only have to handle sender and subject then but also tags.

Considering large amounts of email in some people's postboxes, it would be neat to store the tags in some sort of field that's searchable by the IMAP server (for not having to download all of the emails in order to execute a search). Additionally, the server itself is the only logical place to store the tags as everything else would require an additional storage facility (file? WebDAV?) that would totally kill every aspect of portability -- a step back to the times where POP3 was state of the art.

I could think of a custom email header called something like <code>X-Tag</code> or so. Still, I don't know if this is <strong>a)</strong> "legal" with respect to the E-Mail RFCs (it should be, though, considering the vast amount of "X-" tags already used by all sorts of MUAs) and <strong>b)</strong> if these fields are efficiently searchable by an IMAP server.

Any comments to my raw, unformed <em>"web 2.0"</em> ;) thoughts?

<strong>Update:</strong> I just found out that somebody seemed to have some sort of similar idea already and <a href="http://blogometer.com/2006/01/10/thunderbird-tagging/">announced to be writing a proposal</a> on it soon.
