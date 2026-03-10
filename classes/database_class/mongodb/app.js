import express from "express";
import connectToDB from "./config/db.js";
import {register} from "./controllers/auth.controller.js";

const app = express();

app.use(express.json());

// First connect to database
connectToDB()

app.post("/register", register);

app.listen(5000, ()=>{
   console.log("Server now running at http://localhost:5000"); 
});
