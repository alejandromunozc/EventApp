import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import "./styles/login.css";

import logoApp from "../img/logo.png";

import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

const BASE_URL = "http://eventapp.koalab.tech/api/login";
const cookies = new Cookies();

class Login extends React.Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form was submitted!");
    // console.log(this.state);
  };

  login = async () => {
    const data = JSON.stringify({
      email: this.state.form.email,
      password: this.state.form.password,
    });
    await axios({
      method: "post",
      url: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.auth) {
          // console.log(response);
          var loginResponse = response.user;
          cookies.set("_id", loginResponse._id, { path: "/myevents" });
          cookies.set("email", loginResponse.email, { path: "/myevents" });
          cookies.set("token", response.token, { path: "/myevents" });
          alert(`Bienvenido ${loginResponse.name}`);
          window.location.href = "./myevents";
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("_id")) {
      window.location.href = "./myevents";
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderLogo />
        <section className="login">
          <div className="container">
            <div className="login__content">
              <div className="login__header">
                <h3 className="login__title">Welcome again to</h3>
                <img
                  className="login__logo"
                  src={logoApp}
                  alt="logo event app"
                />
              </div>
              <div className="login__form">
                <form
                  className="login__form--fields"
                  onSubmit={this.handleSubmit}
                >
                  <div className="login__field--email">
                    <label>Work email</label>
                    <br />
                    <input
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
                      className="login__form--input"
                      type="password"
                      name="password"
                    />
                    <br />
                  </div>
                  <button
                    onClick={() => this.login()}
                    className="login__form--btn button"
                  >
                    Log in
                  </button>
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
        <Footer />
      </Fragment>
    );
  }
}

export default Login;
