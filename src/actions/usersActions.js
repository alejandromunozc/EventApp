import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const signUpRequest = (user) => (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/signup/";

  const data = JSON.stringify({
    name: user.name,
    password: user.password,
    email: user.email,
    role: "admin",
    img_url: user.img_url,
    organization: user.organization,
  });
  axios({
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
      const signupResponse = response.user;

      cookies.set("token", response.token, { path: "/" });
      console.log(signupResponse);
      dispatch({
        type: "SIGNUP_USERS",
        payload: signupResponse,
      });

      localStorage.setItem("user", JSON.stringify(signupResponse));
      window.location.href = "../event-module";
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginRequest = (user) => (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/login/";

  const data = JSON.stringify({
    email: user.email,
    password: user.password,
  });
  axios({
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
        const loginResponse = response.user;
        cookies.set("token", response.token, { path: "/" });

        alert(`Welcome, ${loginResponse.name}`);
        dispatch({
          type: "LOGIN_REQUEST",
          payload: loginResponse,
        });
        localStorage.setItem("user", JSON.stringify(loginResponse));
        window.location.href = "./myevents";
        console.log(loginResponse);
      } else {
        alert("Email or password is wrong!");
      }
    });
};
