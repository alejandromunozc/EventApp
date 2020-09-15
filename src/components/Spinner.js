import React from "react";

import "../assets/styles/components/Spinner.css";

const Spinner = (props) => (
  <div className="spinner-error__center">
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
