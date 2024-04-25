const express = require('express'); // Import express
const postsController = require('../controllers/post.controller'); // Import postsController
const checkAuthMiddleware = require('../middleware/check-auth'); // Import checkAuthMiddleware

const router = express.Router(); // Create a router

router.post('/',checkAuthMiddleware.checkAuth,postsController.save); // Handle GET request at /posts
router.get('/:id',postsController.show); // Handle GET request at /posts/:id
router.get('/',postsController.index); // Handle GET request at /posts
router.patch('/:id',checkAuthMiddleware.checkAuth,postsController.update); // Handle PATCH request at /posts/:id
router.delete('/:id',checkAuthMiddleware.checkAuth,postsController.destroy); // Handle DELETE request at /posts/:id

module.exports = router; // Export the router