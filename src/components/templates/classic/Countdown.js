import React from "react";

import "../../../assets/styles/components/templates/countdown.css";

const Countdown = () => {
  return (
    <section className="classic__countdown">
      <div className="countdown__title">
        <div className="countdown__title--left">¡Days to go the event!</div>
      </div>
      <div className="countdown__counter">
        <div className="countdown__counter--right">
          <div className="countdown__counter--days">
            <div className="days__text">Days</div>
            <div className="days__number">6</div>
          </div>
          <div className="countdown__counter--hours">
            <div className="hours__text">Hours</div>
            <div className="hours__number">1</div>
          </div>
          <div className="countdown__counter--minutes">
            <div className="minutes__text">Minutes</div>
            <div className="minutes__number">47</div>
          </div>
          <div className="countdown__counter--seconds">
            <div className="seconds__text">Seconds</div>
            <div className="seconds__number">20</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
