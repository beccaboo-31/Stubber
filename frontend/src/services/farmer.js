import axios from "axios";
const baseUrl = "http://localhost:8080/api/farmer/startHarvesting";

const startHarvesting = (phone, quantity) => {
	const farmerDeets = {
		farmerphoneNum: phone,
		quantity,
	};
	const request = axios.post(baseUrl, farmerDeets);
	console.log("sent to backend");
	return request.then((response) => response.data);
};

export default { startHarvesting };
