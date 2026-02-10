import http from "node:http";



const port = "2007";    // Use 4 digits for port
const hostName = "127.0.0.1";   // local host

// Create an HTTP sever

const server = http.createServer((req, res) => {

    console.log("Request body:", req);
    
    // Set response headers
    // With res we can set any frontend

    res.statusCode = 404;

    // Set header helps to set the format of the format of the response like text, pictures, JSON file
    res.setHeader("Content-Type", "text/html");

    // res.setHeader()

    // Request end sets the response after the server is done.
    res.end("Hello, World! :-) \n");

});


// If we want to use createServer() we can destructure it as a namrd import
// import { createServer } from "node:http";

// We can also take (req, res)=>{} from the higher order function

// const requestFunction = (req, res)=>{};
// http.createServer(requestFFunction)

// We can request a lot things like headers, objects and a lot of other things

// We need to listen 

server.listen(port, ()=> {
    console.log(`Server running at http://${hostName}:${port}/`);
});

// Listen on port 2007

// res.end is the final message from the server


