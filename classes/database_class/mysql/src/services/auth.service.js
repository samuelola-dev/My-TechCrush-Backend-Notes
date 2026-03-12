import crypto from "node:crypto";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

export class AuthService {
    static async register(data) {
        if (await User.findOne({where: {email: data.email}}))
            throw ApiError.badRequest("Email already exists", 400);

            // After checking if email exist is false

            const verifyToken = crypto.randomBytes(12).toString('hex');

            // if we want we can use uuid

            const role = data.role || 'user';
            
            // user registration
            const user = User.create({...data, verifyToken})
            return user
    }
    static async login(data) {

    }
}