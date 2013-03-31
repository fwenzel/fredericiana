--- 
status: publish
tags: 
- chrome
- css
- diff
- firefox
- greasemonkey
- hackability
- javascript
- mozilla
- osl
- stylish
- tech
published: true
title: On Hackability
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
There is a <a href="http://pc.de/pages/on-hackability-be">Belorussian version</a> of this article provided by <a href="http://pc.de/">PC</a>.
<hr />

<a href="http://www.flickr.com/photos/oskay/265899784/"><img src="/media/wp/2010/02/hackability.jpg" alt="" title="Hackability: &quot;Inside-out lego brick&quot;, cc-by licensed by oskay on flickr" width="240" height="180" class="alignright size-full wp-image-2595" align="right" /></a>One of the talks I really enjoyed at recent <a href="http://fredericiana.com/2010/02/10/fosdem-2010/">FOSDEM</a> was Paul and Tristan's presentation on <a href="http://fosdem.org/2010/schedule/events/moz_hackability">Hackability</a>. (Tristan uploaded the <a href="http://www.slideshare.net/nitot/hackability-what-it-means-why-its-important">English slides</a> to slideshare, as well as the <a href="http://www.slideshare.net/nitot/bidouillabilit-pourquoi-il-est-essentiel-de-pouvoir-bidouiller-internet">French ones</a>).

Essentially, it was a great promotion for keeping the Web (and Firefox as the tool we view it through) (both legally and technically) open, its building blocks visible and interchangeable. <a href="http://www.slideshare.net/brianoberkirch/designing-for-hackability">If you can't open it, you don't own it.</a>

As a result, this also means the "view source" function is not there to feed the user's idle curiosity, it is a vital and irreplaceable part of the Web. Likewise, a tool like Firebug does not exist to "break" other people's websites. Instead, it helps us to use the web the way it was <strong>meant to be used</strong>.

Recently, a colleague of mine (don't remember who, sorry) linked to a little website called <a href="http://patchculture.org/">patch culture.org</a>, that, in spite of its simple appearance, promotes exactly that: using the Web the way it was meant to be used, fixing, improving the Web on our way through other people's sites, and better yet, <strong>share</strong> our changes with the people who own the sites. Their steps are easy: 1) Install Firebug, 2) change a website, 3) email a patch to the owner.

Sounds easy (to geek ears, anyway) but is harder than it looks. For starters, <strong>how do I get my changes out of Firebug?</strong> It's a concept we could call <strong>"diffability"</strong>. If I have to write a book describing what I did to some website's DOM nodes and CSS rules, I am far less likely to fix someone else's website for them than when there is an easy way for me to do it. Granted: Even if Firebug let me export a <a href="http://en.wikipedia.org/wiki/Unified_diff#Unified_format">unified diff</a>, owners of non-trivial, framework-based web sites wouldn't be able to just go ahead and apply it on their codebase. However, diffs are <del>human</del> <ins>engineer</ins> readable. Without losing a ton of words, the website owner could look at the changes I made and choose to apply them to their software in the appropriate spots.

<a href="http://joanpiedra.com/jquery/greasemonkey/"><img src="/media/wp/2010/02/greasemonkey_and_jquery.png" alt="" title="Greasemonkey and jQuery, MIT-licensed by joan piedra" width="111" height="22" class="alignleft size-full wp-image-2600" align="left" /></a>Second, <strong>how do I make my changes stick</strong>? We Open Source developers are of course some of the more altruistically inclined citizens of the Web, still if you are going to fix someone's website, you are likely to do so to lower your own annoyance level first, then everybody else's. Therefore, you want your changes to "stick", if or if not the website owner decides to accept and deploy your changes. 

Thankfully, this is achievable, though it involves a little bit of a hassle. There are add-ons out there, most notably <a href="https://addons.mozilla.org/en-US/firefox/addon/2108">Stylish</a> (for CSS-based changes) and <a href="https://addons.mozilla.org/en-US/firefox/addon/748">Greasemonkey</a> (for JS-based changes). These two were recently joined by <a href="https://wiki.mozilla.org/Labs/Jetpack/JEP/17">Jetpack Page Mods</a>. While Greasemonkey is a solid platform with <a href="http://userscripts.org/">tons of contributions</a>, I see its biggest flaw in missing a solid <strong>standard library</strong> that takes the pain out of JavaScript, a problem Jetpack mitigates by shipping with jQuery included. In comparison, <a href="http://joanpiedra.com/jquery/greasemonkey/">using jQuery with Greasemonkey is many things, none of which is "beautiful"</a>. If Greasemonkey wants to stay the technology of choice for "web hackers", it needs a standard library. Only then will it fill its place as a lightweight extension engine in the future, (yes, in spite of its recent <a href="http://blog.chromium.org/2010/02/40000-more-extensions.html">inclusion in Chrome</a>). It would be a twisted situation if it became easier to write full-blown (Jetpack-based) extensions than writing a user script. It's the reason I am already writing <a href="http://fwenzel.github.com/jetpacks/">small website changes as Jetpacks</a> and not GM scripts, and I am <a href="http://jbalogh.github.com/jetpacks/">not the only one</a>. But because competition is good for business, on the Web as much as elsewhere, I hope the Greasemonkey guys stay on top of their game.

In summary:
<ul>
	<li>Let's make and keep the Web open and hackable!</li>
	<li>We can change web sites, but it's hard to share what we did. A great way towards more open hacking would be a <em>diff engine in Firebug</em>. Even if it only exports pseudo-diffs, or even if the diffs can't be applied with one click unless you run a fully static website.</li>
	<li>Finally, it's possible but hard to make changes stick. Greasemonkey is a strong contender in the field, but if they want to keep being the number one "hackability engine", they'll need to make writing scripts easier by adding a decent standard library. After all, it is not the 20th century anymore.</li>
</ul>
