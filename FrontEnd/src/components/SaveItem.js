import React, { useState } from 'react';
import { saveItem } from './API';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const SaveItemComponent = () => {
  const [location, setLocation] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSaveItem = async () => {
    const formData = new FormData();
    formData.append('location', location);
    formData.append('color', color);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await saveItem(formData);
      alert("Item saved successfully: " + response.success);
      // Optionally navigate to ItemShow page after saving item
      // history.push('/itemshow');
    } catch (error) {
      alert("Error saving item: " + error.error);
    }
  };

  return (
    <div>
      <h1>Save New Item</h1>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleSaveItem}>Save Item</button>

      {/* Navigation Links */}
      <div>
        <Link to="/itemshow">Item Show</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </div>
    </div>
  );
};

export default SaveItemComponent;
