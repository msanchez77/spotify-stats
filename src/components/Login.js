import React from 'react' // we need this now also in component files
import { endpoints } from '../utils/endpoints'

const Login = () => (
  <div id="login">
    <h1>This is an example of the Authorization Code flow</h1>
    <a href={`${endpoints.backendUrl}/login`}>Log in with Spotify</a>
  </div>
)

export default Login