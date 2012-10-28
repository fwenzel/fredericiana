--- 
status: publish
tags: 
- OSU OSL Crosspost
- websights
published: true
title: Slashdot slashdotted itself
type: post
meta: 
  tags: ""
layout: post
---
A big "oops" probably went through the slashdot office when the <a href="http://slashdot.org/articles/06/11/09/1534204.shtml">hit the limit</a> of 16,777,216 comments in their system which used an <tt>unsigned mediumint</tt> as the ID type in their mysql database.

Changing the column in question apparently took three hours easily -- no wonder on a multi-million row table.

A quote:

<blockquote>We shall flog ourselves accordingly -- <em>the slashdot people themselves</em></blockquote>

Or, to say it with the words of the first commenter (after the issue was solved...):

<blockquote>*Clap clap clap*</blockquote>

<strong>Golfclap</strong> for slashdot!

<em>(via <a href="http://blog.outer-court.com/archive/2006-11-10.html#n20">google blogoscoped</a>)</em>
