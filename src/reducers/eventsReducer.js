const INITIAL_STATE = {
  form: {
    name: "",
    event_url: "",
    location: "",
    country: "",
    city: "",
    date: "",
    start_hour: "",
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "EVENT_CREATION":
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};
