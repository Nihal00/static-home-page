import React from "react";
import '../App.css';
import logo1 from '../images/brand_logo.png';

const Nav = () => {
  return (
    <>
      <nav className="container">
        <div className="log">
          <img src={logo1} alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>login</button>
      </nav>
    </>
  );
};

export default Nav;
