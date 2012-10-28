--- 
status: publish
tags: 
- ssh
- sysadmin
- Tech Talk
published: true
title: Keeping SSH from disconnecting automatically
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
For work, I often develop on a remote Linux box that I SSH into. Now, as a web developer, one of the big advantages of interpreted languages is that there are no big compile steps to wait for.

One of the big <em>disadvantages</em> is that nothing exciting is happening when you take a break (no <a href="http://xkcd.com/303/">sword fights</a>, for example). The screen is just sitting there. Unfortunately, OpenSSH servers in their default settings take this silence as a perfect excuse to <em>cut the cord</em> after 5 minutes.

If that happens a lot during the day, this can be pretty annoying! But fear not, dear reader. On a Redhat-like system, you want to edit <code>/etc/ssh/sshd_config</code> and add the following line (note: only the second line is needed, read below):

<code><strike>TCPKeepAlive yes</strike>
ClientAliveInterval 60</code>

Restart the SSH server, and it shall henceforth not punish you for prolonged periods of silence anymore. :)

<strong>Update:</strong> Two of my readers pointed out interesting things. First, Sancus mentioned that <code>TCPKeepAlive</code> is different from <code>ClientAliveInterval</code> and serves a different purpose. To avoid your connection dropping, the latter is likely to be the better option.

Jeff says, if you set this in the <code>~/.ssh/config</code> file on your <strong>client</strong>, you'll achieve the same effect without the need to modify the server settings:

<code>Host *
ServerAliveInterval 300</code>

This is obviously a highly charming alternative because more often than not, you are won't have (write) access to your server's <code>sshd_config</code>.
