import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./combineReducers";

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

export default store;
