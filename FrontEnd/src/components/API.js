import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Ensure the API URL is correct
/*
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
*/
// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// Function to login a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
export const saveItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/post/save`, itemData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
//Function to delete

export const deleteItem = async (itemId)=>{
  try{
    const response = await axios.delete(`${API_URL}/items/${itemId}`);
    return response.data;
  }catch(error){
    throw error.response.data;
  }
};
export const getItemById =async (id) =>{
  try{
    const response =await axios.get(`${API_URL}/items/${id}`);
    return response.data;
  }catch(error){
    throw error.response.data;
  }
};
