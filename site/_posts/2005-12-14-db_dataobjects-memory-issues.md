--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: DB_DataObject's Memory Issues
type: post
meta: 
  tags: ""
layout: post
---
We are using <a href="http://pear.php.net/package/DB_DataObject/">DB_DataObjects</a> as the database abstraction layer for <a href="http://osuosl.org/projects/maintain/">Maintain</a>. It's a pretty convenient way to access databases, in most cases preventing you from writing ugly SQL strings at all. So far, so good.

However, when handling lots of database entries (in my case a couple of ten thousands), you might easily run into PHP's memory limit. Imagine the following scenario:

<blockquote><code>$books = DB_DataObject::Factory('books');
$books->type = 'novel';
$books->find();
while ($books->fetch()) {
&nbsp;&nbsp;&nbsp;&nbsp;do_something();
}</code></blockquote>

It will magically query your database for you, taking some memory for caching and, when you made your way through all of the returned records (what should actually happen at some time, considering that you have got a while clause here), it should destroy the cached information, setting the memory free that was used for it.

It does not.

Imagine the above code sample being inside another <code>while()</code> statement. It will start constantly leaking memory until it runs into PHP's memory limit. In my case, the script finally took 56 Megs of space.

The solution is to run <strong><code>$books->free()</code></strong> after you've iterated through the records, even though the <a href="http://pear.php.net/manual/en/package.database.db-dataobject.db-dataobject.free.php">associated man page</a> claims: <em>"DataObjects stores result sets as a private global variable, <strong>normally this is free'ed after you have run through the results</strong>, or at the end of the request."</em>.

By that, I cut down the memory usage of my script to barely 3 1/2 megs. Sweet! :)

<strong>Update:</strong> <a href="http://pear.php.net/bugs/bug.php?id=6247">Bug filed</a>.
<strong>Update 2:</strong> The bug was fixed and a <a href="http://pear.php.net/package/DB_DataObject/download/">new, stable release is available</a> now. Go ahead and upgrade :)
