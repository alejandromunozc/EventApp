import React from "react";
import { Link } from "react-router-dom";

import "../Globals.css";
import "../components/styles/header.css";

import logoWhite from "../img/logo-white2x.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img className="header__logo" src={logoWhite} alt="EventApp" />
          </Link>
          <nav className="header__nav">
            <ul>
              <li className="header__nav--item">
                <Link className="highlight" to="/login">
                  Create your event
                </Link>
              </li>
              <li className="header__nav--item">
                <Link to="/login">Log in</Link>
              </li>
              <li className="header__nav--item">
                <Link className="" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
