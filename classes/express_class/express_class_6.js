import express from "express";

const app = express();
const PORT = 3000;

// Custom Middleware

app.use((req, res, next)=>{
    console.log(`Request Method: ${req.method}, Requested URL: ${req.url}`)
    next();
});

// Or Using this

// const middleWare = (req, res, next)=>{
//     console.log(`Request Method: ${req.method}, Requested URL: ${req.url}`)
//     next();
// };

// app.use(middleWare);

const checkAuth = (req, res, next) => {
    if (req.headers["authorization"]) {
        next();
    } else {
        res.status(401).send("Unauthenticated");
    }
};

const checkAdmin = (req, res, next) => {
    if (req.headers["role"]) {
        next();  // Proceed if autorised
    } else {
        res.status(401).send("Unauthorised");
    }
};

app.get("/protected", checkAuth, checkAdmin, (req, res) => {
    res.send("You have access to this protected area");
});


app.listen(PORT, ()=>{
    console.log(`Server now running at http://localhost:${PORT}/`);
});
