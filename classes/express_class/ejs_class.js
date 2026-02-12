// app.js

import express from "express";
import path from "node:path";
import userRoute from "./routes/user.js";
import ejs from "ejs";

const app = express();
const PORT = 3000;

// We set our view engine as ejs
app.set("view engine", "ejs");

// If we want to set the path to the ejs folder we import path and use
// We want to use the "public" folder instead

// app.set("views", path.join(process.cwd, "public"));

app.get("/", (req, res) => {
    res.send("Welcome to my EJS site");
});

app.use("/user", userRoute);

app.get("/author", (req, res) => {
    res.render("index", {username: "Samuel Ola", email: "samuelola396@gmail.com"});
});

// index.ejs is the EJS file

app.listen(PORT, ()=>{
    console.log(`Server now running at http://localhost:${PORT}`);
});
