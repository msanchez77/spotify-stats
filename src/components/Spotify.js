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

	const getTheStuff = async () => {
		const lists = await spotifyService.getPlaylist();

		console.log(lists)
	}

  return (
    <div>
      <p>Spotify is ready.</p>
			<button onClick={() => getTheStuff()}>Retrieve data</button>
    </div>
  )
}

export default Spotify