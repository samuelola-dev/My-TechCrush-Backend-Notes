import { AuthService } from "../services/auth.service.js";
import { sendSuccess } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const register = asyncHandler(async(req, res) => {
    const user = await AuthService.register(req.body);
    sendSuccess(res, 
        {id: user.id, email: user.email}, 
        "Registered successfully", 
        200
    ); 
});

export const login = asyncHandler(async(req, res) => {
    const loginProcess = await AuthService.login(req.body);
    sendSuccess(res, 
        {user: loginProcess.user, token: loginProcess.accessToken}, 
        "Logged in sucessfully", 
        201
    );
});

export const profiles = asyncHandler(async (req, res) => {
  sendSuccess(
    res,
    {user: req.user},
    "Logged in successfully",
    201,
  );
});
