### Cookies

Cookies are small pieces of data sent from the server and stired on the client's machine. A cookie s a small texxt file that a website saves on your computerto remember your actions and preferences (such as login, language, foont-size and other dispay preferences) over a period of time

Express provides a way to set and access using `res.cookies()` and `req.cookies()` with the cookie-parser middleware.

We need the cookieparser middleware to parse cookies and creates an object of the cookies. Cookies doesn't really have security threat, but when people put login info in cookies it makes it easy to be hijacked. 

So what people do is Two Factor Authentication which puts a token in the client and in the server and saves it all in the database. Here stateless becomes stateful.


We install cookie parser

`npm install cookie-parser`

Make sure you put they hyphen `-` between cookie and parser. If you didn't put it, it means you are install two separate unrelated packages

Importing Cookie Parser

`import cookieParser() from "cookie-parser"`

Using the cookie-parser app level middleware
`app.use(cookieParser());`


There are ways to get cookies and set cookies

Get cookies is similar to the way we use get params, we make use of the cookie object. We use 
`req.cookies[key]`

Set cookies we use `res.cookie()`

`res.cookie(key, value, configurations)`

If we check the documentations. we have cookies properties, to set security, signed, domain, htppOnly which means it can only be acessed by the webserver and allows frontend to access data. Save site means a link will only work on a specific url.

Another way to set cookies is using the cookies tab in the request section in Postman

`Cookie_1=value; Path=/; Expires=Thu, 04 Mar 2027 22:31:48 GMT;`


