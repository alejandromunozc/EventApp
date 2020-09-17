import axios from "axios";

import { GET_ORG_REQUEST, LOADING, ERROR } from "../types/organizationsTypes";

export const getOrganizationRequest = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      "http://localhost:3001/api/organizations/"
    );
    dispatch({
      type: GET_ORG_REQUEST,
      payload: response.data.organizations,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

// "http://eventapp.koalab.tech/api/organizations/";
