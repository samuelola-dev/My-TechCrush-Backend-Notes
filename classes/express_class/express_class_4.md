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

Search query are objects that are to be destructured

### Start afresh

For better understanding and quick output 

<b><i>app.js</i></b>
````
.........
app.get("/search", (req, res) => {
    const searcQuery = req.query;
    res.send(searcQuery);
});
````

#### PostMan Search bar

Type this in the search bar 

<button>GET</button> ``http://localhost:3000/search?name=Esther&age=16``

Press ``Send``

Notice the output on the postman's tabs

#### PostMan Params Tab

<b><i>Params</i></b>

````
Key                     Value
-----                   -----
name                    Esther
age                     16
````

#### PostMan Body Tab at Response Section

<b><i>Body</i></b>
````
{
    name: "Esther",
    age: 16
}                    
````

So as you are tr



### Project Folder Structuring
Proper folder struture is crucial for software development
It encourages:

- Navigability and Readility
- Collaboration
- Maintenance and Debugging
- Minimal risk of data loss or misplacement