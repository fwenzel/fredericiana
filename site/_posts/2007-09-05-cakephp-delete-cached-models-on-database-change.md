--- 
status: publish
tags: 
- mozilla
- osl
- tech
published: true
title: "CakePHP: Delete Cached Models on Database Change"
type: post
meta: 
  tags: ""
layout: post
---
Last week, I had to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=376766#c19">back out</a> a (quite big) <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=376766">patch</a> from the to-be-published addons.mozilla.org trunk because while it worked on our developer instances, it behaved totally strange on the staging environment: When I saved a record using the newly added UI, the changes <strong>partly</strong> didn't show up in the database.

So we went ahead and delayed the release of the patch until we figured out what the problem was.

After a little digging around the internet today I found a hint suggesting to <a href="http://snook.ca/archives/cakephp/delete_cached_models/">flush CakePHP's cached models/table descriptions</a> from the <tt>app/tmp/cache/models</tt> directory every time a database change is applied -- which fixed the problem we encountered.

So, fellow <a href="http://cakephp.org">CakePHP</a> users, keep that in mind next time you alter your DB, and your life will be happier :).
