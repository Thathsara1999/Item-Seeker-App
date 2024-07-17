import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CSS_Files/Slidebar.css';
export const Sidebar = () => {

  const navigate = useNavigate();
  const username=localStorage.getItem('username')
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
    Swal.fire({
      position: "top-end",
      icon: "success",   
      text: "Logout Successfully",
      timer: 1500
    });
    navigate('/');
  };


  return (
  <div className="menu">
    
      <div className="menu--list">
        <a href='/ItemShow'  className="item">
          All Items
        </a>
        <a href='/saveItem' className="item">
          Add Item
        </a>

        <a href='/removeItem' className="item">   
          Remove Item
        </a>
       
        <a onClick={handleLogout} className="item">
          Logout [{username}]
        </a>
      </div>
</div>
 ); 
};
