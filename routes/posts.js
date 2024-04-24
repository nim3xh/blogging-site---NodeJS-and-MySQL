const express = require('express'); // Import express
const postsController = require('../controllers/post.controller'); // Import postsController

const router = express.Router(); // Create a router

router.post('/',postsController.save); // Handle GET request at /posts
router.get('/:id',postsController.show); // Handle GET request at /posts/:id
router.get('/',postsController.index); // Handle GET request at /posts

module.exports = router; // Export the router