import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const header = (props) => {
  let links = (
    <div className="main-header__nav-items">
      <ul>
        <li className="main-header__nav-item">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="main-header__nav-item">
          <NavLink to="/product/add">Add Product</NavLink>
        </li>
        <li className="main-header__nav-item">
          <NavLink to="/about" className="about">
            About
          </NavLink>
        </li>
      </ul>
      <button onClick={props.onLogout} className="logout">
        Logout
      </button>
    </div>
  );

  if (!props.authenticated) {
    links = (
      <ul className="main-header__nav-items">
        <li className="main-header__nav-item">
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li className="main-header__nav-item">
          <NavLink to="/about" className="about">
            About
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <header className="main-header">
      <nav className="main-header__nav">{links}</nav>
    </header>
  );
};

export default header;
