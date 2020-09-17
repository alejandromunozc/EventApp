import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Footer.css";

import teamLogo from "../assets/static/team_logo_white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <img className="footer__logo" src={teamLogo} alt="Code Warriors" />
          <div className="footer__description">
            <span>
              Made with
              <Link to="/reg-users">
                {" "}
                <span role="img" aria-label="green-heart">
                  💚
                </span>{" "}
              </Link>
              from Platzi Master | 2020
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
