import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest, signUpRequest } from "../actions/usersActions";
import { eventCreation } from "../actions/eventsActions";

import "../assets/styles/components/MyEvents.css";

import HeaderLogo from "../components/HeaderLogo";
import EventList from "../components/EventList";
import DiffusionModule from "../components/DiffusionModule";

// import Modal from "../components/Modal";

import iconLogo from "../assets/static/icon.png";

/*----------------------------------------------------------------*/

const MyEvents = (props) => {
  console.log(props);

  const userName = props.usersReducer.user.name;

  const organization = props.usersReducer.user.organization;

  const logOut = () => {
    localStorage.clear();
    props.history.push("./");
  };

  // useEffect(() => [props.usersReducer, props.eventsReducer]);

  return (
    <>
      <HeaderLogo />
      <div className="header__user">
        <h2 className="header__user--name" href="/">
          {userName}
        </h2>
        <span className="header__user--icon">
          <img
            src="https://img.icons8.com/bubbles/100/000000/admin-settings-male.png"
            alt="user"
          />
        </span>
        <button
          className="myEvents__button logout__button button"
          onClick={logOut}
        >
          Log out
        </button>
      </div>
      <section className="myEvents">
        <div className="container">
          <div className="myEvents__content">
            <div className="myEvents__title">
              <img src={iconLogo} alt="app icon" />
              <h3>My Events</h3>
            </div>
            <div className="myEvents__cta">
              <Link to="/event-module" className="button myEvents__button">
                New Event
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="organization">
        <div className="container">
          <div className="organization__content">
            <div className="organization__title">Organization</div>
            <div className="organization__company"> {organization} </div>
          </div>
        </div>
      </section>
      <section className="collaborators">
        <div className="container">
          <div className="collaborators__content">
            <div className="collaborators__title">Collaborators</div>
            <div className="collaborators__list">
              <div className="collaborators__emails">
                <div className="collaborators__emails--item">
                  <button className="emails__item--delete">&#10006;</button>
                </div>
              </div>
              <div className="collaborators__addnew">
                <button
                  className="collaborators__button button"
                  // onClick={this.handleOpenModal}
                >
                  Add new collaborator
                </button>
                {/* <Modal
                  isOpen={this.state.modalIsOpen}
                  onClose={this.handleCloseModal}
                >
                  <div className="modal__content">
                    <h3>Add new collaborator</h3>
                    <form>
                      <label htmlFor="email">E-mail Address</label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        value={form.email}
                      />

                      <button className="button" onClick={this.requestPost}>
                        Submit
                      </button>
                    </form>
                  </div>
                </Modal> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventList />
      <DiffusionModule />
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
