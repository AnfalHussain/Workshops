import { combineReducers } from "redux";
// Reducers
import authReducer from "./authentication";
import workshops from "./workshops";

import errors from "./errors";

const rootReducer = combineReducers({
  authReducer: authReducer,
  workshops,
  errors,
});

export default rootReducer;
