import { AuthService } from "../services/auth.service.js";
import { sendSuccess } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const register = asyncHandler(async(req, res) => {
    const user = await AuthService.register(req.body);
    sendSuccess(res, {id: user.id, email: user.email}, "Registered successfully", 200); 
});

