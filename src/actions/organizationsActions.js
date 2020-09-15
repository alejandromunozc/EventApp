import axios from "axios";

import {
  GET_ORG_REQUEST,
  ERROR_ORGANIZATION,
} from "../types/organizationsTypes";

export const getOrganizationRequest = () => async (dispatch) => {
  // dispatch({
  //   type: LOADING_ORGANIZATION,
  // });
  try {
    const response = await axios.get(
      "http://eventapp.koalab.tech/api/organizations/"
    );
    console.log(response);
    dispatch({
      type: GET_ORG_REQUEST,
      payload: response.data.organizations,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: ERROR_ORGANIZATION,
      payload: error.message,
    });
  }
};
