// Now we have a more complex server
import http from "http";
import url from "url";

const port = "2007";
const hostName = "127.0.0.1";
const server = http.createServer((req, res) => {

    // We want to handle request url
    // this helps to pass in request.url

    const parsedUrl = url.parse(req.url, true);
    
    switch(parsedUrl.pathname){
        case "/":  // if it is root (landing page)
            res.setHeader("Content-Type", "text/plain");
            res.end("Welcome to Samuel Website");  // send response
            break;
        case "/home":
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({message: "Hello, there!"}));
            break;
        case "/user":
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({userName: "Samuel", age: 45}));
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end(JSON.stringify({error: "404 Not Found"}));
        break;
    }

    console.log("Request URL:", req.url);
    console.log("Parsed URL:", parsedUrl);  // {Object}   /home?user=samuelola
    console.log("Parsed URL pathname:", parsedUrl.pathname) //home?user=samuelola
});

server.listen(port, ()=>{
    console.log(`Server running at http://${hostName}:${port}/`);
})

// Express helps us to handle routing: /home, /user and stuff

// HTTP Verbs are methods define the actions to be performed on the resource identified by URL
// We have GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS

// GET - receives data without editing any information
// POST - subits data to the server to create resource

// PUT - updates an existing a resource data
// PATCH - partially update information may be like just name,
// DELETE - basically delets

// HEAD - just like GET, but doesn't retrieve data only gets what it is in header like status code

// OPTION - it is used for COR - Cross Origin Resource Sharing, these may create issue with frontend
// It just browser enforcing security

