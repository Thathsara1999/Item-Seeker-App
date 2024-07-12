const Item = require('../Models/Item');

// Function to save a new item
const saveItem = async (req, res) => {
  try {
    const { location, color, description } = req.body;
    
    // Check if req.file exists and save image path
    let image = null;
    if (req.file) {
      image = req.file.path;
    }

    const newItem = new Item({
      location,
      color,
      description,
      image, // Assign image path here
      // Add other details if necessary
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

module.exports = {
  saveItem,
  getItems,
};
