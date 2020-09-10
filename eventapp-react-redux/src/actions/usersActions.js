import axios from "axios";

export const signUpRequest = (user) => async (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/signup/";

  const data = JSON.stringify({
    name: user.name,
    password: user.password,
    email: user.email,
    role: "admin",
    img_url: user.img_url,
    organization: user.organization,
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
    .catch((error) => {
      console.log(error);
    });
  dispatch({
    type: "SIGNUP_USERS",
  });
};

export const loginRequest = (user) => async (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/login/";

  const data = JSON.stringify({
    email: user.email,
    password: user.password,
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
      // console.log(response.data.user);
      if (response.data.auth) {
        alert(`Welcome ${response.data.user.name}`);
        window.location.href = "/myevents";
      } else {
        alert("Email or password is wrong!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  dispatch({
    type: "LOGIN_REQUEST",
  });
};
