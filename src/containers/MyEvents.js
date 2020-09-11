import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/MyEvents.css";

import HeaderLogo from "../components/HeaderLogo";

// import Modal from "../components/Modal";
// import EventList from "../components/EventList";
// import DiffusionModule from "./DiffusionModule";

import iconLogo from "../assets/static/icon.png";

const MyEvents = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {
  //       user: {
  //         _id: "",
  //         name: "",
  //         email: "",
  //       },
  //     },
  //     modalIsOpen: false,
  //     form: {
  //       email: "",
  //       organization: ORGANIZATION,
  //       role: "organizer",
  //     },
  //   };
  // }

  // /*---------------------GET REQUEST ----------------------*/

  // requestGet = async () => {
  //   await axios({
  //     method: "get",
  //     url: `${BASE_URL}/${ID_USER}`,
  //     headers: {
  //       accept: TOKEN,
  //     },
  //   })
  //     .then((response) => {
  //       this.setState({ data: response.data });
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // /*---------------------POST REQUEST ----------------------*/

  // requestPost = async () => {
  //   const data = JSON.stringify({
  //     email: this.state.form.email,
  //     organization: ORGANIZATION,
  //     role: "organizer",
  //   });
  //   await axios({
  //     method: "post",
  //     url: BASE_URL,
  //     headers: {
  //       accept: TOKEN,
  //       "Content-Type": "application/json",
  //     },
  //     form: data,
  //   })
  //     .then((response) => {
  //       this.modalIsOpen();
  //       this.requestPost();
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // /*--------------------- USER LOGOUT ----------------------*/
  // logOut = () => {
  //   cookies.remove("_id", { path: "/" });
  //   cookies.remove("token", { path: "/" });
  //   cookies.remove("email", { path: "/" });
  //   window.location.href = "./";
  // };

  // /*---------------------LIFE CYCLE  ----------------------*/
  // componentDidMount() {
  //   if (!cookies.get("_id")) {
  //     window.location.href = "./";
  //   }

  //   this.requestGet();
  //   this.requestPost();
  // }

  // /*--------------------- MODAL STATES ----------------------*/
  // handleOpenModal = (e) => {
  //   this.setState({ modalIsOpen: true });
  // };

  // handleCloseModal = (e) => {
  //   this.setState({ modalIsOpen: false });
  // };

  // /*--------------------- USER CAPTURE ----------------------*/

  // handleChange = async (e) => {
  //   e.persist();
  //   await this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  //   // console.log(this.state.form);
  // };

  // const { form } = this.state;

  return (
    <>
      <HeaderLogo />
      <div className="header__user">
        <h2 className="header__user--name" href="/">
          name
        </h2>
        <span className="header__user--icon">
          <img
            src="https://img.icons8.com/bubbles/100/000000/admin-settings-male.png"
            alt="user"
          />
        </span>
        <button className="myEvents__button logout__button button">
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
            <div className="organization__company">organization</div>
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
    </>
  );
};

export default MyEvents;
