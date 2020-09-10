import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Header.css";

import logoWhite from "../assets/static/logo-white2x.png";

function HeaderLogo() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img className="header__logo" src={logoWhite} alt="EventApp" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogo;
