import React from 'react'
 import './Navbar.css';
 import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav class="navbar">
    <div class="navbar-logo">
        <img src="" alt="Logo" class="logo"/>
        <span class="app-name">VR</span>
    </div>
    <div class="navbar-content">
        <input type="text" class="search-bar" placeholder="Search..."/>
        {/* <a href="#login" class="nav-link">Login</a> */}
        <a href="#signin" class="nav-link">Sign In</a>
        <a href="#admin-dashboard" class="nav-link">Admin Dashboard</a>
    </div>
</nav>
</>
  )
}

export default Navbar