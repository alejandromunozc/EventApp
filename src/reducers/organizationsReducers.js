import {
  GET_ORG_REQUEST,
  LOADING_ORGANIZATION,
  ERROR_ORGANIZATION,
} from "../types/organizationsTypes";

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
      };
    case LOADING_ORGANIZATION:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ERROR_ORGANIZATION:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
