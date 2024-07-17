import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from './API';
import './CSS_Files/ItemDetails.css';
import { Link } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null); // Initialize state with null
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image index

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemData = await getItemById(id);
        setItem(itemData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]); // Fetch the item when the ID changes

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className='reg-background'>
      <form className='reg-form'>
        <div>
          <h1>Item Details</h1>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={handlePrevImage} className='Previous'>Previous</button>
            <img
              src={`http://localhost:8000/${item.images[currentImageIndex]}`}
              alt={`Found item ${currentImageIndex + 1}`}
              style={{ width: '150px', height: '150px', marginRight: '20px' }}
            /> <button onClick={handleNextImage} className='Next' >Next</button>
            <div>
              
             
            </div>
          </div>
        </div>
        <div className='details'>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Location:</strong> {item.location}</p>
          <p><strong>Found Date:</strong> {item.Found_Date}</p>
          <p><strong>Description:</strong> {item.description}</p>
          {/* Display description with line breaks */}
     {/*}     <pre style={{ whiteSpace: 'pre-wrap' }}>{item.description}</pre>
          {/* Alternatively, display description with paragraph */}
          {/* <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p> */}
         
        </div>
        <Link to="/ItemShow" className='BUTTON'><button>Back</button></Link>
      </form>
    </div>
  );
};

export default ItemDetails;
