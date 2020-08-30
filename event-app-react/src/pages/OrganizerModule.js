import React, { Fragment } from "react";

import "./styles/myevents.css";

import HeaderLogo from "../components/HeaderLogo";
import UserReg from "../components/UserReg";
import EventList from "../components/EventList";
import DiffusionModule from "./DiffusionModule";
import Footer from "../components/Footer";

class OrganizerModule extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <UserReg />
        <EventList />
        <DiffusionModule />
        <Footer />
      </Fragment>
    );
  }
}

export default OrganizerModule;
