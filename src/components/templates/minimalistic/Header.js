import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/Header.css";

const HeaderMinimalistic = () => {
  return (
    <header className="minimalistic__header">
      <div className="container">
        <div className="minimalistic__header--content">
          <img
            className="minimalistic__header--logo"
            src="https://github.com/alejandromunozc/EventApp/blob/frontend/src/templates/minimalist/img/logo.png?raw=true"
            alt="EventAppDraft"
          />
          <nav className="minimalistic__header--nav">
            <ul>
              <li>
                <a className="minimalistic__nav--item" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="minimalistic__nav--item" href="#toKnow">
                  Things to know
                </a>
              </li>
              <li>
                <a className="minimalistic__nav--item" href="#people">
                  People to see
                </a>
              </li>
              <li>
                <a className="minimalistic__nav--item" href="#schedule">
                  Schedule
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimalistic;
