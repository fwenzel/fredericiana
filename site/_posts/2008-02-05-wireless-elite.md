--- 
status: publish
tags: 
- Deutschland
- real life
- uni karlsruhe wireless netzwerk
published: true
title: Wireless-Elite
type: post
meta: {}

layout: post
---
Jeden Tag dasselbe Spiel hier an der Uni Karlsruhe: Wenn man um die Mittagszeit in die neue Unibibliothek geht, ist der ganze Laden ziemlich voll (da sag noch mal einer, voller Bauch studiert nicht gern). Wenn man einen Platz gefunden hat, sein Laptop aufbaut, und sich mit dem Wireless-Netz verbinden möchte... Pech gehabt.

Von den zahlreichen verfügbaren Wireless-Netzwerken (verschlüsselt, unverschlüsselt, und so weiter) funktioniert kein einziges: Mal ist die Signalstärke null, aber noch deutlich häufiger scheitert das Unterfangen daran, dass der Versuch, eine IP-Adresse per DHCP zu bekommen, nicht beantwortet wird. Das Betriebssystem schmollt und gibt sich statt dessen selbst eine "private" -- und damit ziemlich unnütze -- Adresse. Viele Studenten helfen sich ab, indem sie ein Netzwerkkabel mitbringen: Denn das Kabel-Netzwerk funktioniert manchmal besser, manchmal aber auch nicht.

<div class="img-label">
<img src='/media/wp/2008/02/rz08.jpg' alt='Rechenzentrum der Uni KA' />
So sieht es im Rechenzentrum aus, wenn es funktioniert ;)
</div>

Als Grund für die Misere kommt wahrscheinlich eine Überlastung in Frage: Entweder verbinden sich zu viele Leute auf denselben Wireless-Access-Point, sodass dieser an seine Grenzen stößt, oder der DHCP-Server hat keine freien Adressen mehr, die er aushändigen könnte.

Nicht immer kann aber eine Überlastung schuld sein: Egal zu welcher Tageszeit gibt es freilich Orte, an denen sich das Aufklappen des Laptops gar nicht erst lohnt: Geht man etwa im 1. Obergeschoss zur Fensterfront an der Adenauerallee, sind die dortigen Arbeitsplätze komplett ohne Wireless-Signal; erst wenn man sich stattdessen an einen Platz weiter im Gebäudeinneren setzt, kann man sich mit einem Netzwerk verbinden. Wahrscheinlich hat man bei der Netzwerk-Planung die Reichweite der Wireless-Signale in einem Gebäude, das komplett aus Beton besteht, weit überschätzt.

Es erscheint unklar, warum gegen dieses Problem nichts getan wird. Dass bei einem Gebäude, das angeblich <a href="http://www.ka-news.de/karlsruhe/news.php4?show=hok2006424-1117E">13 Millionen Euro</a> gekostet hat, nicht genügend Geld vorhanden war, um ausreichend Access-Points anzubringen, scheint jedenfalls kaum möglich.

Und was die IP-Adressen angeht, sind die DHCP-Probleme ein seit Jahren bekanntes Problem, gegen das, zumindest meinem subjektiven Eindruck nach, noch nie etwas getan wurde. Zugegeben (und man verzeihe mir den flachen Spruch), IPv4-Adressen wachsen ja nicht auf Bäumen. Aber man könnte ja zum Beispiel der Bibliothek einen ausreichend großen, privaten, Adressbereich zuweisen, statt dort globale IP-Adressen auszuhändigen -- zumal der Zugriff von außen durch die Campus-Firewall ohnehin sehr stark eingeschränkt ist. Im Laufe meiner Studentenzeit (also seit etwa 5 Jahren) habe ich in dieser Richtung schon ein paarmal beim Rechenzentrum nachgefragt: Schade, dass ich nie eine Antwort erhielt.

<div class="img-label">
<img src='/media/wp/2008/02/csi-ip-address.png' alt='CSI Miami IP-Adresse' />
Keine Adresse (Unibibliothek), oder eine (ungültige) wie diese (Fernsehshow "CSI Miami") -- sie sind beide etwa gleich sinnvoll (oder -los).
</div>

Es drängt sich die Frage auf, wie elitär eine "Elite-Uni" sein kann, die sich zu den besten in Deutschland zählt (und das insbesondere im Bereich der Informatik), aber es offensichtlich nicht schafft, das drahtlose Netzwerk auf dem Campus mit einer ausreichenden Service-Qualität (und mit überhaupt irgendwelchen Leistungsreserven) zur Verfügung zu stellen.

Durch die nun großflächig genommenen Studiengebühren wird das Problem freilich nicht besser: Das (zugegeben, von der Politik) selbstgewählte Los der Universitäten als Service-Einrichtungen wird es um so wichtiger, Dienste, die im 21. Jahrhundert zum Rückgrat eines modernen Studiums gehören, qualitativ hochwertig und dauerhaft zur Verfügung zu stellen (und in ausreichender Menge, dass sie von der stetig wachsenden Studentenzahl problemlos benutzt werden kann).

Ein gutes Haar möchte ich aber dennoch an der Uni lassen: Die von den Informatikern (Abteilung technische Infrastruktur) zur Verfügung gestellten Services (ja, auch das Wireless-Netzwerk im Informatik-Hauptgebäude) funktionieren mittlerweile vorbildlich. Auch Anfragen/Bug Reports an den dortigen Studentensupport wurden in jüngster Zeit schnell, kompetent und freundlich beantwortet. Es gibt also noch Hoffnung :)

<strong>PS:</strong> Diesen Artikel habe ich schon seit ein paar Wochen vorbereitet -- und nur falls der Eindruck aufkam, das Problem bestehe nicht fort: Heute, am "heiligen Faschnachtsdienstag", kurz bevor die Narren draußen an der Adenauerallee vorbeizogen, war es wieder so weit: Zuerst wurden keine Wireless-Netzwerke gefunden, dann ging die Verbindung nicht. Also eigentlich alles wie immer.
