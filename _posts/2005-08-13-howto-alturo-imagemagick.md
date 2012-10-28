--- 
status: publish
tags: 
- "10100111001"
published: true
title: "Howto: alturo.de und ImageMagick"
type: post
meta: 
  tags: howto alturo imagemagick
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Nachdem ich auf meinen (alten) <a href="http://fredericiana.de/archives/2004/05/25/alturode-und-imagemagick/">Artikel über alturo und ImageMagick</a> immer mal wieder Anfragen bekomme, <em>wie das denn nun genau geht</em>, will ich mal ein kurzes <strong>Howto</strong> schreiben, wie man eine <strong>funktionierende ImageMagick-Installation</strong> auf seinen Webspace-Account bekommt.

Alle Interessierten: Hereinspaziert ;) <!--more-->

Eine kleine Warnung am Rande. Wer ImageMagick nur wegen <a href="http://www.typo3.org">typo3</a> installieren möchte, sollte vielleicht vorher darüber nachdenken, ob ein kleiner alturo-Account überhaupt leistungsfähig genug ist, typo3 zu betreiben. Aber zum Test ist das sicher okay. Außerdem gibt es ja auch andere Software, die auf ImageMagick basiert.

Anmerkung Nr. 2: Was ich hier schreibe, steht, etwas allgemeiner, natürlich auch in der README. Bei ImageMagick heißt das Teil <strong>Install-unix.txt</strong> - wer noch weitere Optionen sucht, ist damit bestens bedient.

<strong>Zur Sache:</strong>

<ol>
	<li>per SSH auf dem Webspace <a href="http://faq.alturo.de/webmaster/ssh/index.html">einloggen</a>; eine <a href="http://www.imagemagick.org/script/download.php">ImageMagick-Version auf einem der Mirrors auswählen</a> (Format: <code>.tar.gz</code>) und mittels <code>wget</code> in den Webspace (oder auch in <em>/tmp</em>) herunterladen.
Bsp.: <div class="codesample"><code>wget ftp://ftp.fu-berlin.de/unix/X11/graphics/ImageMagick/ImageMagick.tar.gz</code></div>
</li>
	<li>Im eigenen Webspace ein Zielverzeichnis anlegen, in dem ImageMagick später leben soll: z.B.: <code>mkdir -p ~/lib/ImageMagick</code></li>
	<li>Das Paket entpacken: <code>tar xvzf ImageMagick.tar.gz</code></li>
	<li>In das entpackte Verzeichnis wechseln und ImageMagick mit ein paar speziellen Funktionen konfigurieren. Wichtig ist, das neue Zielverzeichnis anzugeben. Außerdem habe ich <em>PerlMagick</em> und <em>Magick++</em> abgeschaltet, da ich IM ja nur aus PHP heraus verwenden wollte. Bsp. (auf das korrekte Verzeichnis achten! Der Configure-Befehl gehört übrigens in <em>eine</em> Zeile, nicht in zwei.):

<div class="codesample">
<code>cd ImageMagick-6.2.3</code>
<code>./configure --without-magick-plus-plus --without-perl --prefix=$HOME/lib/ImageMagick</code>
</div>
	</li>
	<li>Bei meinem Test stieß ich leider auf ein Problem mit freetype. Wer dasselbe Problem hat, kann es natürlich mit der (weiteren) Option <code>--with-ttf=no</code> abschalten, wenn er es nicht braucht.</li>
	<li>Nach erfolgreichem configure kann <code>make install</code> ausgeführt werden; das kompiliert ImageMagick und installiert es in das gewählte Verzeichnis.</li>
	<li>Nun sollte eine funktionierende Version ImageMagick vorliegen (z.B. das beliebte Programm "convert"), und zwar im Verzeichnis <code>$HOME/lib/ImageMagick/bin</code> .
Bildergalerien etc. möchten immer gerne den gesamten Pfad haben; also müsst ihr natürlich <em>$HOME</em> durch euer Homeverzeichnis ersetzen. Wie das lautet, erfahrt ihr durch <code>echo $HOME</code> .
</li>
	<li>Zuletzt <em>liebt</em> ImageMagick <a href="http://www.imagemagick.org/script/resources.php#environment">Umgebungsvariablen</a>. Wenn es also Probleme gibt bei der Benutzung der Software (wenn er irgendwas nicht findet), so muss man zum Beispiel bei seiner Galerie-Software o.ä. in einem Config-Skript die betreffenden Umgebungsvariablen setzen (hauptsächlich: <code>PATH</code> und <code>MAGICK_HOME</code>, eine Idee davon gibt es <a href="http://www.imagemagick.org/script/binary-releases.php">hier</a>). Unter PHP geht das bspw. mit der Funktion <code><a href="http://php.net/manual/de/function.putenv.php">putenv</a></code>. Wann das allerdings tatsächlich nötig ist, weiß ich nicht. Dazu unterscheiden sich die Nutzungsgebiete zu sehr.</li>
	<li>Wenn alles klappt, kann man natürlich die <em>tar.gz-Datei</em> und das entpackte <em>Quellcode-Verzeichnis</em> wegwerfen; das braucht man dann nicht mehr.</li>
	<li><strong>Fertig!</strong></li>
</ol>

Ich hoffe, das hat ein wenig geholfen und wünsche allen Benutzern gutes Gelingen :)


<strong>P.S.:</strong> Das Howto kann man wahrscheinlich auch genau so bei <em>1und1</em>, <em>strato</em> oder sonstwo anwenden.
