--- 
status: publish
tags: 
- crypto
- django
- Mozilla Crosspost
- OSU OSL Crosspost
- security
- Tech Talk
published: true
title: Adding Support for Stronger Password Hashes To Django
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  _wp_old_slug: ""
  aktt_notify_twitter: "yes"
layout: post
---
<a href="http://en.wikipedia.org/wiki/Cryptographic_hash_function">Cryptographic hash functions</a> play an important part in application security: Usually, user passwords are hashed and stored in the database. When someone logs in, their input is hashed as well and compared to the database content. A weak hash is almost as bad as no hash at all: If someone steals (part of) your user database, they can analyze the hashed values to detect the actual password--and then use it, without the owner's knowledge, to log into your application on their behalf.

As part of a proactive web application security model, it is therefore important to stay ahead of the game attackers play and use sufficiently strong encryption to store passwords. Since <a href="http://en.wikipedia.org/wiki/Cryptanalysis">cryptanalysts</a> are spending great efforts on breaking encryption algorithms (with the help of increasingly fast and cheap computers), SHA-1 is meanwhile considered only <em>borderline</em> in strength. Not a good position to be in if you want to write future-proof apps.

<a href="http://djangoproject.com">Django</a> (our web app framework of choice at Mozilla) does not support anything stronger than its default, SHA-1, and has, in the past, <a href="http://code.djangoproject.com/ticket/5600">WONTFIXed attempts to increase hash strengths</a>, citing strong backwards compatibility as the reason. As long as Django targets Python 2.4 as its greatest common denominator, this is unlikely to change. Writing a full-blown, <a href="http://docs.djangoproject.com/en/dev/topics/auth/#writing-an-authentication-backend">custom authentication backend</a> for the purpose is an option (the Mozilla Add-ons project <a href="http://github.com/jbalogh/zamboni/blob/master/apps/users/models.py">chose to do that</a>),  but it seemed overkill to me, given that with the exception of the hash strength, Django's built-in authentication code works just fine.

So I decided to monkey-patch their auth model at run time, to add SHA-256 support to my application (while staying backwards-compatible with older password hashes possibly existing in the database).

The code is simple, and I made an effort to keep it as uninvasive as possible, so that it can be removed easily in case Django ever <em>does</em> get support for stronger hashes down the road. Let me know what you think:
<script src="http://gist.github.com/622519.js"> </script>
(Embedded from a <a href="http://gist.github.com/622519">Gist on Github</a>).
