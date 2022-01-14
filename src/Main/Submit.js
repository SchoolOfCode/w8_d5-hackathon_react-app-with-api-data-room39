import React, { useState } from 'react'

export default function Form() {
  const [state, setState] = useState()
  const [answer, setAnswer] = useState('')

  function handleForm(e) {
    e.preventDefault()
    setAnswer(state)
  }
  function handleReveal() {
    setAnswer(state)
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={(e) => setState(state)}></input>
        <button type='submit'>Submit Answer</button>
      </form>
      <button classname='Answerbtn' onclick={handleReveal}>Reveal Answer</button>
    </div>
  )
}
