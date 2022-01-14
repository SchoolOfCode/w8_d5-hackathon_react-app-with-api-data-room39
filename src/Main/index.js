import React, { useState, useEffect } from 'react'
import Title from './Title.js'
import Clue from './Clue.js'
import Form from './Submit.js'
import Question from './Question.js'

export default function Main() {
  const [state, setState] = useState([
    { title: ' ', question: ' ', answer: '' },
  ])
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(`http://jservice.io/api/random`)
      const data = await response.json()
      setState([
        {
          ...state,
          title: data[0].category.title,
          question: data[0].question,
          answer: data[0].answer,
        },
      ])
    }
    fetchMyAPI()
  }, [])
  console.log(state)
  return (
    <div>
      <Title title={state[0].title} />
      <Question question={state[0].question} />
      {/* <Clue />*/}
      <Form />
    </div>
  )
}
