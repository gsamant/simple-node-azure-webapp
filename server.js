var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello - World Azure Tech days !!\n');
}).listen(port);
console.log("running on port " + port);
