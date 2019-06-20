import { combinedReducer } from "./reducers.js";
import { createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
