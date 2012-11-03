--- 
status: publish
tags: 
- css
- fonts
- mozilla
- Tech Talk
published: true
title: Welcome to my blog, @font-face
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
A few days ago, a colleague of mine mentioned that the font I was using on my blog looked borderline ugly on Linux. Here's a screen shot:

<img src="/media/wp/2010/03/odd-fonts.png" alt="" title="odd fonts" width="591" height="88" class="alignnone size-full wp-image-2648" />

As you can see, the uneven glyphs make it look goofy and certainly hard to read. The problem was that I used a font that seems to be present on many Mac and Windows computers, but was unavailable on my colleague's Linux box. His browser tried to substitute it with a different font -- with limited success.

So I decided to use a nifty little web feature called <a href="https://developer.mozilla.org/en/CSS/@font-face">@font-face</a> that allows me to define and embed my desired fonts into the website. Ideally, every browser on every platform will download the fonts I am using, and display my blog the way it is intended to look. The fonts I am using now are called <a href="http://www.fontsquirrel.com/fontfacedemo/Goudy-Bookletter-1911">Goudy Bookletter 1911</a> (for the headings) and <a href="http://www.fontsquirrel.com/fontfacedemo/Droid-Serif">Droid Serif</a> (for the text).

I hope you like the new fonts and find them pleasant to read. If you notice any problems, however, please let me know!

<span class="credits">Thanks for the hint, Lars, and thanks to all commenters for providing valuable feedback!</span>
