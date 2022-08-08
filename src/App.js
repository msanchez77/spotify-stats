import axios from 'axios'
import React from 'react' // we need this now also in component files

const App = () => {
  const login = async () => {

    const response = await axios.get('http://localhost:3001/login')

    return response.data;
  }

  return (
    <div id="login">
      <h1>This is an example of the Authorization Code flow</h1>
      <a href="#" onClick={() => login()}>Log in with Spotify</a>
  </div>
  )
}

export default App