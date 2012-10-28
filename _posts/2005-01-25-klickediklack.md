--- 
status: publish
tags: 
- "10100111001"
published: true
title: Klickediklack
type: post
meta: 
  tags: ""
layout: post
---
Na super. Die freundlichste Begrüßung, die man sich von seinem Server vorstellen kann, wenn man ihn anschaltet, ist: <strong>klickediklack.</strong> - Nanu? - Ach nein, das ist <strong>klick</strong> ganz normal <strong>klick</strong> beim Hochfahr...<strong>klickediklack!</strong>
Und die insgeheim entstandenen Befürchtungen, es könnte was Ernstes sein, bestätigen sich durch die wüsten Fehlermeldungen des Kernels, der uns sagen will: <strong>hdb ist kaputt</strong> (übrigens: eine <a href="blog.jeanpierre.de/archives/2004/09/ibm_hasst_mich.html">IBM-Platte</a>. Die gehen mir deutlich zu häufig kaputt...).
Na super. Doch die Schweißperlen werden weniger und die Laune bessert sich, als ich sehe, dass es sich um einen Teil des <a href="http://de.wikipedia.org/wiki/Raid">RAID</a>s handelt, und nicht um den Teil des Systems, der nicht gespiegelt ist. Glück gehabt.

Also ausbauen, neue Platte rein, RAID zurückspiegeln. Und was merke ich? Da die neue Platte doppelt so groß ist wie die alte, könnte auch der RAID größer werden. Nur wie, bei der jetzigen Partitionierung? Kopieren. Hin und zurück und überhaupt und sowieso. Na prima.

Aber damit mir das nicht nochmal passiert, lege ich diesmal ein <a href="http://www-106.ibm.com/developerworks/linux/library/l-lvm/">Logical Volume Management</a> unter den Software-RAID (natürlich: Die "Volume Groups" fein säuberlich nach physikalischen Festplatten getrennt, sonst nützt ja der ganze RAID nichts), damit ich nach Belieben an den Volume-Grenzen rumschieben kann. Also etwa so:
<pre>
      +-----------+      +--------------------+
      | raided FS |      |   unraided FS      |
      +-----------+      +--------------------+
        / RAID 1 \                 |
+----------+  +----------+--------------------+
|   LV 1   |  |   LV 2   |      LV 3          |
+----------+  +----------+--------------------+
|   LVG1   |  |        LVG 2                  |
+----------+  +-------------------------------+
|    HD1   |  |         HD2                   |
+----------+  +-------------------------------+
</pre>

Das allerdings hat so seine Tücken:
<!--more-->
Problemlos ausfallen darf nämlich nur die Platte "HD1" (wie heute geschehen). Fällt Platte Nr. 2 aus, geht das "unraided FS" mal eben in die ewigen Jagdgründe über. Hinzu kommt, dass sich mein System selbst nicht auf dieser RAID-Struktur befindet. Das ist natürlich eher schlecht - weil auch das System selbst mal eben durch einen Plattencrash ausgelöscht werden könnte.

Also muss ich (zwei gleichgroße Platten vorausgesetzt) im Idealfall die logische Reihenfolge umdrehen:

Untendrunter ein RAID1, und darauf ein LVM, das die einzelnen Dateisysteme zur Verfügung stellt. Fällt nun eine Platte aus, kratzt das die Dateisysteme mal gar nicht, und nach dem Austausch ist wieder alles in Butter.

Das werde ich wohl am Wochenende mal in Angriff nehmen. Besonders, weil damit das Root-Dateisystem nun zwei Abstraktionsstufen höher liegt als vorher (und der Bootloader und der Kernel das also schon beim Starten unterstützen müssen), wird das wohl gar nicht so einfach... - Falls jemand noch einen konstruktiven Vorschlag oder ein Howto hat, wie ich ein "Dateisystem-in-LVM-in-RAID-auf-Platte" System herstellen kann, möge er mich erhellen ;)
