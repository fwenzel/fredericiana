--- 
status: publish
tags: 
- Tech Talk
published: true
title: SCP vs. SFTP?
type: post
meta: 
  tags: ""
layout: post
---
Some things in geek world tend to be a little confusing. Such as the internal differences between SCP and SFTP. Both of then use the SSH protocol to transfer files from one server to another securely encrypted.

Now, sometimes I copy a few things over the "big pond" from Germany to the U.S. and even though the sender is able to upload more than 50k/s (and the receiver can download much more than that), SFTP doesn't get any faster than 15 kilobytes per second.

When I try the same transfer, a minute later, with SCP, I get roughly 60k/s, which happens to be the upload limit of the sender.

Any clue why this is happening?!
