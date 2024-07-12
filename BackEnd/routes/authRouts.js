const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcryptjs');
const Item = require('../Models/Item');
const User = require('../Models/UserModel');
const {registerUser,loginUser} =require('../controllers/UerController');


// Registration route
router.post('/register',registerUser);
// Login route
router.post('/login',loginUser);

module.exports = router;
