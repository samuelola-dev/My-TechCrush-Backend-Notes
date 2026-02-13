// app.js

import express from "express";
import userRoute from "./routes/user.js"

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Welcome to Express.js server! This is a homepage.");
    console.log("Request", req);
});

app.get("/about", (req, res) => {
    res.send("This is the about page, We ensure we provide the best web services").status(200);
});

app.get("/contact", (req, res) => {
    res.status(200).json({message: "Contact us", email: "contact@example.com"});
});


app.use("/user", userRoute);


// Start the server
app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`)
});