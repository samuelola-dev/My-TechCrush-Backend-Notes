We have done query strings headers. Now to talk about Body. As a developer, you need to know how to have a perfect folder structure/ So we want to do body and different type of body 

We have Forms and also file uploads, JSON too. We will also deal in middleware

#### Forms
There are different ways to accept forms
- We can have frontend to send the content directly to you probably like variables
- We can also send it has JSON (extracting then converting to JSON)
- Also forms that contain file uploads <b>multipart forms</b> using Multer middleware

Note: They are two types of forms in frontend
- Ordinary Form (URL encoded)
- Multipart Form (which contains file upload)

````
    <form enctype="multipart/form-data"></form>
    <form enctype="application/x-www-form-urlencoded"></form>
    <form enctype="text/plain"></form>
````

#### Postman Tab at Requestion

```
Body
----

none    form-data   x-www-form-urlencoded   raw     binary  GraphQL
```



Postman also has its own form settings.

To send form data wihout file we use `x-www-form-urlencoded` it only accepts text ( using key and value). While `form-data` accepts text and you can select the file you want to upload as the value.

Frontend can send `raw` datas in form of texT, javascript, json, HTML, XML(which is used with SOAP). We can set raw in the Body Tab of Postman


#### Using URL Encoded

First let's talk about middleware. A middlwware is like a bouncer at a part or immigration officer at airport. It responsible for allowing you to continue or not.

It can validate, autorise, log error, handle file uploads. It stands between `request` and `response`. Position of middleware differs it can come before the route or inside the route. It can come after some other middlewares.

We have:
- In-built middleware like express.urlencoded()
- 3rd party middleware like cors, morgan, helmet, rate-limiting
- Custom middleware (by you) can be before the route or inside the route

````
app.use(express.urlencoded({extended: true}));
````

`app.use(express.urlencoded({extended: true}));` applies it to all the route. It means that any route sending url encoded data will be converted to JSON i.e body parsing, so that we can use it for our app

Every middleware will be dumped inside the request body. The middleware will pass any info and dump it inside the request body

To use middlewares we use `app.use()`
```
......

app.post("/submit-form", (req, res) => {
    const {name, email} = req.body; 
    res.send(`Form submitted by ${name}, Email: ${email}`);
});
......
```

This a route takes in a form: name and email
In Postman we use the <b>POST</b> option

```
Body
---
Key         Value           Details
---         -----           ------
name        Samuel                  
email       samuelola396@gmail.com
```

Then press `Send`

If we `console.log(req);` we can see 

```
{
    .....
    body: [name: 'Samuel', email: 'samuelola396@gmail.com'];
    .....
}
```

#### Using Express JSON built-in middleware 

`app.use(express.json())`

So if frontend is sending JSON, `express.json()` middleware will parse it so that we can destructure it as object, and use it in backend.

```
app.post("/json-data", (req, res) => {
    const {userId, message} = req.body;

    res.json({
        status: "Sucess",
        userId: userId,
        message: message
    });

});
```

<b><i>PostMan</i></b>
We select Raw and Pick JSON and type in our JSON payload

````
Body
----

(O)raw [>JSON]
----

{
    "userId": "S1a2m3",
    "userName": "Samuel Ola", 
    "nessage": "Welcome to fine art"
}


````

Once we use `app.use(express.json())` we don't need to use `app.use(express.urlencoded({extended: true}))` again


#### File Uploads with Multer

Multer is a middleware that handles multipart form data that contains files. It allows us to handle file uploads, specify storage optiond and limit file size.

`npm install multer`

`import multer from "multer"`

Then we set the configuration like naming of file, setting of size or limits
Then we write the middleware to handle the files upload. If the file meets the requirements, it will parse then send it to the `req.body`. After that we process the files

Note this: Middleware we want to apply on a `app` level must come before the routes. If we put the route before the middleware, the route will not be effected by the middleware, because node reads line by line.

- Configuration comes after import

```
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-", file.originalname);
    }
});
```

- We handle uploads

```
const upload = multer({
    storage: storage, 
    limits: {fileSize: 10 * 1024 * 1024}
});
```

- The route for uploading the file that uses the multer middleware

```
app.post("/upload", upload.single("file"), (req, res) => {
    res.send(`File Uploaded: ${req.file.filename}`);
});
```

Some people use Google Clouds, Amazons for file storage but as a beginner why not use Multer something that will manage your files within the same folder structure

`cb` is the Callback

When we call `multer()` in upload variable it is also calling `multer.diskStorage` with it. File size is in bytes. `10MB` is 10 * 1024 * 1024


`app.post("/upload", upload.single("file"), (req, res) => {})` is where the middleware (`upload.single("file")`) sits between request and response in the route.

#### Levels of Middleware based on the positions
- App Level Middleware (before the route)

```
const upload = multer({
    storage: storage, 
    limits: {fileSize: 10 * 1024 * 1024}
});
```

- Route level middleware (inside the route)

`app.post("/upload", upload.single("file"), (req, res) => {})`

#### Postman 
On the `Body` tab in the request sections 
We select `form-data`, set key as `file` and value the `file to upload` upload a file. Then get an error

`File directory doesn't exist`

Since the upload folder doesn't exist, we need to create one or use our fs `filesystem` module

If you check the upload variable, the multer middleware is acting as a file validator so it won't upload if it passes the limit of 10MB. This is the basic characteristic of middleware

```
const upload = multer({
    storage: storage, 
    limits: {fileSize: 10 * 1024 * 1024}
});
```

`upload.single("file")` indicate it only accepts a single file of any time upload.
So the key set in postman is `file`

`upload.single("document")` allows upload of single document
So the key set in postman is `document`

So we can have multiple uploads like
`upload.single("profile_pic")`, `upload.single("birth_certificate")`

If we want to take multiple files at ones for a single key - `upload.array()`
`upload.array("document")`







