import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configuration } from "./config/env.js";
import { corsOptions } from "./config/cors.js";
import { sequelize } from "./config/db.js";
import Authenticate from "./routes/auth.route.js";
import { globalErrorHandler } from "./middlewares/errorHandler.js";


const app = express();
const PORT = configuration.PORT;

// app level middlewares
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

// Server Status

app.get("/health", (req, res)=>{
    res.json({status: "OK", date: new Date()});
});

// iife for sequelize

app.use("/auth", Authenticate);

app.use(globalErrorHandler);

(async ()=> {
    try {
        await sequelize.authenticate();

        await sequelize.sync({alter: true})

        console.log("Connection Sucessful has been established sucessfully")
    } catch (error) {
        console.error("Unable to start the application", error)
        process.exit(1);
    }
})();

app.listen(PORT, ()=>{
    console.log(`Server now runnning at http://localhost:${PORT}/`)
});


