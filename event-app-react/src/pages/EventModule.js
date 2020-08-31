import React, { Fragment } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Moment from "moment";

import "./styles/eventmodule.css";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

const cookies = new Cookies();
const BASE_URL = "http://eventapp.koalab.tech/api/events";
// const ID_USER = cookies.get("_id");
const TOKEN = cookies.get("token");
const USER_ADMIN = cookies.get("name");
const ORGANIZATION = cookies.get("organization");

class EventModule extends React.Component {
  state = {
    form: {
      name: "",
      event_url: "",
      location: "",
      country: "",
      city: "",
      date: "",
      start_hour: "",
      // role: "admin",
    },
  };

  handleChange = async (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form was submitted!");
    // console.log(this.state);
  };

  eventCreation = async () => {
    const data = JSON.stringify({
      name: this.state.form.name,
      event_url: this.state.form.event_url,
      location: this.state.form.location,
      country: this.state.form.country,
      city: this.state.form.city,
      date: Moment(this.state.form.date).toISOString(),
      start_hour: this.state.form.start_hour,
      organization: ORGANIZATION,
    });
    await axios({
      method: "post",
      url: BASE_URL,
      headers: {
        accept: TOKEN,
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        return response.data;
        // console.log(response.data.event_url._id);
      })
      .then((response) => {
        var eventCreationResponse = response.event_url;
        cookies.set("id_event", eventCreationResponse._id, { path: "/" });
        // console.log(eventCreationResponse._id);
        window.location.href = "./templates";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <div className="header__user">
          <h2 className="header__user--name" href="/">
            {`Hi, Welcome! ${USER_ADMIN}`}
          </h2>
          <p>{ORGANIZATION}</p>
          <span className="header__user--icon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/admin-settings-male.png"
              alt="user"
            />
          </span>
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
                  onSubmit={this.handleSubmit}
                >
                  <div className="createEvent__field createEvent__field--title">
                    <label htmlFor="name">Event Title</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="text"
                      name="name"
                      value={this.state.name}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--url">
                    <label htmlFor="event_url">
                      Specify like you want your domain
                    </label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      placeholder="e.g. event.app/organization-name/event-name"
                      type="text"
                      name="event_url"
                      value={this.state.event_url}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--location">
                    <label htmlFor="location">Location</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      placeholder="Venue name or Address"
                      type="text"
                      name="location"
                      value={this.state.location}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--country createEvent__field--middle">
                    <label htmlFor="country">Country</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="text"
                      name="country"
                      value={this.state.country}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--city createEvent__field--middle">
                    <label htmlFor="city">City</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="text"
                      name="city"
                      value={this.state.city}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--date createEvent__field--middle">
                    <label htmlFor="date">Date</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="date"
                      name="date"
                      value={this.state.date}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--middle">
                    <label htmlFor="start_hour">Start hour</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="time"
                      name="start_hour"
                      value={this.state.start_hour}
                    />
                  </div>
                  <button
                    onClick={() => this.eventCreation()}
                    className="createEvent__form--button button"
                    to="/templates"
                  >
                    Next… Choose a template
                  </button>
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
