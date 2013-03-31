--- 
status: publish
tags: 
- 35days
- css
- feature
- firefox
- mozilla
- osl
- tech
- webdev
published: true
title: stylish text with the CSS text-shadow property
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
<blockquote>
<em>This is a <a href="http://hacks.mozilla.org/2009/06/text-shadow/">cross-post of an article</a> I wrote for the <a href="http://hacks.mozilla.org/">hacks.mozilla.org</a> blog. It shows off some of the fun stuff web developers can do with the <code>text-shadow</code> feature that will be released as part of Firefox 3.5.</em>
</blockquote>

<p>The <em>text-shadow</em> CSS property does what the name implies: It lets you create a slightly blurred, slightly moved copy of text, which ends up looking somewhat like a real-world shadow.</p>
<p>The <em>text-shadow</em> property was first introduced in CSS2, but as it was improperly defined at the time, its support was dropped again in CSS2.1. The feature was re-introduced with CSS3 and has now <a href="https://developer.mozilla.org/en/CSS/text-shadow">made it into Firefox 3.5</a>. </p>
<p><strong>How it Works</strong></p>
<p>According to the CSS3 specification, the text-shadow property can have the following values:</p>

<div class="wp_syntax"><div class="code"><pre class="text" style="font-family:monospace;">none | [&lt;shadow&gt;, ] * &lt;shadow&gt;,</pre></div></div>

<p>&lt;shadow&gt; is defined as:</p>

<div class="wp_syntax"><div class="code"><pre class="text" style="font-family:monospace;">[ &lt;color&gt;? &lt;length&gt; &lt;length&gt; &lt;length&gt;? | &lt;length&gt; &lt;length&gt; &lt;length&gt;? &lt;color&gt;? ],</pre></div></div>

<p>where the first two lengths represent the horizontal and vertical offset and the third an optional blur radius.  The best way to describe it is with examples.</p>
<p>We can make a simple shadow like this, for example:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span> <span style="color: #933;">2px</span> <span style="color: #933;">2px</span> <span style="color: #933;">3px</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span></pre></div></div>

