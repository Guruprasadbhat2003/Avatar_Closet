
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');

    if (username === savedUsername && email === savedEmail) {
      console.log('Login successful');
      navigate('/dashboard');
    } else {
      alert('Invalid login credentials. Please sign in first.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <div className="login-inputs">
        <div className="login-input">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
