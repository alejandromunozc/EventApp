const CURRENT_USER = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = {
  user: CURRENT_USER || {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUP_USERS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_USERS":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
