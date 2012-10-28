--- 
status: publish
tags: 
- "10100111001"
published: true
title: Lokus Notes
type: post
meta: 
  tags: ""
layout: post
---
<p><img width="110" height="83" border="0" hspace="10" align="left" src="/wp-content/olduploads/nmap-klein.serendipityThumb.jpg" alt=""  />Gerade bekomme ich von einem Ettlinger Amt eine E-Mail mit einem völlig verhunzten <a target="_BLANK" href="http://www.springstubbe.net/usenet/quote.htm#kammq" title="http://www.springstubbe.net/usenet/quote.htm#kammq" onmouseover="window.status='http://www.springstubbe.net/usenet/quote.htm#kammq';return true;" onmouseout="window.status='';return true;">Kammquoting</a> zugesandt.</p>

<p>Ein Blick in den Header führt nichts Überraschendes zu Tage:<br />
<blockquote></blockquote></p>

<p><tt>X-Mailer: Lotus Notes Release 5.0.11  July 24, 2002</tt></p>


<br />
Das zweite Paradebeispiel für so eine Zerstörung von E-Mails wäre Autschlook gewesen...<p>Wieso sind eigentlich die Programmierer teurer Groupware-Software per se nicht in der Lage, ihre Software so zu programmieren, dass der (i.A. nicht technikbegeisterte) Benutzer sich um Sachen wie &quot;korrekter Zeilenumbruch&quot; nicht mehr kümmern muss?</p>

<p>Es ist immer wieder erstaunlich, dass mit dem Aufdrücken des &quot;Business&quot;-Stempels auf eine Software fundamentale Punkte völlig außer Acht gelassen werden, die <i>eigentlich</i> selbstverständlich sein sollten:</p>


            <br /><!--more--><a id="toc0"></a><h4>Standardkonformität</h4>
<p>im weitesten Sinne: <br />
<ul>
    <li>Da werden Sonderzeichen interpretiert, wo keine sind: <tt>&amp;eacute</tt> (ohne Semikolon am Ende ist das kein <b>é</b>!), </li>
    <li>Textdateien, die zwar HTML-Tags beinhalten, aber durch den <a target="_BLANK" href="http://de.wikipedia.org/wiki/MIME-Typ" title="http://de.wikipedia.org/wiki/MIME-Typ" onmouseover="window.status='http://de.wikipedia.org/wiki/MIME-Typ';return true;" onmouseout="window.status='';return true;">MIME-Typ</a> <tt>text/plain</tt> unmissverständlich als Text bezeichnet sind, werden <i>trotzdem</i> wie eine Webseite interpretiert,</li>
    <li>in E-Mail-Betreffs wird bei Antworten statt dem üblichen (wenn auch laut <a target="_BLANK" href="http://www.rfc-editor.org/rfc/rfc2822.txt" title="http://www.rfc-editor.org/rfc/rfc2822.txt" onmouseover="window.status='http://www.rfc-editor.org/rfc/rfc2822.txt';return true;" onmouseout="window.status='';return true;">RFC</a> nicht <i>zwingenden</i>) <b><tt>Re:</tt></b> ein <tt>AW:</tt> o.ä. eingefügt, sodass ein fremdsprachiger Empfänger nur erraten kann, was denn eigentlich gemeint ist (Antwort? Weiterleitung?).</li>
</ul>
</p>

<a id="toc1"></a><h4>Speicherplatzverbrauch</h4>
<p>Speicherplatz ist bekanntlich günstig, und wenn ein Programm sich <i>Business-tauglich</i> nennen will, hat es gefälligst möglichst viel Plattenplatz zu vergeuden, da es unprofessionell erscheinen würde, Rücksicht auf Ressourcen zu nehmen.<br />
So benötigt ein leeres (!) Word-Dokument bereits 20 Kilobyte (!) Speicher, und die Beta Version von MS Longhorn beschwert sich bei der Installation, eine 10 Gigabyte-Partition (!) würde <a target="_BLANK" href="http://fredericiana.de/archives/49-Bescheidenheit-ist-eine-Zier.html" title="http://fredericiana.de/archives/49-Bescheidenheit-ist-eine-Zier.html" onmouseover="window.status='http://fredericiana.de/archives/49-Bescheidenheit-ist-eine-Zier.html';return true;" onmouseout="window.status='';return true;">nicht ausreichen</a>, um das Betriebssystem zu betreiben.</p>

<a id="toc2"></a><h4>Die Frage ist:</h4>
<p><b>Warum?</b> Ist es ein Versuch, Überlegenheit oder weltfremde Genialität zu demonstrieren, indem man von allem abweicht, was sich andere Leute über Jahre hinweg sorgfältig ausgedacht haben?<br />
Fühlen die Anwender sich besser, wenn sie wissen, dass das teuer bezahlte Produkt viel Speicherplatz benötigt, als wenn es &quot;schlank&quot; ist?<br />
Und: Was muss mit den Leuten auf dem Weg in den Beruf passieren, dass sie später Software schreiben, die ihnen der Professor im zweiten Semester noch rechts und links um die Ohren geschlagen hätte?</p>
