import React, { Fragment } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import "./styles/eventmodule.css";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

const cookies = new Cookies();
const BASE_URL = "http://eventapp.koalab.tech/api/users";
const ID_USER = cookies.get("_id");
const TOKEN = cookies.get("token");
const USER_ADMIN = cookies.get("name");

class EventModule extends React.Component {
  state = {
    form: {
      eventTitle: "",
      eventUrl: "",
      location: "",
      country: "",
      city: "",
      date: "",
      startHour: "",
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
    console.log("Form was submitted!");
    console.log(this.state);
  };

  eventCreation = async () => {
    const data = JSON.stringify({
      eventTitle: this.state.form.eventTitle,
      eventCreation: this.state.form.eventUrl,
      location: this.state.form.location,
      country: this.state.form.country,
      city: this.state.form.city,
      date: this.state.form.date,
      startHour: this.state.form.startHour,
    });
    await axios({
      method: "post",
      url: `${BASE_URL}/${ID_USER}`,
      headers: {
        accept: TOKEN,
      },
      data: data,
    })
      .then((response) => {
        // return response.data;
        console.log(response.data);
      })
      .then((response) => {
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
                    <label htmlFor="eventTitle">Event Title</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="text"
                      name="eventTitle"
                      value={this.state.eventTitle}
                    />
                  </div>
                  <div className="createEvent__field createEvent__field--url">
                    <label htmlFor="eventUrl">
                      Specify like you want your domain
                    </label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      placeholder="e.g. event.app/organization-name/event-name"
                      type="text"
                      name="eventUrl"
                      value={this.state.eventUrl}
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
                    <label htmlFor="startHour">Start hour</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="createEvent__form--input"
                      type="time"
                      name="startHour"
                      value={this.state.startHour}
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
