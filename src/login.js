import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Send the login details to the backend
    fetch('http://localhost:5000/login', { // Use your backend server's URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login successful:', data);
        // Handle successful login, e.g., navigate to another page or store token
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <div className="login-container">
      <img src='' alt='Login' className='login-image'/>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
