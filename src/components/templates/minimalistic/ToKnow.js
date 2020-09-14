import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/ToKnow.css";

const ToKnow = () => {
  return (
    <section id="toKnow" className="toKnow">
      <div className="container">
        <div className="toKnow__info">
          <div className="toKnow__alert">
            <div className="toKnow__alert--tag">Stay woke</div>
            <h3>Venue: Things to know</h3>
            <hr />
            <p>
              RSVP to make sure your name’s on the list. IDs will be checked at
              the door. Get there before the swag runs out. Parking is limited.
              But Austin has Uber! And we have an open bar :)
            </p>
          </div>
          <div className="toKnow__cover">
            <img
              src="https://media.giphy.com/media/g9582DNuQppxC/source.gif"
              alt=""
            />
            <p>Open bar y'all</p>
          </div>
          <div className="toKnow__location">
            <div className="location__city">Bogotá</div>
            <div className="location__street">Calle #72 Int 9 - 55</div>
            <span className="location__country">Bogotá</span>
            <span className="location__zipcode">81000</span>
            <div className="location--cta">
              <a href="/">Rsvp Now</a>
            </div>
          </div>
        </div>
        <div className="toKnow__counter">
          <div className="toKnow__counter--days">
            <div className="days__number">6</div>
            <div className="days__text">Days</div>
          </div>
          <div className="toKnow__counter--separator">
            <hr />
          </div>
          <div className="toKnow__counter--hours">
            <div className="hours__number">1</div>
            <div className="hours__text">Hours</div>
          </div>
          <div className="toKnow__counter--title">
            <h3>Countdown</h3>
          </div>
          <div className="toKnow__counter--minutes">
            <div className="minutes__number">47</div>
            <div className="minutes__text">Minutes</div>
          </div>
          <div className="toKnow__counter--separator">
            <hr />
          </div>
          <div className="toKnow__counter--seconds">
            <div className="seconds__number">20</div>
            <div className="seconds__text">Seconds</div>
          </div>
        </div>
        <div className="toKnow__who">
          <h3 className="toKnow__who--title">Who's who?</h3>
          <hr />
          <p className="toKnow__who--description">
            For the past five years, we have scoured the U.S. to curate a
            best-in-className roster of speakers representing the hottest
            sectors, industries and disciplines.
          </p>
          <h2 className="toKnow__who--highlight">
            The program for this year's LifeSwap event is our best yet, if we do
            say so ourselves.
          </h2>
          <p className="toKnow__who--description">
            For three incredible days, you’ll have a front-row seat to
            unscripted fireside chats, hands-on workshops, interactive
            presentations, and engaging keynotes from fearless marketers who are
            pushing boundaries and setting new standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToKnow;
