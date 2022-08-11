import React, { useEffect } from 'react' // we need this now also in component files

// Components
import Login from './components/Login'
import UserPage from './components/UserPage'

// Hooks
import { useState } from 'react'
import {
  Routes, Route, Link, useNavigate
} from "react-router-dom"

// utils
import { checkAuth } from './utils/auth'


const App = () => {

	const [isAuthenticated, setIsAuthenticated] = useState(null);

	useEffect(() => {
		const fetchLogged = async () => {
			try {
				await checkAuth();
				setIsAuthenticated(true);
			} catch (e) {
				console.log("Authentication failed");
				setIsAuthenticated(false);
			}
		};

		fetchLogged();
	}, []);

	if (isAuthenticated === null) {
		return <></>;
	}

  return (
    <main style={{position:"relative"}}>
      <h1>Matt Sanchez Spotify App</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/spotify" element={<UserPage />} />
      </Routes>
    </main>
  )
}

export default App