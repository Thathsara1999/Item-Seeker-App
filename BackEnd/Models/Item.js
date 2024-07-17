const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Found_Date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of strings to store multiple image paths
    required: false,
  },
});

module.exports = mongoose.model('items', ItemSchema);
