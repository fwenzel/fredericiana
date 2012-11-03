--- 
status: publish
tags: 
- "10100111001"
published: true
title: ASCII Art Spam
type: post
meta: 
  tags: ""
layout: post
---
Hätte nicht gedacht, dass ich mal interessanten Spam bekommen würde. Also nicht inhaltlich (schließlich ist mit mir <a href="http://www.evolutiontwo.com/">alles in Ordnung</a>, denk ich), sondern eher wie einfallsreich er gemacht ist.

Aber seht selbst:
<img src='/media/wp/050223spamascii.jpg' alt='ASCII Art Spam' class="centered border" />

Nanu, wieso ist das denn da so gepunktet? Mit einer gewitzten Tastenkombination zoomen wir heran, etwa so, wie die "Experten" im Fernsehen immer auf einer eingestaubten Überwachungskamera-Aufnahme von 1875 die Waschanleitung für das Unterhemd des Bankräubers lesen können:

<!--more-->

<img src='/media/wp/050223spamasciizoom.jpg' alt='ASCII Art Spam zoomed' class="centered border" />

Da hat der Spammer seinen Text durch einen ASCII-Art-Generator wie <a href="http://www.network-science.de/ascii/">diesen hier</a> laufen lassen und so zumindest meinen Spamfilter so weit getäuscht, dass dieser die Mail als <em>"keine Ahnung"</em> statt als <em>"sicher Spam"</em> eingestuft hat.

<h3>"Next Generation" Spamming</h3>

Was bedeuten solche Tricks für unsere Spamfilter? Da das Einbinden von Bildern in E-Mails inzwischen bei den meisten Mailprogrammen genau gar nichts mehr bringt, da sie in der Regel nicht angezeigt werden, steigen findige Spammer auf Tricks wie diese um, die in der Regel mit winzigen Schriften zusammen hängen. Sei es, um wie hier daraus ein "Bild" zu machen, sei es, um Spamfilter mit winzigen Buchstaben zu täuschen, die zwischen die einschlägigen "Buzzwords" geklemmt werden.

Freund Spamassassin könnte darauf etwa reagieren, indem er HTML-Mail per se schlechter bewertet als Nur-Text. Wenn ich aber die vielen Menschen sehe, die sehr gerne solche Mails versenden, wird sich diese Politik kaum halten lassen, ohne massenhaft "false positives" zu erzeugen.

"Zu viel sinnlose Zeichen" filtern, also quasi eine Rechtschreibprüfung für Spam, hätte dasselbe Problem: Die Mails von <a href="http://www.microsoft.com/athome/security/children/kidtalk.mspx">Leetspeak-Kiddies</a> würden reihenweise in die Tonne wandern. Das wäre ja zugegeben nicht schlimm, aber wohl auch nicht erwünscht.

<h3>Spamfilter mit HTML Rendering?</h3>
Bleibt uns fast nur, Mails so zu prüfen, wie sie der Endbenutzer sehen wird. Mit anderen Worten: Wir müssen sie durch einen <em>HTML-Renderer</em> schicken (etwa die <a href="http://de.wikipedia.org/wiki/Gecko_(Rendering_Engine)">Mozilla Gecko Engine</a>) und die Ansicht, die der eigentliche Benutzer tatsächlich zu Gesicht bekommt, auf Spammerkmale testen. Denn wie ausgeklügelt die Umgehungsmechanismen auch werden, die sich die Spammer einfallen lassen - es ist immer das <em>Auge des Betrachters</em>, das sie erreichen wollen.

<h3>Explodierender Aufwand?</h3>
Solche Tests allerdings haben einen enormen rechnerischen Aufwand. Sie haben <a href="http://de.wikipedia.org/wiki/Turing-Test">Turing-Test</a>-Charakter, sprich: Bei vielen Spammer-Tricks kann nur ein Mensch, bisher aber keine Maschine entscheiden, dass es sich um einen bestimmten Trick handelt, und folglich Spam ist. Gerade diese Tatsache, die anderswo zur <a href="http://de.wikipedia.org/wiki/Captcha">Verhinderung von Spam</a> verwendet wird, kommt hier den Übeltätern selbst zu Gute.

Einfaches <a href="http://de.wikipedia.org/wiki/OCR">OCR</a> über das gerenderte Mail-Bild würde hier auch nur begrenzt helfen, vor allem aber an dem explodierenden Rechenaufwand scheitern. Die Tests wären von einem zentralen Spamfilter schlicht nicht durchführbar, denn schon jetzt sind Spamfilter unter den empfindlichsten Punkten eines Mailsystems, die durch <em>pure Masse</em> in die Knie gezwungen werden können. Ein Steilpass für Denial of Service-Angriffe. Man könnte zwar Distributed Computing-Lösungen einsetzen, das würde <em>mir</em> aber jedenfalls nicht gefallen, wenn meine Mails zum Spamtest in der Weltgeschichte umher geschickt würden.

<!--adsense-->

<h3>Also?</h3>
Um das "Auge des Betrachters" zu simulieren, müssen wir wohl noch auf <a href="http://de.wikipedia.org/wiki/Quantencomputer">Quantencomputer</a> warten, oder so ähnlich...

Für heute gilt: HTML-Mails sind <strong>böse</strong>. Wir wollen sie nicht verwenden.

Und weil das ja doch keiner tut, sollten Spamfilter wenigstens winzig kleine Schriften schärfer abwerten als bisher. Dafür braucht der Spamfilter zwar zumindest einen einfachen CSS-Interpreter, aber die Mühe ist es wert.

Bis zum nächsten Spammer-Trick, jedenfalls.
