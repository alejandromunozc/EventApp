import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/ToKnow.css";

const ToKnow = () => {
  return (
    <section id="toKnow" className="minimalistic__toKnow">
      <div className="container">
        <div className="minimalistic__toKnow--info">
          <div className="minimalistic__toKnow--alert">
            <div className="minimalistic__toKnow--alert-tag">Stay woke</div>
            <h3>Venue: Things to know</h3>
            <hr />
            <p>
              RSVP to make sure your name’s on the list. IDs will be checked at
              the door. Get there before the swag runs out. Parking is limited.
              But Austin has Uber! And we have an open bar :)
            </p>
          </div>
          <div className="minimalistic__toKnow--cover">
            <img
              src="https://media.giphy.com/media/g9582DNuQppxC/source.gif"
              alt=""
            />
            <p>Open bar y'all</p>
          </div>
          <div className="minimalistic__toKnow--location">
            <div className="minimalistic__toKnow--location-city">Bogotá</div>
            <div className="minimalistic__toKnow--location-street">
              Calle #72 Int 9 - 55
            </div>
            <span className="minimalistic__toKnow--location-country">
              Bogotá
            </span>
            <span className="minimalistic__toKnow--location-zipcode">
              81000
            </span>
            <div className="minimalistic__toKnow--location-cta">
              <a href="/">Rsvp Now</a>
            </div>
          </div>
        </div>
        <div className="minimalistic__toKnow--counter">
          <div className="minimalistic__toKnow--counter-days">
            <div className="minimalistic__toKnow--days-number">6</div>
            <div className="minimalistic__toKnow--days-text">Days</div>
          </div>
          <div className="minimalistic__toKnow--counter-separator">
            <hr />
          </div>
          <div className="minimalistic__toKnow--counter-hours">
            <div className="minimalistic__toKnow--hours-number">1</div>
            <div className="minimalistic__toKnow--hours-text">Hours</div>
          </div>
          <div className="minimalistic__toKnow--counter-title">
            <h3>Countdown</h3>
          </div>
          <div className="minimalistic__toKnow--counter-minutes">
            <div className="minimalistic__toKnow--minutes-number">47</div>
            <div className="minimalistic__toKnow--minutes-text">Minutes</div>
          </div>
          <div className="minimalistic__toKnow--counter-separator">
            <hr />
          </div>
          <div className="minimalistic__toKnow--counter-seconds">
            <div className="minimalistic__toKnow--seconds-number">20</div>
            <div className="minimalistic__toKnow--seconds-text">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToKnow;
