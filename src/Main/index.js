import React, { useState, useEffect } from 'react'
import Title from './Title.js'
import Clue from './Clue.js'
import Form from './Form.js'
import Question from './Question.js'

export default function Main() {
  const [state, setState] = useState('')
    useEffect(() => {
      async function fetchMyAPI() {
        const response = await fetch(`http://jservice.io/api/random`)
        const data = await response.json()
        setState(data)
          console.log(data)
        
      }
  
      fetchMyAPI()
    },[])
  return (
    <div>
      {/* <Title />
      <Question />
      <Clue />
      <Form /> */}
    </div>
  )
}








  
  



