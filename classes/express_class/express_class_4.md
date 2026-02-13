## Query String

Query String is also known as search query
Query string is usually done with the ``GET`` http method

````

import express from "express";

const app = express();

app.get("/search", (req, res) => {
    const name = req.query.name
    const age = req.query.age
    res.send(`You searched for the name ${name}, and the age ${age}`);
});

app.listen(3000, ()=>{
    console.log("Server is running at http://localhost:3000");
});

````


### Project Folder Structuring
Proper folder struture is crucial for software development
It encourages:

- Navigability and Readility
- Collaboration
- Maintenance and Debugging
- Minimal risk of data loss or misplacement