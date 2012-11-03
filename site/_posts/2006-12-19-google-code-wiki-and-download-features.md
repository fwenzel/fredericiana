--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- websights
published: true
title: "Google Code: Wiki and Download Features"
type: post
meta: 
  tags: ""
layout: post
---
<img id="image152" src="/media/wp/2006/12/google-code-new.png" alt="The new options on google code" />

Yesterday the Google Code project hosting was updated for the first time (as far as I can tell) after its release in July 2006. Two of the major "flaws" in Google's simplistic approach to Open Source project hosting have been fixed:

<ul>
	<li>We were unable to provide downloads of binary releases and similar</li>
	<li>Projects could not have a documentation webpage or similar</li>
</ul>

These two issues made Google Code hosting -- while being a nice, new thing -- overall inferior to the well-established services of sourceforge. And while Google <a href="http://www.newsforge.com/article.pl?sid=06/07/27/1833251">made clear</a> they didn't "want to hurt SourceForge", an important decision a young Open Source project faces when it starts is where to put the code and what is best for the project.

Not having any website or possibility to download a precompiled package is not one of the best things for projects, for sure.

With the new features, Google Code has become a real alternative to SourceForge and I imagine in the time to come, Google's code hosting will steadily grow and get more projects that did not go there before for lack of these features.

A nice thing to mention about the Google Code hosting Wiki is that it apparently keeps its version history in SVN. So going back in time when checking out the source tree will also give you <strong>the Wiki status at that point in time</strong>. Very neat, if you ask me.

Adding downloads, however, sounds to me like a no-brainer and I am confused why they didn't have this feature from the beginning. Allegedly, project owners helped themselves by just uploading the release files to the SVN source tree and pointing their download links directly to the HTTP interface of the SVN server. Not too surprising -- and that can put quite some load on a repository server. This "feature" is therefore not so much a new invention as it is closing a hole that shouldn't have been there in the first place.

In any case I am eager to see how the open source community (and sourceforge) react.
