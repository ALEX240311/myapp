import React from "react";
import logo from './Assets/logo.png'
import './HeaderStyle.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Airline Logo"></img>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Flights</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;