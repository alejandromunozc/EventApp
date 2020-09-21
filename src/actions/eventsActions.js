import axios from "axios";
import Moment from "moment";

import {
  EVENT_CREATION,
  GET_ORG_EVENT,
  LOADING,
  ERROR,
} from "../types/eventsTypes";

export const eventCreation = (event) => (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/events/";
  // const BASE_URL = "http://localhost:3001/api/events"; // Eliminar comentario, utilizar un switch desde las variables de entorno para activarlo desde el valor development // production

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
        type: EVENT_CREATION,
        payload: eventCreationResponse,
      });
      localStorage.setItem("events_url", JSON.stringify(eventCreationResponse));
      // window.location.href = "./templates";
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getOrganizationEventsByID = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      `http://eventapp.koalab.tech/api/events/org/${id}`
    );
    dispatch({
      type: GET_ORG_EVENT,
      payload: response.data.events,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
