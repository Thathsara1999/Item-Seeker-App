import React, { useState } from 'react';
import { loginUser } from './API'; // Import the loginUser function from the API file
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CSS_Files/Login.css';

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
      

      console.log('Attempting login with:', userData);
      const data = await loginUser(userData); // Use the loginUser function to handle login
     // const foundUser = data.find(user => user.email === email && user.password === password);

      ///if(foundUser){
        console.log('Login successful, received data:', data);
        alert('Login successful');
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/ItemShow'); // Use navigate to go to the item show page after successful login

    //  }
     
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-background">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-font">Item Seeker</h1>
        <div className='login-sub'>
          <label className="login-label">Email</label><br />
          <input
            type="email"
            className="login-textbox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@gmail.com"
            required
          /><br />
          <div className="login-padding"></div>
          <label className="login-label" style={{ marginBottom: "1px" }}>Password</label><br />
          <input
            type="password"
            className="login-textbox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          /> 
          <div className='login-padding'></div>
          <a href="#" className="login-font login-forgot">Forgot Password?</a><br />
          <div className="login-padding"></div>
          <button type="submit" className="login-signin">Sign in</button>
          <div className="login-padding"></div>
          <label className="login-font" style={{ marginLeft: '10%' }}>Don’t have an account yet?</label>
          <Link to="/register" className="login-forgot"> Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
