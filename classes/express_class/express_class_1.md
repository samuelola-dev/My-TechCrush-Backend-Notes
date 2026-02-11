## Express is a light weight flexible (non-optioninated) Node.js web application framework that allows developers to create web application and API quickly #

non-opinion: There is no specific folder structure 
Compared to Nest.js which is strict about folder structure

## Middleware
A middleware is similar to a bouncer, they stand between the request and response, like validation, authorisation, authentication. 

## Routing
Express allows to doing routing via HTTP Methods

## Error Handling
Express helps in handling of errors

## Template Handling
Ratheer than import html to our file, we can pass render processes from the codebase to the html

## Static
We can serve static files like images, Css and JS using built in 

EJS stands form Embedded JavaScript

nodemon is used for development dependencies

``
npm i -D nodemon
``

Like it help when developing we don't need to always start our server again to implement changes.
Nodemon allows automatic changes to our server

In our package.json file, at script, dev

``nodemon app.js ``

``npm run dev``

In Express, there is method chaining

``res.send(200).json({message: "Hello World"});``      

check https://expressjs.com for Express 5x reference

we have ``app.get(), app.post(), app.put(), app.delete() ...`` we don't have ``app.patch``

``app.all()`` takes in everything: get, post, put, delete





