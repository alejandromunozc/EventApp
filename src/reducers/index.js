import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
  usersReducer,
  eventsReducer,
});
