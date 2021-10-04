import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div>
      <NavLink to="/home" activeClassName="selected" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/service" activeClassName="selected" className="nav-item">
        Services
      </NavLink>
      <NavLink to="/about" activeClassName="selected" className="nav-item">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="selected" className="nav-item">
        Contact
      </NavLink>
    </div>
  );
};

export default NavMenu;
