--- 
status: publish
tags: 
- license
- Mozilla Crosspost
- mpl
- OSU OSL Crosspost
- Tech Talk
published: true
title: Updating the Mozilla Public License
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
Today, Mozilla is starting the public process on revising its signature code license, the <a href="http://en.wikipedia.org/wiki/Mozilla_Public_License">Mozilla Public License or MPL</a>. Mitchell Baker, chair of the board of the Mozilla Foundation and author of the original MPL 1.0, has <a href="http://blog.lizardwrangler.com/2010/03/10/updating-the-mozilla-public-license/">more information about the process on her blog</a>.

The discussion is happening on the website <a href="http://mpl.mozilla.org">mpl.mozilla.org</a> that looks something like this:

<img src="/media/wp/2010/03/updating-mpl.jpg" alt="" title="Updating the MPL" width="550" height="366" class="alignnone size-full wp-image-2633" />

I am happy about this for a number of reasons. Of course, I made the website (the design is borrowed from <a href="http://mozilla.org">mozilla.org</a>), so I am naturally happy to see it being available to a wider audience.

But I also hope that the revision process itself will be successful. While the MPL has been a remarkable help in Mozilla desktop projects' success, it is unpleasant (to say the least) to use in web applications, for a number of reasons:

<strong>The hideous license block.</strong> The MPL is a file-based license. It allows any file in the project, even in the same directory, to be licensed differently. Therefore, each MPL-licensed code file must have an over 30 lines long <a href="http://www.mozilla.org/MPL/boilerplate-1.1/">comment block</a> on top. For big code modules, that's fine. For web applications, whose files often have a handful of lines, this balloons up the whole code base and makes files horribly unreadable. Sadly, the current license only allows an exception from that rule if that's impossible <em>"due to [the file's] structure"</em> which would essentially only be the case if that file type did not allow comments.

<strong>The copyleft.</strong> This one is debatable, but it's a fact that some open source communities, one prominent example is the Python community, does not appreciate strong copyleft provisions. While the MPL (unlike the GNU GPL) does not have a tendency to <a href="http://library.findlaw.com/2004/May/11/133415.html">"taint" other code</a>, this is not at all compatible with the BSD or MIT licenses' notion of "take it and do (almost) whatever you please with it". (As you may have noticed, the file-based MPL is both a curse and a blessing here). I hope that the revision process can make it clearer how this applies to hosted applications (i.e., mostly web applications).

I am excited to see what the broad community discussion will bring to light over the next few months.
