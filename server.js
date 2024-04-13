const http = require('http'); // Import http module
const app = require('./app'); // Import app
const port = 3000; // Port number

const server = http.createServer(app); // Create a server

server.listen(port); // Listen to the server on port 3000  