const Item = require('../Models/Item');
const { v4: uuidv4 } = require('uuid'); // Import uuid

// Function to save a new item
const saveItem = async (req, res) => {
  try {
    const { category, location, Found_Date, description } = req.body;
    
    // Generate uniqueId
    const uniqueId = uuidv4();

    // Check if req.files exists and save image paths
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.path);
    }

    const newItem = new Item({
      uniqueId,
      category,
      location,
      Found_Date,
      description,
      images, // Assign image paths here
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
};

// Function to get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

// Function to delete item
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findOneAndDelete({ _id : id });

    if (!item) {
      return res.status(404).json({
        error: "Item not found",
      });
    }
    return res.status(200).json({
      success: "Item deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

// Function to get item by ID
const getItemById = async (req, res) => {
  try {
    const { id } = req.params; // Corrected to destructure id from req.params
    const item = await Item.findOne({ _id: id }); // Use findOne with uniqueId

    if (!item) {
      return res.status(404).json({
        error: "Item not found",
      });
    }
    return res.status(200).json(item); // Return the found item
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  saveItem,
  getItems,
  deleteItem,
  getItemById,
};
