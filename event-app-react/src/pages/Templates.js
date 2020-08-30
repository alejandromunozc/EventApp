import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./styles/templates.css";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

function Templates() {
  return (
    <Fragment>
      <HeaderLogo />
      <section className="chooseTemplate">
        <div className="container">
          <div className="chooseTemplate__content">
            <div className="chooseTemplate__header">
              <h3 className="chooseTemplate__title">Now, choose a template!</h3>
            </div>
            <div className="chooseTemplate__options">
              <div className="chooseTemplate__options--item">
                <div className="item__title">Classic</div>
                <div className="item__showcase">
                  <img
                    src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-classic.png"
                    alt="Classic"
                  />
                  <Link className="button" to="/myevents">
                    I like it!
                  </Link>
                </div>
              </div>
              <div className="chooseTemplate__options--item">
                <div className="item__title">Minimalist</div>
                <div className="item__showcase">
                  <img
                    src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-minimal.png"
                    alt="Minimalist"
                  />
                  <Link className="button" to="/myevents">
                    I like it!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Templates;
