import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import auth from "../reducers/auth";
import message from "../reducers/message";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWare = [thunk];

combineReducers({
	auth,message
});

const store = createStore(
 combineReducers,
 composeWithDevTools(applyMiddleware(middleWare))
);

export default store;


