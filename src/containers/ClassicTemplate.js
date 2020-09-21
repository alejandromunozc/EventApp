import React, { Component } from "react";

import HeaderLogo from "../components/HeaderLogo";
import Hero from "../components/templates/classic/Hero";
import Countdown from "../components/templates/classic/Countdown";
import Summary from "../components/templates/classic/Summary";
import Speakers from "../components/templates/classic/Speakers";
import Schedule from "../components/templates/classic/Schedule";
import Partners from "../components/templates/classic/Partners";

// Cambiar la logica a funciones y utilizar hooks
class ClassicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalIsOpen: false,
    };
  }

  handleOpenModal = (e) => {
    this.setState({
      modalIsOpen: true,
    });
  };

  handleCloseModal = (e) => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <>
        <HeaderLogo />
        <Hero
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          modalIsOpen={this.state.modalIsOpen}
        />
        <Countdown />
        <Summary />
        <Speakers />
        <Schedule />
        <section className="classic__cta">
          <div className="classic__container">
            <div className="classic__cta--info">
              <h3>Sign up & share</h3>
              <a href="/">Sign me up</a>
            </div>
          </div>
        </section>
        <Partners />
      </>
    );
  }
}

export default ClassicContainer;
