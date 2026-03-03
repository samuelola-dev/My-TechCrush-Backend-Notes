## EJS - Embedded JavaScript

``npm install ejs``

It allows use to introduce html into backend

we are going to use ``app.set()`` to set the view engine - which is ejs

``app.set("view engine", "ejs");``

By default every ejs file is in our views folder

``/views/index.ejs``

This indicate that the ejs is in he view folder
``app.set("view engine", "ejs");``

But if we want to specify the folder

``import path from "node:path"``

``app.set("views", path.join(process.cwd, "public"));``

We then render the ejs

`` app.get("/author", (req, res) => {``
   `` res.render("index", {username: "Samuel Ola", email: "samuelola396@gmail.com"});``
``});``


### Appication example

<b><i>app.js</i></b>

````
.....
app.set("view engine", "ejs)

app.get("/", (res, req) => {
   const data = {
      title: "My First EJS Page",
      user: "Samuel Ola"
      item: ["Wash Plates", Fetch Water, "Clean Garage"]
   }

   res.render("index", data);
.....
})
````

where the `data` is the data we give the `index.js` to work on

<b><i>views/index.ejs</i></b>

````
.....
<body>
    <h1>Hello, <%= user %>!</h1>
    <p>Today's task list:</p>
    <ul>
        <% item.forEach(task => { %>
            <li><%= task %></li>
        <% });  %>
    </ul>
</body>
````

- `<% %>` Scriplet:  For logic (if, statement, loops) no output to the page
- `<%= %>` Raw Output: Escapes HTML (safe). Use this for printing strings or numbers or variables 
- `<%- %>` Raw Output: Does not escape HTML. Use this for rendering of actual HTML tags
- `<%# %>` Comment: Notes for you, doesn't show up on yoour browser
- `<%- include('path') %>` Include: Pulls in other EJS files like a header or footer 