import React from "react";

import imgNotFound from "../img/404.svg";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <React.Fragment>
      <HeaderLogo />
      <div>
        <img src={imgNotFound} alt="" />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default NotFound;
