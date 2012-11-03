--- 
status: publish
tags: 
- "10100111001"
published: true
title: alturo.de und ImageMagick
type: post
meta: 
  tags: ""
layout: post
---
<img hspace="10" border="0" align="right" src="/media/wp/nmap-klein.serendipityThumb.jpg" alt=""  />Als ich mein Weblog in Betrieb genommen habe, ist mir aufgefallen, dass mir bei meinem neuen (übrigens sehr zuverlässigen!) Provider weder <a href="http://www.imagemagick.org/" title="http://www.imagemagick.org/" onmouseover="window.status='http://www.imagemagick.org/';return true;" onmouseout="window.status='';return true;">ImageMagick</a> noch GD 2.0 zur Verfügung stand.

&quot;Na toll, ein bilderloses Weblog - wie ätzend!&quot;

Aber nicht verzagen...


            <br /><!--more-->
... Support fragen!

<blockquote>Imagemagick steht derzeit nicht zur Verfügung, es ist noch nicht sicher, ob mit dem anstehenden Update der PHP-Version und der GDlibs es dann zur Verfügung steht.</blockquote>

Nur Geduld... wie, <b>Geduld??</b> ;)

Nix gibts. Wir basteln uns einen Workaround!
Kurzerhand per SSH auf dem Webserver eingeloggt, ImageMagick Source nebst <a href="http://www.gnu.org/directory/GNU/libiconv.html" title="http://www.gnu.org/directory/GNU/libiconv.html" onmouseover="window.status='http://www.gnu.org/directory/GNU/libiconv.html';return true;" onmouseout="window.status='';return true;">Abhängigkeiten</a> gezogen, mit einem Präfix und ohne Perl/C++-Modulkäse durchkompiliert...

Dann noch ein paar <em>putenv</em>-Zeilen in die Serendipity Config getackert (ImageMagick <em>liebt</em> Umgebungsvariablen!).

<b>et voilà!</b> Das Ergebnis könnt ihr rechts oben in diesem Beitrag sehen.


Beeindruckt?... Nein? War mir klar ;)


<tr />
UPDATE: Ich habe ein <strong>Howto</strong> geschrieben, wie man ImageMagick auf dem alturo Webspace kompilieren kann. <a href="http://fredericiana.de/archives/2005/08/13/howto-alturo-imagemagick/">Hier entlang!</a>
