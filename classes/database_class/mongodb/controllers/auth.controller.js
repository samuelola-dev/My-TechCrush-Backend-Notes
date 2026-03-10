import crypto from "node:crypto";
import { User } from "../models/user.model.js";
import { Role } from "../models/role.model.js";

export const register = async (req, res) => {
    const {userName, email, password} = req.body;

    // checking if a user exists before registering
    
    if (await User.findOne({email})) {
        res.status(404).json({sucess: false, message: "Email already exists"});
        return;
    }
        const verifyToken = crypto.randomBytes(32).toString('hex');

        const user = await User.create({
            userName, 
            email, 
            password, 
            verifyToken, 
            roles: 1
        });

        res.status(200).json({id: user._id, email, message: "User registered sucessfully"})
        console.log({userName, email, message: "User registered sucessfully"})
};


