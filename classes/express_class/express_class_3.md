### Handling Headers in express.js 

We have header, body, cookies , queryparams and ohers

<b>Headers</b> in http  request provides metadata like information about the content, the datatype, the cookies from client, Browser, Device time

Note: there is headers in <i>request</i> and headers in <i>respone </i>. Just like the way front end has its own header and body

<b>HTTP Headers</b> are key valued pair sent along with the request or response

``res.get(field)`` helps us to get something from the header <br>

```
const userAgent = res.get("User-Agent");
console.log(userAgent);
````

``res.set(key, value);`` sets a custom header with the response. It must always come before ``res.send()`` or else it won't work.

```` 
res.set("X-Custom-Header", "Hello Express");
res.set("X-Movie-Name", "WALL-E")
res.status(200).send("Headrers Handled");
````

Make sure that always add `X-` to the custom header name



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

#### Conclusion

If we want to set and send an authorisation header to request authorisation

``res.set("Authorisation", "jwt")``

If we want to get the authorisation
``console.log(req.header("Authorisation"))``

Do not give headers the same custom name. Headers are in the format of `-` between each word

If you notice, there some `default headers` always sent even if you didn't send or request for them. I think postman is the one doing it

````
Content-Type
Content-Length
Connection
Keep-Alive
````

So there are so many header i.e default ones like ``User-Agent``, ``Authorisation``, ``Accept``, ``Content-Type``,
``Content-Length``
``Connection``
``Keep-Alive`` and custom ones (i.e <b>the ones you set</b>) while using X-Custom-Name syntax like ``Movie-Name`` ``Device-Platform`` 

Also it is possible to set a custom name using a default header's value

````
const userAgent = req.header("User-Agent");
res.set("User-Browser", userAgent);
````

### Finally
Methods of getting header via requests

- Using `req.get("Header-Name")`

    ````
    const userAgent = res.get("User-Agent");
    console.log(userAgent);
    ````
- Using `req.header("Header-Name")`

    ````
    const userAgent = req.header("User-Agent");
    console.log(userAgent);
    ````

Method of setting Header

- Using `res.set("X-Custom-Name", "headerValue")`

    ````
    res.set("Movie-Name", "WALL-E");
    ````

    where ``"X-Custom-Name"`` is the key
- Using Postman Headers Tab
    ````
    Key                         Value
    -----                       -----                                          
    Movie-Name                  WALL-E
    ````

- We can update an headers's value using the ``res.set(key, value)``

    ```
    res.set("User-Agent", "Plastic-Baby-Phone")
    ```



