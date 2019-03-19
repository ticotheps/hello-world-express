// const http = require('http');
const express = require('express');

// const hostname = '127.0.0.1';
// const port = 3000;
const port = 5000;

const server = express();
server.use(express.json());

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

// CRUD Operations
// GET requests => READ data
server.get('/hobbits', (req, res) => { // this function is a request handler
    res.send('Welcome to Hobbiton');
});

// POST requests => CREATE data
server.post('/hobbits', (req, res) => {
    res.status(201).json({ url: '/hobbits', operation: 'POST' });
});

// PUT requests => UPDATE data
server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});

// DELETE requests => DESTROY/DELETE data
server.delete('/hobbits', (req, res) => {
    res.status(204);
});

server.listen(port, () => {
    console.log(`server listening on ${port}`);
});