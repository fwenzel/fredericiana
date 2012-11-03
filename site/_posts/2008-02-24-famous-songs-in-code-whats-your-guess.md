--- 
status: publish
tags: 
- Cacoethes Scribendi
- fun
- game
- guess
- mozilla
- osl
- pseudocode
- song
- Tech Talk
- titles
published: true
title: Famous Songs in Code (What's Your Guess?)
type: post
meta: {}

layout: post
---
Inspired by <a href="http://blogoscoped.com/archive/2008-02-21-n41.html">Philipp Lenssen's fabulous idea to express idioms in code</a>, I came up---just for fun---with the following <strong>10 well-known song titles</strong>, written in horrible C/Java/PHP pseudocode.

Have fun... and take a guess in the comments!

<pre>
// Song 1:
it = b

// Song 2:
for (i=0; i&lt;people.count(); i++)
  people[i].attributes |= (shiny | happy);

// Song 3:
function get(want) {
  if (random.bool() == true)
    return want;
  else
    return null;
}

// Song 4:
//function leave() {
//  return new Color(0,0,0);
//}
// Oh, I think I screwed this one up, so here it goes:
// Version 2.0 of Song 4: ;-)
function leave(me) {
  me.setColor(0,0,0);
  return me;
}

// Song 5:
who = fire.getStarter();
assert(who != us);

// Song 6:
function cry(person) {
  return (person.gender == female);
}

// Song 7:
person = king.getWife();
person.dance();

// Song 8:
life = me.getLife();
life.setSunshine(you);

// Song 9:
person = USGovernmentEmployees.getRandom();
while (person.boss != null)
  person = person.boss;
person.writeLetter();

// Song 10:
train = trains.getLine(A);
you.take(train);
</pre>

<strong>Update:</strong> I fixed Song 4 and 9 because they made way too little sense. Oops ;)
