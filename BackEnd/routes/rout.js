const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcryptjs');
const Item = require('../Models/Item');
const User = require('../Models/UserModel');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to save a new item
router.post('/post/save', upload.single('image'), async (req, res) => {
  try {
    const { location, color, description } = req.body;
    const newItem = new Item({
      location,
      color,
      description,
      image: req.file ? req.file.path : null,
    });
    await newItem.save();
    return res.status(200).json({
      success: "Item saved successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Route to get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Registration route
router.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
