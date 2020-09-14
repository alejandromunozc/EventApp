import axios from "axios";
import Moment from "moment";

export const eventCreation = (event) => (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/events/";

  const data = JSON.stringify({
    name: event.name,
    event_url: event.event_url,
    location: event.location,
    country: event.country,
    city: event.city,
    date: Moment(event.date).toISOString(),
    start_hour: event.start_hour,
    organization: event.organization,
  });
  axios({
    method: "post",
    url: BASE_URL,
    headers: {
      // accept: TOKEN,
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      return response.data;
      // console.log(response.data);
    })
    .then((response) => {
      const eventCreationResponse = response.event_url;
      // console.log(eventCreationResponse);
      dispatch({
        type: "EVENT_CREATION",
        payload: eventCreationResponse,
      });
      localStorage.setItem("event_url", JSON.stringify(eventCreationResponse));
      window.location.href = "./templates";
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getOrganizationEvents = () => (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/events";

  const data = JSON.stringify({
    organization: "TEAM T-MOBILE",
  });

  axios({
    method: "get",
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      dispatch({
        type: "GET_ORG_EVENT",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error + error.message);
    });
};

export const getEventByID = () => (dispatch) => {
  const BASE_URL =
    "http://eventapp.koalab.tech/api/events/5f5b039d92873204d42319c4";

  axios({
    method: "get",
    url: BASE_URL,
  })
    .then((response) => {
      dispatch({
        type: "GET_EVENT_ID",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
