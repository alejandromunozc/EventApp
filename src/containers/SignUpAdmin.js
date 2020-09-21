import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signUpRequest } from "../actions/usersActions";

import "../assets/styles/components/Login.css";

import logoApp from "../assets/static/logo.png";
import iconUser from "../assets/static/icons8-user-male.svg"; // Utilizar un CDN para estos estaticos

import HeaderLogo from "../components/HeaderLogo";

const SignupAdmin = (props) => {
  const [form, setValues] = useState({
    name: "",
    password: "",
    email: "",
    role: "admin",
    img_url: "",
    organization: "",
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUpRequest(form);
    props.history.push("/event-module");
  };

  return (
    <>
      <HeaderLogo />
      <section className="signup">
        <div className="container">
          <div className="login__content">
            <div className="login__header">
              <img className="login__logo" src={logoApp} alt="logo event app" />
            </div>
            <div className="login__form">
              <div className="login__form--picture">
                <img src={iconUser} alt="" />
                <button className="login__form--add" name="img_url">
                  +
                </button>
              </div>
              <form
                className="login__form--fields"
                required
                onSubmit={handleSubmit}
              >
                <div className="login__field--email">
                  <label>First and Last Name</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="login__form--input"
                    type="text"
                    name="name"
                    required
                  />
                  <br />
                </div>
                <div className="login__field--email">
                  <label>Work email</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="login__form--input"
                    type="email"
                    name="email"
                    required
                  />
                  <br />
                </div>
                <div className="login__field--email">
                  <label>
                    <b>Organization</b>{" "}
                    <small>
                      <b>
                        <em>e.g. REACT COLOMBIA</em>
                      </b>
                    </small>
                  </label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="login__form--input"
                    type="text"
                    name="organization"
                    placeholder="e.g. REACT COLOMBIA"
                    required
                  />
                  <br />
                </div>
                <div className="login__field--password">
                  <label>Password</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="login__form--input"
                    type="password"
                    name="password"
                    required
                  />
                  <br />
                </div>
                <button className="login__form--btn button">
                  Next... Create my event
                </button>
              </form>
            </div>
            <div className="login__footer">
              <p>
                Already have an account? <Link to="/login">Log in Now</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupAdmin);
