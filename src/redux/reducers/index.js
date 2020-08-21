import { combineReducers } from "redux";
// Reducers
import authReducer from "./authentication";
import workshops from "./workshops";
import errorReducer from "./errors";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  authReducer: authReducer,
  workshops,
  errors: errorReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
