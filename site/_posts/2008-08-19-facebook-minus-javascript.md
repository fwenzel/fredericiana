--- 
status: publish
tags: 
- empty page
- facebook
- javascript
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- websights
published: true
title: Facebook Minus JavaScript
type: post
meta: 
  _edit_last: "2"
layout: post
---
I was just checking out a website with JavaScript disabled, then surfed over to facebook (accidentally) without switching JS back on, where I was welcomed with the following page (click on it to see it in its full beauty):

<a href="/media/wp/2008/08/facebook-no-javascript.jpg"><img src="/media/wp/2008/08/facebook-no-javascript-small.jpg" alt="" title="Facebook with JavaScript disabled" width="500" height="250" class="alignnone size-full wp-image-1448" /></a>

I love how gracefully they degrade to... an <strong>empty</strong> page...

Relying on JavaScript completely and just not returning a page at all if you don't have it is a no-go in web development. At the very least, you should display a page stating why your services can't be used without a particular technology, and provide hints on how to fix that.

Probably, the empty page only occurs because I logged in with JS enabled, then returned to the page with it disabled, but still it's not a great user experience either way.

Depending on the software architecture, it is even relatively easy to provide a working page for "no script" users while keeping fancy JavaScript elements.

At <a href="http://addons.mozilla.org">AMO</a>, we make an effort to keep all public parts of the website accessible to non-JS users as well so that the site can be used by the widest audience possible, and the development effort is far smaller than I imagined, due to language constructs like &lt;noscript&gt; that allow displaying buttons etc. that wouldn't be needed in the "AJAXy" version of the page.

When I look at this, I hope facebook was not infected by its evil German stepchild <a href="http://en.wikipedia.org/wiki/StudiVZ">"StudiVz"</a>, as far as code quality is concerned. That apparent facebook clone, when it was first introduced, was infamous for its numerous, severe shortcomings in such minor regards as security, privacy, user experience, and probably a number of other important buzzwords as well (also stated by Facebook themselves in the context of their <a href="http://news.bbc.co.uk/2/hi/business/7516821.stm">intellectual property lawsuit against StudiVZ</a>: <em>"As with any counterfeit product, Studivz's uncontrolled quality standards for service, features and privacy negatively impact the genuine article."</em>, but I am digressing...)
