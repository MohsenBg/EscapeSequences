import { RootReducer } from "./CombineReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const initialState = store.getState();
