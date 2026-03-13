import express from "express";
import { login, profiles, register } from "../controllers/auth.controller.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, profiles)
router.get("/admin", authorizeAdmin, (req, res) => {
    res.json({sucess: "true", message: "admin"});
});



export default router;
