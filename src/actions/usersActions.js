import axios from "axios";
import Cookies from "universal-cookie";
import {
  GET_USER_REQUEST,
  SIGN_UP_USERS,
  LOG_IN_USERS,
  LOADING,
  ERROR,
} from "../types/usersTypes";

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
        type: SIGN_UP_USERS,
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
          type: LOG_IN_USERS,
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

export const getUsersRequest = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("http://eventapp.koalab.tech/api/users");
    // console.log("users: ", response.data);
    dispatch({
      type: GET_USER_REQUEST,
      payload: response.data.users,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
