import express from "express";

// intialise express router

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "USERS",
        description: "This is all about the user"
    });
});

router.get("/friends", (req, res) => {
    res.json({
        friends_1: "Yusuf",
        friends_2: "Hephizibah",
        friends_3: "Temitayo"
    });
});

router.get("/profile", (req, res) => {
    res.json({
        name: "Samuel Ola",
        job: "Backend Developoer"
    });
});

export default router;

