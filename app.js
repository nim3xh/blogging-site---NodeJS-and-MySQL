const express =  require('express'); // Import express

const app = express(); // Create an express app

const postsRoute = require('./routes/posts'); // Import postsRoute
app.use('/posts',postsRoute); // Use postsRoute for /posts

module.exports = app; // Export the app