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
import UserInfo from "./UserInfo";


const UserPage = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null)

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

		const initializeData = async () => {
			const u = await spotifyService.getMe()
			setUser(u)
		}

		if (access_token) {
			setLocalAccessToken(access_token);
			setLocalRefreshToken(refresh_token);

			recheckAuth();
			initializeData();
		}

	}, [])


	const doLogout = () => {
		navigate('/')
		logout()
	}

	if (!user) {
		return <p>Loading...</p>
	}

  return (
    <div>
      <p>Spotify is ready.</p>
			<button onClick={() => doLogout()}>Logout</button>
			<UserInfo user={user} />
		</div>
  )
}

export default UserPage