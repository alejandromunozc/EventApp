import axios from "axios";

export const eventCreation = (form) => async (dispatch) => {
  const BASE_URL = "http://eventapp.koalab.tech/api/events/";

  const data = JSON.stringify({
    name: form.name,
    event_url: form.event_url,
    location: form.location,
    country: form.country,
    city: form.city,
    date: form.date,
    start_hour: form.start_hour,
    organization: "",
  });
  await axios({
    method: "post",
    url: BASE_URL,
    headers: {
      // accept: TOKEN,
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      // return response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  dispatch({
    type: "EVENT_CREATION",
  });
};
