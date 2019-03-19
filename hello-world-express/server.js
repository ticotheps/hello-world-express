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
server.get('/hobbits', (req, res) => {
    // query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
    const hobbits = [
      {
        id: 1,
        name: 'Samwise Gamgee',
      },
      {
        id: 2,
        name: 'Frodo Baggins',
      },
    ];
  
    // apply the sorting
    const response = hobbits.sort(
      (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );
  
    res.status(200).json(response);
  });

// POST requests => CREATE data
server.post('/hobbits', (req, res) => {
    res.status(201).json({ url: '/hobbits', operation: 'POST' });
});

// PUT requests => UPDATE data
server.put('/hobbits', (req, res) => {
    res.status(200).json({ 
        url: '/hobbits', 
        operation: 'PUT' 
    });
});

// DELETE requests => DESTROY/DELETE data
server.delete('/hobbits/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    res.status(200).json({ 
        url: `/hobbits/${id}`, 
        operation: `DELETE for hobbit with id ${id}` 
    });
});

server.listen(port, () => {
    console.log(`server listening on ${port}`);
});