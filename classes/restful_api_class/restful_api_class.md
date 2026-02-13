# Restful API

RESTful API 
API - Application Programing Interface - a gateway to access a particular apllication expecially backend
RESTful API is the most commonly used API

Note: Research on this "JSON kills CPU"

<b>RESTful</b> API - Representational State Transfer is an architectural style for designing networked applications. It focuses on a stateless, client-server communication protocol typically using HTTP and communincates using JSON
Resources are identified by URL and manipulated using the following operations

- `GET`:  retrieve a resource
- `POST`: create a new resource
- `PUT/PATCH`: update an existing resource
- `DELETE`: remove a resource

Restful API follows some principles. When you see some API, you can easily identify them a RESTful APIs based on their structure, Some APIs are totally RESTFul, bit some they don't, sign a poor architecture or a poorr developer or they use RESTful with other API like Soap

<i>statelessness</i> means it is controversal

When we mean stateless, we mean that the sever doesn't tore client state between request. So server doesn'rt store anything like cookies

It means that any request contains information about everything the server needs to remember, who is who, what are we doing.

If someone needs to access a website all they need to send is their <b>token</b> As long as you have a signed token you have no problem. This is not entirely safe so it is controversial

We can have a scenerio where token is used and a user token is stolen in one way or the other in the client. So the server doesn't store token. Client state stands on its own, client state also stands on its own and do not align somewhere

People online say tha once you start store log out tokens you are gradually removing the statelessness and that is why is <i>controversal</i>

When something is stateful, it means it has session. PHP, Larvel stores sessions as cookies is avaiable to the server and the client. They are used to authenticate or know who the user is. They can store some expired tokens so it is no longer usuable to enter the server. 

<b>Resource Oriented</b>: they operate on resources like users, posts, products

<b>Uniform Interface</b>: there are structures of proper standards that we must follow.

<b>Layered System</b>: API is designed in layers, which allows separation of concerns like business logic, database and client layers, security layers.

<b>Cacheable</b>: That's information you know that don't change often like site settings, user profiles. Responses can be marked as cacheable and non-cachable. When you cache, the very first time get responses, cache it i.e save it somewhere in the server.

We can cache on the server and cache on client side. One common tool we use is <b>Redis</b> also in memory cases but it dies later. You may worry about cache during the beginning of the project, you may cache beacause of traffic and optimise performance. Since you know that such info will come back again so why not save it somewhere on your server

### RESTful API Design Criteria

- Use HTTP METHOD properly: use GET to retrive not delete data, POST to create a new data, PUT or PATCH to update an existing data, DELETE to remove data.

- Proper and Uniform resources Naming: Use nouns for resources like /users, /orders, not getUser, getProduct which are verbs. Just use your resources directly/

    ````
    GET/users       # list users
    GET/users/123   # gets specific users
    POST/users      # creates user
    PUT/user/123    # updates entire user
    ````

- Use Status Codes appropriately: <b>200</b> OK Request successful, <b>201 </b>Created, <b>404</b> Bad Request, <b>401 </b>Unauthorized, <b>404 </b>Not Found, <b>500</b> Interval.

- Provide pargination: For large database, include pagination e.g ``/user?page=1&limit=20`` jsut to show limit for 20 users, we can provie endpoints where users can search adnd filter.

- Versioning: create bersions of your api to prevent breaking changes e.g /api/v1/users

- Documentaion: Create API documents that people can read and understands (e.g Swagger or Postman collections). Proper documentation in your own words but follows standard principles

- Constitent Error Handling: handle success or failure


### Handling Headers in express.js check express_class_3.md


    

