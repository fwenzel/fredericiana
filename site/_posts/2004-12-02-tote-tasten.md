--- 
status: publish
tags: 
- "10100111001"
published: true
title: Tote Tasten
type: post
meta: 
  tags: ""
layout: post
---
Heute war wieder einer jener Tage, an dem ich mich geärgert habe, dass das Standard-Tastaturlayout in unseren Computerpools &quot;de-latin1-<span style="font-weight: bold;">NODEADKEYS</span>&quot; ist. <a href="http://wauug.erols.com/~balsa/linux/deadkeys/" title="http://wauug.erols.com/~balsa/linux/deadkeys/" onmouseover="window.status='http://wauug.erols.com/~balsa/linux/deadkeys/';return true;" onmouseout="window.status='';return true;">Dead keys</a>, &quot;tote Tasten&quot;, dazu zählen nämlich auch die Accents in meinem Vornamen (é...), sodass ich E-Mails aus der Uni regelmäßig &quot;verstümmelt&quot; unterschreiben muss.<br /><br /><img width="72" hspace="5" height="110" border="0" align="right" src="/media/wp/allgemein/keyboard.serendipityThumb.jpg" alt=""  />Na toll.<br /><br />Aber <a href="http://blog.jeanpierre.de/" title="http://blog.jeanpierre.de/" onmouseover="window.status='http://blog.jeanpierre.de/';return true;" onmouseout="window.status='';return true;">Jean Pierre</a> wusste Rat: Mittels<br /><br /><div style="margin-left: 40px;"><code>setxkbmap de</code><br /></div><br />kann ich (temporär) das Tastaturlayout umstellen. Dass dann die Tilde oder &quot;Backticks&quot; (Accents graves ohne Buchstaben ;) ) einen Druck auf die Leertaste benötigen, bin ich gewöhnt, das stört nicht.<br />Sollte ich es dann wirklich irgendwann zurückstellen wollen, hilft mir ein beherztes<br /><br /><div style="margin-left: 40px;"><code>setxkbmap de -variant nodeadkeys</code><br /></div><br />, und die Accents verschwinden wieder in der Unerreichbarkeit.<br /><br />Zuletzt gibt es natürlich noch einen Trick, dass wir das nicht jedes mal machen müssen: Wir füttern die Datei <a href="http://poolmgr.informatik.uni-freiburg.de/doc/config/xinitrc.html" title="http://poolmgr.informatik.uni-freiburg.de/doc/config/xinitrc.html" onmouseover="window.status='http://poolmgr.informatik.uni-freiburg.de/doc/config/xinitrc.html';return true;" onmouseout="window.status='';return true;"><tt>.xinitrc</tt></a> in unserem Homeverzeichnis mit obigem Befehl und freuen uns wie ein Schneekönig, dass wir unseren Namen richtig tippen können:<br /><br />Frédéric... Frééééédééric.... :)<br />
