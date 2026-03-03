### Building custom middleware in express

Note:  we don't always have to build our middleware, there are middlewares already available that will make our work faster.

#### Custom Middleware Levels
- App level custom middleware - that applies to everywhere in the app. We use `app.use(middleware)` for this.

- Route level custom middleware - that applies within a certain route.
We use `app.METHOD("/route", middleware);`

### Creating Custom Middlewares
When it comes to middlewares, we have 4 parameters: `req`, `res`, `next`, `error`

For now we are just using `req`, `res` and `next`

```
app.use((req, res, next)=>{
    console.log(`Request Method: ${req.method}, Requested URL: ${req.url}`)
    next();
});

```

Or we save the middleware to a variable
```
const middleWare = (req, res, next)=>{
    console.log(`Request Method: ${req.method}, Requested URL: ${req.url}`)
    next();
};

app.use(middleWare);
```

Whenever `next()` is used we say that after running the middleware it should move to the next middleware. 

If we did not add `next()` in our middleware, the page will just be try to request or loading and it will do nothing 

In our route we don't necessary use `next()` even though it is part of the parameters

#### An Authorisation Middleware

```
const checkAuth = (req, res, next) => {
    if (req.headers["authorization"]) {
        next();
    } else {
        res.status(401).send("Unauthenticated");
    }
};

const checkAdmin = (req, res, next) => {
    if (req.headers["role"]) {
        next();  // Proceed if authorised
    } else {
        res.status(401).send("Unauthorised");
    }
};

app.get("/protected", checkAuth, checkAdmin, (req, res) => {
    res.send("You have access to this protected area");
});
```  


`checkAuth` and `checkAdmin` are the middlewares. 

`app.use(middleWare)` will work throught the app for all the route so anytime we go through any route, it will `console.log("Requested Method and Requested URL")`. It is a setting a global functions that runs anytime a user goes through any route

So if we were to `checkAuth` middleware for any route we use `app.use(checkAuth)`


