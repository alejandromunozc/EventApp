const INITIAL_STATE = {
  user: {
    name: "",
    password: "",
    email: "",
    role: "admin",
    img_url: "",
    organization: "",
  },
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
