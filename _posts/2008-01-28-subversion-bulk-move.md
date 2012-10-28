--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- subversion svn move bulk
- Tech Talk
published: true
title: Subversion bulk move
type: post
meta: {}

layout: post
---
The version control system <a href="http://subversion.tigris.org">Subversion</a> comes with a handy function to copy or move an already versioned file from one place in the repository to another: The command <a href="http://svnbook.red-bean.com/en/1.4/svn.ref.svn.c.move.html">svn move</a>.

This is particularly good (and superior over, for example, CVS which is unable to do so) because the version history of the file is kept, and also the copy on the server is done <strong>lazily</strong>, meaning just because the file was copied there won't be a second physical copy created on the server (yet, until you write to it).

A drawback of the command, though, is that it is only possible to move one single file or directory at a time. If you have a lot of files to be moved, this can get very tedious.

However, if the files you want to cover have something to be distinguished by, you may try the following (which I blog here mainly so I can get back later when I have forgotten the syntax again ;) ):

<code>find . -name "06*" -maxdepth 1 -exec svn mv "{}" 2006/ \;</code>

Note that I am filtering by name here (everything starting with <code>06</code>), with a maximum tree depth of 1 (to avoid pulling in the <code>.svn</code> folder) and I am moving the respective files into the (recently created) subfolder <code>2006/</code>. Also note that the the <code>-exec</code> flag of the <code>find</code> command wants to be terminated by a semicolon, but since that is a reserved character for the Bash shell, you need to escape it. This is something I trip over every time.

Anyway, I hope this helps.
