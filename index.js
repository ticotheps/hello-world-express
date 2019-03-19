// Server? What is a server?
// Basically, a 'server' is the place in a computer that listens for 'traffic'. When it receives
// this 'traffic', it knows what to do with this 'traffic'.

const http = require('http'); // similar to an 'import' statement in React

const hostname = '127.0.0.1'; // this string of numbers indentifies your computer
const port = 3000; // this is the port that the server will be listening for 'traffic' on

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, from NodeJS');
});

server.listen(port, hostname, () => {
    console.log(`server listening on http://${hostname}:${port}`);
});

// Node.js is a runtime environment (a program that runs other programs), which is used to
// execute JS applications outside of the web browser.

// We will be using Node.js to write server code, specifically web services, that can
// communicate with clients using the JSON format for data exchange.

// The ADVANTAGES of Using Node.js for writing server side code are:
// -JavaScript on the server!
//      +Using the same programming language for both, the client and the server, minimizes
//       content switching and makes it easy to share code between client and server.
// -Single threaded!
//      +Removes the complexity involved in handling multiple threads.
// -Asynchronous!
//      +Can take full advantage of the processor it's running on.
//      +This matters because the node process will be running on a single CPU.
// -npm repository!
//      +Access the largest ecosystem of useful libraries (most of them free to use) in the
//       form of npm modules.

// The DISADVANTAGES of Using Node.js for writing server side code are:
// -JavaScript on the server...
//      +We lose the ability to use the right tool (or language) for the job.
// -Single threaded...
//      +Can't take advantage of servers with multiple cores/processors.
// -Asynchronous...
//      +It is harder for developers that have only worked with languages that default to
//       synchronous operations that block the execution thread.
// -npm repository...
//      +Too many packages that do the same thing makes it harder to choose one and, in some
//       cases, may introduce vulnerabilities into our code.

// -Request Handler: this function will handle all requests to the server.
//      +It takes the request from the client and produces the response.



