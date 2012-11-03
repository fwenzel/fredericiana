--- 
status: publish
tags: 
- Oregon
- Tech Talk
published: true
title: gnuplot for the win
type: post
meta: 
  tags: ""
layout: post
---
Recently, I have to do a lot of <em>point plots</em> for one of my classes, i.e. taking huge amounts of two-dimensional data points, having them "drawn" and printing out the resulting image.

Usually, for this job, I used <a href="http://www.maplesoft.com/">Maple</a>, mostly because this is my <a href="http://en.wikipedia.org/wiki/Computer_algebra_system">computer algebra system</a> of choice since I used it in my advanced math course in high school. It is just so much better in tedious arithmetic than I am ;). Writing a little script, I read in the provided data file by the teacher and returned an expression that I could directly copy and paste into Maple. The resulting graphs look somehow like this:

<a class="imagelink" href="/media/wp/2006/05/maple-plot-example.gif" title="A Maple Example Plot"><img id="image66" src="/media/wp/2006/05/maple-plot-example.thumbnail.gif" alt="A Maple Example Plot" class="centered border" /></a>

However yesterday, I managed to <em>break Maple</em>. I read in two lists of <em>a few hundred</em> data points each and wanted to plot them together with a function in one plot. So far so bad: In spite of the correct syntax, I got some evaluation errors and an empty plot. Great.

So I tried <a href="http://www.gnuplot.info/">gnuplot</a>, the apparent "industry standard" for all sorts of scientific data and function plots (unless, of course, you spend a sh*load of money on Matlab ;)). And, within minutes, thanks to the <a href="http://www.google.com/search?q=gnuplot+howto">numerous howtos on the Internet</a> I was able to make much more beautiful (and working) plot such as this one:

<a class="imagelink" href="/media/wp/2006/05/gnuplot-example.gif" title="gnuplot Example Plot"><img id="image65" src="/media/wp/2006/05/gnuplot-example.thumbnail.gif" alt="gnuplot Example Plot" class="centered border" /></a>

And I finally understand why so many people are using it: It is just <em>the right tool for the job</em>.

One tutorial I want to point out in particular are the <a href="http://t16web.lanl.gov/Kawano/gnuplot/index-e.html">not so frequently asked questions</a> that helped me a lot to get the trivial, not-so-trivial-after-all tasks done to get a little more sleep and spend a little less time on homework. :)
