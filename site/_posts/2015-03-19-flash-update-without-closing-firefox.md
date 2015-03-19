---
layout: post
tags:
- mozilla
- tech
title: Updating Adobe Flash Without Restarting Firefox
---

No reason for a Flash upgrade to shut down your entire browser, even if it claims so.

It's 2015, and the love-hate relationship of the Web with Flash has not quite ended yet, [though we're getting there](http://techcrunch.com/2015/02/13/alf/). Click-to-play in Firefox makes sure most websites can't run Flash willy-nilly anymore, but most people, myself included, still have it installed, so [keeping Flash up-to-date](https://www.mozilla.org/plugincheck/) with its frequently necessary security updates is a process well-known to users.

Sadly, the Adobe Flash updater has the nasty habit of asking you to shut down Firefox entirely, or it won't install the update:

![Flash Updater: Close Firefox](/media/2015/flash-close-firefox.jpg)

If you're anything like me, you have dozens of tabs open, half-read articles and a few draft emails open for good measure, and if there's **one thing you don't want to do right now is restart your browser**.

## Fret not, the updater is lying.

Firefox runs the Flash plugin in an *out of process plugin container*, which is tech talk for: *separately from your main Firefox browser*.

Sure enough, in a command line window, I can search for a running instance of an application called *plugin-container*:

![Firefox plugin container](/media/2015/firefox-plugin-container.jpg)

Looks complicated, but tells me that Firefox Nightly is running a plugin container with process ID 7602.

## Ka-boom

The neat thing is that we can *kill* that process without taking down the whole browser:

``killall plugin-container``

Note: *killall* is the sawed-off shotgun of process management. It'll close any process by the name you hand to it, so use with caution. For a lot more fine-grained control, find the process ID (in the picture above: 7602, but it'll be different for your computer) and then use the ``kill`` command on only that process ID (e.g., ``kill 7602``).

This *will*, of course, stop all the Flash instances you might have running in your browser right now, so don't do it right in the middle of watching a movie on a Flash video site (note: Youtube does not use Flash by default anymore).

Now **hit *Retry* in the Adobe Updater window** and sure enough, it'll install the update without requiring you to close your entire browser.

## Aaand we're done.

If you were in fact using Flash at the time of the update, you might see this in the browser when you're done:

![Firefox: Flash plugin crashed](/media/2015/flash-crashed.jpg)

You can just reload the page to restart Flash.

Why won't Adobe do that for you, and instead asks you to close your browser entirely? I don't know. But if the agony of closing your entire browser outweighs the effort of a little command-line magic, now you know how to help yourself.

Hack on, friends.