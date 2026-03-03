import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

// Cookie parser middleware
app.use(cookieParser());

// Ways to get cookies
app.get("/set-cookies", (req, res) => {
    res.cookie("theme", "dark", {maxAge: 900000, httpOnly: true});
    res.send("Cookies has been set");
});

app.get("/get-cookies", (req, res) => {
    const theme = req.cookies["theme"];
    res.send(`Cookie theme: ${theme}`);
});

app.listen(PORT, ()=>{
    console.log(`Server now running at http://localhost:${PORT}/`);
});