// app.js

import express from "express";
import userRoute from "./routes/user.js"

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Welcome to Express.js server! This is a homepage.");

    // We can pass in the req
    console.log("Request", req.headers);
});

app.get("/about", (req, res) => {
    res.send("This is the about page, We ensure we provide the best web services").status(200);

});

app.get("/profile", (req, res) => {

    // Reading request headers

    // 'User-Agent header'
    const userAgent = req.get("User-Agent"); // This is the header sent by the browser
    console.log(userAgent);                 // Prints the the user agent i.e 

    
    // Sending response headers
    
    res.set("X-Custom-Header", "Hello World");  // Adds a customer header to the response 
    res.status(200).send("Headers handled");


    // Requesting for headers sent from postman

    const bestStudent = req.header('BestStudent');
    console.log("My best student is", bestStudent);

    // Getting all header - we don't need all header all the time
    const allHeaders = req.headers;
    console.log("all headers:", allHeaders);

    res.set("rate-limit", "10");


});


app.get("/contact", (req, res) => {
    res.status(200).json({message: "Contact us", email: "contact@example.com"});
});

app.use("/user", userRoute);

// Start the server
app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`)
});