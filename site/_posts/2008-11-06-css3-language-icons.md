--- 
status: publish
tags: 
- css
- flag
- language
- link
- mozilla
- osl
- tech
published: true
title: CSS Language Icons
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
I just implemented a little eye candy for my blog: <strong>Language icons</strong> in front of links.

<img src="/media/wp/2008/11/css3-language-flag.jpg" alt="" title="Language Flag" width="385" height="159" class="alignnone size-full wp-image-1788" />

Actually, it's only one language so far, German. The reason I am doing this is because on occasion I link to German articles that are no use clicking on for people who don't understand a word in German -- or at the very least it makes them aware of that behind this link, they'll find a German page.

I left English hyperlinks unmarked so far, but if you guys like it this way, I will do it the other way around as well, marking English links as such when I blog in German. Obviously, there's no use flagging links that have the same language as the article itself.

For the geeky readers, I used a <a href="http://www.css3.info/using-css-3-selectors-to-apply-link-icons/">CSS<del datetime="2008-11-07T01:30:44+00:00">3</del><ins datetime="2008-11-07T01:30:44+00:00">2</ins> selector</a> in order to "flag" only the links whose "lang" attribute I set to "de". Consider me a fan of CSS (2 and 3, alike). Now it can only take a decade-or-so until its features are available in Internet Explorer as well. In fact, any reader out there who cares telling me if my language icons work in IE? Leave a comment :)

<strong>Update:</strong> As a few commenters point out (thanks!), this is a CSS&nbsp;2, not 3 selector. Nonetheless, it won't work with IE&nbsp;6, but with IE&nbsp;7. That's fine with me.

<strong>Update:</strong> In the comments, Michał notes that the <strong>hreflang</strong> attribute would be more appropriate than <strong>lang</strong>, as it denotes the language of the link target, not the language of the link text itself. He's right, so I changed it. Thanks!

<strong>Update:</strong> Some commenters pointed out a better way: Taking the <code>hreflang</code> attribute and displaying it behind the actual link text. That removes possible confusion about the flag icons, and hopefully doesn't disturb the reader. I found the approach very nice so I adapted it instead. This is how it looks:

<img src="/media/wp/2008/11/css-language-tag.jpg" alt="" title="CSS Language Tag" width="357" height="140" class="alignnone size-full wp-image-1800" />

On a side note, even IE&nbsp;7 users won't see this. Sorry.
