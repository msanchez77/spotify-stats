import { useMatch } from "react-router-dom"
import React from 'react' // we need this now also in component files


const Spotify = () => {

  let access_token = useMatch('/spotify:access_token')

  return (
    <div>
      <p>Spotify is ready.</p>
    </div>
  )
}

export default Spotify