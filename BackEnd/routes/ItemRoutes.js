const express = require('express');
const router = express.Router();
const upload = require('../utills/multer'); // Adjust path based on your project structure
const { saveItem, getItems, deleteItem ,getItemById } = require('../controllers/ItemController');

// Route to save a new item
router.post('/post/save', upload.array('images', 10), saveItem); // Allow up to 10 images
// Route to get all items
router.get('/items', getItems);
//Route to delete Items
router.delete('/items/:id',deleteItem);
//Route to getItemByID
router.get('/items/:id',getItemById);

module.exports = router;
