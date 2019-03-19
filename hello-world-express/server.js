// const http = require('http');
const express = require('express');

// const hostname = '127.0.0.1';
// const port = 3000;
const port = 5000;

const server = express();

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

// CRUD Operations
server.get('/hobbits', (req, res) => { // this function is a request handler
    res.send('Welcome to Hobbiton');
});





server.listen(port, () => {
    console.log(`server listening on ${port}`);
});