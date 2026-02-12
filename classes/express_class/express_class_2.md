In order to learn better we have all we need written down in a documentation. For this cohorot, we are focusing on use of express API
If we are learning Nest.js, it also built on express also Fastisfy
The nowledge of Express is not wasted. It can be applied in frontend, gamedev and other fields

## When building an application for Express
`import express `

`import cors`

`import .env`

`import helment`

`import morgan`

`import compression`

`custom imports include(controller functions, utils, services config)`

For frontend we use `express, cors, .env`
and for implementation for backend and middleware we use ``helment, morgan, compression``

``morgan`` logs request and response,
``compression`` helps to compress payload
In payload, each response and request has a kilobyte or byte they have
Every request has its ow side `e.g 298B` it comes in commination

## After import we set in our configuration
We set `.env`, `cors functions`, `rate limiter`

We can copy someones code and build on, beacyse nobody is arresting you when you use others

## We also have to do middleware
We have `JSON middleware`, `Encoded middleware`, `Custom middlware`, `View engine like pug, ejs`

## Then routes
We have this and that `GET` ad stuff

## Listners
Listen may contain `seeders`, `mogration commands`, `job/queues`
Then we can monitorise our codebase

## Postman API
For this cohort we are working on `GET, POST, PUT, and DELETE`
Address bar we put the url `htp://localhost:2007`
We have the response and the request section, cookies section
We can share and collaborate with people on postman. So we don't have to use browser again

## Routing in Express.js - `express_class_2.js`

Now to make our end point

### How to route in express

`app.METHOD(PATH, CALLBACK)`

`PATH` is the path or route, while `CALLBACK` is the function to call
in call back we have up to four parameters `app.METHOD("/path", err, req, res, next);`
Other examples of API like Postman is Swagger
Note: do not use if statement for routing

## Template engine

## Modularisation - keep folder structure simplier
| -- controllers/
    | -- 

Only one server for your express application

In the router we can also have base routes

We have `app.js` has the entry point

We have routes with similar base routes - .user

``app.get("/user/friends", (req, res) => {
    res.send("Friends")
})``


``app.get("/user/profile", (req, res) => {
    res.send("Friends")
})``


In ``app.js``

``app.use("/users", usersRoute);``


So in `routes/user.js`

``router.get("/", (req, res) => {});``

``router.get("/friends", (req, res) => {});``

``router.get("/profile", (req, res) => {});``

### Templating
We need ejs when doing templates like email template and the ends
So we are bringing frontend into backend

``npm install ejs`

EJS helps to bring `html` into `js`


