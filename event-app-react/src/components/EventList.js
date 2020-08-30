import React from "react";
import { Link } from "react-router-dom";

function EventList() {
  return (
    <section className="currentEvents">
      <div className="container">
        <div className="currentEvents__content">
          <div className="currentEvents__title">
            Events <span className="currentEvents__total">1</span>
          </div>
          <div className="currentEvents__list">
            <div className="item__event">
              <img
                src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-classic.png"
                alt="Classic"
              />
              <div className="item__title">Code Warriors</div>
              <div className="item__details">
                <div className="item__details--date">August 28th, 2020</div>
                <div className="item__details--hour">8:00 am</div>
                <div className="item__details--location">Bogota, Colombia</div>
              </div>
              <Link className="button" to="/classic">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventList;
