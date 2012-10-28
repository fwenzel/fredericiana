--- 
status: publish
tags: 
- OSU OSL Crosspost
- Tech Talk
published: true
title: Let's talk about password storage
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  pdrp_attributionLocation: end
  aktt_notify_twitter: "yes"
layout: post
---
<blockquote style="font-size:90%"><strong>Note:</strong> <em>This is a cross-post of an <a href="http://blog.mozilla.org/webdev/2012/06/08/lets-talk-about-password-storage/">article I published on the Mozilla Webdev blog</a> this week.</em></blockquote>


During the course of this week, a number of high-profile websites (like <a href="http://blog.linkedin.com/2012/06/06/updating-your-password-on-linkedin-and-other-account-security-best-practices/">LinkedIn</a> and <a href="http://www.last.fm/passwordsecurity?tag=mncol;txt">last.fm</a>) have disclosed possible password leaks from their databases. The suspected leaks put huge amounts of important, private user data at risk.

What's common to both these cases is the weak security they employed to "safekeep" their users' login credentials. In the case of LinkedIn, it is <a href="http://leakedin.org">alleged</a> that an unsalted SHA-1 hash was used, in the case of last.fm, the technology used is, allegedly, an even worse, <a href="http://www.reddit.com/r/netsec/comments/upyu4/lastfm_password_security_update_we_are_currently/c4xj1dw">unsalted MD5 hash</a>.

Neither of the two technologies is following any sort of modern industry standard and, if they were in fact used by these companies in this fashion, exhibit a gross disregard for the protection of user data. Let's take a look at the most obvious mistakes our protagonists made here, and then we'll discuss the <strong>password hashing standards</strong> that Mozilla web projects routinely apply in order to mitigate these risks.
<!--more-->
<h2>A trivial no-no: Plain-text passwords</h2>
This one's easy: Nobody should store plain-text passwords in a database. If you do, and someone steals the data through any sort of security hole, they've got all your user's plain text passwords. (That a bunch of companies still do that should make you scream and run the other way whenever you encounter it.) Our two protagonists above know that too, so they remembered that they read something about hashing somewhere at some point. <em>"Hey, this makes our passwords look different! I am sure it's secure! Let's do it!"</em>

<h2>Poor: Straight hashing</h2>
<a href="http://blog.mozilla.org/webdev/files/2012/06/wonka-md5.jpg"><img src="http://blog.mozilla.org/webdev/files/2012/06/wonka-md5-150x150.jpg" alt="" title="Condescending Wonka disapproves of straight hashing" width="150" height="150" class="alignleft size-thumbnail wp-image-2787" style="margin-right:.5em" /></a>Smart mathematicians came up with something called a hashing function or "one-way function" <code>H: password -> H(password)</code>. MD5 and SHA-1 mentioned above are examples of those. The idea is that you give this function an input (the password), and it gives you back a "hash value". It is easy to calculate this hash value when you have the original input, but prohibitively hard to do the opposite. So we create the hash value of all passwords, and only store that. If someone steals the database, they will only have the hashes, not the passwords. And because those are hard or impossible to calculate from the hashes, the stolen data is useless.

