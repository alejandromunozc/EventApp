import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./styles/eventmodule.css";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";
import UserReg from "../components/UserReg";

class EventModule extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <UserReg />
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
                <form className="createEvent__form--fields" action="">
                  <div className="createEvent__field createEvent__field--title">
                    <label htmlFor="title">Event Title</label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      type="text"
                      id="title"
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--url">
                    <label htmlFor="url">
                      Specify like you want your domain
                    </label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      placeholder="e.g. event.app/organization-name/event-name"
                      type="text"
                      id="url"
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--location">
                    <label htmlFor="location">Location</label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      placeholder="Venue name or Address"
                      type="text"
                      id="location"
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--country createEvent__field--middle">
                    <label htmlFor="country">Country</label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      type="text"
                      id="country"
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--city createEvent__field--middle">
                    <label htmlFor="city">City</label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      type="text"
                      id="city"
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--date createEvent__field--middle">
                    <label htmlFor="date">Date</label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      type="date"
                      id="date"
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--middle">
                    <label htmlFor="time">Start hour</label>
                    <br />
                    <input
                      className="createEvent__form--input"
                      type="time"
                      id="time"
                    />
                  </div>
                  <Link
                    className="createEvent__form--button button"
                    to="/templates"
                  >
                    Next… Choose a template
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default EventModule;
