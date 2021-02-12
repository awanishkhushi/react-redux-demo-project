import {SET_MESSAGE, LOGIN_SUCCESS, LOGIN_FAIL} from './types';

const initState ={};

export default function(state = initState,action){
	const {type,payload} = action;
	return {message: payload};
}