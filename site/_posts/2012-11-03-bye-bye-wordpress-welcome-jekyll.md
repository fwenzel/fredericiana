---
layout: post
title: Bye bye Wordpress, Welcome Jekyll!
---

Feel free to blame it on [@cupofT](http://twitter.com/cupofT)'s excellent homebrew that I happened to be drinking the other day, but I decided it was time to blow the thick layer of dust off my blog that it had accumulated over the years.

Wait, no wordpress anymore?
---------------------------
I know, outrageous, right. This blog has been powered by Wordpress for several years now and it's been serving me well. Plenty of features and plugins for all my blogging needs, great spam protection, etc.

Just, it's too complicated. I don't use half of Wordpress' features, and the source code of most wordpress blogs (mine included) looks like a web design agency exploded. Good source code reads like a poem, not like the phonebook of Manhattan.

Plus, being in the business of bleeding-edge web development does not mix well with the cruft of a years-old wordpress instance. What *does* mix well is keeping your blog in a git repository and generating static files using [Jekyll](https://github.com/mojombo/jekyll/)!

Challenges
----------
Migrating a blog with 8 years of history? Who said I wasn't looking for a challenge?

* Design
* Content migration, archives and pagination
* Comments
* Feeds

Design
------
I like simple. In fact, I also liked my previous blog design a lot, visually (the source code, not so much). So I started with a simple open source design (["slate"][slate]) and modified it as I saw fit, preserving some of the colors I used previously as well as the two main fonts.

Moreover, the blog now uses HTML5 tags such as ``<header>``, ``<section>``, ``<nav>`` and ``<footer>`` (go ahead and look at the source, I'll wait) and it is actually (mildly) *responsive*, (i.e., it should look good on both desktop and mobile devices). Go ahead and change the size of your browser window to see what that looks like.

[slate]: https://github.com/jsncostello/slate

Content migration, archives and pagination
------------------------------------------
8 years of blog history led to over 2,000 articles that I had to import. Luckily jekyll comes with an import script that makes that fairly easy. More interesting was fixing the hundreds of image URLs that various versions of Wordpress (and before that: [Serendipity][s9y]) plugged into my posts. Luckily, a little ``sed`` regex magic took care of that also.

Now you also need to show this somehow (for people, and more importantly for search engines to find). On the Web, I found a few solutions for archive pages with jekyll (some of them really bad). The best one was this [set of plugins on github][jekyll-ext]. It gives you one archive page per year.

One page per year? Not good enough: In a single year I can have hundreds of posts, making for a gigantic archive page. So I needed to add pagination. Because Jekyll is written in Ruby, I had to learn some Ruby real quick, before I could extend the archives plugin with pagination functionality. It took slightly longer than [20 minutes][ruby-20], but I am quite pleased with the results. Check out the [archives for 2011](/2011) to see it in action.

Adding another set of archive pages per-tag (for my [failpet collection](/tag/failpet), for example) was then only a minor exercise.

[s9y]: http://www.s9y.org/
[jekyll-ext]: https://github.com/tswicegood/tswicegood-jekyll-extensions
[ruby-20]: http://www.ruby-lang.org/en/documentation/quickstart/

Comments
--------
Downside of a static site generator: No dynamic comments! Luckily, [disqus][disqus] to the rescue. Disqus, too, imports from Wordpress rather flawlessly. Plus, the disqus folks are fellow members of the Django community.

I don't give up direct ownership over my blog comments lightheartedly; but at least Disqus has an export function that I can use periodically. Alternatively, I can get all my comments out through their API. Let's chat about that in another blog post ;)

[disqus]: http://disqus.com/

Feeds
-----
RSS Feeds! So hated yet so useful! Both my general blog feed and category feeds are in use in the wild, so I didn't want to lose those. Jekyll doesn't come with feeds by default, but you can have it render XML of course.

Back on comes the Ruby hat: Besides the [global feed](/feed), I now also have one RSS feed per tag (hello, [failpet feed](/tag/failpet/feed)). But none *per year*, because that would be silly.

A word on drafts
----------------
One thing that threw me off for a bit is how to deal with *post drafts*. I sometimes keep them around for quite a while until I have enough time to put my words into a readable order. But Jekyll does not support drafts. What to do? On the Web, people discuss "drafts in Jekyll" ad nauseam with no good answer.

Well it turns out, this is git. I can have as many drafts in branches as I want! And when I am ready to release a post, I'll squash all the iterations and merge them onto master, like I would with regular source code! I like this workflow already.

But wait, we're not done yet
----------------------------
The work has just begun. I'm going to put redirects in place for frequently used, old Wordpres URLs. And add convenience scripts for common tasks. And I might experiment with a CDN, for example. So stay tuned for more features (and hopefully interesting blog posts along the way).

I hope you like what you see! And if anything bothers you or is broken, do let me know.
