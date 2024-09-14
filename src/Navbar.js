import React from 'react';
import './header.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Logo</a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#">Home</a></li>
          <li className="navbar-item"><a href="#">About</a></li>
          <li className="navbar-item dropdown">
            <a href="#" className="dropdown-link">Services</a>
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="#">Service 1</a></li>
              <li className="dropdown-item"><a href="#">Service 2</a></li>
              <li className="dropdown-item"><a href="#">Service 3</a></li>
            </ul>
          </li>
          <li className="navbar-item"><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
