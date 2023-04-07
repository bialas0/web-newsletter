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
    if (req.method === 'POST' && req.url === '/submit-form') {
        var body_1 = '';
        req.on('data', function (chunk) {
            body_1 += chunk;
        });
        req.on('end', function () {
            var formData = new URLSearchParams(body_1);
            var formDataObj = {
                name: formData.get('name'),
                surname: formData.get('surname'),
                email: formData.get('email')
            };
            var filePath = path.join(__dirname, 'user_data.json');
            fs.appendFile(filePath, '\n' + JSON.stringify(formDataObj) + '\n', function (err) {
                if (err) {
                    res.writeHead(500);
                    res.end('Error with submission or writing...');
                }
                else {
                    res.writeHead(200);
                    // res.end('Form submitted\nData written');
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    var filePath_1 = path.join(__dirname, 'public', 'form_success.html');
                    fs.readFile(filePath_1, function (err, data) {
                        if (err) {
                            res.writeHead(404);
                            res.end('404 Not Found...');
                        }
                        else {
                            res.writeHead(200);
                            res.end(data);
                        }
                    });
                }
            });
        });
    }
    else {
        var filePath = path.join(__dirname, 'public', url);
        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end('404 Not Found...');
            }
            else {
                res.writeHead(200);
                res.end(data);
            }
        });
    }
});
server.listen(port, function () {
    console.log("Server is running on port ".concat(port, "."));
});
