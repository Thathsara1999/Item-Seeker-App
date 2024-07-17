import React, { useEffect, useState } from 'react';
import { getAllItems } from './API';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CSS_Files/ItemsListComponent.css'; // Assuming you saved the CSS in this file
import { Sidebar } from './UserSlidebar';

const ItemsListComponent = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getAllItems();
        setItems(itemsData);
        setFilteredItems(itemsData); // Initialize filtered items with all items
      } catch (error) {
        console.error(error.error);
      }
    };

    fetchItems();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterItems(event.target.value);
  };

  // Function to filter items based on search term
  const filterItems = (term) => {
    const filtered = items.filter((item) =>
      (item.category && item.category.toLowerCase().includes(term.toLowerCase())) ||
      (item.location && item.location.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredItems(filtered);
  };
  

  return (
    <div className='show-item'>
    <label className='name'>ItemSeeker</label>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='items'>
        <h1>All Items</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {filteredItems.length === 0 ? (
          <p>No items found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Location</th>
                <th>Found Date</th>
               {/*} <th>Description</th>*/}
               {/*} <th>Image</th>*/}
                <th>Show More</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item._id}>
                  <td>{item.category}</td>
                  <td>{item.location}</td>
                  <td>{item.Found_Date}</td>
                 {/*} <td>{item.description}</td>*/}
                  {/*<td>
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
                    <Link to={`/items/${item._id}`}>
                      <button>Show More</button>
                    </Link>
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

export default ItemsListComponent;
