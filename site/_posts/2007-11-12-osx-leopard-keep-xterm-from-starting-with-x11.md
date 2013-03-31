--- 
status: publish
tags: 
- apple
- leopard
- mozilla
- tech
- x11.app
- xterm
published: true
title: "OSX Leopard: Keep XTerm from starting with X11"
type: post
meta: {}

layout: post
---
As we <a href="http://fredericiana.com/2007/11/11/osx-leopard-fixing-x11app-for-the-gimp/">established before</a>, X11 on OSX 10.5 Leopard is, at least kind-of, broken.

Gladly, there are numerous community efforts to bring our tragic hero back on stage. For example, like in OSX 10.4 Tiger, it is possible to <strong>deactivate the XTerm window</strong> starting up every time you start X11. It has just become a little more complicated.

First, this is what has changed with launching X11 on Leopard (as described on <a href="http://boredzo.org/blog/archives/2007-10-29/x11-on-leopard-is-broken">boredzo.org</a>):
<blockquote>In Tiger, when you launch X11, it runs <code>.xinitrc</code>, and <code>.xinitrc</code> runs <code>xterm</code> (unless you comment that line out).

In Leopard, X11.app is just a launcher. All it does is run <code>/usr/bin/login -pf $USER /usr/X11/bin/xterm</code>. In other words, its only purpose is to run xterm (semi-)directly, by itself--it's not the actual X11 server anymore. When <code>xterm</code> starts, launchd sees it, notices that <code>xterm</code> requires X11, and launches the real X11 server (<code>/usr/X11/X11.app</code>) automatically.</blockquote>

In other words, there's no commenting out a line in .xinitrc anymore in Leopard. Instead, we need to change the launcher itself (as <a href="http://forums.macosxhints.com/showpost.php?p=423872&postcount=36">described</a> in the very useful <a href="http://forums.macosxhints.com/showthread.php?t=80171">X11 on Leopard FAQ</a> on macosxhints):

<blockquote><code>defaults write org.x.X11_launcher app_to_run /usr/X11/bin/xlsclients</code></blockquote>

Instead of <code>xlsclients</code>, we can alternatively run <code>xprop</code> <em>(thanks, <a href="http://fredericiana.com/?p=1175&cp=1#comment-94534">JP</a>!)</em>. Both applications have the good habit not to do much (i.e. not to waste a lot of cycles/energy/water/CO<sub>2</sub>/whatever) and also not to open an annoying window like <code>xterm</code> does.

Hope this helps :)
