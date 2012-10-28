--- 
status: publish
tags: 
- "10100111001"
- websights
published: true
title: Trompete zum Durchschauen
type: post
meta: 
  enclosure: |-
    http://fredericiana.de/images/trumpetheader.png
    27988
    image/png
  tags: ""
layout: post
---
Wie man sieht, lächelt euch jetzt oben rechts in der Ecke eine (halbtransparente) Trompete an.<br /><br />Ein halbtransparentes Bild, das kann ja eigentlich nicht so schwer sein. Ist es auch nicht. Ein bisschen Positionen festlegen, Hintergrundbild einstellen, speichern.<br /><br />Doch dann sieht das Bild so aus:<br /><img src="http://fredericiana.de/images/trumpetheader.png" class="centered border" /><br />(wenn Du nichts Beunruhigendes feststellen kannst, ist dein Browser in Ordnung. Anderenfalls ist er kaputt... daher... weiterlesen ;) )<br /><br /><!--more-->Sieh da, der Kleinweich Internet-Erkunder hat es <a href="http://www.libpng.org/pub/png/#history">seit 1995</a> (!) <a href="http://www.eggdrop.ch/noie/">nicht geschafft, transparente PNG-Dateien zu unterstützen</a> (und jaa, ich habe die neueste Version.). Dabei ist das PNG-Dateiformat (übrigens <a href="http://www.opensource.org/licenses/zlib-license.php">OpenSource</a>) nach fast einem Jahrzehnt (bis auf den MSIE) in quasi Webbrowser und in jeder nennenswerten Grafiksoftware voll unterstützt. Seit 1996 ist PNG eine <a href="http://www.w3.org/QA/Tips/png-gif">Empfehlung des World Wide Web Consortium</a> (W3C) für die Gestaltung von Webseiten, da es das veraltete GIF-Dateiformat in wohl jeder Disziplin schlägt. Ein Beispiel dafür ist eben die Transparenz, um die es hier geht: In einer GIF-Datei kann ein Pixel entweder ganz transparent oder ganz deckend sein ("binary transparency"). Was aber, wenn ich z.B. ein zu 80% durchscheinendes Bild benötige? Genau, dann nehmen wir eine PNG-Datei wie in meinem Fall.<br /><br />Eine kurze Zeit lang habe ich ja darüber nachgedacht, die Trompete in der Ecke im MSIE einfach hässlich aussehen zu lassen. Zum einen will den MSIE ja ohnehin <a href="http://www.getfirefox.com/">niemand mehr benutzen</a>, zum anderen bin ich ja nicht das Kindermädchen für die Programmierfehler anderer.<br /><br />Trotzdem, weil heute Silvester ist, habe ich mir ein paar Minuten Zeit genommen, vor allem, damit manche meiner Freunde kein hässliches Bild sehen.<br />Außerdem wollte ich mir den Dialog:<br /><blockquote><ul><li style="font-style: italic;">&quot;Dein Bild ist kaputt!&quot;</li><li>Nein, Dein Browser ist kaputt. Meinem Bild geht es prima.</li><li><span style="font-style: italic;">???</span><br /></li></ul></blockquote>ersparen ;)<br /><br />Eine Lösung habe ich auf <a href="http://www.alistapart.com/articles/pngopacity/">dieser Webseite</a> gefunden. Kleinweich bietet nämlich offenbar die Möglichkeit an, so genannte &quot;Filter&quot; zu verwenden. Das ist zugegeben <span style="font-style: italic;">ziemlich lächerlich</span>, weil man keinen Filter &quot;lade transparentes Bild&quot; benötigen würde, wenn die <span style="font-style: italic;">normale</span> Bildanzeige von vorn herein richtig programmiert worden wäre. Zudem versteht diese &quot;Filter&quot;-Methode kein anderer Browser auf diesem Planeten, da sie in keinem irgendwo bekannten Web-Standard erwähnt wird.<br />
Zur Differenzierung zwischen MSIE und dem Rest der Welt lese ich die Variable <code>"HTTP_USER_AGENT"</code> aus, die normalerweise vom Browser beim Abrufen der Webseite mitgeschickt wird.
Enthält sie "MSIE", dann wird statt dem normalen "background"-Bild ein Filter mit dem eingängigen Namen "DXImageTransform.Microsoft.AlphaImageLoader" verwendet. Und siehe da, sogar der MSIE kann transparente Bilder anzeigen. Er muss sich (wie immer) extra darum bitten lassen, aber das kennen wir ja.

Ich verspreche übrigens nicht, dass ich mir diesen Extra-Aufwand bei jeder Änderung aufs neue mache. Wer mit einem bestimmten Browser surft, muss mit dessen Stärken und Schwächen leben, besonders dann, wenn er Standards ignoriert. - ich kann schließlich auch kein 80 Volt-Gerät in eine 230 V-Steckdose stecken und mich wundern, dass es durchbrennt, nur weil der Besitzer der Steckdose seinen Standard nicht für mich verändert hat *lach*...

In diesem Sinne... surft gut ins neue Jahr!
<!--adsense-->
