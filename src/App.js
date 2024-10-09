
import React from 'react';
import './App.css';
import Navbar from "./component/Navbar/Navbar"
import SignIn from './component/Signin/SignIn';
import Dashboard from './component/Dashboard/DashBoard';
import About from './component/About/About';
import Login from './component/Login/Login';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <About/>
    </Router>
  );
}

export default App;





// import Navbar_1 from './component/Navbar.css'

