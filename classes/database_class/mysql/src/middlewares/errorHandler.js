import { ApiError } from "../utils/ApiError.js";

export const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) 
        return res.status(err.statusCode).json({sucess: false, mesage: err.message, error: err.errors});

    if (err.name === "SequelizeValidationError") {
        return res
        .status(err.statusCode)
        .json({sucess: false, mesage: "Duplicate entry", error: err.errors});
    }
    console.log(err);
    res.status(500).json({sucess: false, message: "Internal Server error"})
}

