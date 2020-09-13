import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Templates.css";

import HeaderLogo from "../components/HeaderLogo";

const Templates = (props) => {
  console.log(props);
  return (
    <>
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
                  <Link
                    to="/myevents"
                    className="button createEvent__form--button"
                    name="classic"
                  >
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
                  <button
                    className="createEvent__form--button button"
                    name="minimalist"
                  >
                    I like it!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
