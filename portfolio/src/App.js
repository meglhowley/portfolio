import './App.css'
import './flickity.css'
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import React from 'react'

function App() {
  const [darkMode, toggleDarkMode] = useState(false)

  console.log('sup fellow dev. hire me :) ')

  return (
    <div>
      <div className="toggle-switch-div">
        <div
          style={{
            color: !darkMode ? 'rgba(20, 20, 20, 0.747)' : 'white'
          }}
        >
          TURN {!darkMode ? 'OFF' : 'ON'} THE LIGHTS
        </div>
        <label className="switch">
          <input onClick={() => toggleDarkMode(!darkMode)} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <Home darkMode={darkMode} />
    </div>
  )
}

export default App