<div style="padding: 10px">
<div style="width: 233px; height: 43px; line-height: 43px; text-align: center; color: #000; background: #fff; font-size: 200%; text-shadow: 2px 2px 3px #000;">A simple shadow</div>
<p><img src="https://wiki.mozilla.org/images/4/47/35days-text-shadow-simple.jpg"/>
</p></div>
<p>(All of the examples are a live example first, then a picture of the working feature &#8212; so you can compare your browser&#8217;s behavior with the one of Firefox 3.5 on OSX)</p>
<p>If you are a fan of hard edges, you can just refrain from using a blur radius altogether:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span> <span style="color: #933;">2px</span> <span style="color: #933;">2px</span> 0 <span style="color: #cc00cc;">#888</span><span style="color: #00AA00;">;</span></pre></div></div>

<div style="padding: 10px">
<div style="width: 226px; height: 40px; line-height: 40px; text-align: center; color: #000; background: #fff; font-size: 200%; text-shadow: 2px 2px 0 #888;">I don&#8217;t like blurs</div>
<p><img src="https://wiki.mozilla.org/images/0/0e/35days-text-shadow-noblur.jpg"/>
</p></div>
<p><strong>Glowing text, and multiple shadows</strong></p>
<p>But due to the flexibility of the feature, the fun does not stop here. By varying the text offset, blur radius, and of course the color, you can achieve various effects, a mysterious glow for example:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span> <span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">5px</span> <span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span></pre></div></div>

<div style="padding: 10px">
<div style="width: 181px; height: 49px; line-height: 49px; text-align: center; color: #fff; background: #000; font-size: 200%; text-shadow: 1px 1px 5px #fff;">Glowing text</div>
<p><img src="https://wiki.mozilla.org/images/d/de/35days-text-shadow-glowing.jpg"/>
</p></div>
<p>or a simple, fuzzy blur:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span> <span style="color: #933;">0px</span> <span style="color: #933;">0px</span> <span style="color: #933;">5px</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span></pre></div></div>

<div style="padding: 10px">
<div style="width: 164px; height: 49px; line-height: 49px; text-align: center; color: #000; background: #fff; font-size: 200%; text-shadow: 0px 0px 5px #000;">Blurry text</div>
<p><img src="https://wiki.mozilla.org/images/2/25/35days-text-shadow-blurry.jpg"/>
</p></div>
<p>Finally, you can add &#8221;more than one shadow&#8221;, allowing you to create pretty &#8220;hot&#8221; effects (courtesy of <a href="http://www.css3.info/preview/text-shadow/ css3.info">http://www.css3.info/preview/text-shadow/ css3.info</a>):</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span> 0 0 <span style="color: #933;">4px</span> <span style="color: #993333;">white</span><span style="color: #00AA00;">,</span> 0 <span style="color: #933;">-5px</span> <span style="color: #933;">4px</span> <span style="color: #cc00cc;">#FFFF33</span><span style="color: #00AA00;">,</span> <span style="color: #933;">2px</span> <span style="color: #933;">-10px</span> <span style="color: #933;">6px</span> <span style="color: #cc00cc;">#FFDD33</span><span style="color: #00AA00;">,</span> <span style="color: #933;">-2px</span> <span style="color: #933;">-15px</span> <span style="color: #933;">11px</span> <span style="color: #cc00cc;">#FF8800</span><span style="color: #00AA00;">,</span> <span style="color: #933;">2px</span> <span style="color: #933;">-25px</span> <span style="color: #933;">18px</span> <span style="color: #cc00cc;">#FF2200</span></pre></div></div>

<div style="padding: 15px">
<div style="width: 356px; height: 53px; text-align: center; line-height: 58px; color: #fff; background: #000; font-size: 200%; padding-top:5px; text-shadow:0 0 4px white, 0 -5px 4px #FFFF33, 2px -10px 6px #FFDD33, -2px -15px 11px #FF8800, 2px -25px 18px #FF2200">Multiple shadows are hot</div>
<p><img src="https://wiki.mozilla.org/images/d/d9/35days-text-shadow-fire.jpg"/>
</p></div>
<p>The number of <em>text-shadow</em>s you can apply at the same time in Firefox 3.5 is &#8212; in theory &#8212; unlimited, though you may want to stick with a reasonable amount.</p>
<p>Like all CSS properties, you can modify <em>text-shadow</em> on the fly using JavaScript:</p>

<div style="color: #fff; background: #000; font-size: 200%; padding:20px; text-align: center" id="animationtext">Animated shadows with JavaScript</div>
<p><script type="text/javascript">
<!--
var textshadow = {
    colors: [
        '#f00', '#0f0', '#00f'
    ],
    shadows: [
        '0 -10px 2px',
        '10px 10px 2px',
        '-10px 10px 2px'
    ],
    state: [0, 1, 2],
    animate: function() {
        var t = document.getElementById("animationtext");
        var s = '';
        for (var i = 0; i < 3; i++) {
            if (s) s += ", ";
            var myshadows = this.shadows[this.state[i]];
            s += myshadows + ' ' + this.colors[i];
            this.state[i] = ++this.state[i] % 3; /* rotate */
        }
        t.style.textShadow = s;
    },
    toggleAnimation: function() {
        if (this.handle) {
            window.clearInterval(this.handle);
            this.handle = false;
            var t = document.getElementById('animationtext');
            t.style.textShadow = '';
        } else {
            this.handle = window.setInterval(function() { textshadow.animate(); }, 100);
        }
        return false;
    }
}
//--></script></p>
<div style="font-size: 120%; text-align: center; font-weight: bold">
<a href="#" onclick="textshadow.toggleAnimation();return false;">Start/stop animation</a>
</div>
<p><strong>Performance, Accessibility and Cross-Browser Compatibility</strong></p>
<p>The times of using pictures (or even worse, Flash) for text shadows on the web are numbered for two reasons:</p>
<p>First, there are significant advantages to using text instead of pictures.  Not using pictures saves on bandwidth and HTTP connection overhead.  Accessibility, both for people who use screen readers and search engines, is greatly improved.  And page zoom will work better because the text can be scaled instead of using pixel interpolation to scale up an image.</p>
<p>Second this feature is largely cross-browser compatible:</p>
<ul>

<li>Opera supports <em>text-shadow</em> since version 9.5. According to the <a href="https://developer.mozilla.org/en/CSS/text-shadow">Mozilla Developer Center</a>, Opera 9.x supports up to 6 shadows on the same element.
</li><li>Safari has had the feature since version 1.1 (and other WebKit-based browsers along with it).
</li><li>Internet Explorer does not support the <em>text-shadow</em> property, but the feature degrades gracefully to regular text. In addition, if you want to emulate some of the <em>text-shadow</em> functionality in MSIE, you can use Microsoft&#8217;s proprietary <a href="http://msdn.microsoft.com/en-us/library/ms673539%28VS.85%29.aspx">&#8221;Shadow&#8221; and &#8221;DropShadow&#8221; filters</a>.

</li><li>Similarly to MSIE, when other, older browsers do not support the feature (including Firefox 3 and older), they will just show the regular text without any shadows.
</li></ul>
<p>A caveat worth mentioning is the &#8221;drawing order&#8221;: While Opera 9.x adheres to the CSS2 painting order (i.e., the first specified shadow is drawn at the bottom), Firefox 3.5 adheres to the CSS3 painting order (the first specified shadow is on top). Keep this in mind when drawing multiple shadows.</p>
<p><strong>Conclusions</strong></p>
<p><em>text-shadow</em> is a subtle but powerful CSS feature that is &#8212; now that it is supported by Firefox 3.5 &#8212; likely to be widely adopted across the web in the foreseeable future. Due to its graceful degradation in older browsers, it can safely be used by developers and will, over time, be seen by more and more users.</p>
<p>Finally, some words of wisdom: Like any eye candy, use it like salt in a soup &#8212; with moderation, not by the bucket. If the web developers of the world overdo it, <em>text-shadow</em> may die a short, yet painful death. It would be sad if we make users flinch at the sight of text shadows like <a href="http://xkcd.com/590/">typography geeks at the sight of &#8220;Papyrus&#8221;</a>, and thus needed to bury the feature deeply in our treasure chest.</p>

<p>That being said: <span style="text-shadow:3px 3px 3px #888;">Go try it out!</span></p>
<p><strong>Further resources</strong></p>
<p>Documentation</p>
<ul>
<li><a href="https://developer.mozilla.org/en/CSS/text-shadow">https://developer.mozilla.org/en/CSS/text-shadow</a>
</li><li><a href="http://www.quirksmode.org/css/textshadow.html">http://www.quirksmode.org/css/textshadow.html</a>
</li><li><a href="http://www.w3.org/TR/css3-text/#text-shadow">http://www.w3.org/TR/css3-text/#text-shadow</a>
</li></ul>
<p>Examples</p>

<ul>
<li><a href="http://maettig.com/code/css/text-shadow.html">http://maettig.com/code/css/text-shadow.html</a>
</li><li><a href="http://www.kremalicious.com/2008/04/make-cool-and-clever-text-effects-with-css-text-shadow/">http://www.kremalicious.com/2008/04/make-cool-and-clever-text-effects-with-css-text-shadow/</a>
</li><li><a href="https://bug10713.bugzilla.mozilla.org/attachment.cgi?id=273985">https://bug10713.bugzilla.mozilla.org/attachment.cgi?id=273985</a>
</li><li><a href="https://bug10713.bugzilla.mozilla.org/attachment.cgi?id=197360">https://bug10713.bugzilla.mozilla.org/attachment.cgi?id=197360</a>
</li></ul>
