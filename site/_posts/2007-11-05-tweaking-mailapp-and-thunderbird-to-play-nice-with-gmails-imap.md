--- 
status: publish
tags: 
- gmail
- imap
- mail.app
- mozilla
- tech
- thunderbird
- trash
published: true
title: Tweaking Mail.app and Thunderbird to Play Nice with GMail's IMAP
type: post
meta: {}

layout: post
---
The <a href="http://fredericiana.com/2007/10/27/gmail-introduces-imap/">recently introduced IMAP feature of Google's GMail</a> seems to get increasingly more popular.

Still, in order to make popular email clients play well with GMail, they need some tweaking. Most notably, the default "Trash" folder assumed by most email clients will just create a GMail tag named <code>[Imap]/Trash</code> instead of actually putting the email into GMail's trash folder.

Though, the good news is, help is near! Lifehacker has an <a href="http://lifehacker.com/software/geek-to-live/turn-thunderbird-into-the-ultimate-gmail-imap-client-314574.php">excellent tutorial on tweaks you can apply to Thunderbird</a> in order to solve this and other problems and make the most out of the Thunderbird+GMail combination.

For the passionate Mac users, Jean Pierre describes <a href="http://blog.jeanpierre.de/2007/11/05/apple-mail-3-use-gmails-trash-folder/">how to choose the GMail Trash folder in Apple Mail</a>.

On a side note, choosing a special Trash folder is slightly complicated in Thunderbird (editing <code>about:config</code> is pretty advanced, I'd say). Unfortunately, this contradicts the <a href="http://www.faqs.org/rfcs/rfc2683.html">recommendations on IMAP4 implementation (RFC 2683)</a>, section 3.4.8 (<em>"Creating Special-Use Mailboxes"</em>), where it says:

<blockquote>In addition, the client developer should <strong>provide a convenient way</strong> for the user to select the names <strong>for any special-use mailboxes</strong>, allowing the user to make these names the same in all clients used and to put them where the user wants them.
</blockquote>

For "Sent", "Drafts" and "Templates", this is indeed already very conveniently handled in the account settings dialog, yet for the Trash we need to edit special preferences, which is slightly confusing.

Interestingly, there is already <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=182274">a bug on this</a> (and has been for a while). The good news is: According to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=182274#c92">one of the comments</a>, this is fixed in the trunk, so we can hope to get this feature with the next major release of Thunderbird. :)
