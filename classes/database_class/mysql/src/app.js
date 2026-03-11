import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configuration } from "./config/env.js";
import { corsOptions } from "./config/cors.js";
import { sequelize } from "./config/db.js";


const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser)

// Server Status

app.get("/health", (req, res)=>{
    res.json({status: "OK", date: new Date()});
});

// iife for sequelize

(async ()=> {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true})
        console.log("Connection Sucessful")
    } catch (error) {
        console.error("Unable to start the application", error)
        process.exit(1);
    }
})();

app.listen(5000, ()=>{
    console.log("Sever now runnning at http://localhost:5000/")
});

