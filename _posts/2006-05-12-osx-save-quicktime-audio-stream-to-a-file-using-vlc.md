--- 
status: publish
tags: 
- OSU OSL Crosspost
- Tech Talk
published: true
title: "OSX: Save Quicktime audio stream to a file using VLC"
type: post
meta: 
  tags: ""
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
I found a <a href="http://www.macosxhints.com/article.php?story=20031216183821835">Mac OS X hint</a> yesterday mentioning how <a href="http://www.videolan.org/vlc/">VideoLAN CLient (VLC)</a> can save streaming videos into a file. Since today I wanted to record a radio show off the Internet, I gave it a shot for an audio stream too.

Here's what I got:

If you want to save a Quicktime (AAC/MP4) audio stream (maybe others, too? Leave a comment if you know!) to a file, start VLC from the command line (terminal window) like this:

<blockquote><code style="text-align: left">/Applications/VLC.app/Contents/MacOS/VLC --rtsp-tcp rtsp://example.com/path/to/stream --sout '#standard{access=file,mux=mp4,url=/Users/Shared/VLCoutput.mp4}'</code></blockquote>

Now, if you want to <strong>schedule</strong> the whole thing, a cron job will do the job. The <a href="http://en.wikipedia.org/wiki/At_%28Unix_command%29">tool <code>at</code></a> would be certainly more correct (since you don't want to schedule it as a <em>recurrent</em> task), but the at daemon is disabled on OS&nbsp;X by default.

So, do a <code>crontab -e</code> and put in two lines like this (yes, put the whole VLC stuff into one line as mentioned above):

<blockquote><code style="text-align: left">0 15 12 5 * /Applications/VLC.app/Contents/MacOS/VLC --rtsp-tcp rtsp://example.com/path/to/stream --sout '#standard{access=file,mux=mp4,url=/Users/Shared/VLCoutput.mp4}'
30 15 12 5 * killall -QUIT VLC</code></blockquote>

The first line starts VLC as mentioned above. <code>0 15 12 5</code> means: Start at 3&nbsp;p.m. (= <code>0 15</code>), on May 12 (= <code>12 5</code>). The asterisks in each of the lines just mean that you don't care about the weekday.
<!--more-->
The second command, accordingly, stops recording at 3:30&nbsp;p.m. by <code>kill</code>ing the VLC process. Two notes on that:

First, keep in mind to sind the <code>QUIT</code> <a href="http://en.wikipedia.org/wiki/Signal_%28computing%29">signal</a> rather than <code>TERM</code> (which would be the default), otherwise VLC won't correctly finish writing the file and probably render it unusable.

Second, <code>killall</code> is the mass murderer of the <a href="http://en.wikipedia.org/wiki/Kill_%28Unix%29"><code>kill()</code></a> commands. It will kill all running instances of VLC, not just the one recording your stream. So, don't wonder if the movie you happen to be watching stops playing at the scheduled time.

Save it and you are all set: Your stream will be recorded at the right time. You will find your stream in the <code>Users/Shared/</code> folder, as specified in the VLC command line.

Eventually, when everything is done, you do a <code>crontab -e</code> again, and remove the two lines so that it won't start recording again, a year from now ;)

Have fun listening!
