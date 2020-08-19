import { combineReducers } from "redux";
// Reducers

import workshops from "./workshops";

import errors from "./errors";

const rootReducer = combineReducers({
  workshops,
  errors,
});

export default rootReducer;
