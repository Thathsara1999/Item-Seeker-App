import React, { useState } from 'react';
import { registerUser } from './API';
import { useNavigate, Link } from 'react-router-dom';
import './CSS_Files/Signup.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const userData = {
        username,
        email,
        password,
      };
      await registerUser(userData);
      alert('Registration successful');
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className='reg-background'>
      <form onSubmit={handleSubmit} className='reg-form'>
        <h1 className='login-font'>Item Seeker</h1>
        <div className='login-padding'></div>
        <label className='login-label'>Name</label><br />
        <input
          type="text"
          className='reg-textbox'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />   <div className='login-padding'></div>
     
        <label className='login-label' style={{ marginBottom: "1px" }}>Email</label><br />
        <input
          type="email"
          className='reg-textbox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />   
        <div className='login-padding'></div>
        <label className='login-label' style={{ marginBottom: "1px" }}>Password</label><br />
        <input
          type="password"
          className='reg-textbox'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />   <div className='login-padding'></div>
     
        <label className='login-label' style={{ marginBottom: "1px" }}>Re-Enter Password</label><br />
        <input
          type="password"
          className='reg-textbox'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />   <div className='login-padding'></div>
        <div className='login-padding'></div>
        <button type='submit' className='reg-signup'>Sign up</button>
        <div className='login-padding'></div>
        
    
        
   
        <label className='login-font'>Do you have an account?</label>
        <Link to='/'><label className='reg-forgot'>Sign in</label></Link>
      </form>
    </div>
  );
};

export default RegisterPage;
