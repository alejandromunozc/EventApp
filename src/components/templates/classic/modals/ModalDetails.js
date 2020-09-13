import React from "react";

import Modal from "../../../Modal";

const ModalDetails = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="modal__content">
        <h3>Main Configuration</h3>
        <form>
          <label htmlFor="date">Event Date</label>
          <br />
          <input type="date" id="date" />
          <label>Event Name</label>
          <br />
          <input type="text" id="eventName" />
          <label>Location</label>
          <br />
          <input type="text" id="eventName" />
          <button className="button">Submit</button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalDetails;
