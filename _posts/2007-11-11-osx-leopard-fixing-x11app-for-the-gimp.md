--- 
status: publish
tags: 
- apple
- gimp
- Mozilla Crosspost
- Tech Talk
- x11.app
published: true
title: "OSX Leopard: Fixing X11.app for the Gimp"
type: post
meta: {}

layout: post
---
<img src='http://fredericiana.com/wp-content/uploads/2007/11/gimp.png' alt='Gimp Logo' align="right" class="alignright" />On our neverending bug journey though Leopard land, here we go with the next episode: X11.app in connection with the <a href="http://gimp.org">Gimp</a>.

Apparently, Apple did not find time to test one of the (if I had to guestimate) most used X11 applications on the Mac with their newest version of X11. Therefore, X11 on Leopard crashes frequently with the latest <a href="http://gimp-app.sourceforge.net/">Mac version of the Gimp image editing software</a>.

Also, when you pick, say, the brush tool and move it over an image, the tool pointer sluggishly follows the mouse pointer around until, about 2 seconds later, they meet up again. This looks funny, but makes actually using the Gimp kind of impossible.

Fortunately, the bugs in the shipped version of Leopard can be resolved by <a href="http://www.x.org/wiki/XDarwin">installing upgraded versions of libX11 and Xquartz as described on the X.org Wiki</a>. This worked flawlessly for me, but make sure to make a backup of the libraries before you replace them, in case something goes wrong.

<em>By the way:</em> Does anyone know how to remove the XTerm window that always pops up when X11.app starts?

<em>(Thanks for the link, <a href="http://blog.jeanpierre.de">Jean Pierre</a>!)</em>

<strong>Update:</strong> The RC3 version of Gimp from <a href="http://gimp-app.sf.net">gimp-app.sf.net</a> seems to lead to problems, even after fixing X11 as described above. However, until the gimp-app guys release the stable version (currently: 2.4.1), there is a community build available from <a href="http://www.nasendackel.de/2007/11/11/gimp-241-fur-leopard/">Nasendackel</a> (German). Good job!
