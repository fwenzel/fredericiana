--- 
status: publish
tags: 
- color blindness
- deuteranomaly
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- user experience
published: true
title: Red or Green? Accessibility of Lufthansa Seat Selections
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Soon, I'll fly to the US on a business trip, so I checked into my flight with Lufthansa earlier today. As most airlines nowadays, they let you choose where you'd like to sit, which looks something like this:

<img src="/media/wp/2009/04/lufthansa-seat-selection.jpg" alt="Lufthansa Seat Selection" title="Lufthansa Seat Selection" width="388" height="176" class="alignnone size-full wp-image-2168" />

Sadly, this is hardly accessible for people with "disabilities": Not only is it a Flash application (which is a pretty bad idea accessibility-wise anyway), but also for people with red-green colorblindness (like myself), it is extremely hard to distinguish occupied seats from empty ones, as they only differ in color, and do not have any additional distinguishing features.

When you look at other airlines' seat selectors, you'll notice that Lufthansa has, in comparison, made a particularly bad choice. <a href="http://www.nwa.com/travel/perkchoice_demo_html/">Northwest Airlines' seat selector</a>, for instance, looks like this:

<img src="/media/wp/2009/04/nwa-seat-selection.jpg" alt="NWA Seat Selection" title="NWA Seat Selection" width="302" height="273" class="alignnone size-full wp-image-2169" />

The difference is obvious: When a seat is occupied, instead of bothering only with a different color, NWA just puts a little person into the spot. In addition, other meaningful symbols are employed to display other options, such as accessible seating (wheelchair symbol) or seats that can be purchased for an additional fee (the dollar sign).

What's so bad about Lufthansa's design choice is that the <strong>most central difference</strong> in this UI is <strong>no different at all</strong> when you find yourself among the approx. <a href="http://en.wikipedia.org/wiki/Deuteranomaly#Anomalous_trichromacy">6&nbsp;% of males with deuteranomaly</a>.

<strong>What does this mean for developers?</strong> It may sound trivial, but: Make similar things similar, and different things different. If you have a very limited set of UI elements for the task at hand, make them sufficiently different for the user to distinguish without guesswork -- this won't only help the "challenged" users, but all of them will need less time and thinking, and thus have a better user experience. There's more to UI design than color, as Alex Faaborg outlined in <a href="http://blog.mozilla.com/faaborg/2007/06/26/quantitative-design/">this an older blog article about quantitative design</a>.
