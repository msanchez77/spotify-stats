import React from 'react' // we need this now also in component files

// Components
import Login from './components/Login'
import Spotify from './components/Spotify'

// Hooks
import { useState } from 'react'
import {
  Routes, Route, Link, useNavigate
} from "react-router-dom"


const App = () => {

  return (
    <main style={{position:"relative"}}>
      <h1>Matt Sanchez Spotify App</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/spotify" element={<Spotify />} />
      </Routes>
    </main>
  )
}

export default App