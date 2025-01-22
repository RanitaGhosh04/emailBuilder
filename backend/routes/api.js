const express = require('express');
const multer = require('multer');
const path = require('path');
const emailController = require('../controllers/emailController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, 'image-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/getEmailLayout', emailController.getEmailLayout);
router.post('/uploadImage', upload.single('image'), emailController.uploadImage);
router.post('/uploadEmailConfig', emailController.uploadEmailConfig);
router.post('/renderAndDownloadTemplate', emailController.renderAndDownloadTemplate);

module.exports = router;