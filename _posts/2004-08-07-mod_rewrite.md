--- 
status: publish
tags: 
- "10100111001"
published: true
title: mod_rewrite
type: post
meta: 
  tags: ""
layout: post
---
<img width="110" height="31" border="0" hspace="5" align="right" src="/media/wp/logos/apache.serendipityThumb.gif" alt=""  />Gerade habe ich noch ein neues Spielzeug ausprobiert: Das URL-Rewriting Modul <a href="http://httpd.apache.org/docs-2.0/mod/mod_rewrite.html" title="http://httpd.apache.org/docs-2.0/mod/mod_rewrite.html" onmouseover="window.status='http://httpd.apache.org/docs-2.0/mod/mod_rewrite.html';return true;" onmouseout="window.status='';return true;">"mod_rewrite"</a> des <a href="http://www.apache.org/" title="http://www.apache.org/" onmouseover="window.status='http://www.apache.org/';return true;" onmouseout="window.status='';return true;">Apache Webservers</a>.

Ich habe schon allerhand interessante Dinge darüber gehört, vor allem, dass man es im Sinne der Suchmaschinen einsetzen sollte, weil ewig lange URIs wie

<code>page.php?kategorie=artikel&seite=anfang</code>

nicht nur für Google und Co, sondern auch für die Benutzer der Seite ein ziemlicher Graus sind. Da sehen griffige Namen wie

<code>anfang.html</code>

natürlich besser aus.

            <br /><!--more-->Also habe ich der Struktur <a href="http://www.magenson.de/" title="http://www.magenson.de/" onmouseover="window.status='http://www.magenson.de/';return true;" onmouseout="window.status='';return true;">meiner Homepage</a> entsprechend ein paar "RewriteRules", also Regeln zum Umschreiben von URLs, angelegt. Und schon sind beispielsweise die Howtos direkt über <a href="http://www.magenson.de/howtos.html" title="http://www.magenson.de/howtos.html" onmouseover="window.status='http://www.magenson.de/howtos.html';return true;" onmouseout="window.status='';return true;">howtos.html</a> erreichbar. :)

Am Anfang der mod_rewrite-Doku steht:
<blockquote>"Despite the tons of examples and docs, mod_rewrite is voodoo. Damned cool voodoo, but still voodoo."
-- <i>Brian Moore</i></blockquote>
Seit heute weiß ich, wie recht er hat :)
