import {
  EVENT_CREATION,
  GET_ORG_EVENT,
  LOADING,
  ERROR,
} from "../types/eventsTypes";

const USER_EVENTS = (window.onload = function () {
  localStorage.getItem("events_url");
});

const INITIAL_STATE = {
  form: USER_EVENTS || {},
  events: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_CREATION:
      return {
        ...state,
        form: action.payload,
      };
    case GET_ORG_EVENT:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: "",
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
