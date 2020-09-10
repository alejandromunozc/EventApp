import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/SignUp.css";

import logoApp from "../assets/static/logo.png";

import HeaderLogo from "../components/HeaderLogo";

const Signup = () => {
  return (
    <>
      <HeaderLogo />
      <section className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__header">
              <h3 className="welcome__title">Welcome to</h3>
              <img
                className="welcome__logo"
                src={logoApp}
                alt="logo event app"
              />
            </div>
            <div className="welcome__options">
              <Link className="welcome__options--item" to="/signup/admin">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/admin-settings-male.png"
                  alt="admin img"
                />
                <p>
                  Are you the <b>Event Owner</b>?
                </p>
              </Link>
              <Link className="welcome__options--item" to="/signup/organizer">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/lady-with-a-canlendar.png"
                  alt="organizer img"
                />
                <p>
                  Are your <strong>part of the organization</strong> of the
                  event?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
