--- 
status: publish
tags: 
- locale
- mozilla
- multi-byte
- number_format
- osl
- php
- Tech Talk
- utf-8
published: true
title: "PHP: Multi-byte-safe number_format function"
type: post
meta: 
  _edit_last: "2"
layout: post
---
I recently ran into a problem with PHP's built-in <code><a href="http://php.net/number_format">number_format</a></code> function. The function is actually quite handy: It allows you to format a number in a manner that is appropriate for the language your website is currently in.

Example: To write the number <strong>4505 and 31 hundredths</strong> in English, you'd write "4,505.31". In German or Spanish however, the comma is the decimal separator, in turn using the point as the "digit group separator": "4.505,31". Swiss German, however, uses an apostrophe-like character as a digit group separator: "4'505,31". And so on, and so forth.

All of these are supposedly addressed by using the <code>number_format()</code> function, feeding it the number to be displayed and the regionally appropriate separator characters.

Sadly though, when you do this for Russian and other eastern European languages, your result looks like this:<!--more-->
<img src="/media/wp/2008/05/number_format_utf8.jpg" alt="" title="number_format and utf-8" width="500" height="246" class="aligncenter size-full wp-image-1288" />

The reason is that <code>number_format</code> can't handle <a href="http://en.wikipedia.org/wiki/UTF-8">UTF-8 multi-byte characters</a> (which are commonly used to encode non-ASCII characters, like ü, ß, or the whole Cyrillic alphabet. In fact, this whole blog is served to you in UTF-8-encoded characters.) If you think that's <em>ironic</em> that a function meant to simplify localization cannot handle the characters needed for exactly that purpose, so do I.

Either way, in order not to make our international customers too sad, I wrote a little <strong>workaround</strong> for this problem, and it's actually quite simple: First it formats the number with placeholders (both "single-byte" characters, so <code>number_format</code> can handle them), and then it uses <code>str_replace()</code> to replace these characters by the ones appropriate for your current locale.

Here you go, the whole code for your entertainment and use, if you want to. Just, if you use it, I'd appreciate you leaving a comment here. Have fun!
<blockquote>
<code>
     /** 
      * multibyte-safe number_format function.
      * Uses regular php number_format with "safe" placeholders, then replaces
      * them by their actual (possibly multi-byte) counterparts.
      */
     function mb_number_format($number, $num_decimal_places = 0) {
         $localeconv = localeconv();
         $placeholders = array('@', '~');
         $actual = array($localeconv['decimal_point'], $localeconv['thousands_sep']);
         // format number with placeholders
         $formatted = number_format($number, $num_decimal_places,
             $placeholders[0], $placeholders[1]);
         // replace by localized characters
         $formatted = str_replace($placeholders, $actual, $formatted);
         return $formatted;
     }
</code>
</blockquote>
