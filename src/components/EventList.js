import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrganizationEvents, getEventByID } from "../actions/eventsActions";

const EventList = (props) => {
  console.log(props);
  // const eventTitle = props.eventsReducer.form.name;
  // const eventDate = props.eventsReducer.form.date;
  // const eventHour = props.eventsReducer.form.hour;
  // const eventLocation = props.eventsReducer.form.location;
  // const eventCity = props.eventsReducer.form.city;
  // const eventCountry = props.eventsReducer.form.country;

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
              <div className="item__title">{}</div>
              <div className="item__details">
                <div className="item__details--date">{}</div>
                <div className="item__details--hour">{}</div>
                <div className="item__details--location">{}</div>
                <div className="item__details--location">{}</div>
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
};

const mapStateToProps = ({ eventsReducer }) => eventsReducer;

const mapDispatchToProps = {
  getOrganizationEvents,
  getEventByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);