// Query Strings

// Query Strings and search parameters are the same thing

import express from "express";

const app = express();

app.get("/search", (req, res) => {
    const name = req.query.name
    const age = req.query.age
    res.send(`You searched for the name ${name}, and the age ${age}`);

    // We can even destructure query to make code easy
});

app.listen(3000, ()=>{
    console.log("Server is running at http://localhost:3000");
});