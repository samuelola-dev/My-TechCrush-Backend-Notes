import jwt from "jsonwebtoken";
import { configuration } from "../config/env";
// import { token } from "morgan";

export const signedToken = (payload) => 
    jwt.sign(payload, configuration.JWT_SECRET, 
    {expiresIn: configuration.JWT_EXPIRES_IN}
);

export const verifyToken = (payload) => jwt.verify(token, configuration.JWT_SECRET);
