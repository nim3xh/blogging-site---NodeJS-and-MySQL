const express =  require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser

const postsRoute = require('./routes/posts'); // Import postsRoute
const commentsRoute = require('./routes/comments');

const app = express(); // Create an express app


app.use(bodyParser.json()); // Use body-parser for JSON data

app.use('/posts',postsRoute); // Use postsRoute for /posts
app.use('/comments',commentsRoute); // Use commentsRoute for /comments

module.exports = app; // Export the app