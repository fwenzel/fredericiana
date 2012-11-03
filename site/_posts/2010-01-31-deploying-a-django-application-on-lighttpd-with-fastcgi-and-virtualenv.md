--- 
status: publish
tags: 
- django
- fastcgi
- lighttpd
- mozilla
- osl
- python
- Tech Talk
- virtualenv
published: true
title: Deploying a Django Application on Lighttpd with fastcgi and virtualenv
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
So you wrote a fancy little Django app and want to run it on a lighttpd webserver? There's plenty of documentation on this topic online, including <a href="http://docs.djangoproject.com/en/dev/howto/deployment/fastcgi/">official Django documentation</a>.

Problem is, most of these sources do not mention how to use virtualenv, but the cool kids don't install their packages into the global site-packages directory. So I put some <a href="http://gist.github.com/285758">scripts together</a> for your enjoyment.

I assume that you've put your django app somewhere convenient, and that you have a virtualenv containing its packages (including django itself).

<h2>1. <a href="http://gist.github.com/285758#file_manage.py">manage.py</a></h2>
You want to set up this file so it adds the virtualenv's <code>site-packages</code> path to its site-packages: <code>site.addsitedir('path/to/mysite-env/lib/python2.6/site-packages')</code>. Note that you need to point directly to the site-packages dir inside the virtualenv, not only the main virtualenv dir. For obvious reasons, this line needs to come before the django-provided <code>from django... import</code>, because you can't import django files if Python doesn't know where they are.

<h2>2. <a href="http://gist.github.com/285758#file_settings.py">settings.py</a></h2>
The lighttpd setup will result in <code>mysite.fcgi</code> showing up in all your URLs, unless you set <code>FORCE_SCRIPT_NAME</code> <a href="http://docs.djangoproject.com/en/dev/howto/deployment/fastcgi/#forcing-the-url-prefix-to-a-particular-value">correctly</a>. If your django app is supposed to live right at the root of your domain, set this to the empty string, for example.

<h2>3. <a href="http://gist.github.com/285758#file_django_servers.sh">django-servers.sh</a></h2>
This is an initscript (for Debian, but you can modify it to work with most distros, I presume). Copy it to <code>/etc/init.d</code>, adjust the settings on top (and possibly other places, depending on your setup), then start the Django fastcgi servers. Note that you need to have the <code>flup</code> package installed in your virtualenv.

<h2>4. <a href="http://gist.github.com/285758#file_lighttpd_vhost.conf">lighttpd-vhost.conf</a></h2>
Set up your lighttpd vhost pretty much like the <a href="http://docs.djangoproject.com/en/dev/howto/deployment/fastcgi/">Django documentation</a> suggests. Match up the host and port with the settings from your init script. By using <code>mod_alias</code> for the media and admin media paths, you'll have lighttpd serve them instead of passing them on to Django as well.

That's it! You've deployed your first Django application on lighttpd. If you have any questions or suggestions, feel free to comment here or fork my code.

You can look at <a href="http://gist.github.com/285758">all the scripts together over on github</a> or <a href="http://gist.github.com/gists/285758/download">download them in a package</a>.
