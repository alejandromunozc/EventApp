import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

import "./styles/myevents.css";

import HeaderLogo from "../components/HeaderLogo";
import UserReg from "../components/UserReg";
import EventList from "../components/EventList";
import DiffusionModule from "./DiffusionModule";
import Footer from "../components/Footer";

import iconLogo from "../img/icon.png";

const BASE_URL = "http://eventapp.koalab.tech/api/users";
const cookies = new Cookies();
const ID_USER = cookies.get("_id");
const TOKEN = cookies.get("Token");

class MyEvents extends React.Component {
  requestGet = async () => {
    await axios({
      method: "get",
      url: `${BASE_URL}/${ID_USER}`,
      headers: {
        "x-access-token": toString(TOKEN),
      },
    })
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  logOut = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("Token", { path: "/" });
    cookies.remove("E-mail", { path: "/" });
    window.location.href = "./";
  };

  componentDidMount() {
    this.requestGet();
  }

  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <UserReg />
        <section className="myEvents">
          <button className="button" onClick={() => this.logOut()}>
            Log out
          </button>
          <div className="container">
            <div className="myEvents__content">
              <div className="myEvents__title">
                <img src={iconLogo} alt="app icon" />
                <h3>My events</h3>
              </div>
              <div className="myEvents__cta">
                <Link to="/event-module" className="button myEvents__button">
                  New Event
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="organization">
          <div className="container">
            <div className="organization__content">
              <div className="organization__title">Organization</div>
              <div className="organization__company">Code Warriors</div>
            </div>
          </div>
        </section>
        <section className="collaborators">
          <div className="container">
            <div className="collaborators__content">
              <div className="collaborators__title">Collaborators</div>
              <div className="collaborators__list">
                <div className="collaborators__emails">
                  <div className="collaborators__emails--item">
                    javandresmoreno@gmail.com
                    <button className="emails__item--delete">&#10006;</button>
                  </div>
                  <div className="collaborators__emails--item">
                    israel.castro@gmail.com
                    <button className="emails__item--delete">&#10006;</button>
                  </div>
                  <div className="collaborators__emails--item">
                    alejandromunozc@gmail.com
                    <button className="emails__item--delete">&#10006;</button>
                  </div>
                </div>
                <div className="collaborators__addnew">
                  <button className="collaborators__button button">
                    Add new collaborator
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <EventList />
        <DiffusionModule />
        <Footer />
      </Fragment>
    );
  }
}

export default MyEvents;
