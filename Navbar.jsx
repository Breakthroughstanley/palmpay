// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="">Personal</a>
        </li>
        <li>
          <a href="">Business</a>
        </li>
        <li>
          <a href="">Company</a>
        </li>
        <li>
          <a href="">Developers</a>
        </li>
        <li>
          <a href="">pricing</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
