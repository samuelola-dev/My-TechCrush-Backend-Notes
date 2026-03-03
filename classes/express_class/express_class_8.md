### Cookies

Cookies are small pieces of data sent from the server and stired on the client's machine. A cookie s a small texxt file that a website saves on your computerto remember your actions and preferences (such as login, language, foont-size and other dispay preferences) over a period of time

Express provides a way to set and access using `res.cookies()` and `req.cookies()` with the cookie-parser middleware.

We need the cookieparser middleware to parse cookies and creates an object of the cookies. Cookies doesn't really have security threat, but when people put login info in cookies it makes it easy to be hijacked. 

So what people do is Two Factor Authentication which puts a token in the client and in the server and saves it all in the database. Here stateless becomes stateful.


We install cookie parser

`npm install cookie parser`


There are ways to get cookies and set cookies

Get cookies is similar to the way we use get params, we make use of the cookie object. We use 
`req.cookies[key]`

Set cookies we use `res.cookie()`

`res.cookie(key, value, configurations)`
