---
layout: post
tags:
- tech
- mozilla
title: My "smart keyword" searches in Firefox
---

Woah it's been a long time since I last blogged. Busy times. So here you go with a casual Firefox tip:

One of my favorite "hidden" features in Firefox are "smart keywords". Essentially, you write a keyword + a phrase into the URL bar, and it'll issue a search on the site corresponding to this keyword.

For example, I enter **"wp elephants"** and it takes me to the Wikipedia page on Elephants, rather than searching Google for the phrase. Neat!

There is a great [Firefox Support article](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) on how to add you own keywords. Essentially you right-click on a search box on your favorite website and click "Add a keyword for this search":

![add a search keyword](/media/2013/smartkeyword.jpg)

Here are the keywords I have added (I linked them to the search they represent, respectively):

* [**bug**](https://bugzilla.mozilla.org/buglist.cgi?quicksearch=%s): Searches bugzilla.mozilla.org (bug 12345, for example)
* [**leo**](http://dict.leo.org/ende?lp=ende&lang=de&searchLoc=0&cmpType=relaxed&sectHdr=on&spellToler=&search=%s): Searches dict.leo.org (a German-English dictionary)
* [**leofr**](http://dict.leo.org/frde?lp=frde&lang=de&searchLoc=0&cmpType=relaxed&sectHdr=on&spellToler=&search=%s): Searches the French version of dict.leo.org
* [**wp**](http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=%s): Searches Wikipedia in English
* [**dewp**](http://de.wikipedia.org/w/index.php?title=Spezial%3ASuche&search=%s): Searches Wikipedia in German
* [**imdb**](http://www.imdb.com/find?s=all&q=%s): Searches the IMDB movie database
* [**slang**](http://www.urbandictionary.com/define.php?term=%s): Searches UrbanDictionary for English slang terms
* [**mw**](http://www.merriam-webster.com/dictionary/%s): Searches Merriam-Webster's dictionary
* [**ups**](http://wwwapps.ups.com/WebTracking/processInputRequest?sort_by=status&tracknums_displayed=1&TypeOfInquiryNumber=T&loc=en_us&InquiryNumber1=%s&track.x=0&track.y=0): Searches UPS for tracking numbers

My attentive readers may have noticed that Firefox will just take the search term you entered and put it into the URL in place of the placeholder "%s". This way if you can't find a search box, you can still add a keyword search by bookmarking a URL, putting the placeholder "%s" in an appropriate spot, and assigning a keyword.

That's what I did with UPS, where I couldn't find a working search form on the website. So I snagged the URL Google uses when it does UPS tracking and manually assigned it a keyword.

Do you use any search keywords you'd like to share? Let me know in the comments.

Happy keyword hacking!

---

I'm [blogging about once a week in 2013][challenge], on various topics. This is my fourteenth post of the year.

[challenge]: /2013/01/07/writing-challenge-accepted/
