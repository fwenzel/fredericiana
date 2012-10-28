--- 
status: publish
tags: 
- "10100111001"
- real life
published: true
title: Literature-Coding
type: post
meta: 
  tags: ""
layout: post
---
<p><img width="110" height="83" border="0" hspace="5" align="right" src="/wp-content/olduploads/nmap-klein.serendipityThumb.jpg" alt=""  />Heute habe ich ein &quot;kleines&quot; Skript geschrieben, um am <a target="_BLANK" href="http://www.z-a-r.de" title="http://www.z-a-r.de" onmouseover="window.status='http://www.z-a-r.de';return true;" onmouseout="window.status='';return true;">Institut</a> eine relativ große Literaturliste für ein Projekt anzulegen.<br />
Dafür gibts schon ne ganze Menge Lösungen, doch leider lautete die Voraussetzung: <i>&quot;Alle Unterlagen müssen später als PDF vorliegen und im Volltext durchsuchbar sein!&quot;</i>.</p>

<p>Na toll. Alle Lösungen, die ich gefunden habe, waren super Bibtex-fähig und so weiter - aber keine konnte Dateianhänge verwalten, geschweige denn PDFs durchsuchen?</p>

<p>Also musste ich selbst ran... Herausgekommen ist ein kleines PHP/MySQL-Projekt; und für die PDF-Volltextsuche benutze ich das <a target="_BLANK" href="http://www.python.org" title="http://www.python.org" onmouseover="window.status='http://www.python.org';return true;" onmouseout="window.status='';return true;">Python</a>-Skript <a target="_BLANK" href="http://pdfsearch.sf.net/" title="http://pdfsearch.sf.net/" onmouseover="window.status='http://pdfsearch.sf.net/';return true;" onmouseout="window.status='';return true;">PDFSearch</a>. Das ist zwar noch ziemlich &quot;beta&quot;, aber die Ausgabe lässt sich gut parsen ;)</p>

<p>Inspiriert durch einen Blick in das <a target="_BLANK" href="http://www.phpscripts.com/item/85" title="http://www.phpscripts.com/item/85" onmouseover="window.status='http://www.phpscripts.com/item/85';return true;" onmouseout="window.status='';return true;">PHP Scripts Blog</a> habe ich gerade noch ein <br />
<blockquote><tt>find . -name "*.php" | xargs cat | wc -l</tt></blockquote><br />
durchgeführt und komme für heute auf satte <b>780</b> Zeilen Code. Und es ist noch nicht ganz fertig!</p>

<p>Nach dem Marathon musste ich aber erstmal <a target="_BLANK" href="http://www.sufflog.de/archives/000055.html" title="http://www.sufflog.de/archives/000055.html" onmouseover="window.status='http://www.sufflog.de/archives/000055.html';return true;" onmouseout="window.status='';return true;">nen Cocktail schlürfen</a>...!</p>

<p>Na dann: mal sehn, wie viele Zeilen es noch werden? Gute Nacht erstmal ;)</p>

<p>---</p>

<p><b>Update:</b> Das python Skript ist noch ein wenig zu unausgereift (Bsp: es kann keine Umlaute) und zu langsam für so eine Suche. So bleibt nur eins: alle PDF-Dateien durch <a target="_BLANK" href="http://www.foolabs.com/xpdf/" title="http://www.foolabs.com/xpdf/" onmouseover="window.status='http://www.foolabs.com/xpdf/';return true;" onmouseout="window.status='';return true;">PDFToText</a> jagen, hinein in eine MySQL-Datenbank - und dann mit <a target="_BLANK" href="http://dev.mysql.com/doc/mysql/en/Fulltext_Boolean.html" title="http://dev.mysql.com/doc/mysql/en/Fulltext_Boolean.html" onmouseover="window.status='http://dev.mysql.com/doc/mysql/en/Fulltext_Boolean.html';return true;" onmouseout="window.status='';return true;">MySQL Volltextsuche</a> drauf zugreifen. Funktioniert bis jetzt super.</p>
