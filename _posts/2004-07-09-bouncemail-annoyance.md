--- 
status: publish
tags: 
- "10100111001"
published: true
title: Bouncemail Annoyance
type: post
meta: 
  tags: ""
layout: post
---
<img width="110" height="83" border="0" hspace="5" align="left" src="/media/wp/spam-dose.serendipityThumb.jpg" alt=""  />Jetzt flattern mir heute über den Tag verteilt schon über 50 Bouncemails ins Postfach.

Bouncemails sind <b>Fehlermeldungen</b>, die ein Mailserver automatisch zurückschickt, wenn er bspw. einen Empfänger nicht kennt, oder dessen Mailbox voll ist.
<i>"Delivery Failure", "Undelivered Mail Returned to Sender"</i>, etc. etc.


Eigentlich eine sinnvolle Sache! Dumm nur, wenn ein Spammer falsche Absenderadressen benutzt:

Da fand es nämlich jemand offenbar urkomisch, mit <i>senes.de</i>-Absenderadressen zu spammen. Wenn das so weiter geht, muss ich meinem Mailserver beibringen, Bounces direkt in die Tonne "zuzustellen".

Leider kriegt dann halt keiner mehr mit, wenn seine Mail nicht zugestellt werden konnte. Abgesehen davon: Bouncemails haben glaube ich keine Header, nach denen ich filtern könnte, oder?

Die schwächere Methode wäre natürlich, Spamassassin so lange mit Bouncemails zu füttern, bis der Bayes-Filter sie in die Tonne wirft. Aber ob das besser ist?

Any suggestions?
