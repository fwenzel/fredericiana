--- 
status: publish
tags: 
- django
- mozilla
- osl
- robots
- seo
- Tech Talk
published: true
title: Three ways to add a robots.txt to your Django project
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Need to add a <a href="http://en.wikipedia.org/wiki/Robots_exclusion_standard">robots.txt</a> file to your Django project to tell Google and friends what and what not to index on your site?

Here are three ways to add a robots.txt file to Django.

<h2>1) The (almost) one-liner</h2>
In an <a href="http://news.e-scribe.com/431">article</a> on e-scribe.com, Paul Bissex suggest to add this rule to your <code>urls.py</code> file:
<pre><code>from django.http import HttpResponse

urlpatterns = patterns('',
    ...
    (r'^robots\.txt$', lambda r: HttpResponse("User-agent: *\nDisallow: /", mimetype="text/plain"))
)
</code></pre>

The advantage of this solution is, it is a simple one-liner disallowing all bots, with no extra files to be created, and no clutter anywhere. It's as simple as it gets.

The disadvantage, obviously, is the missing scalability. The instant you have more than one rule to add, this approach quickly balloons out of hand. Also, one could argue that <code>urls.py</code> is not the right place for <em>content</em> of any kind.

<h2>2) Direct to template</h2>
This one is the most intuitive approach: Just drop a <code>robots.txt</code> file into your main templates directory and link to it via <code>direct_to_template</code>:

<pre><code>from django.views.generic.simple import direct_to_template

urlpatterns = patterns('',
    ...
    (r'^robots\.txt$', direct_to_template,
     {'template': 'robots.txt', 'mimetype': 'text/plain'}),
)
</code></pre>
Just remember to set the MIME type appropriately to <code>text/plain</code>, and off you go.

Advantage is its simplicity, and if you already have a robots.txt file you want to reuse, there's no overhead for that.

Disadvantage: If your robots file changes somewhat frequently, you need to push changes to your web server every time. That can get tedious. Also, this approach does not save you from typos or the like.

<h2>3) The django-robots app</h2>
Finally, there's a full-blown django app available that you can install and drop into your <code>INSTALLED_APPS</code>: It is called <a href="http://pypi.python.org/pypi/django-robots">django-robots</a>.

For small projects, this would be overkill, but if you have a lot of rules, or if you need a site admin to change them without pushing changes to the web server, this is your app of choice.

<h2>Which one is right for me?</h2>
Depending on how complicated your rule set is, either one of the solutions may be the best fit for you. Just choose the one that you are the most comfortable with and that fits the way you are using robots.txt in your application.
