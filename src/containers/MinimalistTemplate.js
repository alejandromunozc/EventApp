import React from "react";

import HeaderLogo from "../components/HeaderLogo";
import HeaderMinimalistic from "../components/templates/minimalistic/Header";
import Main from "../components/templates/minimalistic/Main";
import About from "../components/templates/minimalistic/About";
import ToKnow from "../components/templates/minimalistic/ToKnow";
import People from "../components/templates/minimalistic/People";
import Schedule from "../components/templates/minimalistic/Schedule";
import Sponsors from "../components/templates/minimalistic/Sponsors";
import Cta from "../components/templates/minimalistic/Cta";

import "../assets/styles/components/templates/minimalisticTemplate/Globals.css";

const MinimalisticContainer = () => {
  return (
    <>
      <HeaderLogo />
      <HeaderMinimalistic />
      <Main />
      <About />
      <ToKnow />
      <People />
      <Schedule />
      <Sponsors />
      <Cta />
    </>
  );
};

export default MinimalisticContainer;
