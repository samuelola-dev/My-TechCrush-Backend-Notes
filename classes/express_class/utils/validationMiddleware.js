import {validationResult} from "express-validator"

const validationMiddleware = (req, res, next) => {
    const validationStatus = validationResult(req);
    !validationStatus.isEmpty() && res.json({success: "false", error: validationStatus.array()});
    next();
}

export default validationMiddleware;
