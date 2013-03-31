--- 
status: publish
tags: 
- mozilla
- tech
published: true
title: Mozilla, PyPI and the "vendor library"
type: post
meta: 
  aktt_tweeted: "1"
  _syntaxhighlighter_encoded: "1"
  _cws_is_markdown: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Yesterday, I read a nice blog post by <a href="http://blog.aclark.net/2011/09/22/mozilla-and-pypi/">Alex Clark</a> outlining his experience setting up an instance of <a href="http://github.com/jbalogh/zamboni">Zamboni</a> (the <a href="https://addons.mozilla.org/">Mozilla Add-ons</a> codebase). The main source of confusion was that Zamboni, like most Django-based Mozilla web applications, uses something we call a <a href="http://playdoh.readthedocs.org/en/latest/packages.html"><strong>vendor library</strong></a> to deploy their third-party library dependencies, as opposed to installing them from <a href="http://pypi.python.org/">PyPI</a> using <a href="http://www.pip-installer.org/">pip</a>.

Alex writes:

<blockquote>
  I would LOVE to see PyPI become a place that Mozilla felt confident it could use to deploy Python software.
</blockquote>

I am happy about this conversation-starter and would like to contribute some of our reasoning for using a "vendor library" over pip requirements files. I, too, am not a huge fan of the vendor library, but understand how it solves some of the problems we've been having with plain PyPI at Mozilla.

<p>Let's discuss some of our main concerns and how the vendor library solves (or does not solve) them for us.
<!--more--></p>

<h2>Risky dependence on PyPI and other third-party servers</h2>

In the past, PyPI has not always been the most stable of services. Even though PyPI has been vastly improved meanwhile, not all libraries we use can be pulled from PyPI, some come from code repositories on various services. Pulling in files at deploy time from numerous places all over the Internet is a huge risk, particularly if your deployment requires downtime and you need to be done as soon as possible. In other words: A setup that doesn't allow us to (mostly) bundle one neat package before actually performing the deployment to our servers is a huge risk we're not willing to take lightly.

Some, but not all of this, could be mitigated with a private PyPI mirror, though that comes with a maintenance overhead and does not help for non-PyPI libraries at all.

<h2>We deploy to, potentially, many servers</h2>

Second part of the "one neat package" issue: Running <code>pip install</code> on one server is fun and games. On 50? Not so much. It takes a long time, even if you run it on all of them in parallel. Quite possibly, a few of them will have hiccups (network trouble, for example) in the process, so good luck finding out which ones failed and manually fixing those before moving on.

<h2>Package "migrations"</h2>

Imagine an upgrade to an already-deployed application. How do you add two libraries, remove three, and upgrade five existing ones? Installing and upgrading might work with pip, for uninstalling we'd (probably?) need to write some sort of <strong>migration script</strong>, hope it all runs smoothly on all servers, then carry on. Or we blow away the <a href="http://www.virtualenv.org/">virtualenv</a> altogether for every push and reinstall all libraries from scratch.

This is many things, none of which is elegant.

<h2>Contributors</h2>

We want it to be reasonably easy for contributors to set up our code and <strong>start developing</strong>. With the vendor library, it basically boils down to a few git commands, while <code>pip install</code> is a much longer process. In addition, the "migration problem" is present here too: The developer has to constantly monitor changes to the requirements files (or realize that the source of an unexpected, new error is a missing library) and run pip as appropriate. In contrast, updating the vendor library is part of the regular pull-from-git process any developer has to do anyway to stay up to date with the main repository.

<a href="http://vagrantup.com/">Vagrant</a> mitigates some of these concerns by automating the setup process, but not all.

<h2>Compiled packages</h2>

One thing <em>neither</em> PyPI nor <em>vendor</em> solve is the deployment of packages with <strong>binary components</strong> (usually: C libraries with a Python wrapper). For that reason, we keep those libraries to a bare minimum and prefer pure Python variants wherever feasible. The few unavoidable compiled libraries (such as <a href="http://jinja.pocoo.org/">Jinja2</a> or <a href="http://www.mindrot.org/projects/py-bcrypt/">py-bcrypt</a>) we deploy to our servers through <a href="http://en.wikipedia.org/wiki/RPM_Package_Manager">RPM packages</a> (by sticking these requirements into a common <a href="http://en.wikipedia.org/wiki/Puppet_%28software%29">Puppet</a> file shared by all our webservers). That's not too elegant, but as these cases are somewhat rare, it works. In any case, a server running the actual <code>pip</code> command to install these packages needs to have a full compiler toolchain, which production web servers are unlikely to have.

<h2>What it boils down to</h2>

The base concerns here circle around <strong>robustness</strong> and <strong>scalability</strong>, both for deployments to real-world servers and for various, globally distributed developers.

Really, the key is <strong>minimal human involvement</strong>: We love our developers, and we love our sysadmins. Any part of a requirements system with a high chance of <strong>repeatedly requiring human involvement is broken</strong> and needs fixed.

If you have any suggestions on how to improve this setup, I am all ears. As always, Mozilla's code and processes are Open Source so we are happy to listen to your ideas!
