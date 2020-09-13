import React from "react";

// import ModalLogo from "../modals/ModalLogo";

import classicLogoConf from "../../../../assets/static/classic-logo.png";

const HeroLogo = (props) => {
  return (
    <div>
      <img
        className="classic__hero--logo"
        src={classicLogoConf}
        alt="Conference Logo"
      />
      <button
        className="classic__edit-button button"
        // onClick={props.onOpenModal}
      >
        Change your Logo
      </button>
      {/* <ModalLogo isOpen={props.modalIsOpen} onClose={props.onCloseModal} /> */}
    </div>
  );
};

export default HeroLogo;
