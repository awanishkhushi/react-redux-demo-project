import {SET_MESSAGE, LOGIN_SUCCESS, LOGIN_FAIL} from './types';

const user = JSON.stringify(localStorage.getItem('user'));

const initState = user ? {isLogged:true, user} : {isLogged:false, user:null};

export default function (state = initState,action) {
	const {type, payload} = action;

	if(type==='LOGIN_SUCCESS'){
		return {
			state,
			isLogged:true,
			user: payload.user,
		};
	}
	else if (type==='LOGIN_FAIL') {
		return {
			state,
			isLogged:false,
			user: null,
		}
	}
	else{
		return state;
	}
}