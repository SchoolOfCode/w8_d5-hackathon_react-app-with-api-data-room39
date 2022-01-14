import React, { useState } from 'react'

export default function Form({ answer }) {
  const [state, setState] = useState()
  const [userAnswer, setUserAnswer] = useState('')

  const [boolean, setBoolean] = useState(false)
  const [boolean2, setBoolean2] = useState(false)

  function handleForm(e) {
    console.log(state)
    e.preventDefault()
    setUserAnswer(state)
    setBoolean2(true)
  }
  function handleReveal() {
    setBoolean(true)
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={(e) => setState(e.target.value)}></input>
        <button type='submit'>Submit Answer</button>
      </form>
      <button className='Answerbtn' onClick={handleReveal}>
        Reveal Answer
      </button>
      {boolean && <p>{answer}</p>}
      {boolean2 && (
        <p>
          Correct Answer: {answer} / Your Answer: {userAnswer}
        </p>
      )}
    </div>
  )
}
