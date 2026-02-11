// app.js

// npm install express
import express from "express";

// intialise express as a variable
const app = express();
const PORT = 2007;

// Item route

app.get("/", (req, res) => {
    res.send("Welcome to Express.js server! This is a homepage.");
});

// /about
app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/contact", (req, res) => {
    res.status(200).json({message: "Contact us", email: "contact@example.com"});
    
    // in express there is chaining of functions
    // here we don't need to use json.stringify

});


// Start the server

// we have app.get(), app.post(), app.put() we don't have app.path
// app.all takes in everything: get post put ...

app.listen(PORT, ()=> {
    console.log(`Server running at https://localhost:${PORT}`)
});

// For express hostname is always localhost 127.0.0.1





