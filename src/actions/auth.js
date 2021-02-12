import {SET_MESSAGE, LOGIN_SUCCESS, LOGIN_FAIL} from './types';
import AuthService from '../services/authService';

export const login = (userName, password) = (dispatch) => {
	return AuthService.login(userName,password).then(
		(data) => {
			dispatch({
				type:LOGIN_SUCCESS,
				payload: {user:data},
			});
			return Promise.resolve();
		},
		(error) => {
			const message = error.response;
			dispatch({
				type: LOGIN_FAIL,
			});
			dispatch({
				type:SET_MESSAGE,
				payload: message,
			});
			return Promise.reject();
		}
	);

}