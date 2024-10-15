import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <Link className="navbar-items" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-items" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="navbar-items" to="">
              Watchlist
            </Link>
          </li>
          <li>
            <Link className="navbar-items register" to="/register">
              Sign In
            </Link>
            <Link className="navbar-items register" to="/login">
              Login
            </Link>
          </li>
          <li>
           <DropdownButton title='Settings' >
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item ><Link to="/addmovie">Add Movie</Link></Dropdown.Item>
            <Dropdown.Item as="button">yy</Dropdown.Item>
            <Dropdown.Item as="button">uu</Dropdown.Item>
           </DropdownButton>
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Header;
