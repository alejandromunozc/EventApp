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
      console.log(eventCreationResponse);
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
