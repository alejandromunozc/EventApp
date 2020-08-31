import React, { Fragment } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import "./styles/templates.css";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

const cookies = new Cookies();
const BASE_URL = "http://eventapp.koalab.tech/api/events";
const ID_EVENT = cookies.get("id_event");
const TOKEN = cookies.get("token");

class Templates extends React.Component {
  state = {
    template: "",
  };

  /*---------------------PUT REQUEST ----------------------*/

  requestPut = async () => {
    await axios({
      method: "put",
      url: `${BASE_URL}/${ID_EVENT}`,
      headers: {
        accept: TOKEN,
        "Content-Type": "application/json",
      },
      template: this.setState.template,
    })
      .then((response) => {
        return response.template;
      })
      .then((response) => {
        window.location.href = "./myevents";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleClickClassic = (e) => {
    this.setState.template = "classic";
    console.log("Button Classic was clicked!");
  };

  handleClickMinimalist = (e) => {
    this.setState.template = "minimalist";
    console.log("Button Minimalist was clicked!");
  };

  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <section className="chooseTemplate">
          <div className="container">
            <div className="chooseTemplate__content">
              <div className="chooseTemplate__header">
                <h3 className="chooseTemplate__title">
                  Now, choose a template!
                </h3>
              </div>
              <div className="chooseTemplate__options">
                <div className="chooseTemplate__options--item">
                  <div className="item__title">Classic</div>
                  <div className="item__showcase">
                    <img
                      src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-classic.png"
                      alt="Classic"
                    />
                    <button
                      onClick={() => this.requestPut()}
                      className="button createEvent__form--button"
                      name="classic"
                    >
                      I like it!
                    </button>
                  </div>
                </div>
                <div className="chooseTemplate__options--item">
                  <div className="item__title">Minimalist</div>
                  <div className="item__showcase">
                    <img
                      src="https://raw.githubusercontent.com/alejandromunozc/EventApp/frontend/src/assets/img/template-minimal.png"
                      alt="Minimalist"
                    />
                    <button
                      onClick={() => this.requestPut()}
                      className="createEvent__form--button button"
                      name="minimalist"
                    >
                      I like it!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default Templates;
