--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
published: true
title: Better web forms with HTML5 and Firefox 4
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  _wp_old_slug: ""
  aktt_notify_twitter: "yes"
layout: post
---
Surely, you've heard of many fancy new features that HTML5 and related technologies bring to the Web now and in the future: open video on the web, canvas, transitions, what have you.

But sometimes it's the <em>smallest things</em> that have the biggest impact. Besides these hyped features, HTML5 also introduces a number of <strong>semantic form fields</strong>. Before, the only textual input the web knew was, well, <em>plain text</em>. It was up to the web application developer to enforce certain rules around that, like making sure the input is a number, or not empty, or even a valid website address (URL).

Firefox 4 <strong>understands</strong> these new input types and helps the user by <strong>enforcing correct values</strong> even before the users submits the form. By handling validation on the client, this enables a consistent form validation UI across websites and keeps the user from constantly submitting forms and wait for the server-side form validation to pass or fail. (NB: This does not relieve the developers of performing server-side checks in order to ensure the security of their web application).

Here is what this looks like in a recent prototype of the <a href="http://input.mozilla.com">Firefox Input</a> site:

<a href="/media/wp/2010/12/html5-feedback-forms-1.jpg"><img src="/media/wp/2010/12/html5-feedback-forms-1-570x400.jpg" alt="" title="HTML5 Feedback Forms" width="570" height="400" class="aligncenter size-large wp-image-3079" /></a>

Another fun little feature, also pictured, is the <strong>placeholder</strong> text attribute. The grayed-out placeholder in a text box shows you an example of what you might enter into this field. Rather than explaining correct values in a huge label or a side note next to the field, developers can show their users much more easily what data they would like them to enter into the form fields.

All of this makes for fewer mistakes entering data into web forms, which is both beneficial to the user (getting the job done faster) and the developer (collecting better data). Win-win!

For much more detailed on HTML5 forms, placeholders, validation, etc., take a look at Mark Pilgrim's excellent <a href="http://diveintohtml5.org/forms.html">Dive Into HTML5</a>. Also, don't miss out on Anthony Ricaud's <a href="http://hacks.mozilla.org/2010/11/firefox-4-html5-forms/">in-depth description of HTML5 forms in Firefox</a> on the Mozilla Hacks blog.
