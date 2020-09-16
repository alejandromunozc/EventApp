import { GET_ORG_REQUEST, LOADING, ERROR } from "../types/organizationsTypes";

const INITIAL_STATE = {
  organizations: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORG_REQUEST:
      return {
        ...state,
        organizations: action.payload,
        loading: false,
        error: "",
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: "",
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
