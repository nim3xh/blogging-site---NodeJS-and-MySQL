const express = require('express'); // Import express
const commentsController = require('../controllers/comment.controller'); // Import commentsController

const router = express.Router(); // Create a router

router.post('/',commentsController.save); // Handle POST request at /comments
router.get('/:id',commentsController.show); // Handle GET request at /comments/:id
router.get('/',commentsController.index); // Handle GET request at /comments
router.patch('/:id',commentsController.update); // Handle PATCH request at /comments/:id
router.delete('/:id',commentsController.destroy); // Handle DELETE request at /comments/:id

module.exports = router; // Export the router