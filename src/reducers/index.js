import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import eventsReducer from "./eventsReducer";
import organizationsReducer from "./organizationsReducers";

export default combineReducers({
  usersReducer,
  eventsReducer,
  organizationsReducer,
});
