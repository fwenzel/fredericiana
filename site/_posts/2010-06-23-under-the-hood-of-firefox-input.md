--- 
status: publish
tags: 
- django
- feedback
- firefox
- input
- mozilla
- osl
- tech
published: true
title: Under the Hood of Firefox Input
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
<strong>Note:</strong> Several people asked where the link is to actually <em>add feedback</em> to the site. This is, of course, a good point. As mentioned in the comments: The designated entry point for the feedback application is going to be an extension bundled with Firefox 4 Beta. For more information, please read <a href="http://aakash.doesthings.com/2010/06/25/hi-my-name-is-firefox-input/">Aakash's blog post</a>. To <strong>try out</strong> the application already, feel free to add <a href="http://input.stage.mozilla.com/happy">happy</a> or <a href="http://input.stage.mozilla.com/sad">sad</a> feedback to the test site.
<hr />

This morning, we published the <a href="http://input.mozilla.com">Firefox Input</a> application. It is a little web application soliciting feedback from our <a href="http://www.mozilla.com/en-US/firefox/all-beta.html">Firefox Beta Program</a> users. The aim is to make it as easy as possible for people to tell us what specifically they like or dislike about an upcoming version of Firefox.

<a href="/media/wp/2010/06/fx-input-dashboard.jpg"><img src="/media/wp/2010/06/fx-input-dashboard-300x210.jpg" alt="" title="Firefox Input: Dashboard" width="300" height="210" class="aligncenter size-medium wp-image-2835" /></a>

The application was, as far as software goes, developed very rapidly: We made it from requirements to production in a mere three weeks. What made this possible was a number of reusable components that allowed us to avoid reinventing the wheel and stay focused on making the application awesome.

<a href="/media/wp/2010/06/fx-input-happy.jpg"><img src="/media/wp/2010/06/fx-input-happy-300x100.jpg" alt="" title="Firefox Input: Happy Feedback" width="300" height="100" class="aligncenter size-medium wp-image-2842" /></a>

<a href="/media/wp/2010/06/fx-input-sad.jpg"><img src="/media/wp/2010/06/fx-input-sad-300x110.jpg" alt="" title="Firefox Input: Sad Feedback" width="300" height="110" class="aligncenter size-medium wp-image-2843" /></a>

A few key components of the Input application:
<ul>
	<li><strong><a href="http://www.djangoproject.com/">Django</a>.</strong> I can't stress this enough, but Django is a fantastic web application framework. It makes it incredibly easy to set up a web application quickly and securely. Their built-in admin pages save me days of work that I would otherwise have to spend to allow project admins to edit the application data.</li>
	<li><strong><a href="http://jinja.pocoo.org/2/">Jinja2</a> and <a href="http://github.com/jbalogh/jingo/">Jingo</a>.</strong> The only big drawback of Django is its template language: The instant you make nontrivial web applications, it gets in your way. Luckily, like all parts of Django it is replaceable: Jinja2 and Jeff Balogh's <em>jingo</em> interface comes to the rescue. The two of them are already in use over at <a href="https://addons.mozilla.org">AMO</a> and also serve us well on Input.</li>
	<li><strong>Term extraction.</strong> Firefox Input extracts key words from all feedback. Sure, you can just split the sentences into words, but if you want to avoid collecting all sorts of meaningless particles ("the", "a", "if", ...), it becomes a little more complicated. We are using the <a href="http://pypi.python.org/pypi/topia.termextract/">topia.termextract</a> library, which gladly does the heavy lifting for us. Only caveat: It only works for English, so once the application is localized, we need a different solution for the other languages.</li>
	<li><strong>Search.</strong> For the longest time, there was no generic way to do search in a Django app (other than straight SQL queries). In the meantime, <a href="http://haystacksearch.org/">haystack</a> has started to fill that gap. We use it on Input in conjunction with <a href="http://bitbucket.org/mchaput/whoosh/wiki/Home">Whoosh</a>, a pure-Python search library. That is very easy to set up, at the expense of scalability -- if we outgrow it, however, it will be easy to switch search engines with virtually no code changes at all. Thumbs up!</li>
	<li><strong>Product details.</strong> Only very recently we released a <a href="http://blog.mozilla.com/webdev/2010/06/01/django-mozilla-product-details-because-short-library-names-are-for-wimps/">Mozilla product details library</a> for Django, and this is the first application to rely intimately on up-to-date product data: Input only lets users of the latest beta versions of Firefox add feedback, so it auto-updates its product data periodically to gather feedback for the newest versions as quickly as possible.</li>
</ul>

As always, the <a href="http://github.com/fwenzel/reporter">source code</a> of Firefox Input is openly and freely available. If you notice any problems with it, feel free to fork it on github, or <a href="https://bugzilla.mozilla.org/enter_bug.cgi?product=Webtools&component=Input">file a bug</a> in our <a href="https://bugzilla.mozilla.org/buglist.cgi?resolution=---&query_format=advanced&component=Input&product=Webtools">bug tracker</a>.
