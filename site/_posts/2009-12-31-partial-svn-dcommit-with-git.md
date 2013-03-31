--- 
status: publish
tags: 
- commit
- git
- mozilla
- osl
- subversion
- svn
- tech
published: true
title: Partial 'svn dcommit' with git
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Here at Mozilla, a bunch of webdevs use <a href="http://progit.org/book/ch8-1.html">git svn</a> instead of plain Subversion to interact with our <a href="http://viewvc.svn.mozilla.org/">svn repositories</a> -- mostly because of in-place branching, better merging, and all these things that make a dev's life happier.

As you probably know when reading this article, you push all uncommitted changes to the remote svn repository by typing <code>git svn dcommit</code>. This will take your last, say, five commits, push them to SVN, and mark them locally as committed. But what if you <strong>only want to <code>dcommit</code> some of your changes</strong>?

<em>(If you don't need explanations, jump straight to the <a href="#svn-dcommit-summary">summary</a>).</em>

<h2>Step 1 (optional): Reorder commits</h2>
I am not going to go into a lot of detail on <em>interactive rebasing</em> (<code>git rebase -i</code>), but to start off, make sure your commits are ordered, so that the ones you <strong>do</strong> want to commit to SVN are <strong>before</strong> the ones you <strong>do not</strong> want to push up-stream for now. Example: If in the following history, you want to commit <strong>all changes but <code>a023fea</code></strong>, you want to rebase your commits so <code>a023fea</code> is last:

In <code>git rebase -i HEAD~4</code>, change...
<pre><code>pick 07c26c5 some de L10n
pick a023fea adding free-text messages to localizer dashboards
pick 8597f47 adding featured collections as l10n category
pick 19f3df3 making existing localizer pages work with amo2009 layout
</code></pre>
... to...
<pre><code>pick 07c26c5 some de L10n
pick 8597f47 adding featured collections as l10n category
pick 19f3df3 making existing localizer pages work with amo2009 layout
pick a023fea adding free-text messages to localizer dashboards
</code></pre>
Make sure to resolve any merging problems that might occur due to the reordering.

<h2>Step 2: Step in between commits</h2>
To only push the desired commits to svn, execute another <code>git rebase -i</code> and mark the last desired commit for editing (by changing <code>pick</code> to <code>edit</code>):
<pre><code>pick 07c26c5 some de L10n
pick 8597f47 adding featured collections as l10n category
edit 19f3df3 making existing localizer pages work with amo2009 layout
pick a023fea adding free-text messages to localizer dashboards
</code></pre>

When exiting the editor, git will drop you off <strong>after the marked commit</strong>, but <strong>before</strong> the one you don't want, as a quick look at <code>git log</code> can tell you.

<h2>Step 3: dcommit desired changes</h2>
After making sure this is really what you want, just execute <code>git svn dcommit</code> as usual and watch git push all desired changes to SVN, while omitting the rest.

<h2>Step 4: Fast-forward to HEAD</h2>
When the dcommit is done, remember we are still in the middle of a <em>rebase</em>, so just run <code>git rebase --continue</code> to fast-forward to the HEAD of your branch. Again, a quick look at <code>git log</code> can reassure you that only the changes you wanted to have been pushed to SVN.

Success!

<h2 id="svn-dcommit-summary">Summary: Quick cheat sheet</h2>
Here's a quick cheat sheet for you (and me) to come back to in case you forget:
<ul>
	<li>Reorder commits (<code>git rebase -i HEAD~4</code>) so that the undesired ones are after the ones you want to push</li>
	<li>In your commit history, jump right after the <strong>last wanted commit</strong> by marking it for <code>edit</code>ing in <code>git rebase -i</code></li>
	<li><code>git svn dcommit</code></li>
	<li><code>git rebase --continue</code></li>
</ul>
