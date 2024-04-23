const express =  require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser

const app = express(); // Create an express app

const postsRoute = require('./routes/posts'); // Import postsRoute

app.use(bodyParser.json()); // Use body-parser for JSON data

app.use('/posts',postsRoute); // Use postsRoute for /posts

module.exports = app; // Export the app