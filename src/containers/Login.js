import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions/usersActions";

import "../assets/styles/components/Login.css";
import logoApp from "../assets/static/logo.png";

import HeaderLogo from "../components/HeaderLogo";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
  };

  useEffect(() => {
    if (props.usersReducer && props.usersReducer.user) {
      props.history.push("./myevents");
    }
  }, [props.history, props.usersReducer]);

  return (
    <>
      <HeaderLogo />
      <section className="login">
        <div className="container">
          <div className="login__content">
            <div className="login__header">
              <h3 className="login__title">Welcome again to</h3>
              <img className="login__logo" src={logoApp} alt="logo event app" />
            </div>
            <div className="login__form">
              <form className="login__form--fields" onSubmit={handleSubmit}>
                <div className="login__field--email">
                  <label>Work email</label>
                  <br />
                  <input
                    onChange={handleInput}
                    className="login__form--input"
                    type="email"
                    name="email"
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
                  />
                  <br />
                </div>
                <button className="login__form--btn button">Log in</button>
              </form>
            </div>
            <div className="login__footer">
              <p>
                Don't have an account?
                <Link to="/signup"> Sign Up Now</Link>
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
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
