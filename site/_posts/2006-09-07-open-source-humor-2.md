--- 
status: publish
tags: 
- osl
- tech
published: true
title: "Open Source Humor #2"
type: post
meta: 
  tags: ""
layout: post
---
Update on the <a href="http://fredericiana.com/2006/08/16/humorous-open-source-programmers/">open source humor</a> post:

In the current issue of <a href="http://lwn.net/Articles/197726/">Linux Weekly News</a>, somebody wrote an <a href="http://lwn.net/Articles/198215/">article</a> mentioning the following Python command:

<blockquote><code>from __future__ import braces</code></blockquote>

Let's try:

<code>$ python 
Python 2.4.3 (#1, Mar 30 2006, 11:02:16) 
[GCC 4.0.1 (Apple Computer, Inc. build 5250)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; from __future__ import braces
  File "&lt;stdin&gt;", line 1
SyntaxError: <strong>not a chance</strong>
&gt;&gt;&gt; 
</code>

Hm, not bad for a programming language.

(Oh, and if you didn't understand it, don't worry, it's pretty easy: Python uses indentation to distinguish between code blocks, not curly braces like C, Java and others. And they are proud of it.)
