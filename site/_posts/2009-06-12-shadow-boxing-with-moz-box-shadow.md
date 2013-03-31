--- 
status: publish
tags: 
- css
- feature
- firefox
- mozilla
- osl
- tech
- webdev
published: true
title: shadow boxing with -moz-box-shadow
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
<blockquote>
<em>This is <a href="http://fredericiana.com/2009/06/10/stylish-text-with-the-css-text-shadow-property/">another</a> <a href="http://hacks.mozilla.org/2009/06/moz-box-shadow/">cross-post of an article</a> I wrote for the <a href="http://hacks.mozilla.org/">hacks.mozilla.org</a> blog. It shows off some of the fun stuff web developers can do with the <code>-moz-box-shadow</code> feature that will be released as part of Firefox 3.5.</em>
</blockquote>

Another fun CSS3 feature that's been implemented in Firefox 3.5 is box shadows. This feature allows the casting of a drop "shadow" from the frame of almost any arbitrary element.

As the CSS3 box shadow property is still a work in progress, however, it's been implemented as <code>-moz-box-shadow</code> in Firefox.  This is how Mozilla tests experimental properties in CSS, with property names prefaced with "-moz-".  When the specification is finalized, the property will be named "box-shadow."

<strong>How it works</strong>

Applying a box shadow to an element is straightforward. The <a href="http://dev.w3.org/csswg/css3-background/#the-box-shadow">CSS3 standard</a> allows as its value:

<pre lang="text">
none | &lt;shadow&gt; [ &lt;shadow&gt; ]*
</pre>

where <code>&lt;shadow&gt;</code> is:

<pre lang="text">
&lt;shadow&gt; = inset? && [ &lt;length&gt;{2,4} && &lt;color&gt;? ]
</pre>

The first two lengths are the <em>horizontal and vertical offset</em> of the shadow, respectively. The third length is the <em>blur radius</em> (compare that to the blur radius in in the <a href="http://hacks.mozilla.org/2009/06/text-shadow/">text-shadow property</a>). Finally the fourth length is the <em>spread radius</em>, allowing the shadow to grow (positive values) or shrink (negative values) compared to the size of the parent element.

The <code>inset</code> keyword is pretty well explained by the standard itself: <blockquote>if present, [it] changes the drop shadow from an outer shadow (one that shadows the box onto the canvas, as if it were lifted above the canvas) to an inner shadow (one that shadows the canvas onto the box, as if the box were cut out of the canvas and shifted behind it).</blockquote>

But talk is cheap, let's look at some examples.

To draw a simple shadow, just define an offset and a color, and off you go:

<pre lang="css">
 -moz-box-shadow: 1px 1px 10px #00f;
</pre>

<span style="display:block; width:150px; height:50px; border:1px solid black; background-color: #00f; -moz-box-shadow: 1px 1px 10px #00f;">&nbsp;</span>

<img src="https://wiki.mozilla.org/images/6/60/35days-box-shadow-simple.jpg" alt="simple box shadow" />

(Each of the examples in this article are live examples first, followed by a screen shot from Firefox 3.5 on OSX).

Similarly, you can draw an in-set shadow with the aforementioned keyword.

<pre lang="css">
-moz-box-shadow: inset 1px 1px 10px #888;
</pre>

<span style="display:block; width:150px; height:50px; border:1px solid black; background-color: #fff; -moz-box-shadow: inset 1px 1px 10px #888;">&nbsp;</span>

<img src="https://wiki.mozilla.org/images/f/f4/35days-box-shadow-inset.jpg" alt="inset box shadow" />

With the help of a <em>spread radius</em>, you can define smaller (or bigger) shadows than the element it is applied to:

<pre lang="css">
-moz-box-shadow: 0px 20px 10px -10px #888;
</pre>

<span style="display:block; width:150px; height:50px; border:1px solid black; background-color: #fff; margin:30px; -moz-box-shadow: 0px 20px 10px -10px #888;">&nbsp;</span>

<img src="https://wiki.mozilla.org/images/4/4c/35days-box-shadow-spread.jpg" alt="box shadow with spread radius" />

If you want, you can also define multiple shadows by defining several shadows, separated by commas (courtesy of <a href="http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/">Markus Stange</a>):

<pre lang="css">
-moz-box-shadow: 0 0 20px black, 20px 15px 30px yellow, -20px 15px 30px lime, -20px -15px 30px blue, 20px -15px 30px red;
</pre>

