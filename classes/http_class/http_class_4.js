import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const port = "2007";
const hostName = "127.0.0.1";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

console.log(__dirName);

const server = http.createServer((req, res) => {
    if (req.url === "/user") {
        const userData = {userName: "John Doe", email: "johndoe@example.com"};
        const filePath = path.join(__dirName, "public", "user.html");         // dirName/public/user.html

        fs.readFile(filePath, "utf-8", (err, html) => {
            if (err) {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/plain");
                res.end("Server Error");
                return;
            }

            let renderedHTML = html.replace("{{username}}", userData.userName);
            renderedHTML = renderedHTML.replace("{{email}}", userData.email);
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(renderedHTML);

        });

    else {
        
    }

    
});

server.listen(port, () => {
    console.log(`Server running at https://${hostName}:${port}/`);
});


