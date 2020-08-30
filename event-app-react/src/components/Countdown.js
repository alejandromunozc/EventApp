import React from "react";

import "./styles/countdown.css";

class Countdown extends React.Component {
  render() {
    return (
      <section className="countdown">
        <div className="countdown__content">
          <h2 className="countdown__title">¡Days to go the event!</h2>
        </div>
        <div className="countdown__grid">
          <div className="countdown__grid--title">
            <h2>Days</h2>
            <h2>Hours</h2>
            <h2>Minutes</h2>
            <h2>Seconds</h2>
          </div>
          <div className="countdown__grid--time">
            <h1>01</h1>
            <h1>23</h1>
            <h1>45</h1>
            <h1>55</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;
