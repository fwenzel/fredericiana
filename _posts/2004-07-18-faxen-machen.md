--- 
status: publish
tags: 
- "10100111001"
published: true
title: Faxen machen
type: post
meta: 
  tags: ""
layout: post
---
<img width="85" height="103" border="0" hspace="5" align="right" src="/wp-content/olduploads/einmalig/Logo_CAPI4Linux.jpg" alt=""  />Heute wollte ich <a href="http://www.magenson.de/target.php?page=howto_hylafax" title="http://www.magenson.de/target.php?page=howto_hylafax" onmouseover="window.status='http://www.magenson.de/target.php?page=howto_hylafax';return true;" onmouseout="window.status='';return true;">wie gewohnt</a> einen Hylafax Fax-Server einrichten (für einen Bekannten in Karlsruhe).

Nachdem ich seine alte Redhat-8 Schaukel (die ich übrigens klangvoll "Einstein" getauft habe **g**) per <a href="http://linux.duke.edu/projects/yum/" title="http://linux.duke.edu/projects/yum/" onmouseover="window.status='http://linux.duke.edu/projects/yum/';return true;" onmouseout="window.status='';return true;">yum</a> auf den neuesten Stand gebracht habe (danke, dass der Reboot zum neuen Kernel aus der Ferne funktioniert hat, Einstein!), habe ich die isdn4k-utils eingespielt.

Und nix wars: <b>"ERROR: cannot load module kernelcapi"</b>...

Nach ein bisschen Googlen habe ich schließlich den <a href="ftp://ftp.cs.tu-berlin.de/pub/net/isdn/isdn4linux/CVS-Snapshots">CVS-Snapshot von isdn4linux</a> selbst gebaut, und siehe da, alles funzt.

Und die <em>Moral von der G'schicht</em>: ISDN4k und kernel-2.6.6 RPMs mögen sich nicht...
