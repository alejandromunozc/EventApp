import {
  GET_USER_REQUEST,
  SIGN_UP_USERS,
  LOG_IN_USERS,
  LOADING,
  ERROR,
} from "../types/usersTypes";

const CURRENT_USER = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = {
  user: CURRENT_USER || {},
  users: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_IN_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        users: action.payload,
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
