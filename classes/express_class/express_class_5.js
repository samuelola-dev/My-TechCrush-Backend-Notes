import express from "express";
import multer from "multer";
import ejs from "ejs";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// Middleware must come before the routes

// Storage configurations

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },

    // const destination = req.body.destination
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// This is calling the actual middleware
const upload = multer({
    storage: storage, 
    limits: {fileSize: 10 * 1024 * 1024}
});


app.get("/", (req, res) => {
    res.status(200);
    res.render("form");
});

// This applies the express url encoded middle way to all the route
// app.use(express.urlencoded({extended: true})); // built-in middleware


app.post("/submit-form", (req, res) => {
    console.log(req.body)
    const {name, email} = req.body;  // extracts form data
    res.send(`Form submitted by ${name}, Email: ${email}`);
});

// Middle to parse JSON data
// app.use(express.json());

app.post("/json-data", (req, res) => {
    const {userId, message} = req.body;

    res.json({
        status: "Sucess",
        userId: userId,
        message: message
    });

});

// Here we are using our middleware in the route
app.post("/upload", upload.single("file"), (req, res) => {
    res.send(`File Uploaded: ${req.file.filename}`);
});

app.listen(PORT, ()=>{
    console.log(`Server now running at http://localhost:${PORT}/`);
});
