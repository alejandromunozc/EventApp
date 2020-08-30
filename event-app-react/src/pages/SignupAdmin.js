import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles/login.css";

import logoApp from "../img/logo.png";
import iconUser from "../img/icons8-user-male.svg";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

const BASE_URL = "http://eventapp.koalab.tech/api/signup";

class SignupAdmin extends React.Component {
  state = {
    form: {
      name: "",
      email: "",
      organization: "",
      password: "",
      img_url: "",
      role: "admin",
    },
  };

  handleChange = async (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  signup = async () => {
    const data = JSON.stringify({
      name: this.state.form.name,
      email: this.state.form.email,
      organization: this.state.form.organization,
      password: this.state.form.password,
      img_url: this.state.form.img_url,
      role: this.state.form.role,
    });
    await axios({
      method: "post",
      url: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      // .post(BASE_URL, {
      //   params: {
      //     email: this.state.form.email,
      //     password: this.state.form.password,
      //     headers: { "Content-Type": "application/json" },
      //   },
      // })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClick = (e) => {
    console.log("Button was clicked!");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted!");
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <section className="signup">
          <div className="container">
            <div className="login__content">
              <div className="login__header">
                <img
                  className="login__logo"
                  src={logoApp}
                  alt="logo event app"
                />
              </div>
              <div className="login__form">
                <div className="login__form--picture">
                  <img src={iconUser} alt="" />
                  <button
                    onClick={this.handleClick}
                    className="login__form--add"
                    name="img_url"
                    value={this.state.img_url}
                  >
                    +
                  </button>
                </div>
                <form
                  onSubmit={this.handleSubmit}
                  className="login__form--fields"
                  required
                >
                  <div className="login__field--email">
                    <label>First and Last Name</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="login__form--input"
                      type="text"
                      name="name"
                      value={this.state.name}
                      required
                    />
                    <br />
                  </div>
                  <div className="login__field--email">
                    <label>Work email</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="login__form--input"
                      type="email"
                      name="email"
                      value={this.state.email}
                      required
                    />
                    <br />
                  </div>
                  <div className="login__field--email">
                    <label>
                      <b>Organization</b>{" "}
                      <small>
                        <em>e.g. React Colombia</em>
                      </small>
                    </label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="login__form--input"
                      type="text"
                      name="organization"
                      value={this.state.organization}
                      required
                    />
                    <br />
                  </div>
                  <div className="login__field--password">
                    <label>Password</label>
                    <br />
                    <input
                      onChange={this.handleChange}
                      className="login__form--input"
                      type="password"
                      name="password"
                      value={this.state.password}
                      required
                    />
                    <br />
                  </div>
                  <button
                    to="/event-module"
                    onClick={() => this.signup()}
                    className="login__form--btn button"
                  >
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
        <Footer />
      </Fragment>
    );
  }
}

export default SignupAdmin;
