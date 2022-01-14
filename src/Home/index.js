import React from 'react'
import { Link } from 'react-router-dom' 


export default function Home() {
  return (
    <div>
      <p>Welcome to room 38's Jeopardy Game</p>
      <p><Link to='/game' >GO TO GAME</Link></p>
    </div>
  )
}
