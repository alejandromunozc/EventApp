import React from "react";

import Modal from "../../../Modal";

const ModalLogo = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      Hola
    </Modal>
  );
};

export default ModalLogo;
