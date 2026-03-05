import {body} from "express-validator";

const jsonValidator = [
    body("userId").isNumeric().escape(), 
    body("message")
    .isLength({min: 2})
    .withMessage("Must be minimum of 2 characters")
];

export default jsonValidator