const express = require('express');
const router = express.Router();
const upload = require('../utills/multer'); // Adjust path based on your project structure
const { saveItem, getItems } = require('../controllers/ItemController');

// Route to save a new item
router.post('/post/save', upload.single('image'), saveItem);

// Route to get all items
router.get('/items', getItems);

module.exports = router;
