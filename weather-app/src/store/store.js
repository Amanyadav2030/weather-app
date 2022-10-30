import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {currentReducer} from './current/current.reducer';
import { forecastReducer } from "./forecast/forecast.reducer";

const rootReducer = combineReducers({
    currentData:currentReducer,
    forecastData:forecastReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));