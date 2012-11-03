--- 
status: publish
tags: 
- "10100111001"
published: true
title: Kernelschmerzen mit Fedora Core 3
type: post
meta: 
  tags: ""
layout: post
---
Ich mag Fedora. Wirklich. Aber die neueste Version, Fedora Core 3, hat mich schon mehrfach entt&#xE4;uscht. Genauer gesagt deren Kernel.

Standardm&#xE4;&#xDF;ig kommt die Distribution mit einem 2.6.9er Kernel, und von derselben Fassung gab es sogar schon das ein oder andere Update, das offiziell "released" wurde.

An zwei Rechnern hatte ich nun schon unterschiedliche Probleme mit den Fedora-gepatchten Kernelversionen, weil bei jeder Version der Ersteller offenbar irgendwo einen neuen Fehler reinbaut:
<!--more-->
<i>Rechner Nummer 1:</i> Nach dem Update funktioniert der Faxempfang über die AVM Fritz-Karte nicht mehr. Das Problem tritt auch bei anderen Benutzern mit demselben Kernel auf, wie ich später im <a href="http://www.fedoraforum.de/index.php?showtopic=2564">deutschen Fedora-Forum finde</a>. Das Problem konnte ich erst lösen, indem ich einen 2.6.9er "<acronym title="ein unveränderter Original-Systemkern">Vanilla Kernel</acronym>" von Hand kompilierte (siehe <a href="http://www.fedoraforum.de/index.php?showtopic=2564&view=findpost&p=16203">Forum</a>).

<i>Rechner Nummer 2:</i> Nach einer problemlosen Installation beglückt er mich mit einer <i>Kernel Panic</i> während des init-Prozesses:
<blockquote><code>Kernel panic: aic7xxx: unrecoverable BRKADRINT.</code></blockquote>
Von meinen Aufforderungen, doch bitte das SCSI-Subsystem nicht zu starten, ließ sich der Kernel nicht gerade beeindrucken. Es blieb also nur der Versuch, ein Downgrade auf eine vorherige Version vorzunehmen und diese zu starten. Und siehe da, es geht. Der Fehler im aic7xxx-Modul ist offenbar mit dem neuen Fedora Kernel-Release hinzugepatcht worden.

Morgen werde ich wohl zwei Bug reports filen, sofern nicht jemand schneller war. Insgesamt bin ich von den Fedora Kernels wirklich nicht mehr sonderlich überzeugt... Aber ich vermute, bei anderen Distributoren wird oftmals auch nur verschlimmbessert?
