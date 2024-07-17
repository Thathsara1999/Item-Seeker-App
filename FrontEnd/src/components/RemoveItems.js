import React, { useEffect, useState } from 'react';
import { getAllItems, deleteItem } from '../API'; // Import deleteItem
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
//import '../CSS_Files/RemoveItem.css'; // Assuming you saved the CSS in this file
import { Sidebar } from './AdminSidebar';
import '../CSS_Files/ItemsListComponent.css'; 
const RemoveItem = () => {
  const [items, setItems] = useState([]);
  const [searchTerm , setSearchTerm ] = useState('');

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


   //Function to handle search input change
   const handleSearchChange = (event)=>{
    setSearchTerm(event.target.value);
    
   }
  // Function to handle deleting an item
  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId);
      // Update the state to remove the deleted item
      setItems(items.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className='show-item'>
      <div className='sidebar'>
        <Sidebar/>
      </div>

        <div className='search-container'>
          <input
            type='text'
            placeholder='Serach by Name'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

      <div className='items'>
        <h1>All Items</h1>
        {items.length === 0 ? (
          <p>No items found</p>
        ) : (
          <table>
            <thead>
              <tr>
               {/*} <th>Unique ID</th>*/}
                <th>Category</th>
                <th>Location</th>
                <th>Found Date</th>
                {/*<th>Description</th>*/}
               
                <th>Actions</th> {/* Add a new column for actions */}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                {/*}  <td>{item.uniqueId}</td>*/}
                  <td>{item.category}</td>
                  <td>{item.location}</td>
                  <td>{item.Found_Date}</td>
                  {/*<td>{item.description}</td>*/}
                 {/*} <td>
                    {item.images && item.images.length > 0 ? (
                      item.images.map((image, index) => (
                        <img
                          key={index}
                          src={`http://localhost:8000/${image}`}
                          alt={`Found item ${index + 1}`}
                          style={{ width: '50px', height: '50px' }}
                        />
                      ))
                    ) : (
                      <p>No image available</p>
                    )}
                  </td>*/}
                  <td>
                    <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RemoveItem;
