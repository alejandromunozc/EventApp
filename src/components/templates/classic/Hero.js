import React from "react";
import { connect } from "react-redux";
import { loginRequest, signUpRequest } from "../../../actions/usersActions";
import { eventCreation } from "../../../actions/eventsActions";

import ModalDetails from "./modals/ModalDetails";

import "../../../assets/styles/components/classicTemplate.css";

import classicLogoConf from "../../../assets/static/classic-logo.png";

function Hero(props) {
  const eventTitle = props.eventsReducer.form.name;
  const eventDate = props.eventsReducer.form.date;
  const eventHour = props.eventsReducer.form.start_hour;
  const eventLocation = props.eventsReducer.form.location;
  const eventCity = props.eventsReducer.form.city;
  const eventCountry = props.eventsReducer.form.country;

  return (
    <>
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
                {/* <button
                  className="classic__edit-button button"
                  onClick={props.onOpenModal}
                >
                  Change Logo
                </button>
                <ModalLogo
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                /> */}
                <h1 className="classic__hero--title">{eventTitle}</h1>
                <div className="classic__hero--details-location">
                  <div className="classic__location--icon">
                    <img
                      src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/b48.map.png"
                      alt=""
                    />
                  </div>
                  <div className="classic__location--place">{`${eventLocation} - ${eventCity},${eventCountry}`}</div>
                </div>
                <div className="classic__main--details-date">
                  <div className="classic__date--icon">
                    <img
                      src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2136839/assets/f38.time.png"
                      alt=""
                    />
                  </div>
                  <div className="classic__date--starts">
                    {`${eventDate} // ${eventHour}`}
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
                <ModalDetails
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const mapStateToProps = ({ usersReducer, eventsReducer }) => {
  return {
    usersReducer,
    eventsReducer,
  };
};

const mapDispatchToProps = {
  eventCreation,
  loginRequest,
  signUpRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
