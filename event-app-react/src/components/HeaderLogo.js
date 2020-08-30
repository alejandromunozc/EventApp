import React from "react";
import { Link } from "react-router-dom";

import "../Globals.css";
import "../components/styles/header.css";

import logoWhite from "../img/logo-white2x.png";

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
