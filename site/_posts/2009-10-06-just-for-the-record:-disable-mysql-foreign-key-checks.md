--- 
status: draft
tags: []

published: false
title: "Just for the record: disable mysql foreign key checks"
type: post
meta: 
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Because I always, always forget:

You can disable MySQL's foreign key checks with:

<pre>SET foreign_key_checks = 0;</pre>

and re-enable them with 

<pre>SET foreign_key_checks = 1;</pre>
