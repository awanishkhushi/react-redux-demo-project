import axios from 'axios';

import userAuth from '../helpers/helper';

const URL = "http://localhost:8080/api/test";

const getDashBoard =() => {
	return axios.get(URL + "user", {headers:userAuth()});
};

export default {
	getDashBoard
};