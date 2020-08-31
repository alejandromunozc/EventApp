import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const nameEvent = cookies.get("name_event");
const country = cookies.get("country");
const city = cookies.get("city");
const date = cookies.get("date");
const startHour = cookies.get("start_hour");

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
              <div className="item__title">{nameEvent}</div>
              <div className="item__details">
                <div className="item__details--date">{date}</div>
                <div className="item__details--hour">{startHour}</div>
                <div className="item__details--location">{`${country}, ${city}`}</div>
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
