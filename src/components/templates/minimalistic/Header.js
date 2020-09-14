import React from "react";

import "../../../assets/styles/components/templates/minimalistTemplate/Header.css";

const Header = () => {
  return (
    <header class="minimalistic__header">
      <div class="container">
        <div class="minimalistic__header--content">
          <img
            class="minimalistic__header--logo"
            src="https://github.com/alejandromunozc/EventApp/blob/frontend/src/templates/minimalist/img/logo.png?raw=true"
            alt="EventAppDraft"
          />
          <nav class="minimalistic__header--nav">
            <ul>
              <li>
                <a class="minimalistic__nav--item" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="minimalistic__nav--item" href="#toKnow">
                  Things to know
                </a>
              </li>
              <li>
                <a class="minimalistic__nav--item" href="#people">
                  People to see
                </a>
              </li>
              <li>
                <a class="minimalistic__nav--item" href="#schedule">
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

export default Header;
