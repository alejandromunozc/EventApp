import React from "react";
import axios from "axios";

import HeaderLogo from "../components/HeaderLogo";
import UserReg from "../components/UserReg";
import ClassicHero from "../components/ClassicHero";
import Countdown from "../components/Countdown";
import ClassicSummary from "../components/ClassicSummary";
import ClassicSpeakers from "../components/ClassicSpeakers";
import ClassicSchedule from "../components/ClassicSchedule";
import ClassicPartners from "../components/ClassicPartners";
import Footer from "../components/Footer";

const BASE_URL = "http://eventapp.koalab.tech/api/users";

class ClassicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
      modalIsOpen: false,
    };
  }

  /*--------------------- METHOD FOR GET REQUEST ----------------------*/

  requestGet = () => {
    axios.get(BASE_URL).then((response) => {
      console.log(response.data);
    });
  };

  /*--------------------- LIFE CYCLE ----------------------*/

  componentDidMount() {
    this.requestGet();
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderLogo />
        <UserReg />
        <ClassicHero
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          modalIsOpen={this.state.modalIsOpen}
        />
        <Countdown />
        <ClassicSummary />
        <ClassicSpeakers />
        <ClassicSchedule />
        <section className="classic__cta">
          <div className="classic__container">
            <div className="classic__cta--info">
              <h3>Sign up & share</h3>
              <a href="/">Sign me up</a>
            </div>
          </div>
        </section>
        <ClassicPartners />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ClassicContainer;
