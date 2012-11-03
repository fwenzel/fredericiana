--- 
status: publish
tags: 
- mozilla
- osl
- Tech Talk
published: true
title: Decoding HTML Entities to Text in Python
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  _wp_old_slug: ""
  aktt_notify_twitter: "yes"
layout: post
---
A while ago, I had to import some HTML into a Python script and found out that—while there is <code>cgi.escape()</code> for <em>encoding to</em> HTML—there did not seem to be an easy or well-documented way for <em>decoding</em> HTML entities in Python.

Silly, right?

Turns out, there are at least three ways of doing it, and which one you use probably depends on your particular app's needs.

<h2>1) Overkill: BeautifulSoup</h2>

<a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a> is an HTML parser that will also decode entities for you, like this:

<pre>soup = BeautifulSoup(html, convertEntities=BeautifulSoup.HTML_ENTITIES)</pre>

The advantage is its fault-tolerance. If your input document is malformed, it will do its best to extract a meaningful DOM tree from it. The disadvantage is, if you just have a few short strings to convert, introducing the dependency on an entire HTML parsing library into your project seems overkill.

<h2>2) Duct Tape: htmlentitydefs</h2>
Python comes with a list of known HTML entity names and their corresponding unicode codepoints. You can use that together with a simple regex to replace entities with unicode characters:

<pre>import htmlentitydefs, re
mystring = re.sub('&([^;]+);', lambda m: unichr(htmlentitydefs.name2codepoint[m.group(1)]), mystring)
print mystring.encode('utf-8')</pre>

Of course, this works. But I hear you saying, <em>how in the world is this not in the standard library?</em> And the geeks among you have also noticed that this will not work with <em>numerical</em> entities. While <code>&amp;copy;</code> will give you <code>&copy;</code>, <code>&amp;#169;</code> will fail miserably. If you're handling random, user-entered HTML, this is not a great option.

<h2>3) Standard library to the rescue: HTMLParser</h2>
After all this, I'll give you the option I like best. The standard lib's very own <a href="http://docs.python.org/library/htmlparser.html">HTMLParser</a> has an <em>undocumented</em> function <code>unescape()</code> which does exactly what you think it does:

<pre>>>> import HTMLParser
>>> h = HTMLParser.HTMLParser()
>>> s = h.unescape('&amp;copy; 2010')
>>> s
u'\xa9 2010'
>>> print s
© 2010
>>> s = h.unescape('&amp;#169; 2010')
>>> s
u'\xa9 2010'
</pre>

So unless you need the advanced parsing capabilities of BeautifulSoup or want to show off your mad regex skills, this might be your best bet for squeezing unicode out of HTML snippets in Python.
