---
layout: post
tags:
- tech
- mozilla
title: Add-on Notifications Are Hard
---

Over the years, I have written a handful of Firefox add-ons, and I need notifications quite frequently. Why? Most of my add-ons do something in the background at the user's request, and when it's done, the user wants to know. Alternatively, if my add-on attempts to do something and fails, the user would see nothing happen at all, unless I somehow tell them.

In real life, this is supposed to look something like this example, from ["Copy URL"][copyurl]:

![Copy URL notification](/media/2013/copy-url-notification.jpg)

The Mozilla Add-ons SDK even has a [convenient API][notif-api] for it. Easy, right?

Sadly, not so fast: While the SDK is supposed to abstract all of this neatly away from me and "just work" on Linux, Windows, and OS X, the behavior is inconsistent, owed -- on OS X, anyway -- to the wonky state of notification support on the operating system level.

[copyurl]: https://addons.mozilla.org/en-US/firefox/addon/copy-url-252534/
[notif-api]: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/notifications.html

## To Growl or not to Growl

I've ran into issues with notifications repeatedly over time, and employed a number of solutions so far. *Spoiler alert:* I am happy with none of them.

OS X 10.7 and below relied on a third-party tool called [Growl][growl] to support notifications. If you had it installed, the SDK's API would work just great. Sadly, if you *didn't* have it installed, notifications would **silently be swallowed**. Worse yet, I was unable to detect if this happened, so I had no way to implement a fallback mechanism.

The OS X 10.8 "notification center" was supposed to fix this, but [apparently][notif-center-bug], it will only display our notifications if the browser does **not** have the focus. In other words, it's completely useless for in-context notifications.

I considered all that a very poor user experience and instead of using the SDK's API, I implemented my own notifications module called ["simple-notify"][simple-notify] that would detect the availability of the notifications service (i.e., Growl or any other platform-specific service) first, and if none was found would employ a fallback mechanism.

[growl]: http://growl.info/
[notif-center-bug]: http://canuckistani.ca/blog/2012/10/28/10-dot-8-notification-center-sucks/
[simple-notify]: https://github.com/fwenzel/copy-shorturl/blob/a6ed22d/lib/simple-notify.js

## The ugly but reliable notifications bar

The fallback mechanism I use is the once-ubiquitous, gray, Firefox notification bar:

![Copy ShortURL notification bar](/media/2013/copy-shorturl-notification-bar.jpg)

It is shown in context, grabs the user's attention (perhaps a little too much) *and*, most importantly, **it is reliably available on all platforms**.

This notification bar has its downsides: For example, it's fairly intrusive and not easily ignored. My add-ons usually auto-close it after a few seconds. If I didn't do that, the bar would persist until closed by the user. This solution also can't handle more than one notification at a time: A second notification will overlay the previous one.

## HTML5 Notifications API

Luckily, there's hope. The [W3C Notifications API][w3c] landed [in Firefox 22][hacks], which (at the time of writing) is the next upcoming release version. If the Add-ons SDK is updated to use this API, this should finally allow me to use one line of code for notifications, not a few dozen.

In the context of a page, I can even use it already (without Add-ons SDK support), with two caveats:

* To remain backwards compatible (for a while, anyway) I'd still have to implement a fallback mechanism. Once Firefox 22 is the current release version, however, I could relax that rule and just live with the fact that users of previous versions may or may not receive notifications.
* The W3C standard (rightly) requires to ask for permission before a website can issue notifications. Add-ons should be able to use notifications without explicit permission step.

I'm looking forward to the time when all this will smoothly work as expected!


[w3c]: http://www.w3.org/TR/notifications/
[hacks]: https://hacks.mozilla.org/2013/04/hidpi-support-html5-notifications-parallel-js-asm-js-and-more-firefox-development-highlights/

---

I'm [blogging about once a week in 2013][challenge], on various topics. This is my fifteenth post of the year.

[challenge]: /2013/01/07/writing-challenge-accepted/