<em>"Great!"</em> But wait, there's a catch. For starters, <strong>people pick poor passwords.</strong> Write this one in stone, as it'll be true as long as passwords exist. So a smart attacker can start with a copy of Merriam-Webster, throw in a few numbers here and there, calculate the hashes for all those words (remember, it's easy and fast) and start comparing those hashes against the database they just stole. Because your password was "cheesecake1", they just guessed it. Whoops! To add insult to injury, they just guessed <em>everyone's</em> password who also used the same phrase, because the hashes for the same password are the same for every user.

Worse yet, you can actually buy(!) precomputed lists of straight hashes (called <a href="http://en.wikipedia.org/wiki/Rainbow_tables">Rainbow Tables</a>) for alphanumeric passwords up to about 10 characters in length. Thought "FhTsfdl31a" was a safe password? Think again.

This attack is called an <strong>offline <a href="http://en.wikipedia.org/wiki/Dictionary_attack">dictionary attack</a></strong> and is well-known to the security community.

<h2>Even passwords taste better with salt</h2>
<a href="http://blog.mozilla.org/webdev/files/2012/06/steve-salt.jpg"><img src="http://blog.mozilla.org/webdev/files/2012/06/steve-salt-150x150.jpg" alt="" title="Scumbag Steve salts his passwords" width="150" height="150" class="alignright size-thumbnail wp-image-2784" /></a>The standard way to deal with this is by adding a per-user salt. That's a long, random string added to the password at hashing time: <code>H: password -> H(password + salt)</code>. You then store salt and hash in the database, making the hash different for every user, even if they happen to use the same password. In addition, the smart attacker cannot pre-compute the hashes anymore, because they don't know <em>your</em> salt. So after stealing the data, they'll have to try every possible password for every possible user, using each user's personal salt value.

Great! I mean it, if you use this method, you're already scores better than our protagonists.

<h2>The 21st century: Slow hashes</h2>
But alas, there's another catch: Generic hash functions like MD5 and SHA-1 are built to be fast. And because computers <a href="http://en.wikipedia.org/wiki/Moore%27s_law">keep getting faster</a>, millions of hashes can be calculated very very quickly, making a <strong>brute-force attack</strong> even of salted passwords more and more feasible.

<strong>So here's what we do at Mozilla</strong>: Our WebApp Security team performed <a href="http://blog.mozilla.org/webappsec/2011/05/10/sha-512-w-per-user-salts-is-not-enough/">some</a> <a href="http://blog.mozilla.org/webappsec/2011/06/01/sha-512-follow-up-and-thank-you/">research</a> and set forth a set of <a href="https://wiki.mozilla.org/WebAppSec/Secure_Coding_Guidelines#Password_Storage">secure coding guidelines</a> (they are public, go check them out, I'll wait). These guidelines suggest the use of <strong>HMAC + bcrypt</strong> as a reasonably secure password storage method.

The hashing function has two steps. First, the password is hashed with an algorithm called <a href="http://en.wikipedia.org/wiki/HMAC">HMAC</a>, together with a <strong>local salt</strong>: <code>H: password -> HMAC(local_salt + password)</code>. The local salt is a random value that is stored only on the server, never in the database. Why is this good? If an attacker steals one of our password databases, they would need to <strong>also separately attack</strong> one of our web servers to get file access in order to discover this local salt value. If they don't manage to pull off <strong>two successful attacks</strong>, their stolen data is largely useless.

As a second step, this hashed value (or <em>strengthened password</em>, as some call it) is then hashed again with a slow hashing function called <a href="http://en.wikipedia.org/wiki/Bcrypt">bcrypt</a>. The key point here is <strong>slow</strong>. Unlike general-purpose hash functions, bcrypt intentionally takes a relatively long time to be calculated. Unless an attacker has millions of years to spend, they won't be able to try out a whole lot of passwords after they steal a password database. Plus, bcrypt hashes are also salted, so no two bcrypt hashes of the same password look the same.

So the whole function looks like: <code>H: password -> bcrypt(HMAC(password, local_salt), bcrypt_salt)</code>.

We wrote a reference implementation for this for Django: <a href="https://github.com/fwenzel/django-sha2">django-sha2</a>. Like all Mozilla projects, it is open source, and you are more than welcome to study, use, and contribute to it!

<h2>What about Mozilla Persona?</h2>
Funny you should mention it. Mozilla Persona (née BrowserID) is a new way for people to log in. Persona is the password specialist, and takes the burden/risk away from sites for having to worry about passwords altogether. Read more about <a href="https://developer.mozilla.org/en/BrowserID/Quick_Setup">Mozilla Persona</a>.

<h2>So you think you're cool and can't be cracked? Challenge accepted!</h2>
Make no mistake: just like everybody else, we're not invincible at Mozilla. But because we <em>actually</em> take our users' data seriously, we take precautions like this to mitigate the effects of an attack, even in the unfortunate event of a successful security breach in one of our systems.

If you're responsible for user data, so should you.

<blockquote style="font-size:90%"><em>If you'd like to <strong>discuss this post</strong>, please <a href="http://blog.mozilla.org/webdev/2012/06/08/lets-talk-about-password-storage/#respond">leave a comment at the Mozilla Webdev blog</a>. Thanks!</em></blockquote>
