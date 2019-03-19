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
    console.log(req.query);
    // query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
    const hobbits = [
      {
        id: 1,
        name: 'Samwise Gamgee',
      },
      {
        id: 3,
        name: 'Bilbo Baggins',
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
let hobbits = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      age: 111,
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      age: 33,
    },
];
let nextId = 3;
  
// and modify the post endpoint like so:
server.post('/hobbits', (req, res) => {
    const hobbit = req.body;
    console.log(req.body);
    hobbit.id = nextId++;
  
    hobbits.push(hobbit);
  
    res.status(201).json(hobbits);
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

// PUT requests => UPDATE data
server.put('/hobbits/:id', (req, res) => {
    const hobbit = hobbits.find(h => h.id == req.params.id);
  
    if (!hobbit) {
      res.status(404).json({ message: 'Hobbit does not exist' });
    } else {
      // modify the existing hobbit
      Object.assign(hobbit, req.body);
  
      res.status(200).json(hobbit);
    }
  });

server.listen(port, () => {
    console.log(`server listening on ${port}`);
});