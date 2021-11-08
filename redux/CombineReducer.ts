import { NavReducer } from "./Nav/Reducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  Nav: NavReducer,
});
