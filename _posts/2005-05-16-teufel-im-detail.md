--- 
status: publish
tags: 
- "10100111001"
published: true
title: Teufel im Detail
type: post
meta: 
  tags: ""
layout: post
---
Falls jemand von Euch mal einen <a href="http://php3.de/manual/de/features.file-upload.php">Dateiupload in PHP</a> programmiert, und sich wundert, warum die Dateien zwar auf der einen Seite reingehn, aber auf der anderen Seite nicht rauskommen, sollte schauen ob er auch dieses Attribut nicht vergessen hat:

<blockquote><code>&lt;form <strong>enctype=&quot;multipart/form-data&quot;</strong> action=&quot;_URL_&quot; method=&quot;post&quot;&gt;</code></blockquote>

Er könnte sich einige sinnlose Fehlersuche im Skript ersparen.

(Dieses Skript hat mich bald wahnsinnig gemacht, und dann so ein dummer Fehler :( )
