import { createStore, combineReducers } from "redux";
import week from "./modules/week";

const rootReducer = combineReducers({ week });

const store = createStore(rootReducer);

export default store;
