---
layout: post
title: HTML5-Compatible Blink Tag
tags:
- mozilla
- tech
---

We all know that the ``<blink>`` tag was always a bad idea. It's not part of any HTML standard, it's not semantic, and it is so horrible for accessibility and user experience that Jakob Nielsen called it ["plain evil"][Nielsen].

Still, nostalgia being what it is, you might sometimes wish yourself back to those happy times of Netscape Navigator 1.0 that marked the [origin of the blink tag][Montulli]. And though even Firefox 19 still supports it just fine (I am <blink>not</blink> kidding), you are somewhat reluctant to just blatantly violate HTML5.

I understand. Luckily, we can emulate it all with pure, cruelty-free CSS3!

> *Warning:* What you're about to see is not pretty. It's me playing with CSS3 animations for fun, not profit. Please don't use it in a real website like this. Think of the children!

[Nielsen]: http://www.useit.com/alertbox/9605a.html
[Montulli]: http://www.montulli.org/theoriginofthe%3Cblink%3Etag

CSS3 animations to the rescue
-----------------------------
First of all, let's use a semantic tag and a class rather than a nonstandard tag:

{% highlight html %}
<p class="blink">at least it's not Comic Sans</p>
{% endhighlight %}

Now, time for some [CSS animations][animations]! The blink tag blinks at a frequency of 1Hz, so let's start with an infinitely iterating, 1s animation:

[animations]: https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations

{% highlight css %}
.blink {
    animation-duration: 1s;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
}
@keyframes blink {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
{% endhighlight %}

The ``@keyframes`` rules define that we want to start at full opacity and end at 0, and ``animation-direction: alternate`` will keep going back and forth from there.

Almost works! Check it out on [JSFiddle][smooth].

[smooth]: http://jsfiddle.net/xKujb/3/

Too smooth?
-----------
But wait, we're not done yet. The animation is way too smooth, it's more of a fading than a blinking. What is this, 2012? How are we supposed to appease our nostalgic longings like this?

Nothing easier than that, let's add some more keyframes to make the transition sharper:

{% highlight css %}
@keyframes blink {
    0% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    81% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
{% endhighlight %}

Now check this version out on [JSFiddle][sharp].

That's it! We've emulated the ``<blink>`` tag without a single line of invalid HTML. And perhaps better yet, without JavaScript.

What could be better than that?

[sharp]: http://jsfiddle.net/xKujb/2/
