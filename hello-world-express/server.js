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


// write our own custom middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get(
      'Origin'
    )}`
  );

  next();
}

// Global Middleware
function atGate(req, res, next) {
  console.log('At the gate, about to be eaten');

  next();
}


function auth(req, res, next) {
  if (req.url === '/mellon') {
    next();
  } else {
    res.send('You shall not pass!');
  }
}


server.use(logger);
server.use(atGate);

server.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe!');
  res.send('Welcome Traveler!');
})

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

// This is a fallback middleware that will display this message whenver someone
// enters in an endpoint that doesn't exist in our server.js file
// The order that you plug in your global middleware matters because everything
// runs in a top down direction.
server.use(function(req, res) {
  res.status(404).send(`Ain't nobody got time for dat!`);
});

server.listen(port, () => {
    console.log(`server listening on ${port}`);
});