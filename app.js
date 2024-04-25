const express =  require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser

const postsRoute = require('./routes/posts'); // Import postsRoute
const commentsRoute = require('./routes/comments');
const usersRoute = require('./routes/users');
const imagesRoute = require('./routes/images');

const app = express(); // Create an express app


app.use(bodyParser.json()); // Use body-parser for JSON data
app.use('/uploads',express.static('uploads')); // Use express.static for /uploads

app.use('/posts',postsRoute); // Use postsRoute for /posts
app.use('/comments',commentsRoute); // Use commentsRoute for /comments
app.use('/users',usersRoute); // Use usersRoute for /users
app.use('/images',imagesRoute); // Use imagesRoute for /images

module.exports = app; // Export the app