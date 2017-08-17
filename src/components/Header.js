import React from 'react';
import { NavLink } from 'react-router-dom';

  // activeClassName adds class to the link when it's activated

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{background: "tomato"}}>Home      </NavLink></li>
      <li><NavLink to="/about"  activeClassName="aboutActiveClass">About      </NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses  </NavLink></li>
    </ul>
  </header>
);

export default Header;
