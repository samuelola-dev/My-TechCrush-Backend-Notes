// app.js

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// fs is file system you can add files, read and write a file and other operations
// path is concerned about the path extraction of extensions, basename, limiters, joing paths together
// url helps to extract hostname, querystrings

const port = "2007";
const hostName = "127.0.0.1";

// import.meta.url gets the actual file path of app.js
const __fileName = fileURLToPath(import.meta.url);      // "/backend/name/quiz"

// system can't undestand "/backend/name/quiz" so fileURLToPath helps with that
const __dirName = path.dirname(__fileName);

// "/" forward slashes are for url paths
// "\" backward slashes are for file paths

// path.dirName gets the directory name

const server = http.createServer((req, res) => {
    if (req.url === "/user") {
        const userData = {userName: "John Doe", email: "johndoe@example.com"};

        // .join joins url together
        const filePath = path.join(__dirName, "public", "user.html");         // dirName/public/user.html
        
        // Read the html file

        fs.readFile(filePath, "utf-8", (err, html) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Server Error");
                return;
            }

            // now html is a simpls string so we perfome string.replace();

            let renderedHTML = html.replace("{{username}}", userData.userName);
            renderedHTML = renderedHTML.replace("{{email}}", userData.email);
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(renderedHTML);

        });
    
    }   else {
            res.statusCode = 404;
            res.end("Page not found");       
    }

});

server.listen(port, () => {
    console.log(`Server running at https://${hostName}:${port}/`);
});

// It is possible to build a full stack application with just node.js
