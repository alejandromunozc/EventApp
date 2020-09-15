import React from "react";

const Fatal = (props) => {
  return (
    <div className="spinner-error__center warning__color">
      <h2>{props.message}</h2>
      <h4>
        Please, try later.{" "}
        <span role="img" aria-label="Face with Cold Sweat">
          😓
        </span>{" "}
      </h4>
    </div>
  );
};

export default Fatal;
