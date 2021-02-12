export default function userAuth() {
	const user = JSON.parse(localStorage.getItem('user'));
	if(user){
		return "SUCCESS";
	}
	else{
		return "FAIL";
	}
}