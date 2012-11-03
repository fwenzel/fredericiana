--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: There's no place like 127.0.0.1
type: post
meta: 
  tags: ""
layout: post
---
So, the <strong>MySpace</strong> DNS admins seriously point one address of the round-robin record for myspace.com to <a href="http://en.wikipedia.org/wiki/Localhost">localhost</a>. Smart move.

<blockquote>
<pre>
$ host -vv myspace.com
Trying "myspace.com"
;; -&gt;&gt;HEADER&lt; &lt;- opcode: QUERY, status: NOERROR, id: 61932
;; flags: qr rd ra; QUERY: 1, ANSWER: 5, AUTHORITY: 2, ADDITIONAL: 2

;; QUESTION SECTION:
;myspace.com.                   IN      A

;; ANSWER SECTION:
myspace.com.            8282    IN      A       <strong>127.0.0.1</strong>
myspace.com.            8282    IN      A       216.178.32.48
myspace.com.            8282    IN      A       216.178.32.49
myspace.com.            8282    IN      A       216.178.32.50
myspace.com.            8282    IN      A       216.178.32.51
...
</pre>
</blockquote>

While 127.0.0.1 is most certainly "my space", I don't think many people host a copy of MySpace on their workstation...

Wonder how many people have to blog it until they fix it ;) In any case, Thinkgeek already has the <a href="http://www.thinkgeek.com/tshirts/generic/5d6a/">right t-shirt</a> for them.

<em>(via <a href="http://blog.opendns.com/2006/10/30/hey-myspacecom-we-cant-reach-you-on-127001/">OpenDNS</a> and <a href="http://elliottback.com/wp/archives/2006/10/31/myspace-dns-problems-offline/">Elliot Back</a>)</em>
