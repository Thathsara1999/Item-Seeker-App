import React, { useState } from 'react';
import { saveItem } from './API';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { Sidebar } from './UserSlidebar';
//import { v4 as uuidv4 } from 'uuid'; // Import uuid
import './CSS_Files/save-Item.css';

const SaveItemComponent = () => {
  // const uniqueId = uuidv4(); // Generate unique ID using uuid

  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [Found_Date, setFoundDate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleSaveItem = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    // formData.append('uniqueId', uniqueId);
    formData.append('category', category);
    formData.append('location', location);
    formData.append('Found_Date', Found_Date);
    formData.append('description', description);
    images.forEach(image => {
      formData.append('images', image);
    });

    try {
      const response = await saveItem(formData);
      alert("Item saved successfully: " + response.success);
    } catch (error) {
      alert("Error saving item: " + error.message);
    }
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div className='save-back-ground'>
      <form onSubmit={handleSaveItem} className=''>
        <div>
          <Sidebar />
        </div>
        <div className='save-padding'></div>
        <div className='save-form'>
          <h1>Add Item</h1>
          <div className='save-padding'></div>
          <label className="save-label">Category</label><br />
          <input
            type="text"
            placeholder="Category"
            className='save-textbox'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          /><br/><br/>
          <label className="save-label">Location</label><br />
          <input
            type="text"
            placeholder="Location"
            className='save-textbox'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          /><br/><br/>
          <label className="save-label">Found_Date</label><br />
          <input
            type="text"
            placeholder="Found Date"
            className='save-textbox'
            value={Found_Date}
            onChange={(e) => setFoundDate(e.target.value)}
            required
          /><br/><br/>
          <label className="save-label">Description</label><br />
          <textarea
            type="text"
            placeholder="Description"
            className='save-textarea'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /><br/>
          <input
            type="file"
            className='save-text'
            multiple
            onChange={handleImageChange}
            required
          /><br/><br/>
          <button type="submit" className='save-button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SaveItemComponent;
