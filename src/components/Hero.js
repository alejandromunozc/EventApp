import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Hero.css";

import iconLogo from "../assets/static/icon.png";

function Hero() {
  return (
    // React fragments
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Launch your conference in a few steps!
            </h1>
            <p className="hero__subtitle">Your audiencie is waiting…</p>
            <p>
              <Link className="hero__btn button" to="/login">
                Create your event!
              </Link>
            </p>
          </div>
        </div>
      </section>
      <aside className="cta">
        <div className="container">
          <div className="cta__content">
            <div className="cta__title">
              <img
                className="cta__title--icon"
                src={iconLogo}
                alt="EventApp - It's a new era for events creations!"
              />
              <h2 className="cta__title--header">
                It's a new era for events creations!
              </h2>
            </div>
            <p>
              <Link className="cta__btn button" to="/login">
                Get the best templates!
              </Link>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Hero;
