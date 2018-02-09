import React from "react";
import "./Header.css";

const Header = () => (
  <div className="nav-container">
    <div className="nav-item nav-item__home">Home</div>
    <div className="nav-item nav-item__about">About</div>
    <div className="nav-item nav-item__contact">Contact</div>
    <div className="nav-item nav-item__logout">Logout</div>
  </div>
);

export default Header;
