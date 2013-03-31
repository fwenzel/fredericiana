--- 
status: publish
tags: 
- osl
- tech
published: true
title: Don't use MySQL's password hash
type: post
meta: 
  tags: ""
layout: post
---
Developing software that has been in use for quite a while (like the Maintain network management software I am currently working on), you frequently run into tiny little problems that are somehow the heritage of ancient times. Sometimes, they are easy to use, in other cases they start as small issues and turn into butt-biting monsters ever so quickly.

<img src="http://static.flickr.com/25/36180001_a09a0c75f5_m.jpg" alt="password...; CC-licensed: http://flickr.com/photos/piscue/36180001/" class="alignright" />One of these is MySQL's <code>PASSWORD()</code> hashing function. What was meant to be a good idea - having the RDBMS handle the passwords with its built-in hash - turned out to be a bad one: MySQL's password hash changes virtually with every release (okay I am exaggerating), making your hashes unusable, so your customers stay locked out of your software.

To provide some sort of legacy support, in former versions of Maintain the <code>OLD_PASSWORD()</code> alternative was used to authenticate, followed by a re-hashing of the password with the new <code>PASSWORD()</code> hash.

Still, it's only a matter of months until MySQL decides to change its hashes once again, leading to even more legacy code and less transparency in the authentication codebase. Plus, if people don't want to use MySQL at all, they have a big problem: Most other DB engines don't offer a PASSWORD() function.

Therefore the hash was changed to <strong><a href="http://en.wikipedia.org/wiki/SHA1">SHA1</a></strong>, leading to yet another special case in the password validation methods.

Anyway, in the upcoming <strong>Maintain 3</strong>, old passwords will only be supported through a <strong>legacy authentication module</strong> designed to re-hash the passwords to SHA1, hopefully one and for all times extinguishing issues with changing hashes in the database backend.

<strong>The moral:</strong> There <em>is a reason</em> for MySQL to <a href="http://dev.mysql.com/doc/refman/5.0/en/application-password-use.html">discourage</a> use of <code>PASSWORD()</code> in applications. Believe me. They are right.