<span style="display:block; width:150px; height:50px; border:1px solid black; background-color: #fff; margin:50px; -moz-box-shadow: 0 0 20px black, 20px 15px 30px yellow, -20px 15px 30px lime, -20px -15px 30px blue, 20px -15px 30px red;">&nbsp;</span>

<img src="https://wiki.mozilla.org/images/3/30/35days-box-shadow-multiple.jpg" alt="multiple box shadows" />

The different shadows blend into each other very smoothly, and as you may have noticed, the order in which they are defined does make a difference. As <code>box-shadow</code> is a CSS3 feature, Firefox&nbsp;3.5 adheres to the CSS3 painting order. That means, the first specified shadow shows up <em>on top</em>, so keep that in mind when designing multiple shadows.

As a final example, I want to show you the combination of <code>-moz-box-shadow</code> with an <a href="http://www.w3.org/TR/css3-color/#rgba-color">RGBA color definition</a>. RGBA is the same as RGB, but it adds an alpha-channel transparency to change the opacity of the color. Let's make a black, un-blurred box shadow with an opacity of 50 percent, on a yellow background:

<pre lang="css">
-moz-box-shadow: inset 5px 5px 0 rgba(0, 0, 0, .5);
</pre>

<span style="display:block; width:150px; height:50px; border:1px solid black; background-color: yellow; -moz-box-shadow: inset 5px 5px 0 rgba(0, 0, 0, .5);">&nbsp;</span>

<img src="https://wiki.mozilla.org/images/e/ea/35days-box-shadow-rgba.jpg" alt="box shadow with RGBA" />

As you can see, the yellow background is visible though the half-transparent shadow without further ado. This feature becomes particularly interesting when background images are involved, as you'll be able to see them shining through the box shadow.

<strong>Cross-Browser Compatibility</strong>

As a newer, work-in-progress CSS3 property, box-shadow has not yet been widely adopted by browser makers.

<ul>
    <li>Firefox 3.5 supports the feature as <code>-moz-box-shadow</code>, as well as multiple shadows, the <code>inset</code> keyword and a spread radius.</li>
    <li>Safari/WebKit has gone down a similar route as Firefox by implementing the feature as <code>-webkit-box-shadow</code>. Multiple shadows are supported since version 4.0, while neither inset shadows nor the spread radius feature are supported yet in WebKit.</li>
    <li>Finally, Opera and Microsoft Internet Explorer have not yet implemented the box shadow property, though in MSIE you may want to check out their proprietary <a href="http://msdn.microsoft.com/en-us/library/ms532985(VS.85).aspx">DropShadow filter</a>.</li>
</ul>

To achieve the biggest possible coverage, it is advisable to define all three, the <code>-moz</code>, <code>-webkit</code>, and standard CSS3 syntax in parallel. Applicable browsers will then pick and adhere to the ones they support. For example:

<pre lang="css">
 -moz-box-shadow: 1px 1px 10px #00f;
 -webkit-box-shadow: 1px 1px 10px #00f;
 box-shadow: 1px 1px 10px #00f;
</pre>

The good news is that the <code>box-shadow</code> property degrades gracefully on unsupported browsers. For example, all the examples above will look like plain and boring boxes with no shadow in MSIE.

<strong>Conclusions</strong>

The CSS3 <code>box-shadow</code> property is not yet as widely available in browsers (and therefore, to users) as, for example, the <code>text-shadow</code> property, but with the limited box shadow support of WebKit as well as the full support provided by Firefox 3.5 (as far as the current status of the feature draft is concerned), more and more users will be able to see some level of CSS box shadows.

As a web developer, you can therefore use the feature, confident that you are giving users with modern browsers an improved experience while not turning away users with older browsers.

<strong>Further resources</strong>
<strong>Documentation</strong>
<ul>
    <li><a href="https://developer.mozilla.org/en/CSS/-moz-box-shadow">https://developer.mozilla.org/en/CSS/-moz-box-shadow</a></li>
    <li><a href="http://dev.w3.org/csswg/css3-background/#the-box-shadow">http://dev.w3.org/csswg/css3-background/#the-box-shadow</a></li>
</ul>

<strong>Examples</strong>
<ul>
    <li><a href="http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/">http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/</a></li>
    <li><a href="http://www.css3.info/preview/box-shadow/">http://www.css3.info/preview/box-shadow/</a></li>
    <li><a href="http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html">http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html</a></li>
</ul>
