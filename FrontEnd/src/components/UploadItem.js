import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UploadItem = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('location', location);
    formData.append('color', color);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:5000/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Item uploaded:', response.data);

      // Clear the form
      setImage(null);
      setLocation('');
      setColor('');
      setDescription('');
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Upload Found Item</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleImageChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadItem;
