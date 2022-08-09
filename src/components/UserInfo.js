import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"
import React from 'react' // we need this now also in component files
import spotifyService from "../services/spotify";
import { parseHashBangArgs } from "../utils/parse";
import { 
	checkAuth, 
	setLocalAccessToken, 
	setLocalRefreshToken,
	logout
} from "../utils/auth";


const UserInfo = () => {
	const navigate = useNavigate();

  useEffect(() => {
		// #access_token=&refresh_token=
		const { error, access_token, refresh_token } = parseHashBangArgs(
			window.location.hash
		);

		if (error && error === 'invalid_token') return;

		if (error && error === 'state_mismatch') return;

		const recheckAuth = async () => {
			console.log("Rechecking auth");
			await checkAuth();
		}

		if (access_token) {
			setLocalAccessToken(access_token);
			setLocalRefreshToken(refresh_token);

			recheckAuth();
		}

	}, [])


	const doLogout = () => {
		navigate('/')
		logout()
	}

  return (
    <div>
      <p>Spotify is ready.</p>
			<button onClick={() => doLogout()}>Logout</button>
    </div>
  )
}

export default UserInfo