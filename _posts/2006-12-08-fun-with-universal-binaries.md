--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
- websights
published: true
title: Fun with universal binaries
type: post
meta: 
  tags: ""
layout: post
---
Yesterday I had to debug a Mac OSX program and therefore I had to learn about how Mac <a href="http://en.wikipedia.org/wiki/Universal_binary">Universal Binaries</a> work.

Universal Binaries contain (most of the time) PowerPC code and Intel x86 code as well. While they <em>could</em> easily also feature code for other architectures, like your toaster or microwave, it usually looks somewhat like this: <tt>[Header|PowerPC|Intel]</tt>. The operating system decides which code it needs and executes the part of the file suitable for its architecture.

Now in order to see what kind of binary information is "sandwiched" in the file, there is a header, very nicely described in the <a href="http://developer.apple.com/documentation/DeveloperTools/Conceptual/MachORuntime/Reference/reference.html#//apple_ref/doc/uid/20001298-154889">Mac OS X ABI Mach-O File Format Reference</a>.

It starts off with a "magical number", that funnily reads <strong>0xCAFEBABE</strong> in hexadecimal. -- Cafe babe? Yup.

<img id="image143" src="http://fredericiana.com/wp-content/uploads/2006/12/0xcafebabe.jpg" alt="Cafebabe" class="center" />

Looks like the programmers had some fun coming up with a readable magic number. :)


For a more in-depth explanation of how universal binaries look like, I recommend <a href="http://hohle.net/scrap_post.php?post=197">this blog post</a>.

(thanks to the t-shirt model ;) )
