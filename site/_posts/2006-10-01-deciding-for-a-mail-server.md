--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: Moving Moving Moving, and Deciding For an MTA
type: post
meta: 
  tags: ""
layout: post
---
So, this last week I had to move to a new ISP with my web pages and domains because the old one decided to close their business. Sad enough, but then I decided to get a new <a href="http://en.wikipedia.org/wiki/Virtual_private_server">virtual server</a>, mainly because I have much more disk space there now and the performance should be a little better if you only share one physical box with a handful instead of hundreds of people.

Now moving is over and this blog is proudly served to you by my new server (which by the way listens to the nice name <tt>aurora</tt>, the ancient greek goddess of the dawn).

Aurora serves HTTP, Mail and a little MySQL obviously, all of which using SSL transport encryption where applicable.

My Mail servers of choice are, by the way, <a href="http://exim.org">exim</a> and <a href="http://dovecot.org">dovecot</a>.

I chose Exim for a number of reasons: I recently read a lot of good things about it, for example in the <a href="http://lwn.net/Articles/196902/">Linux Weekly News MTA comparison</a>. It is easy to set up, quite secure, and it is the default MTA delivered with Debian stable. Then again, as a good example of how well Exim works (and scales) I have my German home university which uses it for all > 20000 people on campus.

I got it working with virtual domain handling, virus and spam filtering and SMTP-Auth over TLS in little time. A few very good howtos are available on <a href="http://www.debian-administration.org/tag/exim4">debian-administration.org</a>.

Then for IMAP serving, I had the choice between <a href="http://cyrusimap.web.cmu.edu/">Cyrus</a>, <a href="http://www.courier-mta.org/imap/">Courier</a> and Dovecot. I decided against Cyrus because fellow sysadmins warned be that it is a beast to set up and there is little use going through all that pain unless you have a good reason to (a big, big userbase for instance?). I only have a handful of users (as you might have guessed from me mentioning a <em>virtual</em> server up there). I eventually decided against Courier because I knew that dovecot was exceptionally easy to set up and it would server IMAPS for me almost immediately.

However, one good thing I used from Courier are <a href="http://en.wikipedia.org/wiki/Maildir">Maildir</a> mailboxes. Dovecot can handle them too, and they provide a much better immunity against breaking your mail folder than traditional UNIX mbox files. (They also scale better.) One thing to consider though is the block size of the filesystem, because for every single email at least one of these blocks is going to be used. But the block size happens to be 1k on my virtual box, so even 1000 small emails would only take 1 MB on the disk.

If there are any questions, or if something that worked before magically broke now ;), let me know.
