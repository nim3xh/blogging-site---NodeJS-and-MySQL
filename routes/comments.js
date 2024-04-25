const express = require('express'); // Import express
const commentsController = require('../controllers/comment.controller'); // Import commentsController

const router = express.Router(); // Create a router

router.post('/',commentsController.save); // Handle POST request at /comments

module.exports = router; // Export the router