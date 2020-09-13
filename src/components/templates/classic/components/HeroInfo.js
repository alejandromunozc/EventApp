import React from "react";

import ModalDetails from "../modals/ModalDetails";

const HeroLogo = (props) => {
  return (
    <div className="classic__hero--info">
      <h1 className="classic__hero--title">Event App Draft</h1>
      <div className="classic__hero--details-location">
        <div className="classic__location--icon">
          <img
            src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/b48.map.png"
            alt=""
          />
        </div>
        <div className="classic__location--place">
          Bogotá Calle #72 Int 9 - 55 Bogotá 81000
        </div>
      </div>
      <div className="classic__main--details-date">
        <div className="classic__date--icon">
          <img
            src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/f38.time.png"
            alt=""
          />
        </div>
        <div className="classic__date--starts">
          Friday, August 28 Sunday, August 30
        </div>
      </div>
      <div className="classic__main--details-cta">
        <a href="/classic">Sign me up</a>
      </div>
      <button
        className="classic__edit-button button"
        onClick={props.onOpenModal}
      >
        Edit this section
      </button>
      <ModalDetails isOpen={props.modalIsOpen} onClose={props.onCloseModal} />
    </div>
  );
};

export default HeroLogo;
