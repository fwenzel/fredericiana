---
layout: post
tags:
- tech
- python
title: setTimeout in Python
---

Today in a threaded Python project I work on, I had to delay the execution of a function for a bit, much like the ubiquitous ``setTimeout()`` in JavaScript.

Of course, ``sleep(3)`` is an option, but it will halt all execution completely while waiting. Instead, a [``Timer`` object](https://docs.python.org/2/library/threading.html#timer-objects) is exactly what you want.

However, wrapping the code in question inline makes the application code much harder to read, so I wrote a decorator instead:

```python
# utils.py

import threading
from functools import wraps

def delay(delay=0.):
    """
    Decorator delaying the execution of a function for a while.
    """
    def wrap(f):
        @wraps(f)
        def delayed(*args, **kwargs):
            timer = threading.Timer(delay, f, args=args, kwargs=kwargs)
            timer.start()
        return delayed
    return wrap
```

How do you use it?

```python
#main.py

from utils import delay

@delay(3.0)
def my_func(arg1, arg2):
	print arg1, arg2
	
if __name__ == '__main__':
	my_func('Hello', 'world')
```

My future self will find this blog post very helpful when the problem comes up next, I hope so will you.
