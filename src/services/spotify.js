import axios from "axios";
const baseUrl = "http://localhost:3001/api/spotify";
const apiUrl = "https://api.spotify.com/v1/me"

let accessToken = null;

const setAccessToken = (newToken) => {
	accessToken = `Bearer ${newToken}`;
}

const login = async () => {
	// const config = {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Accept': 'application/json',
	// 		'Access-Control-Allow-Origin': '*'
	// 	}
	// }

	const response = await axios.get(`${baseUrl}/login`);

	return response.data;
};

const getSong = async() => {
  const config = {
    headers: { 
			'Authorization': accessToken,
			'Content-Type': 'application/json'
		 },
  };

	const response = await axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', config)
	console.log(response.data)
	return response.data
}

const getTopTracks = async() => {
  const config = {
    headers: { 
			'Authorization': accessToken,
			"Content-Type": "application/json"
		 },
  };

	const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', config)
	console.log(response.data)
	return response.data
}

const spotifyService = {
	setAccessToken,
  login,
	getSong,
	getTopTracks
};
export default spotifyService;