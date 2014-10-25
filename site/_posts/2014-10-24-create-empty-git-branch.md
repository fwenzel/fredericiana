---
layout: post
tags:
- tech
- git
title: Creating an Empty git branch
---

Today I needed to create an empty ``gh-pages`` branch on one of my projects, and didn't want to fork the code on the master branch, then remove it all.

There are plenty of solutions floating around online. Perhaps the most intriguing option plays with [git's empty tree commit hash](http://stackoverflow.com/questions/9765453/gits-semi-secret-empty-tree), i.e. the commit hash you get when you begin with an empty repository.

The easiest way I found, however, is branching from your current branch to a new "orphan" branch:

```
git clone --orphan gh-pages
```

This won't remove any files in your current working directory (though, all of them will be "new" to this branch). Remove them by resetting the working directory **after you check you're truly on the right branch**:

```
git branch  # Better safe than sorry
git reset --hard
```

Easy.
