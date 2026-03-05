import express from "express";
import { body, validationResult } from "express-validator";
import jsonValidator from "./utils/jsonValidator.js";

const app = express();
const PORT = 6767;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Whatsup Express.js");
});

// Using the express validator middleware to validate body

// const jsonValidator = [
//     body("userId").isNumeric().escape(), 
//     body("message")
//         .isLength({min: 2})
//         .withMessage("Must be minimum of 2 characters")
// ];

// checks if userid is numeric

app.post("/json-data", jsonValidator,  (req, res)=>{

    const validationStatus = validationResult(req);
    console.log(validationStatus);

    console.log(validationResult)
    if (!validationStatus.isEmpty()) {
        res.json(validationStatus.errors)
    }


    const {userId, message} = req.body;
    
    res.json({
        status: "Sucess",
        userId: userId,
        message,
    });
});

app.listen(PORT, ()=>{
    console.log(`Server now running at localhost:${PORT}/`);
});


