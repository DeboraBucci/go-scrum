import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/go-scrum-logo.webp";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={Logo} alt="Logo" />
        <ul className="header__list">
          <li className="header__list-item">
            <p>Welcome, User!</p>
          </li>
          <li className="header__list-item">
            <Link className="header__link" to="/login">
              Sign Out
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__link" to="/user">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
