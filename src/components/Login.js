import React from 'react' // we need this now also in component files


const Login = () => (
  <div id="login">
    <h1>This is an example of the Authorization Code flow</h1>
    <a href="http://localhost:3001/api/spotify/login">Log in with Spotify</a>
  </div>
)

export default Login