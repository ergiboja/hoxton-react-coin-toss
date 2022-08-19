import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
 


  return (
    <>
    <div className="container">
    <div className="stats">
      <p id="heads-count">Heads: 0</p>
      <p id="tails-count">Tails: 0</p>
    </div>
    <div className="coin" id="coin">
      <div className="heads">
        <img src="heads.svg" />
      </div>
      <div className="tails">
        <img src="tails.svg" />
      </div>
    </div>
    <div className="buttons">
      <button id="flip-button">Flip Coin</button>
      <button id="reset-button">Reset</button>
    </div>
    </div>
  </>
  )
}

export default App
