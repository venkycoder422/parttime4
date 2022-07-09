
//Modules ---Third party modules

const http = require('http');

function handleRequest(res,req){
console.log("HELLO Wolrd");

res.writeHead(400);
res.end("Bad Request");

}

const server = http.createServer(handleRequest);

server.listen(3001);