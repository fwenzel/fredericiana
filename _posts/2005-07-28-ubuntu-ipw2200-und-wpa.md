--- 
status: publish
tags: 
- "10100111001"
published: true
title: Ubuntu, ipw2200 und wpa
type: post
meta: 
  tags: ""
layout: post
---
<img src='http://fredericiana.de/uploads/poweredbyubuntu.png' alt='Powered by Ubuntu' class="alignright" />Nachdem es zu diesem Thema etwa 100.000 "Howtos" gibt, von denen die meisten immer nur dann funktionieren, wenn man nicht in die Verlegenheit kommt, <a href="http://de.wikipedia.org/wiki/Wi-Fi_Protected_Access">WPA</a> zu benutzen, stelle ich hier mal kurz etwas zusammen, das ausnahmsweise <strong>funktioniert</strong> :)

Nehmen wir einmal an, das Notebook mit Intel <em>ipw2200</em> WLAN-Karte soll unter <a href="http://ubuntulinux.org">Ubuntu Linux</a> mit einem WPA-verschlüsselten Access Point sprechen.

Dafür benötigen wir zunächst eine aktuelle Installation des <em>ipw2200</em>-Treibers sowie des IEEE802.11 Subsystems.<!--more--> Wie das funktioniert, beschreibt ein italienischer Ubuntu-Benutzer <a href="http://ubuntuforums.org/showpost.php?p=130227&postcount=1">im einem Foren-Beitrag</a>. Bis <em>einschließlich der wpa-supplicant Installation</em> können wir das genau so übernehmen.

Die Verschlüsselungsart bzw. Schlüssel-Einstellung für verschiedene Access Points beschreibt ein weiteres Howto ganz gut <a href="http://tvilda.tigbis.lt/dokuwiki/doku.php?id=ubuntu__intel_pro_wireless_2200bg__wpa_mini-howto_en">in einem Wiki-Artikel</a>. Dort können wir <em>ab Punkt 10</em> fortfahren (Punkt 9 war die wpa-supplicant Installation, der Rest davor funktioniert nicht ohne weiteres!)

Am Ende kann man mittels <code>ifup eth1</code> (oder wie auch immer das Interface bei Euch heißen mag) den WPA-verschlüsselten Service starten.

Hier funktioniert alles - und das katapultiert Ubuntu auf Platz 1, was meine WLAN-Unterstützungs-Hitliste angeht ;) Denn SuSE und <a href="http://fedora.redhat.com">Fedora</a> in der jeweils aktuellen Version erlauben nur unter enormem Aufwand, eine funktionierende Fassung (ohne Fehler beim WPA-Zugriff) des ipw-Treibers zu installieren. Und selbst wenn das ohne viele Verstrickungen gelingt - mehrere, grundverschiedene Access Points zu bedienen ist dort wieder eine Lebensaufgabe. Besonders im Hause Novell/SuSE scheint man davon auszugehen, dass ein Notebook nicht tut, was es tut - <strong>sich bewegen</strong>, nämlich. Denn die entsprechende Einrichtung sieht mehrere APs erst gar nicht vor.

Ubuntu beginnt, seinem Namen alle Ehre zu machen: <strong>"Linux for Human Beings"</strong>.
