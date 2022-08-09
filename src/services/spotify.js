import axios from "axios";
import { endpoints } from '../utils/endpoints'

import { getLocalAccessToken } from "../utils/auth";

const login = async () => {
	const response = await axios.get(`${endpoints.backendUrl}/login`);

	return response.data;
};

const getMe = async() => {
  const config = {
    headers: { 
			'Authorization': getLocalAccessToken(),
			"Content-Type": "application/json"
		 },
  };

	const response = await axios.get(`${endpoints.userApiUrl}/`, config)
	console.log(response.data)
	return response.data
}

const spotifyService = {
  login,
	getMe
};
export default spotifyService;