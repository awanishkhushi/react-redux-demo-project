import axios from 'axios';

const URL = "http://localhost:8080/api/auth/";

const login = (userName, password) => {
	return axios.post(URL+"signin",{
		userName,password
	})
	.then((response) => {
		localStorage.setItem("user",JSON.stringify(response.data));
		return response.data;
	}
	
	
	)

	
};

export default {
		login
};