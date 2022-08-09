// import Spotify from 'spotify-web-api-js';
// const spotifyApi = new Spotify();

import {endpoints} from '../utils/endpoints';
import spotifyService from '../services/spotify';


const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds
export const setLocalAccessToken = token => {
	setExpirationTimestamp();
	localStorage.setItem('spotify_access_token', `Bearer ${token}`);
};
export const setLocalRefreshToken = token => {
	localStorage.setItem('spotify_refresh_token', `Bearer ${token}`);
};
export const setExpirationTimestamp = () => {
	const dateObj = new Date(Date.now() + EXPIRATION_TIME).getTime(); // add 1 hour to current time
	window.localStorage.setItem('spotify_expiration_timestamp', dateObj);
};

export const getLocalAccessToken = () =>
	window.localStorage.getItem('spotify_access_token');
export const getLocalRefreshToken = () => {
	localStorage.getItem('spotify_refresh_token');
};
export const getExpirationTimestamp = () =>
	window.localStorage.getItem('spotify_expiration_timestamp');

// export const spotify = () => {
// 	spotifyApi.setAccessToken(getLocalAccessToken());
// 	return spotifyApi;
// };

export const logout = () => {
	console.log("Clearing local storage...");
	window.localStorage.removeItem('spotify_access_token');
	window.localStorage.removeItem('spotify_refresh_token');
	window.localStorage.removeItem('spotify_expiration_timestamp');
	window.location.reload();
};

let expirationChecker;

const refreshAccessToken = async () => {
	try {
		// Get new access token
		const res = await fetch(
			`${
				endpoints.backendUrl
			}/refresh_token?refresh_token=${getLocalRefreshToken()}`
		);
		const { access_token } = await res.json();
		setLocalAccessToken(access_token);
	} catch (e) {
		// Refresh token is invalid
		logout();
	}
};

const runExpirationChecker = () => {
	// Clear existing checker
	if (expirationChecker) clearTimeout(expirationChecker);
	// Get expiration in milliseconds
	const expiresInMillis = getExpirationTimestamp() - new Date().getTime();
	console.log(`Token expires in ${expiresInMillis}`);
	expirationChecker = setTimeout(async () => {
		await refreshAccessToken();
		runExpirationChecker();
	}, expiresInMillis);
};

export const checkAuth = async () => {
	// No access token in storage, throw error
	if (!getLocalAccessToken()) {
		throw new Error('Missing tokens');
	}

	// Token has expired, get new one
	if (new Date().getTime() > getExpirationTimestamp()) {
		await refreshAccessToken();
		window.location.reload();
		return;
	}

	try {
		await spotifyService.getMe();
		runExpirationChecker();
		console.log("Access token verified!");
	} catch (e) {
		throw e;
	}

	// spotifyApi.setAccessToken(getLocalAccessToken());
	// try {
	// 	// Token verified
	// 	await spotifyApi.getMe();
	// 	runExpirationChecker();
	// } catch (e) {
	// 	// Token invalid
	// 	throw e;
	// }
};