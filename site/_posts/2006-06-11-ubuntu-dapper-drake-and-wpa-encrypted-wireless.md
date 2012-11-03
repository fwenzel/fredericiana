--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: Ubuntu Dapper Drake and WPA-Encrypted Wireless
type: post
meta: 
  tags: ""
layout: post
---
<img id="image74" src="/media/wp/2006/06/ente.thumbnail.jpg" alt="Drake: a Male duck, from wikipedia" />
I am a <a href="http://ubuntu.com">Ubuntu Linux</a> user. On my laptop and at work, I was running "Breezy Badger" (Ubuntu Linux 5.10) since last fall.

But one of the worst things about it was its inability to connect to <a href="http://en.wikipedia.org/wiki/Wi-Fi_Protected_Access">WPA</a>-encrypted Wifi access points. Eventually, I wrote a few shell scripts that made me able to connect to my AP at home, but it was far from being handy.

Now yesterday, I installed the new release, <strong>Dapper Drake</strong> on my laptop. The installation was straightforward, and by the way I liked it a lot that the installation CD is a live CD at the same time so that new users can <em>"try before they buy"</em>.

When everything was installed, I realized that my wifi card <em>was</em> recognized and activated automatically, yet I was <em>not</em> able to connect to a WPA encrypted network. Instead it tried to connect to one of my neighbors unencrypted access points. Downgrading my connection to the demonstrably weak <a href="http://en.wikipedia.org/wiki/Wired_Equivalent_Privacy">WEP</a> encryption was not an option earlier, nor was it now.

Already being a little disappointed, I searched the <a href="http://ubuntuforums.org">Ubuntu forums</a> and after a while, I came up with a <a href="http://www.ubuntuforums.org/showthread.php?p=1035708">thread</a> about WPA access points with Ubuntu Dapper Drake.

In short: <strong><del datetime="2006-06-20T16:53:11+00:00">Nine</del> seven steps to WPA encrypted Wifi with Ubuntu Dapper Drake</strong>:
<ol>
	<li><del datetime="2006-06-20T16:53:11+00:00"><code>sudo apt-get install wpasupplicant</code> (might already be installed)</del></li>
	<li><ins datetime="2006-06-27T21:54:04+00:00">(You might have to do a <code>sudo apt-get update</code> in order to fetch the newest metadata for apt-get)</ins></li>
	<li><code>sudo apt-get install network-manager-gnome</code></li>
	<li><code>sudo gedit /etc/network/interfaces</code>  -- Comment out everything but "<code>lo</code>" entries in that file</li>
	<li><del datetime="2006-06-20T16:53:11+00:00">Create a file called <code>/etc/default/wpasupplicant</code>, add entry <code>ENABLED=0</code></del></li>
	<li>Reboot your system</li>
	<li>Left-click the network manager icon in Gnome and select your wireless network</li>
	<li>Follow the prompts for password, type, etc.</li>
	<li>It will ask you to choose a password for your new "keyring".</li>
	<li>Be happy ;)</li>
</ol>

Now everytime you boot up and log in, the network manager will connect you to your preferred WPA-encrypted network as desired.

There are only two caveats that I currently know of:
<ul>
	<li>The connection is only made once you log into Gnome. So if you plan to run this connection on a server or if you need a network connection before you get to the login prompt (i.e. during bootup), this method is not ideal for you.</li>
	<li>A current bug is that you are asked for your keyring password twice (?) everytime you log in. This can be annoying, but rumor has it, it is already fixed and an update will be released soon.</li>
</ul>

As you see, Dapper Drake made a big step towards the usability of Linux on laptops. Hope you give it a shot. It seems to be worth it.

<strong>Update:</strong> Removed two unnecessary steps. Thanks, Martin and Zakaria!
