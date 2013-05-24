---
layout: post
title: imagetwist, and add-on rotating images according to their EXIF data
tags:
- tech
- mozilla
---

Ever so often, friends send me emails with pictures they took on their phones. When looking at the photo, it frequently appears turned on its side, like this:

![Mona Lisa](/media/2013/monalisa.jpg)

A little research revealed that cameras take both sideways ("landscape") and upright ("portrait") photos the same way. Then, instead of arranging the pixels differently (an expensive process), many cameras, especially phones, just add a little bit of [EXIF][EXIF] metadata defining the way the device was oriented when the picture was taken.

It is then up to the image *viewing* software to read this metadata and display the image correctly.

[EXIF]: http://en.wikipedia.org/wiki/Exchangeable_image_file_format

## An old bug

Some image viewers respect this and show the image right-side-up. Firefox, it turns out, [does not][bug].

The [bug report][bug], almost 8 years old, lists many good reasons why you wouldn't want to auto-rotate images **inside web pages** based on their metadata. For example, some image editors will turn your image, but not clear the orientation metadata, so the browser would overcompensate if it applied additional rotation. Also, silently changing a major part of the web like image rendering is likely to break many existing sites that have come to rely on the previous behavior.

On **single-image pages** ("view image"), however, I and many people I talked to believe the **image metadata should be honored**. Not doing so, for fear of the off chance the image has broken metadata, is breaking the 99% case (photos from digital cameras) in favor of the 1% false positive (broken image editing software).

[bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=298619

## Time for a fix

So I went ahead and wrote a Firefox add-on that fixes this issue. Meet [imagetwist]. It adds two features to your browser.

First, it fixes the problem described above: If you look at an individual image, and the metadata says it should be turned, the add-on will turn it automatically.

Second, it provides a right-click menu on any image, anywhere, allowing you to rotate it as needed (to the right, left, or 180 degrees). This is useful for the occasional case where a wrongly oriented image is visible on a website. For this feature, image metadata is not considered, you can rotate images any way you want.

![The imagetwist context menu](/media/2013/imagetwist-menu.jpg)

## How does it work?
To turn an image, I spin up a [canvas](https://developer.mozilla.org/en-US/docs/HTML/Canvas) element and project the image on it, rotated. Then I export the canvas data and replace the image source with it.

Granted, I would have preferred a pure CSS solution. I explored [CSS transforms][transform], but that will only rotate the image itself, not its bounding box. So, frequently, the image will rotate underneath some other content on a page and become partially obscured.

A better CSS option would be the [image-orientation][CSS-ori] property, but alas, it's not implemented [quite yet](https://bugzilla.mozilla.org/show_bug.cgi?id=825771). When it lands, I will happily adapt imagetwist's code accordingly.

[transform]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
[CSS-ori]: http://dev.w3.org/csswg/css3-images/#image-orientation

## Try it out! Contribute!
I know that you can't wait to try it out: [Install imagetwist from the Mozilla Add-ons website][imagetwist].

As usual, this add-on is open source software. [Check out the source code on github.][source] Feedback and other contributions welcome!

[imagetwist]: https://addons.mozilla.org/addon/imagetwist/
[source]: https://github.com/fwenzel/imagetwist

---

I'm [blogging about once a week in 2013][challenge], on various topics. This is my eleventh post of the year.

[challenge]: /2013/01/07/writing-challenge-accepted/
