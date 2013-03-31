--- 
status: publish
tags: 
- mozilla
- osl
- tech
published: true
title: Ouch, Another Wordpress Update
type: post
meta: 
  tags: ""
layout: post
---
<img src='/media/wp/2007/03/wordpress_logo.png' alt='Wordpress Logo; source: enWP' class="alignright" />Uh, <a href="http://wordpress.org/development/2007/03/upgrade-212/">version 2.1.1</a> of the popular Wordpress blog software was compromised by a hacker who introduced malicious code into the version that was downloaded and installed by quite a few people across the globe.

While I wasn't directly affected (I hadn't upgraded to 2.1.1 yet), I upgraded <a href="http://blog.jeanpierre.de">another instance of WP</a> on my server immediately because it did have the malicious code, as a quick grep for <em>"ix"</em> in the wp-includes directory showed.

When I decided to upgrade my own blogs to 2.1.2 as well today (skipping the bad release ;) ) I realized again how painful upgrading Wordpress is. While, once the code is in place, it's a one-click upgrade, <em>getting</em> the new code where it belongs is a <a href="http://codex.wordpress.org/Upgrading_WordPress">pain in the arm</a>. Code backup, database backup, disabling plugins, deleting code files (yet not deleting the user files that are heavily mixed up with actual application files), running the upgrade script, re-enabling the plugins.

<strong>Upgrading Wordpress should be easier than that.</strong> After all, it's an open source project. <a href="http://radio.weblogs.com/0103807/stories/2002/12/01/understandingTheImportanceOfReleaseEarlyReleaseOften.html">RERO</a> is what makes it strong, and therefore even <strong>weekly updates</strong> should be <strong>desirable, but easy to do</strong>. So far, the Wordpress people haven't done much to solve this: And that is even more surprising considering <a href="http://svn.automattic.com/wordpress/tags/">how many releases</a> they've pushed out since their 2.0 milestone.

I could imagine an options page in the admin interface automatically downloading a diff for the most recent version, trying to apply the patch (incl. merging) and failing gracefully if a conflict occurs (for extra credit, give advanced users an interface to resolve the conflicts). It should also do the DB backup and code backup itself: After all, it has at least read access to both its database and code directory.

This is a similar idea to what the Mozilla project calls <strong>AUS</strong>: The <a href="http://wiki.mozilla.org/AUS:Manual">Application Update Service</a>. It applies binary diffs to Firefox and friends in order to make staying up to date easier for people and save their precious time.

For now, I switched my wordpress instances to an <a href="http://wordpress.org/download/svn/">SVN checkout</a> of the latest tagged version, making the download process easier, but not solving the whole backup-disable-update-enable issue.

I like Wordpress -- and I don't seem to be alone: Wordpress is probably one of the most popular blog engines in the world. Now if they made updating as easy as <a href="http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install">installing it</a>, they could show that their popularity has a <em>good reason</em>.
