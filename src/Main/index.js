import React, { useState, useEffect } from 'react'
import Title from './Title.js'
import Clue from './Clue.js'
import Form from './Form.js'
import Question from './Question.js'

export default function Main() {
  return (
    <div>
      <Title />
      <Question />
      <Clue />
      <Form />
    </div>
  )
}
