import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (username && email && password) {
      console.log('Sign In successful');
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);

      navigate('/dashboard'); // Redirect to dashboard after sign-up
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleGoToLogin = () => {
    navigate('/login'); // Navigate directly to the login page
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src="logo" alt="user" />
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input">
          <img src="logo" alt="email" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src="logo" alt="password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="forgot_pass">
        Forgot password? <span>Click here</span>
      </div>
      <div className="sub_container">
        <button className="submit_1" onClick={handleGoToLogin}>
          Go to Login
        </button>
        <button className="submit" onClick={handleSignIn}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;
