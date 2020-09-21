import React, { useState } from "react";
import { connect } from "react-redux";

import { eventCreation } from "../actions/eventsActions";
import { signUpRequest } from "../actions/usersActions";

import "../assets/styles/components/Eventmodule.css";

import HeaderLogo from "../components/HeaderLogo";

const EventModule = (props) => {
  const userName = props.usersReducer.user.name;
  const organization = props.usersReducer.user.organization;

  const [form, setValues] = useState({
    name: "",
    event_url: "",
    location: "",
    country: "",
    city: "",
    date: "",
    start_hour: "",
    organization: organization,
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.eventCreation(form);
    props.history.push("/templates");
  };

  return (
    <>
      <HeaderLogo />
      <div className="header__user">
        <h2 className="header__user--name" href="/">
          {userName}
        </h2>
        <span className="header__user--icon">
          <img
            src="https://img.icons8.com/bubbles/100/000000/admin-settings-male.png"
            alt="user"
          />
        </span>
        <h3>{organization}</h3>
      </div>
      <section className="createEvent">
        <div className="container">
          <div className="createEvent__content">
            <div className="createEvent__header">
              <h3 className="createEvent__title">
                Let's go to create an awesome event page <br />
                First, a little about your event!
              </h3>
            </div>
            <div className="createEvent__form">
              <form
                className="createEvent__form--fields"
                onSubmit={handleSubmit}
              >
                <div className="createEvent__field createEvent__field--title">
                  <label htmlFor="name">Event Title</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="createEvent__field createEvent__field--url">
                  <label htmlFor="event_url">
                    Specify like you want your domain <br />
                    <small>
                      e.g. event.app/organization-name/<b>event-name</b>{" "}
                    </small>
                  </label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    placeholder="event.app/organization-name/event-name"
                    type="text"
                    name="event_url"
                  // value={`event.app/${userOrganization.toLowerCase()}/`} ELiminar comentarios
                  />
                </div>
                <div className="createEvent__field createEvent__field--location">
                  <label htmlFor="location">Location</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    placeholder="Venue name or Address"
                    type="text"
                    name="location"
                  />
                </div>
                <div className="createEvent__field createEvent__field--country createEvent__field--middle">
                  <label htmlFor="country">Country</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    type="text"
                    name="country"
                  />
                </div>
                <div className="createEvent__field createEvent__field--city createEvent__field--middle">
                  <label htmlFor="city">City</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    type="text"
                    name="city"
                  />
                </div>
                <div className="createEvent__field createEvent__field--date createEvent__field--middle">
                  <label htmlFor="date">Date</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    type="date"
                    name="date"
                  />
                </div>
                <div className="createEvent__field createEvent__field--middle">
                  <label htmlFor="start_hour">Start hour</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="createEvent__form--input"
                    type="time"
                    name="start_hour"
                  />
                </div>
                <button className="createEvent__form--button button">
                  Next… Choose a template
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// No dejar comentarios
// const mapStateToProps = (usersReducer) => {
//   return {
//     user: usersReducer.user,
//   };
// };

const mapStateToProps = ({ usersReducer, eventsReducer }) => {
  return {
    usersReducer,
    eventsReducer,
  };
};

const mapDispatchToProps = {
  signUpRequest,
  eventCreation,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventModule);
