--- 
status: publish
tags: 
- "10100111001"
published: true
title: Mac OS X DS_Store Killer
type: post
meta: 
  tags: ""
layout: post
---
<img src='http://fredericiana.de/uploads/050705powerbook.jpg' alt='Powerbook' class="alignright" />Eigentlich mag ich <strong>Mac OS X</strong>. Eigentlich.

Aber was schreibbare Netzlaufwerke angeht, ist es wie ein Parasit.

Überall wirft es mit <a href="http://www.macromedia.com/cfusion/knowledgebase/index.cfm?id=tn_16831">"<strong>.DS_Store</strong>"-Dateien</a> um sich, in denen es irgendwelche Metadaten ablegt. Das ist nicht nur ungefähr so nutzlos wie ein Regenschirm in der Sahara, sondern auf die Dauer auch noch nerviger als eine <a href="http://www.nmz.de/nmz/2003/02/pop-regensburg.shtml">Meise vorm Fenster</a>.

Also hacken wir ein beherztes

<code>for i in `find . -name ".DS_Store"`; do rm "$i"; done</code>

in die Tasten und sind die Übeltäter bis zum nächsten Besuch eines Powerbooks los.

Vielleicht sollte ich das ja in einen <em>Cron-Job</em> packen: Wie ein kleiner Vogel, der seinem Lieblings-Nilpferd die lästigen Viecher vom Leib hält. <em>Sie</em> sagen ja immer, die <a href="http://de.wikipedia.org/wiki/Bionik">Natur sei ein gutes Vorbild</a>...
