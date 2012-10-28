--- 
status: publish
tags: 
- "10100111001"
published: true
title: Spielverderber Sun Solaris
type: post
meta: 
  tags: ""
layout: post
---
<p><img width="110" height="83" border="0" hspace="5" align="right" src="/wp-content/olduploads/nmap-klein.serendipityThumb.jpg" alt=""  />Wie der <a target="_BLANK" href="http://www.sun.com" title="http://www.sun.com" onmouseover="window.status='http://www.sun.com';return true;" onmouseout="window.status='';return true;">Sun</a>-Mitarbeiter <a target="_BLANK" href="http://blogs.sun.com/roller/comments/jbeck/Weblog/rm_rf_protection" title="http://blogs.sun.com/roller/comments/jbeck/Weblog/rm_rf_protection" onmouseover="window.status='http://blogs.sun.com/roller/comments/jbeck/Weblog/rm_rf_protection';return true;" onmouseout="window.status='';return true;">John Beck bloggt</a>, verdirbt Sun Solaris seit der Version 10, Build 36 dem Administrator den größten <i>&quot;Spaß&quot;</i>, den er so haben kann:</p>

<p>Auf einer UNIX-Maschine ist es ein ziemlicher &quot;Super-Gau&quot;,</p>

<blockquote><p>rm -rf /</p>

</blockquote>
<p>einzutippen. (Für Neulinge auf diesem Gebiet: &quot;/&quot; ist das Wurzelverzeichnis, und -r bedeutet rekursiv, sodass rm so lange löscht, bis das Dateisystem ganz leer ist, oder zumindest bis eine der Hauptbibliotheken weg ist und das Betriebssystem so zu einem dekorativen Briefbeschwerer wird...)</p>

<p>Doch dank Johns Engagement läuft der Befehl in Solaris nun ins Leere und wird mit der bösen Nachricht</p>

<blockquote><p>rm of / is not allowed</p>

</blockquote>
<p>abgewiesen.</p>

<p>Ziehen nun die <a target="_BLANK" href="http://www.gnu.org/software/fileutils/fileutils.html" title="http://www.gnu.org/software/fileutils/fileutils.html" onmouseover="window.status='http://www.gnu.org/software/fileutils/fileutils.html';return true;" onmouseout="window.status='';return true;">GNU Fileutils</a> nach, sodass es auch unter Linux schwerer wird, sein System &quot;aus Versehen&quot; zu schrotten? Wir dürfen gespannt sein.</p>
