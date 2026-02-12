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
