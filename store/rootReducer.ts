import { combineReducers } from "@reduxjs/toolkit";
import contact from "./reducers/contact";

const rootReducer = combineReducers({
  contact,
});

export default rootReducer;
