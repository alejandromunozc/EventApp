const USER_EVENTS = JSON.parse(localStorage.getItem("event_url"));

const INITIAL_STATE = {
  form: USER_EVENTS || {},
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
