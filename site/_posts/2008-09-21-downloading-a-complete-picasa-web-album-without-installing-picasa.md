--- 
status: publish
tags: 
- download
- downthemall
- firefox
- greasemonkey
- mozilla
- osl
- picasa web
- Tech Talk
published: true
title: Downloading a Complete Picasa Web Album (Without Installing Picasa)
type: post
meta: 
  _edit_last: "2"
layout: post
---
Google's Picasa Web Album supports downloading an entire album, however, it requires the Picasa software to do so. Bummer if you are on a Mac, or don't want to (or can't) install Picasa on your computer.

There's <a href="http://googlesystem.blogspot.com/2007/12/download-picasa-web-albums-without.html">another tutorial</a> online that suggests using a <a href="http://userscripts.org/scripts/show/15418">Greasemonkey script to surface the download links</a>, then use the <a href="https://addons.mozilla.org/en-US/firefox/addon/201">DownThemAll Firefox extension</a> to grab the links.

Sadly, the Greasemonkey script in question stopped working after a recent code change on the picasa website. I was able to easily fix it, but due to the lack of an open license, I am unable to share the script with you :(

However, I found an alternative solution: The album's <strong>RSS feed</strong>! Along with the aforementioned DownThemAll extension, you can easily download a complete album off Picasa Web. Here is how:

Go to the desired Album, and click the "RSS" link on the right hand side:

<img src="/media/wp/2008/09/picasaweb-rss.jpg" alt="" title="Picasa Web RSS Link" width="172" height="102" class="alignnone size-full wp-image-1562" />

Firefox will show you the RSS feed in a more or less appealing way. Note that each of the pictures shown has an "attached" JPEG file underneath:

<img src="/media/wp/2008/09/picasaweb-rss-attached-jpeg.jpg" alt="" title="Picasa Web: Attached JPEG file in RSS feed" width="269" height="89" class="alignnone size-full wp-image-1563" />

The only thing we need to do is download all of these with DownThemAll. For that, right-click, and choose "DownThemAll". In the "links" tab, it'll automatically grab all pictures for you:

<a href="/media/wp/2008/09/picasaweb-downthemall.jpg"><img src="/media/wp/2008/09/picasaweb-downthemall-300x260.jpg" alt="" title="Picasa Web: DownThemAll!" width="300" height="260" class="alignnone size-medium wp-image-1564" /></a>

Just hit "start" and let it load!

Hope this helps!
