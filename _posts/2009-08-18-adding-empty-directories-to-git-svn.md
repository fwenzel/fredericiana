--- 
status: publish
tags: 
- git
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- version control
published: true
title: Adding Empty Directories to git-svn
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Just a reminder, because I always forget it: When you use git-svn on an svn repository and your code base contains <strong>empty directories</strong> (say, for temporary files, or log files), they will be <strong>ignored by git</strong> unless they contain at least one file.

Paradox? Maybe. There's a good reason however: git ignores empty directories because it tracks (file) content, not a bunch of directories some of which happen to contain a file (the concept of tracking files might be the only thing git has remotely in common with <del>good</del> ol' CVS -- though git also does not deeply care about file names, only content).

The <a href="http://stackoverflow.com/questions/115983/how-do-i-add-an-empty-directory-to-a-git-repository">"common" way to handle this</a> is by adding a <code>.gitignore</code> file to the repository. This won't harm svn-only clients, but it'll make git-svn clients pick up the (almost) empty directory properly.

This is what you need to do.

<blockquote><code>mkdir empty_dir
echo &#39;*&#39; > empty_dir/.gitignore
echo &#39;!.gitignore&#39; >> empty_dir/.gitignore
git add empty_dir
git commit -m &#39;adding empty directory&#39; empty_dir</code></blockquote>

The <code>.gitignore</code> file tells git what file names not to track inside the directory in question. The asterisk means, ignore all files, but the second line makes sure the <code>.gitignore</code> file itself is recognized and added to the repository.
