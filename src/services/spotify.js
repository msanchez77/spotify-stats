import axios from "axios";
const baseUrl = "http://localhost:3001/api/spotify";
const apiUrl = "https://api.spotify.com/v1/me"

let accessToken = null;

const setAccessToken = (newToken) => {
	accessToken = `Bearer ${newToken}`;
}

const login = async () => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	}

	const response = await axios.get(`${baseUrl}/login`, config);

	return response.data;
};

const getPlaylist = async() => {
	console.log(accessToken)
  const config = {
    headers: { 'Authorization': accessToken, 'Content-Type': 'application/json' },
  };

	const response = await axios.get(`${apiUrl}/following?type=artist`, config)

	return response.data
}

const spotifyService = {
	setAccessToken,
  login,
	getPlaylist
};
export default spotifyService;