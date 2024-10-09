import React from 'react'
 import './Navbar.css';
 import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    <div className="navbar-logo">
        <img src="" alt="Logo" className="logo"/>
        <span className="app-name">VR</span>
    </div>
    <div className="navbar-content">
        <input type="text" className="search-bar" placeholder="Search..."/>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/dashboard" className="nav-link">Admin Dashboard</Link>
    </div>
</nav>
</>
  )
}

export default Navbar