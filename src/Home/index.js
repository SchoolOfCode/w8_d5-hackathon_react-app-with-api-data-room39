import React from 'react'
import { Link } from 'react-router-dom' 
import "./style.css"

export default function Home() {
  return (
    <div className='home'>
      <p>Welcome to room 38's Jeopardy Game</p>
      <p><Link to='/game' className='link' >GO TO GAME</Link></p>
    </div>
  )
}
