---
layout: post
title: 2 Ways to Use a Custom Domain with Dropbox
tags:
- tech
- mozilla
- osuosl
- upshot
---

Since [version 1.0][version-1.0], UpShot supports using your own custom domain name to [share your screenshots via Dropbox][upshot-post].

However, you have to do some work on the server side to make it happen. Here are **two ways to point your own, custom domain at your public Dropbox folder**.

[version-1.0]: /2012/12/13/upshot-1.0/
[upshot-post]: /2012/11/27/upshot-osx-screenshot-sharing-with-dropbox/

Option 1: Server Config (or .htaccess)
--------------------------------------
If you have your own server or webhosting set up, you can redirect a domain or directory to Dropbox, like this:

``http://my.domain.com/file.png`` &rarr; ``http://dl.dropbox.com/u/XYZ/file.png``

where XYZ is your Dropbox user ID number.

This is how:

1. First, set up a (sub-)domain with your web hosting company (e.g., ``i.example.com``). The process varies depending on your hosting company. Hook up that domain to a directory on your web server.
2. Alternatively, just create a subdirectory on a domain you own, such as: ``example.com/i/``.

### Apache

Either edit the server config for the new domain or create a new file ``.htaccess`` in the directory that your domain is connected to, containing:

	RewriteEngine on
	RewriteRule ^(.*)$ http://dl.dropbox.com/u/XYZ/$1 [L,QSA]

Change ``XYZ`` to your Dropbox ID number. You can find that number in your UpShot Preferences window.

With this setting, your screenshot URLs will look like this: ``http://i.example.com/Screenshots/abcd.png``.

These URLs will work for all files in your Public directory. If you want to use this domain only for screenshots uploaded by UpShot, you can add the ``Screenshots/`` directory in there as well:

	RewriteRule ^(.*)$ http://dl.dropbox.com/u/XYZ/Screenshots/$1 [L,QSA]

This further shortens the URLs to ``http://i.example.com/abcd.png``!

### lighttpd

This same solution works with any other web browser that supports regex-driven redirects as well, like [lighttpd][lighttpd-redir] (which is what I use).

Here's a little config snippet from my ``lighttpd.conf`` file:

	$HTTP["host"] =~ "^i\.example\.com" {
	  url.redirect = (
	    "^/(.*)$" => "http://dl.dropbox.com/u/XYZ/Screenshots/$1",
	  )
	  url.redirect-code = 302
	}

[lighttpd-redir]: http://redmine.lighttpd.net/projects/1/wiki/docs_modredirect

This will have the same effect as the Apache code above: redirecting my personal domain to my public Dropbox.

Option 2: CNAME
---------------
There's another option that doesn't require any changes to your server. However, you'll need access to your provider's DNS settings.

If you do have such access, you can create a DNS CNAME record. A [CNAME record][cname-wp] is essentially a domain alias, forwarding one domain name to another.

[cname-wp]: http://en.wikipedia.org/wiki/CNAME_record

It's pretty simple:

1. Access your provider's DNS settings menu. Providers should have a help file about how to do this, like [this one from Hover][hover-dns].
2. Add a new DNS record, type: CNAME.
3. Choose a domain name (such as ``i.example.com``) and point it to ``dl.dropbox.com``.

[hover-dns]: https://help.hover.com/entries/21204757-how-to-edit-dns-records-a-cname-mx-txt-and-srv

Once the changes have been picked up by the DNS system, you're done! Your screenshots will be available under a URL like: ``http://i.example.com/u/XYZ/Screenshots/abcd.png``.

While certainly elegant, one (big) **caveat** of this solution is that the resulting URLs still contain the portion ``/u/XYZ/Screenshots``. Because the CNAME record works purely on a domain level, there is no way for us to hide this portion of the URLs with this method.

Additional methods
------------------
*(Updated 12/10/2012)*

Here are some additional solutions to this problem that I haven't covered here because they were a little too complicated or inefficient for my taste. But still, they are certainly options for you to consider.

* You can use Google App Engine (or really any other script-enabled server) to [*proxy* your domain to Dropbox][gae-proxy]. When a URL is called, the script will actually download that file from your dropbox, then serve it to you from GAE (introducing the obvious double bandwidth and latency, but completely hiding the fact that it is powered by Dropbox in the backend).
* You can also install a [text-only instance of Dropbox][textonly] on your server. It would then behave like any other of your devices (syncing from Dropbox automatically) and you could simply serve up the desired folder(s) as static files via a regular web server. (Getting this set up seems quite complicated, but once done, you wouldn't even need a Public folder any longer). *(Thanks to Jabba for the hint)*

[gae-proxy]: http://code.google.com/p/dropbprox/
[textonly]: http://www.dropboxwiki.com/Text_Based_Linux_Install

---

Now go ahead and set up your domains as aliases for your Dropbox accounts. Then you'll be able to use it with UpShot to share screenshots.

If you have any other solutions in mind, any questions or concerns, please leave a comment below!
