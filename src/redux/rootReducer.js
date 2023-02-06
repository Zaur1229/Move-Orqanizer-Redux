import { combineReducers } from "redux";
import moviesReducer from "./movie/reducer";

const rootReducer = combineReducers({ moviesReducer })

export default rootReducer;