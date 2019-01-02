import { combineReducers } from "redux";
import { getData } from "./search";

export const rootReducer  = combineReducers({
  received_data: getData
});