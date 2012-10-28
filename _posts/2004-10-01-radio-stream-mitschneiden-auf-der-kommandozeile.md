--- 
status: publish
tags: 
- "10100111001"
published: true
title: Radio-Stream mitschneiden auf der Kommandozeile
type: post
meta: 
  tags: ""
layout: post
---
<p><img width="128" height="128" border="0" hspace="5" align="right" src="/media/wp/logos/tux.gif" alt=""  />Jüngst suchte ich nach einer Möglichkeit, einen &quot;On Demand Audiostream&quot; auf der Unix-Kommandozeile mitzuschneiden, um ihn später als MP3 für die &quot;Ewigkeit&quot; konservieren zu können.</p>

<p>Recht bekannt ist dafür <b><a target="_BLANK" href="http://streamripper.sourceforge.net/" title="http://streamripper.sourceforge.net/" onmouseover="window.status='http://streamripper.sourceforge.net/';return true;" onmouseout="window.status='';return true;">StreamRipper</a></b> (gibt's für allerhand Betriebssysteme):<br />
<ul>
    <li><i>Vorteil:</i> Er trennt anhand des gesendeten ID3-Tags die Lieder auseinander, sodass man (in Deutschland völlig legal, übrigens) später ein Verzeichnis voll mit mitgeschnittenen Liedern vom Internet-Radiosender hat.</li>
    <li><i>Nachteil:</i> Er kann nur mit MP3-Streams (wie von <a target="_BLANK" href="http://www.shoutcast.com/" title="http://www.shoutcast.com/" onmouseover="window.status='http://www.shoutcast.com/';return true;" onmouseout="window.status='';return true;">Shoutcast</a>) und OGG-Streams (also bspw. <a target="_BLANK" href="http://www.icecast.org/" title="http://www.icecast.org/" onmouseover="window.status='http://www.icecast.org/';return true;" onmouseout="window.status='';return true;">Icecast</a>) umgehen.</li>
</ul>
</p>

<p>Was aber machen wir, wenn (wie so oft!) nur Real oder sogar (Hilfe!) nur <i>Windows Media</i> Streams zu finden sind?</p>


            <br /><!--more--><p>Unter den ersten, spontanen Suchbegriffen findet Google alle möglichen, häufig extrem schlechten Shareware-Programme für Windows und ein paar Tutorials dazu, die den Namen häufig wirklich nicht verdient haben...</p>

<p>Aber nach ein paar Versuchen stieß ich auf die Seite <b><a target="_BLANK" href="http://stommel.tamu.edu/~baum/linux-music.html#realaudio" title="http://stommel.tamu.edu/~baum/linux-music.html#realaudio" onmouseover="window.status='http://stommel.tamu.edu/~baum/linux-music.html#realaudio';return true;" onmouseout="window.status='';return true;">Music File Processing on Linux</a></b>, die wirklich was taugt.</p>

<p>Sie empfiehlt für Real Media Streams die Verwendung von <a target="_BLANK" href="http://www.mplayerhq.hu/" title="http://www.mplayerhq.hu/" onmouseover="window.status='http://www.mplayerhq.hu/';return true;" onmouseout="window.status='';return true;">mplayer</a>, der auch von der Kommandozeile problemlos als Wave aufnehmen kann.</p>

<p>Nach einem kurzen<pre>yum install mplayer w32codecs</pre>ließ sich der gewünschte Stream mittels <pre>mplayer -playlist http://www.example.com/file.ram -ao pcm -aofile file.wav -vc dummy -vo null</pre> in eine Wave-Datei bannen und später zu einer MP3-Datei umwandeln.<br />
Aber Achtung. Unkomprimierte Wave-Dateien brauchen natürlich ordentlich Platz. In meinem Fall etwa 10&#160;MB pro Minute - je nach Qualität können es aber auch mehr werden. (Daher sowas auf keinen Fall(!) als root laufen lassen - aber das macht ihr ja sicher eh niiiie ;) ).</p>

<p>(Hätt ich selbst nicht gedacht, aber:) So einfach geht das :)</p>
