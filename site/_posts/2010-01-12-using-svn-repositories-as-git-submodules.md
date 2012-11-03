--- 
status: publish
tags: 
- git
- mozilla
- osl
- subversion
- Tech Talk
published: true
title: Using SVN repositories as git submodules
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
With the <a href="http://subversion.tigris.org/">Subversion <acronym title="Version Control System">VCS</acronym></a>, one way to import external modules or libraries into a code tree is by defining the <a href="http://svnbook.red-bean.com/en/1.0/ch07s03.html">svn:externals property</a> of your repository. Subversion will then check out the specified revision (or the latest revision) of the other repository into your source tree when checking out your code.

<a href="http://www.kernel.org/pub/software/scm/git/docs/git-submodule.html">Submodules</a> are basically the same thing in the "git" world.

And since git can talk to subversion repositories with <a href="http://www.kernel.org/pub/software/scm/git/docs/git-svn.html">git svn</a>, we should be able to <strong>specify a third-party SVN repository as a submodule in our own git repository</strong>, right? Sadly the answer is currently: <a href="http://stackoverflow.com/questions/465042/is-it-possible-to-have-a-subversion-repository-as-a-git-submodule">No.</a>

Here is a <strong>workaround</strong> that I have been using to at least achieve a similar effect, while keeping both SVN and git happy. This assumes that you have a local git repository that is also available somewhere else "up-stream" (such as <a href="http://github.com">github</a>), and you want to import an external SVN repository into your source tree.

<h2>1: Add a tracking branch for SVN</h2>
Add a section referring to your desired SVN repository to your <code>.git/config</code> file:

<pre>(...)
[svn-remote "product-details"]
    url = http://svn.mozilla.org/libs
    fetch = product-details:refs/remotes/product-details-svn
</pre>

Note that in the <code>fetch</code> line, the part before the colon refers to the branch you want to check out of SVN (for example: <code>trunk</code>), and the part after that will be our local remote branch location, i.e. <code>product-details-svn</code> will be our remote branch name.

Now, fetch the remote data from SVN, specifying a revision range unless you want to check out the entire history of that repository:

<pre>git svn fetch product-details -r59506:HEAD</pre>

git will check out the remote branch.

<h2>2: clone the tracking branch locally</h2>
Now we have a checked-out SVN tracking branch, but to use it as a submodule, we must make a real git repository from it -- a branch of our current repository will keep everything in one place and work as well. So let's check out the tracking branch into a new branch:

<pre>git checkout -b product-details-git product-details-svn</pre>

As <code>git status</code> can confirm, you'll now have (at least) two branches: <em>master</em> and <em>product-details-git</em>.

<h2>3: Import the branch as a submodule</h2>
Now let's make the new branch available upstream:

<pre>git push --all</pre>

After that's been pushed, we can import the new branch as a submodule where we want it in the tree:

<pre>git checkout master
git submodule add -b product-details-git ../reponame.git my/submodules/dir/product-details
</pre>

Note that <code>../reponame.git</code> refers to the up-stream repository's name, and <code>-b ...</code> defines the name of the branch we've created earlier. Git will check out your remote repository and point to the right branch automatically.

Don't forget to <code>git commit</code> and you're done!

<h2>Updating from SVN</h2>
Updating the "external" from SVN is unfortunately a tedious three-step process :(. First, fetch changes from SVN:
<pre>git svn fetch product-details</pre>

Second, merge these changes into your local git branch and push the changes up-stream:
<pre>git checkout product-details-git
git merge product-details-svn
git push origin HEAD</pre>

And finally, update the submodule and "pin it" at the newer revision:
<pre>git checkout master
cd my/submodules/dir/product-details
git pull origin product-details-git
cd ..
git add product-details
git commit -m 'updating product details'</pre>

<h2>Improvements?</h2>
This post is as much a set of instructions as it is a call for improvements. If you have an easier way to do this, or if you know how to speed up or simplify any of this, a comment to this post would be very much appreciated!
