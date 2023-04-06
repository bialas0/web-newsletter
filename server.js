"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var path = require("path");
var port = 3000;
var server = http.createServer(function (req, res) {
    var url = req.url || '/index.html';
    url = url === '/' ? '/index.html' : url;
    if (url.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html');
    }
    if (url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    }
    var filePath = path.join(__dirname, 'public', url);
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        }
        else {
            res.writeHead(200);
            res.end(data);
        }
    });
});
server.listen(port, function () {
    console.log("Server is running on port ".concat(port, "."));
});
