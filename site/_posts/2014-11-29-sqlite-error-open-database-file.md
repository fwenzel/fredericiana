---
layout: post
tags:
- tech
title: SQlite error&#58; Unable to Open Database File
---

When writing a web app using an SQLite database file, you might run into an error where you can read from the file but not write to it... Despite the database file being **writable** to the user as it should be.

In PHP, this looks something like:

`SQLSTATE[HY000]: General error: 14 unable to open database file.`

In Python:

`sqlite3.OperationalError: unable to open database file`

What gives? The error is particularly confusing because you just *did* open the database file and read from it just fine.

Turns out, the problem is the permissions on the **directory the database resides in**. When writing to an SQLite file, the database engine need to be able to write a *lockfile* to the database directory.

The fix is easy. For instance, if your web server runs as the user/group ``www-data``, you'd do something like:

```bash
cd .../my-app
chgrp www-data databasedir
chgrp www-data databasedir/mydb.db
chmod g+w databasedir
chmod g+w databasedir/mydb.db
```
