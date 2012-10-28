--- 
status: publish
tags: 
- "10100111001"
published: true
title: gravatar.com Alternativen?
type: post
meta: 
  tags: ""
layout: post
---
<img src="/wp-content/gravatars/soundwave80.jpg" alt="Ein Beispielavatar" class="alignright border" /><strong><a href="http://www.gravatar.com">gravatar.com</a></strong> ... <a href="http://www.cyrus.ruhr.de/blog/2005/07/16/gravatar">wurde nicht gefunden</a>.

Seit ein paar Tagen sind die <a href="http://fredericiana.de/archives/2005/04/18/gravatar/">Gravatar Images</a> tot (sieht man daran, dass kein Bild, sondern nur der Schriftzug "Gravatar Image" bei den Kommentaren erscheint).

Das war irgendwann vorher zu sehen - wenn täglich millionenfach kleine Bildchen von einem zentralen Server geladen werden, hält der's bald nicht mehr aus...

Was nun? Gravatar entfernen? (Habe ja ein Plugin geschrieben, das ich normal einfach ausklicken kann).

Und dann?

Muss man über Alternativen nachdenken<!--more-->, besonders deshalb, weil diese kleinen Bildchen die üblichen Blogkommentare immer ein wenig persönlicher gemacht haben...

<h3>FOAF</h3>
Denkbar wäre es beispielsweise, wenn eine URL angegeben wird (z.B. die Blog-URL des Kommentierenden), die dort hinterlegte Seite auf ein <a href="http://www.foaf-project.org/">FOAF</a>-Image zu scannen und dieses kleine Bild dann anzuzeigen. So macht das etwa <a href="http://kasei.us/about/#comments">Gregory Williams</a> (empfohlen von <a href="http://uckan.info/2005/07/10/besser-als-gravatare/">Alp</a>) - <a href="http://kasei.us/archives/2004/02/12/tipjar">das ganze sieht dann so aus</a>. Also eigentlich genau wie Gravatars, nur dass die Netzlast dezentralisiert wird.

<strong>Vorteil</strong> ist natürlich die dezentrale Verteilung der Bilder, und nur weil ein Server mal nicht mehr mitspielt, sieht man wenigstens noch alle anderen Avatar-Bilder.

<strong>Nachteil</strong> an dieser Idee scheint mit zum einen der zusätzliche (relativ unproduktive) Traffic auf der heimischen Webseite zu sein, und zwar nicht unbedingt bei normalen Blogs, aber Seiten wie Slashdot können schon ein bisschen "an der Leitung ziehen"... - Entgegenwirken könnte der Bloginhaber, wenn er die Bilder über einen gewissen Zeitraum cached. Dazu kann man ihn allerdings nicht zwingen.

Zweitens ist das Anlegen solcher FOAF Metadaten nicht ganz trivial, sodass "Otto Normalverbraucher" damit durchaus Probleme haben könnte. Wenn also niemand einen Service "bau deine eigenen FOAF-Daten und machte Copy-and-Paste in deine Webseite" (oder so ähnlich) schreibt, dann wird diese Möglichkeit den meisten Benutzern verschlossen bleiben. Gleiches gilt für die vielen Menschen, die jetzt nicht nur eine Mailadresse brauchen (wie bei gravatar) sondern sogar eine <em>Homepage</em>.

<h3>Favatars</h3>
Eine weitere nette Idee ist es, bei angegebener URL (das muss immer sein, wenn man nichts Zentrales will wie bei gravatar... is klar, oder?) das dort hinterlegte <a href="http://de.wikipedia.org/wiki/Favicon">favicon</a> anzuzeigen. Dafür gibt es bereits ein <a href="http://www.noscope.com/journal/2004/12/favatars">Wordpress Plugin</a>, und es hat auch etwas Persönliches, schließlich hat die Person ihr mögliches Favicon persönlich ausgesucht. Das sieht dann zum Beispiel so aus wie auf <a href="http://www.somefoolwitha.com/2004/12/26/favatars/#comments">dieser Beispielseite</a>.

<strong>Vorteil</strong> gegenüber der FOAF-Variante: Nach favicons sucht ohnehin jeder Browser, der zusätzliche Traffic macht also den "Kohl nicht fett", wahrscheinlich. Die Dateien (und damit der Traffic) sind zudem kleiner.

<strong>Nachteil:</strong> Favicons sind von ihren Ausmaßen sehr klein (sie sind ja auch nur für die URL-Zeile des Browsers gedacht, ursprünglich). Dadurch lassen sie sich zwar recht gut in die Webseite einpflegen (siehe die Beispielseite, oben), können aber nicht sonderlich viele Details beinhalten. Das ist eigentlich schade, weil die 80x80 großen Gravatars, die wir hier ersetzen möchten, im Idealfall auch erlaubt haben, das Motiv bzw. die Person darauf zu <em>erkennen</em>.

<h3>Fazit</h3>
Die Einfachheit von gravatar-Bildern (Mailadressen-Hash abfragen, Bild kommt sofern vorhanden) ist dezentral nur schwer zu erreichen. Für die technisch Bewanderten unter uns ist die FOAF-Variante sicher die beste, für den "Hausgebrauch" dürfte allerdings die Verwendung der Favicons leichter sein.

Beide Möglichkeiten sind aber noch weit davon entfernt, für viele Benutzer verwendbar zu sein.

Denkbar wäre zuletzt noch ein "Open Gravatar Server" Projekt, das die Last der vielen Bilder verteilt (oder meinetwegen die Abfragen an die gespeicherten Bild-URLs verteilt). Wie das genau aussehen könnte, steht allerdings noch in den Sternen: Probleme wie Rating, Unverfälschtheit der Bilder und Ausfall-/Fehlertoleranz müssen bei so einem Projekt im Gegensatz zum zentralen Ansatz erst noch gelöst werden.
