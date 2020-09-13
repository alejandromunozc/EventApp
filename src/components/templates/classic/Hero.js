import React, { Fragment } from "react";

import Modal from "../../../components/Modal";

import "../../../assets/styles/components/classicTemplate.css";

import classicLogoConf from "../../../assets/static/classic-logo.png";

function ClassicHero(props) {
  return (
    <Fragment>
      <main className="classic__hero">
        <div className="classic__hero--cover">
          <div className="classic__container">
            <div className="classic__hero--content">
              <div className="classic__hero--info">
                <img
                  className="classic__hero--logo"
                  src={classicLogoConf}
                  alt="Conference Logo"
                />
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
                  <a href="/">Sign me up</a>
                </div>
                <button
                  className="classic__edit-button button"
                  onClick={props.onOpenModal}
                >
                  Edit this section
                </button>
                <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default ClassicHero;
