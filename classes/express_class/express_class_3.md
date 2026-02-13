### Handling Headers in express.js 

We have header, body, cookies , queryparams and ohers

<b>Headers</b> in http  request provides metadata like information about the content, the datatype, the cookies from client, Browser, Device time

Note: there is headers in <i>request</i> and headers in <i>respone </i>. Just like the way front end has its own header and body

<b>HTTP Headers</b> are key valued pair sent along with the request or response

``res.get(field)`` helps us to get something from the header <br>
``res.set(key, value);`` sets a custom header with the response. It must always come before send

- The Query Param Tab in PostMan is where we handle querystring 

````
key: name, value: tobi
key: age, value: 50
````
- Query string
``?name=tobi&age=50``

The Pre-request Script tab is where we can run javascript

- Authorization is where we set the type of authorisation like JWT, OAuth, API key and the rest.

- Settings is where we can set settings for our requests

<b>Postman</b> is divided into the request (top) and the response tab (bottom)

- Postman - Header Tab
````
key: BestStudent    value: Samuel 
````

Requesting for headers sent from postman i.e frontend - req.header(key)

````
const bestStudent = req.header('BestStudent');
console.log(bestStudent)
````

All headers - req.headers
````
const headers = req.headers
console.log(headers)
````

If you notice the terminal, the key from the frontend are in white color, while the other ones are greeen i.e string




