--- 
status: publish
tags: 
- osl
- Tech Talk
published: true
title: "Could not create task or type of type: junit. -- or the worst error message ever"
type: post
meta: 
  tags: ""
layout: post
---
Currently, I have to work a lot with <a href="http://ant.apache.org/">ant</a> for class, and generally, I like it.

The <a href="http://ant.apache.org/manual/index.html">XML format used to describe the build tasks</a> is pretty straightforward, makes sense most of the time and is even pretty extensible, so that things like JUnit testing are as easy as the ABC. Well -- they <em>should be</em>.

When using ant with <a href="http://www.eclipse.org/">Eclipse</a>, everything worked fine. But then, when I checked out the project on the command line and confidently ran an "<code>ant test</code>", I was presented with the following error message, which through its length alone has such a beauty that I should truly consider printing it out and put it on my wall to admire it daily.

<blockquote><code>BUILD FAILED
/blah.../build.xml:51:
Could not create task or type of type: junit.</code>

<code>Ant could not find the task or a class this task relies upon.</code>

<code>This is common and has a number of causes; the usual
solutions are to read the manual pages then download and
install needed JAR files, or fix the build file:
</code>
<code>- You have misspelt 'junit'.
   Fix: check your spelling.</code>

<code>- The task needs an external JAR file to execute
     and this is not found at the right place in the classpath.
   Fix: check the documentation for dependencies.
   Fix: declare the task.</code>

<code> - The task is an Ant optional task and the JAR file and/or libraries
     implementing the functionality were not found at the time you
     yourself built your installation of Ant from the Ant sources.
   Fix: Look in the ANT_HOME/lib for the 'ant-' JAR corresponding to the
     task and make sure it contains more than merely a META-INF/MANIFEST.MF.
     If all it contains is the manifest, then rebuild Ant with the needed
     libraries present in ${ant.home}/lib/optional/ , or alternatively,
     download a pre-built release version from apache.org</code>

<code> - The build file was written for a later version of Ant
   Fix: upgrade to at least the latest release version of Ant</code>

<code> - The task is not an Ant core or optional task
     and needs to be declared using &lt;taskdef&gt;.</code>

<code> - You are attempting to use a task defined using
    &lt;presetdef&gt; or &lt;macrodef&gt; but have spelt wrong or not
   defined it at the point of use</code>

<code>Remember that for JAR files to be visible to Ant tasks implemented
in ANT_HOME/lib, the files must be in the same directory or on the
classpath</code>

<code>Please neither file bug reports on this problem, nor email the
Ant mailing lists, until all of these causes have been explored,
as this is not an Ant bug.</code>
</blockquote>
<!--more-->
<strong>This is not an ant bug?</strong> Oh yes it is. "<code>ant-junit.jar</code>" is now shipped by default with ant and still, ant claims not to know about that task?

And anyway - why couldn't the developer who took the time to write such a cryptic error message use his effort instead to fix the bug?!

Unbelievable enough - however, since others did a <a href="http://cafe.elharo.com/java/errormsg/">much better job on ranting about ant's worst error message ever</a>, I'm going to stop now and <strong>provide a solution</strong> for that problem instead (since ant developers obviously <em>didn't feel alike</em>):

Go to <code>$ANT_HOME/lib</code> and make a symbolic link to your JUnit's <code>junit.jar</code> file. The directories differ for most operating systems, but the system is the same: Ant apparently does not find JUnit in its classpath, resulting in the error message above. When JUnit is linked to Ant's library dir however, it can find JUnit and will call the unit tests as expected.

(Now it took me like 4 lines to describe a fix for the problem. Why such an easy fix is not part of the ant error message will probably remain a secret forever.)

I hope I helped some of you guys who have the same problem. Keep having fun programming!
