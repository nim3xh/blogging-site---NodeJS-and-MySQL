const express = require('express');
const imagesController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/upload',checkAuthMiddleware.checkAuth,imageUploader.upload.single('image'),imagesController.upload);

module.exports = router;