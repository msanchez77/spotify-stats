import { useState } from "react";

import { useMatch } from "react-router-dom"
import React from 'react' // we need this now also in component files
import spotifyService from "../services/spotify";


const Spotify = () => {

	const [playlists, setPlaylists] = useState([])

  const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	console.log(params)
	spotifyService.setAccessToken(params["access_token"]);

	const getSong = async () => {
		const lists = await spotifyService.getSong();
	}

	const getTopTracks = async () => {
		try {
			const tracks = await spotifyService.getTopTracks();
		} catch (e) {
			console.log("That didn't work!")
			console.log(e)
		}
	}

  return (
    <div>
      <p>Spotify is ready.</p>
			<button onClick={() => getSong()}>Retrieve song</button>
			<button onClick={() => getTopTracks()}>Retrieve Top</button>
    </div>
  )
}

export default Spotify