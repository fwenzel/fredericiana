--- 
status: publish
tags: 
- "10100111001"
published: true
title: Wordpress goes Multikulti
type: post
meta: 
  tags: wordpress iso8859-1 utf-8
layout: post
---
<img src="http://photos3.flickr.com/2416676_8179c2d4f3_t.jpg" alt="" class="alignright border" />Mein Wordpress spricht jetzt <a href="http://de.wikipedia.org/wiki/Unicode">Unicode</a> (UTF-8). "Der Zeichensatz, aus dem unsere Welt ist", könnte man sagen.

Nach außen ändert sich fast nichts. Außer, dass die Umlaute jetzt richtig angezeigt werden, wenn ich einen Foto-Eintrag mache... Und nebenbei können exotische Muttersprachler auch Dinge wie diese in einen Kommentar schreiben:

<strong>เสรีภาพ</strong>

Na das ist doch was, oder?

P.S.: Das Wort da oben ist Thai und bedeutet <em>Freiheit</em>.

Wens interessiert: Wie man Wordpress ISO8859-15 (oder auch ISO8859-1, natürlich) abgewöhnt und stattdessen UTF-8 beibringt.<!--more--> In fünf einfachen Schritten:
<ol>
	<li>Mit <a href="http://www.phpmyadmin.net/">PHPMyAdmin</a> einen Datenbankdump machen (mit "DROP TABLE", dann kann man die alten Daten direkt wieder überschreiben). Diesen als Backup irgendwo sichern.</li>
	<li>Den Zeichensatz des Dumps mittels <code><a href="http://linuxcommand.org/man_pages/iconv1.html">iconv</a> -f iso-8859-15 -t utf-8 wordpress-dump.sql &gt; utf8-import.sql</code> konvertieren.</li>
	<li>Den konvertierten Dump mit <code>mysql -h hostname -u username -p datenbankname &lt; utf8-import.sql</code> wieder zurück in die Datenbank befördern.</li>
	<li>In den Wordpress Optionen unter "Lesen" den Zeichensatz auf "UTF-8" ändern.</li>
	<li>Freuen, dass man wieder ein bisschen internationaler geworden ist :)</li>
</ol>

<strong>Update:</strong> Bert schreibt in seinem <a href="http://dimension2k.de/index.php/2005/07/17/wordpress-von-iso-zu-utf/">Trackback</a>, wo man iconv für Win32 finden kann: auf <a href="http://sourceforge.net/projects/gettext">Sourceforge</a>. Merci!
