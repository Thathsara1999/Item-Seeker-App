import React, { useEffect, useState } from 'react';
import { getAllItems } from './API';

const RemoveItem = () => {
  const [items, setItems] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getAllItems();
        setItems(itemsData);
      } catch (error) {
        console.error(error); // Correct error logging
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Remove Item</h2>
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
                    style={{ width: '50px', height: '50px' }}
                  />
                ) : (
                  'No image Available'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveItem;
