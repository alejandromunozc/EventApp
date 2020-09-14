const USER_EVENTS = JSON.parse(localStorage.getItem("event_url"));

const INITIAL_STATE = {
  form: USER_EVENTS || {},
  eventOrg: [],
  eventID: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "EVENT_CREATION":
      return {
        ...state,
        form: action.payload,
      };
    case "GET_ORG_EVENT":
      return {
        ...state,
        eventOrg: action.payload,
      };
    case "GET_EVENT_ID":
      return {
        ...state,
        eventID: action.payload,
      };
    default:
      return state;
  }
};
