const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('items', ItemSchema);
