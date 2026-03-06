import {body} from "express-validator";

const jsonValidator = [
    body("userId").isNumeric().escape().withMessage("Enter a valid userId"), 
    body("message")
    .isLength({min: 2})
    .withMessage("Must be minimum of 2 characters"), 
    body("age").custom((value) => {
        if (value < 18) {
            throw new Error("Age must be at least 18")
        } else {
            return true;
        }
    })
];

export default jsonValidator;