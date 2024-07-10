import React, { useState } from 'react';
import { loginUser } from './API'; // Import the loginUser function from the API file
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };
      const data = await loginUser(userData); // Use the loginUser function to handle login
      alert('Login successful');
      navigate('/ItemShow'); // Use navigate to go to login page after successful registration
      // Save user data or token to local storage or context
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
