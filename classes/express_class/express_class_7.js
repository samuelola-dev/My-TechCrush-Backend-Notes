import express from "express";

const app = express();
const PORT = 3000;

const database = {
    12345: {
        name: "Samuel",
        matric: "12345"
    },
    12346: {
        name: "Itunu",
        matric: "12346"
    }
}

//  GET /user/:id
// app.get("/users/:id", (req, res)=> {
//     const userId = req.params.id;
//     res.send(`User ID ${userId}`);
// });

// We don't need to do this

// app.get("/users/12345", (req, res)=> {
//     const userId = req.params.id;
//     res.send(`User Id ${userId}`);
// });

// Working with the database

app.get("/users/:id", (req, res)=> {
    const userId = req.params.id;
    // res.json(database[userId])

    // Trick by samuel to handle errors
    database[userId] ? res.json(database[userId]).status(200) : res.status(404).send("User does not exist");

});

app.listen(PORT, () => {
    console.log(`Server now running at http:/localhost:${PORT}`);
});