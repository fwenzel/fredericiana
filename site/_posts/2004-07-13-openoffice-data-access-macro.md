--- 
status: publish
tags: 
- "10100111001"
published: true
title: OpenOffice data access macro
type: post
meta: 
  tags: ""
layout: post
---
<img width="200" height="58" border="0" hspace="5" align="right" src="/media/wp/openoffice-logo.gif" alt=""  />Last week I wrote a nice little <b>OpenOffice data access macro</b>. Having a normal OpenOffice data source,

<code>=DBSELECT(table, primary_key, field)</code>

will return the corrensponding value from it.

When <a href="http://www.openoffice.org/servlets/ReadMsg?list=users&msgNo=68952" title="http://www.openoffice.org/servlets/ReadMsg?list=users&msgNo=68952" onmouseover="window.status='http://www.openoffice.org/servlets/ReadMsg?list=users&msgNo=68952';return true;" onmouseout="window.status='';return true;">announcing this</a> on the OpenOffice.org user mailing list, reactions were quite positive so I decided to <a href="http://www.openoffice.org/servlets/ReadMsg?list=users&msgNo=69268" title="http://www.openoffice.org/servlets/ReadMsg?list=users&msgNo=69268" onmouseover="window.status='http://www.openoffice.org/servlets/ReadMsg?list=users&msgNo=69268';return true;" onmouseout="window.status='';return true;">release</a> my code snippet here under the GPL.


            <br /><!--more-->If you decide to use it, I would be glad of a comment under this article. Maybe you even feel free to take a look at my <a href="http://www.amazon.de/exec/obidos/wishlist/2NWHL46WMUMWR/ref=wl_em_to/" title="http://www.amazon.de/exec/obidos/wishlist/2NWHL46WMUMWR/ref=wl_em_to/" onmouseover="window.status='http://www.amazon.de/exec/obidos/wishlist/2NWHL46WMUMWR/ref=wl_em_to/';return true;" onmouseout="window.status='';return true;">amazon wish list</a> :)

On any errors or if you improved the code please contact me so that I can change it here.

Now you can either <a href="http://www.magenson.de/data/dbselect.txt" title="http://www.magenson.de/data/dbselect.txt" onmouseover="window.status='http://www.magenson.de/data/dbselect.txt';return true;" onmouseout="window.status='';return true;">download the source</a> or copy and paste it from here:

<!--adsense-->

<blockquote><code>'Author: 	Frédéric Wenzel (fwenzel at gmx dot net)
'Macro is licensed under the GNU GPL:
'http://www.gnu.org/licenses/gpl.txt

'Data access macro for OpenOffice.org / StarOffice.
'-- version 0.1 --
'Searches a specific data source for a row matching the given primary key number
'and then returns the value of the given column (field).

'Known issues:
'- providing the password here is quite unsafe. Think of alternatives.
'- error handling could be more verbose.
'- SQL select statement is quite MySQL specific. Needs to be rewritten to meet other DBMSes.

function dbSelect(table As String, idNumber As String, fieldName As String, Optional idField As String) as String
Dim oDatabase as Object
Dim oConnection as Object
Dim oStatement as Object
Dim oResultSet as Object

'****<strong> Set up things here ****</strong>
Const dataSourceName as String	= "datasource"	'OpenOffice data source to connect to
Const dbUser as String			= "oouser"		'username for data source
'CAUTION: Use an unprivileged user here as providing a privileged password will be a severe security risk!
Const dbPass as String			= "mypass"		'password for data source

Const idFieldDef as String		= "id"			'Default (unique) primary key field to be searched if none is given
'****<strong> End of Setup ****</strong>


'some error handling
On Error Goto ErrorHandler

'Set default primary key row:
If isMissing(idField) Then idField = idFieldDef

oDatabase = CreateUnoService("com.sun.star.sdb.DatabaseContext")
oConnection= oDatabase.GetByName(dataSourceName).GetConnection(dbUser, dbPass)

oStatement = oConnection.createStatement()
oResultSet = oStatement.executeQuery("SELECT `" &amp; idField &amp; "`, `" &amp; fieldName &amp; "` FROM `" &amp; table &amp; "` WHERE `" &amp; idField &amp; "` = '" &amp; idNumber &amp; "' LIMIT 1;")

If Not IsNull(oResultSet) Then
	oResultSet.next
	'now return selected value if resultset is not empty
	If Not oResultSet.isAfterLast() Then dbSelect = oResultSet.getString(2)
	Exit Function
End If

'otherwise: return empty string
dbSelect = ""

Exit Function

'*****
'minor error handling
ErrorHandler:
dbSelect = "## Error! ##"

End Function
</code></blockquote>


Have fun! :)
