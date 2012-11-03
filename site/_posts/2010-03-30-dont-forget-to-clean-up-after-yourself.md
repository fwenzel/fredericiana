--- 
status: publish
tags: 
- continuous integration
- hudson
- mozilla
- osl
- python
- Tech Talk
- tests
published: true
title: Don't Forget to Clean Up After Yourself
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
<img src="/media/wp/2010/03/hudson-butler.png" alt="" title="The Hudson Butler." width="96" height="96" class="alignright size-full wp-image-2680" />On a growing number of projects at Mozilla, we use a tool called <a href="http://hudson-ci.org/">Hudson</a> that runs a complete set of tests on the code with every check-in. The beauty of this is that if you accidentally break something, you (and everyone else) will know immediately, so you can fix it quickly. We also use a bunch of plugins with Hudson, <a href="http://wiki.hudson-ci.org/display/HUDSON/The+Continuous+Integration+Game+plugin">one of which</a> assigns points to every check-in: For example, if all tests pass, you get a positive number of points, or if you broke something, you get a negative score.

An innocent little commit of mine gained me a whopping <strong>-100 points</strong> (yes, that is minus 100) today.

<strong>How did that happen?</strong> The build broke badly, not because I wrote a pile of horrendous code, or because I didn't test before committing. In fact, I've made it a habit to commit like this:

<blockquote><code>./manage.py test && git push origin master</code></blockquote>

This fun little one-liner will result in my code being pushed to the origin repository if and only if all tests pass.

So in my case, all tests passed locally, and then horribly broke once the server ran the tests again. After a little research, it turned out that when I deleted a now unneeded Python file, I did not remove its compiled cousin, the <code>.pyc</code> file, along with it. Sadly, this module was still <strong>imported</strong> somewhere else, and because Python still found the <code>.pyc</code> file locally, it did not mind the original <code>.py</code> file being gone, so all tests passed. On the server, however, with a completely clean environment, the file wasn't found and resulted in the failures of dozens of tests (all of which threw an <a href="http://docs.python.org/library/exceptions.html#exceptions.ImportError">ImportError</a>).

<strong>What's the lesson?</strong> In the short term, I should wipe my <code>.pyc</code> files before running tests. One way to do that would be adding something like

<blockquote><code>find . -type f -name '*.pyc' | xargs rm</code></blockquote>

to my ever-growing <em>commit one-liner</em>, but a more general solution might want to perform this inside the test running script. On the other hand, since that script is written in Python, some of the imports that could break have already been performed by the time the script runs.

In general, run your tests on as clean an environment as possible. While any useful test framework will take care of your <em>database</em> having a consistent state for every test run, you also need to ensure that you start with a plane baseline of your <em>code</em> -- especially if Hudson, the merciless butler, will rub it in your face if you don't ;) .
