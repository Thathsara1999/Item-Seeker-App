import React, { useEffect, useState } from 'react';
import { getAllItems } from './API';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CSS_Files/ItemsListComponent.css'; // Assuming you saved the CSS in this file

const ItemsListComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getAllItems();
        setItems(itemsData);
      } catch (error) {
        console.error(error.error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>All Items</h1>
      <nav>
        <ul>
          <li>
            <Link to="/ItemShow">Item Show</Link>
          </li>
          <li>
            <Link to="/SaveItem">Save Item</Link>
          </li>
          <li>
            <Link to="/add-item">Add Item</Link>
          </li>
          <li>
            <Link to="/delete-item">Delete Item</Link>
          </li>
          <li>
            <Link to="/update-item">Update Item</Link>
          </li>
        </ul>
      </nav>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Color</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.location}</td>
                <td>{item.color}</td>
                <td>{item.description}</td>
                <td>
                  {item.image ? (
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt="Item"
                      style={{ width: '100px', height: '100px' }}
                    />
                  ) : (
                    'No image available'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ItemsListComponent;
