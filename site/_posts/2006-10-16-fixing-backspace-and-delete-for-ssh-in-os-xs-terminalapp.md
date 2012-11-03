--- 
status: publish
tags: 
- Mozilla Crosspost
- OSU OSL Crosspost
- Tech Talk
published: true
title: Fixing Backspace and Delete for SSH in OS X's Terminal.app
type: post
meta: 
  tags: ""
  _edit_last: "2"
layout: post
---
<strong>How do I get the backspace and forward delete keys to work correctly?</strong>

<blockquote>
<ul>
	<li>In the Keyboard section of the Terminal Inspector:
	<ul>
		<li>Turn on the Delete key sends backspace option.</li>
		<li>Map the forward delete key to the following string: <pre><code>&#x005c;033[3~</code></pre></li>
	</ul>
	</li>

	<li>Add the following line to your .profile: <pre><code>stty erase &circ;H</code></pre>
Since &circ;H is a non-printable control character, the easiest way to do this is to execute the following command: <pre><code>echo -e "stty erase &circ;H" &gt;&gt; ~/.profile</code></pre>
Type the &circ;H by pressing Control-V and Control-H.</li>

	<li>Add the following line to your .inputrc: <pre><code>"\e[3~": delete-char</code></pre></li>

	<li>Apply changes by doing a <code>source ~/.profile</code> and a <code>bind -f ~/.inputrc</code>.</li>

</ul></blockquote>


Very helpful! I found this information on <a href="http://desp.night.pl/terminal.html">this website</a>. <em>Thanks, desp!</em>
