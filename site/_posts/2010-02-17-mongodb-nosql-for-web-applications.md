--- 
status: publish
tags: 
- databases
- fosdem
- mongodb
- mozilla
- nosql
- osl
- Tech Talk
- web applications
published: true
title: MongoDB / NoSQL for Web Applications
type: post
meta: 
  aktt_tweeted: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
layout: post
---
As mentioned <a href="http://fredericiana.com/2010/02/10/fosdem-2010/">earlier</a>, I dove a little into the world of non-relational databases for web applications. One of the more interesting ones seems to be <a href="http://www.mongodb.org/">MongoDB</a>. By the way, a <a href="http://www.parleys.com/#st=5&id=1864">video of the presentation</a> I attended is meanwhile online as well.

<img src="/media/wp/2010/02/mongodb.jpg" alt="" title="mongoDB" width="221" height="94" class="alignnone size-full wp-image-2620" />

MongoDB does not only seem to be "fully buzz-word compatible" (<em>MongoDB (from "humongous") is a scalable, high-performance, open source, schema-free, document-oriented database.</em>), it also looks like an interesting alternative storage backend for web applications, for various reasons I'd like to outline here.

Note that I haven't extensively worked with MongoDB, nor have any of the significant web applications I worked with used non-relational databases yet. So you are very welcome to point out points I got wrong in the comments.

First, some <strong>terminology</strong>: Schema-free and document-oriented essentially means that your data is stored as a loose collection of items in a <em>bucket</em>, not as rows in a table. Different items in the bucket <em>can</em> be uniform (in OOP-terms, instances of the same class), but they <em>needn't be</em>. In MongoDB, if you access a non-existent object, it'll spring into existence as an empty object. Likewise for a non-existent attribute.

<strong>How can that help us?</strong> Web applications have a <strong>much faster development cycle</strong> than traditional applications (an observation, for example reflected in the recent <a href="http://micropipes.com/blog/2009/11/17/amo-development-changes-in-2010/">development changes on AMO</a>). With all feature changes, related database changes have to be applied equally as frequently, every time write-locking the site up to several minutes depending on how big the changes. In a schema-free database, code changes can smoothly be rolled out and can start using fields right away, on the affected items only. For example, in MongoDB, adding a nickname to the user profiles would be trivial, and every user object that never had a nickname before would be assumed to have an empty one by default. The tedious task of keeping the database schema in sync between development and deployment is basically going away entirely.

In traditional databases, we have gotten accustomed to the so-called ACID properties: Atomicity, Consistency, Isolation, Durability. By relaxing these properties, unconventional databases can <a href="http://www.mongodb.org/display/DOCS/Benchmarks">score performance-wise</a>, because less locking and less database-level abstraction is needed. Some exemplary ACID relaxations that I gathered about MongoDB are:
<ul>
	<li>MongoDB does not have <strong>transactions</strong>, which affects both Atomicity and Isolation. This will let other threads observe intermediate changes while they happen, but in web applications that is often not a big deal.</li>
	<li>MongoDB relies on <strong>eventual consistency</strong>, not strict consistency. That means, when a write occurs and the write command returns, we can not be 100% sure that from that moment in time on, all other processes will see the updated data only. They will only <em>eventually</em> be able to see the changes. This affects caching, because we can't invalidate and re-fill our caches immediately, but again, in web applications it's often not a big deal if updates take a few seconds to propagate.</li>
	<li>Durability is also relaxed in the interest of speed: As we all know, accessing RAM takes a few nanoseconds, while hitting the hard drive is easily many thousands of times (!) slower. Therefore, MongoDB won't make sure your data is on the hard drive immediately. As a result, you can lose data that you <em>thought</em> was already written if your server goes down in the period between writing and actual storing to the hard drive. Luckily, that doesn't happen too often.</li>
</ul>

As you see, if our application is not a <em>banking web site</em> and we are willing to part with some of the guarantees that traditional databases offer, we can use a database like MongoDB, that much more closely fits the way modern web applications are developed than regular RDBMSes do. If that's an option, every project needs to decide on a case-by-case basis.
